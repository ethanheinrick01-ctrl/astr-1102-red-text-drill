(() => {
  "use strict";

  const config = window.STUDY_SYSTEM_CONFIG && typeof window.STUDY_SYSTEM_CONFIG === "object"
    ? window.STUDY_SYSTEM_CONFIG
    : {};
  const globals = {
    quizzes: config.globals?.quizzes || "COURSE_QUIZZES",
    modules: config.globals?.modules || "COURSE_MODULES",
    visuals: config.globals?.visuals || "COURSE_VISUALS"
  };
  const quizzes = Array.isArray(window[globals.quizzes]) ? window[globals.quizzes] : [];
  const modules = Array.isArray(window[globals.modules]) ? window[globals.modules] : [];
  const visualCatalog = window[globals.visuals] && typeof window[globals.visuals] === "object" ? window[globals.visuals] : {};
  const quizStorageKey = config.storage?.quizzes || "course-study-lab-progress-v1";
  const guidedStorageKey = config.storage?.guided || "course-guided-progress-v1";
  const gradedTypes = new Set(["single", "true-false", "multi", "sort", "match", "teachback", "hazard", "label", "isostasy", "slider"]);

  const $ = (id) => document.getElementById(id);
  const allViews = [
    $("guide-library-view"),
    $("guide-detail-view"),
    $("lab-library-view"),
    $("lesson-view"),
    $("quiz-view"),
    $("results-view"),
    $("exam-simulator-view"),
    $("mastery-view"),
    $("exam-placeholder-view")
  ];

  const escapeHTML = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const shuffle = (items) => {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const shuffleAwayFromOriginal = (items) => {
    const copy = shuffle(items);
    if (copy.length > 1 && copy.every((item, index) => item === items[index])) {
      [copy[0], copy[1]] = [copy[1], copy[0]];
    }
    return copy;
  };

  const safeRead = (key, fallback) => {
    try {
      const parsed = JSON.parse(localStorage.getItem(key));
      return parsed && typeof parsed === "object" ? parsed : fallback;
    } catch {
      return fallback;
    }
  };

  const getGuidedProgress = () => {
    const saved = safeRead(guidedStorageKey, {});
    return {
      concepts: saved.concepts && typeof saved.concepts === "object" ? saved.concepts : {},
      modules: saved.modules && typeof saved.modules === "object" ? saved.modules : {}
    };
  };

  let guidedProgress = getGuidedProgress();

  const saveGuidedProgress = () => {
    localStorage.setItem(guidedStorageKey, JSON.stringify(guidedProgress));
  };

  const primaryExamId = config.primaryExamId || config.exams?.[0]?.id || "exam-one";
  const moduleExamId = (module) => module.examId || primaryExamId;
  const examLineage = (examId) => new Set([examId, ...((examShells?.[examId]?.inherits) || [])]);
  const modulesForExam = (examId) => {
    const included = examLineage(examId);
    return modules.filter((module) => included.has(moduleExamId(module)));
  };
  const masteryConcepts = (module) => (module.concepts || []).filter((concept) => concept.masteryEligible !== false);
  const conceptCatalog = modules.flatMap((module) => masteryConcepts(module).map((concept) => ({
    ...concept,
    moduleId: module.id,
    moduleNumber: module.number,
    moduleTitle: module.title
  })));

  const emptyConcept = () => ({
    attempts: 0,
    correct: 0,
    streak: 0,
    lastConfidence: null,
    needsReview: false,
    mastered: false,
    misconception: false
  });

  const getConceptState = (conceptId) => ({
    ...emptyConcept(),
    ...(guidedProgress.concepts[conceptId] || {})
  });

  const examShells = Object.fromEntries((config.exams || [{ id: primaryExamId, label: "Exam 1", coverage: "Coverage needs verification", live: true }])
    .map((exam) => [exam.id, exam]));
  let activeExam = primaryExamId;
  let activeMode = "guide";
  let currentGuideModule = null;

  const showOnly = (view) => {
    allViews.forEach((item) => item.classList.toggle("hidden", item !== view));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const markMode = (mode) => {
    document.querySelectorAll(".mode-button, .mastery-button").forEach((button) => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  const openMode = (mode) => {
    activeMode = mode;
    markMode(mode);
    updateMasteryCounts();
    if (!examShells[activeExam]?.live) {
      renderExamPlaceholder(activeExam);
      return;
    }
    if (mode === "mastery") {
      renderMastery();
      showOnly($("mastery-view"));
      return;
    }
    if (mode === "lab") {
      renderLabLibrary();
      showOnly($("lab-library-view"));
      return;
    }
    renderGuideLibrary();
    showOnly($("guide-library-view"));
  };

  const activeConceptCatalog = () => {
    const moduleIds = new Set(modulesForExam(activeExam).map((module) => module.id));
    return conceptCatalog.filter((concept) => moduleIds.has(concept.moduleId));
  };
  const masteredCount = () => activeConceptCatalog().filter(({ id }) => getConceptState(id).mastered).length;

  const updateMasteryCounts = () => {
    const mastered = masteredCount();
    const concepts = activeConceptCatalog();
    $("nav-mastery-count").textContent = `${mastered}/${concepts.length}`;
    $("lab-mastery-count").textContent = `${mastered}/${concepts.length}`;
  };

  const activeExamLabel = () => examShells[activeExam]?.label || "Exam";

  const renderScope = () => {
    const scope = examShells[activeExam]?.sourceScope || config.sourceScope || {};
    $("verified-scope").textContent = scope.verified || "Awaiting evidence audit";
    $("continuation-scope").textContent = scope.continuation || "None recorded yet";
    $("evidence-scope").textContent = scope.evidence || "No source packet hydrated";
  };

  const renderCourseChrome = () => {
    const courseLabel = [config.courseCode, config.term].filter(Boolean).join(" · ");
    $("site-course-label").textContent = courseLabel || "Course · Term";
    $("site-title").textContent = config.systemTitle || `${config.courseCode || "Course"} Study System`;
    document.title = config.systemTitle || `${config.courseCode || "Course"} Study System`;
    renderScope();
  };

  const renderExamNavigation = () => {
    const nav = $("exam-nav-inner");
    nav.replaceChildren();
    Object.values(examShells).forEach((exam) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `exam-button${exam.id === activeExam ? " active" : ""}`;
      button.dataset.exam = exam.id;
      button.setAttribute("aria-pressed", String(exam.id === activeExam));
      button.innerHTML = `<span>${escapeHTML(exam.label)}</span><small>${escapeHTML(exam.coverage)}</small>`;
      button.addEventListener("click", () => selectExam(exam.id));
      nav.append(button);
    });
    nav.style.setProperty("--exam-count", String(Math.max(1, Object.keys(examShells).length)));
  };

  const renderGuideLibrary = () => {
    const library = $("guide-module-library");
    library.replaceChildren();
    const activeModules = modulesForExam(activeExam);
    if (activeModules.length === 0) {
      library.innerHTML = `<article class="empty-state"><span class="pill">Needs evidence</span><h3>${escapeHTML(activeExamLabel())} has no verified study material yet.</h3><p>Hydrate this exam from a completed study-guide handoff or reopen the original sources before adding content.</p></article>`;
      return;
    }
    activeModules.forEach((module) => {
      const lesson = (module.activities || []).find((activity) => activity.type === "lesson");
      const visualData = visualCatalog[module.id];
      const interactionVisuals = (visualData?.interactions || []).flatMap((interaction) => interaction.items || []);
      const preview = visualData?.visuals?.find((item) => item.src) || interactionVisuals.find((item) => item.src);
      const visualCount = (visualData?.visuals?.filter((item) => item.src).length || 0) + interactionVisuals.filter((item) => item.src).length;
      const card = document.createElement("article");
      card.className = `guide-card${module.continuation ? " continuation-card" : ""}`;
      card.innerHTML = `
        <div class="guide-card-number" aria-hidden="true">${String(module.number).padStart(2, "0")}</div>
        <div class="guide-card-copy">
          <div class="module-card-topline"><span class="pill">${escapeHTML(module.kicker)}</span>${module.continuation ? '<span class="continuation-tag">Continuation</span>' : ""}</div>
          <h3>${escapeHTML(module.title)}</h3>
          <p>${escapeHTML(module.description)}</p>
          ${preview ? `<div class="guide-card-preview"><img src="${escapeHTML(preview.src)}" alt="${escapeHTML(preview.alt)}"><span><strong>Visual field guide</strong><small>${visualCount} sourced view${visualCount === 1 ? "" : "s"} + interaction</small></span></div>` : ""}
          <ul>${(lesson?.keyPoints || []).slice(0, 3).map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul>
          <div class="guide-card-footer"><span>${(module.concepts || []).length} concept${(module.concepts || []).length === 1 ? "" : "s"} · ${escapeHTML(module.source)}</span><button class="button primary" type="button">Open notes</button></div>
        </div>`;
      card.querySelector("button").addEventListener("click", () => openGuideDetail(module.id));
      library.append(card);
    });
  };

  const uniqueText = (items) => [...new Set(items.filter(Boolean))];

  const visualStatus = (item) => item.status === "continuation"
    ? '<span class="continuation-tag">Source continuation · emphasis unconfirmed</span>'
    : `<span class="verified-tag">${escapeHTML(item.statusLabel || "Verified source path")}</span>`;

  const visualFeatureHTML = (item, index) => {
    if (!item) return "";
    if (item.missing) {
      return `
        <article class="visual-feature visual-missing" data-feature-index="${index}">
          <div class="missing-map-mark" aria-hidden="true"><span>VISUAL</span><strong>not present</strong></div>
          <div class="visual-feature-copy">
            <div class="visual-feature-topline">${visualStatus(item)}<span>Evidence boundary</span></div>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.caption)}</p>
            <div class="visual-notice"><strong>What is still verified</strong><p>${escapeHTML(item.notice)}</p></div>
            <p class="source-strip"><strong>Source:</strong> ${escapeHTML(item.source)}</p>
          </div>
        </article>`;
    }
    return `
      <article class="visual-feature" data-feature-index="${index}">
        <button class="visual-image-button" type="button" data-visual-zoom aria-label="Enlarge ${escapeHTML(item.title)}">
          <img src="${escapeHTML(item.src)}" alt="${escapeHTML(item.alt)}">
          <span>Enlarge visual</span>
        </button>
        <div class="visual-feature-copy">
          <div class="visual-feature-topline">${visualStatus(item)}<span>Visual ${index + 1}</span></div>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.caption)}</p>
          <button class="notice-toggle" type="button" data-notice-toggle aria-expanded="false">Reveal what to notice</button>
          <div class="visual-notice hidden"><strong>What to notice</strong><p>${escapeHTML(item.notice)}</p></div>
          <p class="source-strip"><strong>Source:</strong> ${escapeHTML(item.source)}</p>
        </div>
      </article>`;
  };

  const normalizedInteractions = (data) => {
    if (Array.isArray(data?.interactions)) return data.interactions;
    if (Array.isArray(data?.atlas) && data.atlas.length) {
      return [{ id: `${data.id || "visual"}-atlas`, type: "atlas", heading: data.label, instructions: data.intro, items: data.atlas, boundary: data.boundary }];
    }
    return [];
  };

  const interactionHeading = (item) => `<div class="interaction-heading"><p class="eyebrow dark">${escapeHTML(item.eyebrow || "Interactive model")}</p><h3>${escapeHTML(item.heading)}</h3><p>${escapeHTML(item.instructions || "Use the controls to inspect the relationship.")}</p></div>`;

  const renderProcessInteraction = (item) => {
    const steps = item.steps || [];
    if (!steps.length) return "";
    return `<section class="visual-interaction process-workbench" data-interaction-id="${escapeHTML(item.id)}">
      ${interactionHeading(item)}
      <div class="process-cycle" role="group" aria-label="${escapeHTML(item.heading)}">${steps.map((step, index) => `<button type="button" class="cycle-step${index === 0 ? " active" : ""}" data-process-step="${index}"><span>${index + 1}</span><strong>${escapeHTML(step.label || step.title)}</strong></button>`).join("")}</div>
      <div class="cycle-explanation" data-interaction-copy aria-live="polite"><strong>${escapeHTML(steps[0].title || steps[0].label)}</strong><p>${escapeHTML(steps[0].body)}</p></div>
      ${item.cyclic ? '<p class="interaction-loop-note">The last step feeds the next cycle.</p>' : ""}
    </section>`;
  };

  const renderTabsInteraction = (item) => {
    const tabs = item.tabs || item.options || [];
    if (!tabs.length) return "";
    return `<section class="visual-interaction layer-workbench" data-interaction-id="${escapeHTML(item.id)}">
      ${interactionHeading(item)}
      <div class="layer-switch" role="tablist" aria-label="${escapeHTML(item.heading)}">${tabs.map((tab, index) => `<button type="button" role="tab" aria-selected="${index === 0}" class="${index === 0 ? "active" : ""}" data-tab-option="${index}">${escapeHTML(tab.label)}</button>`).join("")}</div>
      ${tabs[0].image?.src ? `<button class="visual-image-button interaction-tab-image" type="button" data-tab-zoom="0"><img src="${escapeHTML(tabs[0].image.src)}" alt="${escapeHTML(tabs[0].image.alt)}"><span>Enlarge visual</span></button>` : ""}
      <div class="layer-switch-copy" data-interaction-copy><strong>${escapeHTML(tabs[0].title || tabs[0].label)}</strong><p>${escapeHTML(tabs[0].body)}</p></div>
    </section>`;
  };

  const renderChainInteraction = (item) => `<section class="visual-interaction evidence-chain" data-interaction-id="${escapeHTML(item.id)}">
    ${interactionHeading(item)}
    <div class="evidence-chain-steps">${(item.steps || []).map((step, index) => `<div><span>${String(index + 1).padStart(2, "0")}</span><strong>${escapeHTML(step.title || step.label)}</strong><p>${escapeHTML(step.body)}</p></div>`).join("")}</div>
  </section>`;

  const renderAtlasInteraction = (item) => {
    const items = item.items || [];
    const categories = ["all", ...new Set(items.map((entry) => entry.category).filter(Boolean))];
    return `<section class="visual-interaction rock-workbench" data-interaction-id="${escapeHTML(item.id)}">
      ${interactionHeading(item)}
      <div class="atlas-filters" role="group" aria-label="Filter visual atlas">${categories.map((category, index) => `<button type="button" class="${index === 0 ? "active" : ""}" data-atlas-filter="${escapeHTML(category)}">${escapeHTML(category)}</button>`).join("")}</div>
      <div class="rock-atlas">${items.map((entry, index) => `<article class="rock-card" data-atlas-category="${escapeHTML(entry.category || "uncategorized")}">
        ${entry.src ? `<button type="button" class="rock-image-button" data-atlas-zoom="${index}" aria-label="Enlarge ${escapeHTML(entry.title)}"><img src="${escapeHTML(entry.src)}" alt="${escapeHTML(entry.alt)}"><span>${escapeHTML(entry.category || "visual")}</span></button>` : `<div class="thumb-missing">Visual unavailable</div>`}
        <div class="rock-card-copy"><div>${visualStatus(entry)}<h4>${escapeHTML(entry.title)}</h4></div><p><strong>Visible cues:</strong> ${escapeHTML(entry.cues || entry.caption)}</p><button type="button" data-atlas-reveal aria-expanded="false">Reveal connection</button><div class="atlas-process hidden"><strong>Connection</strong><p>${escapeHTML(entry.process || entry.notice)}</p></div><small>${escapeHTML(entry.source)}</small></div>
      </article>`).join("")}</div>
      ${item.boundary ? `<aside class="evidence-boundary"><strong>Evidence boundary</strong><p>${escapeHTML(item.boundary)}</p></aside>` : ""}
    </section>`;
  };

  const renderGuideInteraction = (data) => normalizedInteractions(data).map((item) => {
    if (["process", "sequence", "cycle"].includes(item.type)) return renderProcessInteraction(item);
    if (["tabs", "compare-tabs", "observe-describe-infer"].includes(item.type)) return renderTabsInteraction(item);
    if (["chain", "causal-chain"].includes(item.type)) return renderChainInteraction(item);
    if (["atlas", "image-atlas"].includes(item.type)) return renderAtlasInteraction(item);
    return `<aside class="evidence-boundary"><strong>Unsupported interaction</strong><p>${escapeHTML(item.type)} is preserved in the content record but needs a course-owned renderer.</p></aside>`;
  }).join("");

  const renderGuideVisuals = (moduleId) => {
    const data = visualCatalog[moduleId];
    if (!data) return "";
    const visuals = Array.isArray(data.visuals) ? data.visuals : [];
    const interactions = normalizedInteractions(data);
    if (visuals.length === 0 && interactions.length === 0) return "";
    return `
      <section class="visual-learning" data-visual-module="${escapeHTML(moduleId)}" aria-labelledby="visual-learning-heading">
        <div class="visual-learning-heading"><div><p class="guide-section-label">Visual field guide</p><h2 id="visual-learning-heading">${escapeHTML(data.label || "Interactive visual notes")}</h2><p>${escapeHTML(data.intro || "Inspect the visual evidence before testing retrieval.")}</p></div><span>${visuals.length} sourced visual${visuals.length === 1 ? "" : "s"}</span></div>
        ${renderGuideInteraction(data)}
        ${visuals.length ? `<div class="visual-stage" data-visual-stage>${visualFeatureHTML(visuals[0], 0)}</div>` : ""}
        ${visuals.length > 1 ? `<div class="visual-gallery" role="list" aria-label="Source visual gallery">${visuals.map((item, index) => `<button type="button" role="listitem" class="visual-thumb${index === 0 ? " active" : ""}${item.missing ? " missing" : ""}" data-visual-index="${index}">${item.missing ? '<span class="thumb-missing">Visual unavailable</span>' : `<img src="${escapeHTML(item.src)}" alt="">`}<span><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.source)}</small></span></button>`).join("")}</div>` : ""}
      </section>`;
  };

  const openVisualDialog = (item) => {
    if (!item?.src) return;
    const dialog = $("visual-dialog");
    $("visual-dialog-image").src = item.src;
    $("visual-dialog-image").alt = item.alt || item.title;
    $("visual-dialog-title").textContent = item.title;
    $("visual-dialog-caption").textContent = item.caption || item.cues || "";
    $("visual-dialog-source").innerHTML = `<strong>Source:</strong> ${escapeHTML(item.source)}`;
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  };

  const bindGuideVisuals = (moduleId) => {
    const data = visualCatalog[moduleId];
    const root = document.querySelector(`[data-visual-module="${CSS.escape(moduleId)}"]`);
    if (!data || !root) return;
    const stage = root.querySelector("[data-visual-stage]");
    const bindFeature = (index) => {
      const item = data.visuals[index];
      stage.innerHTML = visualFeatureHTML(item, index);
      root.querySelectorAll(".visual-thumb").forEach((thumb) => thumb.classList.toggle("active", Number(thumb.dataset.visualIndex) === index));
      stage.querySelector("[data-notice-toggle]")?.addEventListener("click", (event) => {
        const notice = stage.querySelector(".visual-notice");
        const expanded = event.currentTarget.getAttribute("aria-expanded") === "true";
        event.currentTarget.setAttribute("aria-expanded", String(!expanded));
        event.currentTarget.textContent = expanded ? "Reveal what to notice" : "Hide what to notice";
        notice.classList.toggle("hidden", expanded);
      });
      stage.querySelector("[data-visual-zoom]")?.addEventListener("click", () => openVisualDialog(item));
    };
    if (stage && Array.isArray(data.visuals) && data.visuals.length) {
      root.querySelectorAll(".visual-thumb").forEach((thumb) => thumb.addEventListener("click", () => bindFeature(Number(thumb.dataset.visualIndex))));
      bindFeature(0);
    }

    const interactions = normalizedInteractions(data);
    root.querySelectorAll("[data-interaction-id]").forEach((section) => {
      const interaction = interactions.find((item) => item.id === section.dataset.interactionId);
      if (!interaction) return;
      section.querySelectorAll("[data-process-step]").forEach((button) => button.addEventListener("click", () => {
        const step = interaction.steps[Number(button.dataset.processStep)];
        section.querySelectorAll("[data-process-step]").forEach((node) => node.classList.toggle("active", node === button));
        section.querySelector("[data-interaction-copy]").innerHTML = `<strong>${escapeHTML(step.title || step.label)}</strong><p>${escapeHTML(step.body)}</p>`;
      }));
      section.querySelectorAll("[data-tab-option]").forEach((button) => button.addEventListener("click", () => {
        const tabs = interaction.tabs || interaction.options || [];
        const index = Number(button.dataset.tabOption);
        const tab = tabs[index];
        section.querySelectorAll("[data-tab-option]").forEach((node) => {
          node.classList.toggle("active", node === button);
          node.setAttribute("aria-selected", String(node === button));
        });
        section.querySelector("[data-interaction-copy]").innerHTML = `<strong>${escapeHTML(tab.title || tab.label)}</strong><p>${escapeHTML(tab.body)}</p>`;
        const imageButton = section.querySelector("[data-tab-zoom]");
        if (imageButton && tab.image?.src) {
          imageButton.dataset.tabZoom = String(index);
          imageButton.querySelector("img").src = tab.image.src;
          imageButton.querySelector("img").alt = tab.image.alt || tab.title || tab.label;
          imageButton.classList.remove("hidden");
        } else if (imageButton) imageButton.classList.add("hidden");
      }));
      section.querySelector("[data-tab-zoom]")?.addEventListener("click", (event) => {
        const tabs = interaction.tabs || interaction.options || [];
        const tab = tabs[Number(event.currentTarget.dataset.tabZoom)];
        if (tab?.image) openVisualDialog({ ...tab.image, title: tab.title || tab.label, caption: tab.body, source: tab.image.source || interaction.source });
      });
      section.querySelectorAll("[data-atlas-filter]").forEach((button) => button.addEventListener("click", () => {
        const filter = button.dataset.atlasFilter;
        section.querySelectorAll("[data-atlas-filter]").forEach((node) => node.classList.toggle("active", node === button));
        section.querySelectorAll("[data-atlas-category]").forEach((card) => card.classList.toggle("hidden", filter !== "all" && card.dataset.atlasCategory !== filter));
      }));
      section.querySelectorAll("[data-atlas-reveal]").forEach((button) => button.addEventListener("click", () => {
        const copy = button.nextElementSibling;
        const expanded = button.getAttribute("aria-expanded") === "true";
        button.setAttribute("aria-expanded", String(!expanded));
        button.textContent = expanded ? "Reveal connection" : "Hide connection";
        copy.classList.toggle("hidden", expanded);
      }));
      section.querySelectorAll("[data-atlas-zoom]").forEach((button) => button.addEventListener("click", () => openVisualDialog(interaction.items[Number(button.dataset.atlasZoom)])));
    });
  };

  const openGuideDetail = (moduleId) => {
    const module = modules.find((item) => item.id === moduleId);
    if (!module) return;
    currentGuideModule = module;
    markMode("guide");
    activeExam = moduleExamId(module);
    renderExamNavigation();
    $("guide-detail-kicker").textContent = `${activeExamLabel()} · Section ${module.number} · ${module.kicker}`;
    $("guide-detail-title").textContent = module.title;
    $("guide-detail-description").textContent = module.description;
    $("guide-detail-source").textContent = module.source;
    $("guide-continuation").classList.toggle("hidden", !module.continuation);

    const lesson = (module.activities || []).find((activity) => activity.type === "lesson");
    const conceptSections = (module.concepts || []).map((concept) => {
      const activities = (module.activities || []).filter((activity) => activity.concept === concept.id);
      const explanations = uniqueText(activities.map((activity) => activity.explanation));
      const prompts = uniqueText(activities.map((activity) => activity.prompt));
      const sources = uniqueText(activities.map((activity) => activity.source));
      const teaching = module.examId === "exam-two" && window.ASTR1102_EXAM2?.concepts.find((item) => item.id === concept.id);
      return `
        <section class="guide-concept">
          <div class="guide-concept-heading"><span>Concept ${module.number}.${(module.concepts || []).indexOf(concept) + 1}</span><h3>${escapeHTML(concept.label)}</h3></div>
          <div class="guide-explanations">${(teaching?.body || explanations).map((item) => `<p>${escapeHTML(item)}</p>`).join("")}</div>
          <div class="guide-self-check"><strong>Close the notes, then answer:</strong><ul>${prompts.map((prompt) => `<li>${escapeHTML(prompt)}</li>`).join("")}</ul></div>
          <p class="source-strip"><strong>Sources:</strong> ${sources.map(escapeHTML).join(" · ")}</p>
        </section>`;
    }).join("");

    $("guide-detail-content").innerHTML = `
      <section class="guide-overview">
        <p class="guide-section-label">From the completed, source-audited study guide</p>
        ${(lesson?.body || []).map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}
        <div class="key-points"><strong>What must survive closed notes</strong><ul>${(lesson?.keyPoints || []).map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul></div>
        <p class="source-strip"><strong>Foundation source:</strong> ${escapeHTML(lesson?.source || module.source)}</p>
      </section>
      ${renderGuideVisuals(module.id)}
      <div class="guide-concept-list">${conceptSections}</div>`;
    bindGuideVisuals(module.id);
    showOnly($("guide-detail-view"));
  };

  const renderLabLibrary = () => {
    updateMasteryCounts();
    const library = $("lab-module-library");
    library.replaceChildren();
    const activeModules = modulesForExam(activeExam);
    if (activeModules.length === 0) {
      library.innerHTML = `<article class="empty-state"><span class="pill">Evidence-gated</span><h3>${escapeHTML(activeExamLabel())} Lab is not populated.</h3><p>Verified teaching must exist before original graded activities can be activated.</p></article>`;
      renderQuizLibrary();
      return;
    }
    activeModules.forEach((module) => {
      const moduleState = guidedProgress.modules[module.id] || {};
      const concepts = masteryConcepts(module);
      const masteredHere = concepts.filter(({ id }) => getConceptState(id).mastered).length;
      const attempts = concepts.reduce((sum, { id }) => sum + getConceptState(id).attempts, 0);
      const gradedCount = (module.activities || []).filter((activity) => gradedTypes.has(activity.type)).length;
      const status = concepts.length > 0 && masteredHere === concepts.length ? "Mastered" : moduleState.completed ? "Review due" : attempts > 0 ? "In progress" : "Not started";
      const card = document.createElement("article");
      card.className = `module-card${module.continuation ? " continuation-card" : ""}`;
      card.innerHTML = `
        <div class="module-number" aria-hidden="true">${String(module.number).padStart(2, "0")}</div>
        <div class="module-card-body">
          <div class="module-card-topline"><span class="pill">${escapeHTML(module.kicker)}</span><span class="module-status ${status.toLowerCase().replaceAll(" ", "-")}">${status}</span></div>
          <h3>${escapeHTML(module.title)}</h3><p>${escapeHTML(module.description)}</p>
          ${module.continuation ? `<p class="continuation-note">${escapeHTML(module.continuationLabel || "Source continuation—class emphasis unconfirmed")}</p>` : ""}
          <div class="module-metrics"><span>${gradedCount} Lab activities</span><span>${masteredHere}/${concepts.length} mastered</span></div>
          <div class="mini-track" aria-hidden="true"><span style="width:${concepts.length ? Math.round(masteredHere / concepts.length * 100) : 0}%"></span></div>
          <div class="module-card-actions"><button class="button ghost" type="button" data-action="notes">Notes</button><button class="button primary" type="button" data-action="lab">${attempts > 0 ? "Continue Lab" : "Start topic Lab"}</button></div>
        </div>`;
      card.querySelector('[data-action="notes"]').addEventListener("click", () => openGuideDetail(module.id));
      card.querySelector('[data-action="lab"]').addEventListener("click", () => startModule(module.id));
      library.append(card);
    });
    renderQuizLibrary();
  };

  const renderExamPlaceholder = (examId) => {
    const exam = examShells[examId] || { label: "Exam", coverage: "Coverage needs verification" };
    $("placeholder-kicker").textContent = `${exam.label} · ${exam.coverage}`;
    $("placeholder-title").textContent = exam.title || `${exam.label} needs evidence`;
    $("placeholder-copy").textContent = exam.copy || "This lane remains empty until its source packet is audited.";
    $("placeholder-guide-copy").textContent = exam.guide || "Study Guide: not populated.";
    $("placeholder-lab-copy").textContent = exam.lab || "Lab: blocked until teaching and answer evidence exist.";
    const inheritance = $("placeholder-inheritance");
    inheritance.classList.toggle("hidden", !exam.inheritance);
    inheritance.textContent = exam.inheritance || "";
    showOnly($("exam-placeholder-view"));
  };

  const selectExam = (examId) => {
    if (!examShells[examId]) return;
    activeExam = examId;
    renderExamNavigation();
    updateMasteryCounts();
    renderScope();
    $("exam-one-emphasis")?.classList.toggle("hidden", examId !== "exam-one");
    $("exam-two-evidence")?.classList.toggle("hidden", examId !== "exam-two");
    $("mastery-title").nextElementSibling.textContent = examId === "exam-two"
      ? "Two consecutive correct answers on distinct original roots; the latest must be medium or high confidence."
      : "Two consecutive correct attempts; the latest must be medium or high confidence.";
    $("mode-nav").classList.toggle("hidden", !examShells[examId].live);
    if (examShells[examId].live) openMode(activeMode);
    else renderExamPlaceholder(examId);
  };

  const learning = {
    module: null,
    queue: [],
    index: 0,
    currentCorrect: null,
    submitted: false,
    confidenceRecorded: false,
    repeatCounts: {},
    isReview: false,
    selectedLabel: null,
    labelAssignments: {},
    renderedSelectRows: []
  };

  const startModule = (moduleId, conceptFilter = null) => {
    const module = modules.find((item) => item.id === moduleId);
    if (!module) return;
    activeExam = moduleExamId(module);
    renderExamNavigation();
    if (activeExam === "exam-two") {
      activeMode = "lab";
      markMode("lab");
      showOnly($("exam-simulator-view"));
      window.ASTRExamTwo.open($("exam-simulator-view"), () => { guidedProgress = getGuidedProgress(); openMode("lab"); }, {
        kind: conceptFilter ? "review" : "topic", moduleId, conceptId: conceptFilter,
        title: conceptFilter ? `Review: ${module.concepts.find(c => c.id === conceptFilter)?.label || module.title}` : module.title
      });
      return;
    }
    const relevant = (module.activities || []).filter((activity) => gradedTypes.has(activity.type) && (!conceptFilter || activity.concept === conceptFilter));
    if (!relevant.length) {
      renderLabLibrary();
      showOnly($("lab-library-view"));
      return;
    }
    learning.module = module;
    learning.queue = relevant.map((activity) => ({ ...activity, _rootId: activity.id }));
    learning.index = 0;
    learning.repeatCounts = {};
    learning.isReview = Boolean(conceptFilter);
    guidedProgress.modules[module.id] = {
      ...(guidedProgress.modules[module.id] || {}),
      startedAt: guidedProgress.modules[module.id]?.startedAt || new Date().toISOString()
    };
    saveGuidedProgress();
    activeMode = "lab";
    markMode("lab");
    showOnly($("lesson-view"));
    renderActivity();
  };

  const activityTypeLabel = (type) => ({
    lesson: "Learn",
    single: "Choose one",
    "true-false": "True or false",
    multi: "Select all",
    sort: "Sort",
    match: "Match",
    teachback: "Teach back",
    hazard: "Scenario decision",
    label: "Label model",
    isostasy: "Manipulate",
    slider: "Manipulate"
  }[type] || type);

  const renderStudyReference = (activity) => {
    const lesson = learning.module?.activities.find((item) => item.type === "lesson");
    const concept = learning.module?.concepts.find((item) => item.id === activity.concept);
    const explanations = uniqueText(learning.module?.activities
      .filter((item) => item.concept === activity.concept)
      .map((item) => item.explanation) || []);
    return `
      <details class="study-reference" ${activity.type === "teachback" ? "open" : ""}>
        <summary>Study Guide notes${concept ? `: ${escapeHTML(concept.label)}` : ""}</summary>
        <div>
          ${(lesson?.body || []).slice(0, 2).map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}
          <ul>${(lesson?.keyPoints || []).slice(0, 4).map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul>
          ${explanations.slice(0, 3).map((item) => `<p>${escapeHTML(item)}</p>`).join("")}
          <button class="text-button" type="button" data-open-reference>Open the full Study Guide section</button>
        </div>
      </details>`;
  };

  const sourceAndHint = (activity) => `
    ${activity.hint ? `<details class="hint-panel"><summary>Need a hint?</summary><p>${escapeHTML(activity.hint)}</p></details>` : ""}
    ${renderStudyReference(activity)}
    <p class="source-strip"><strong>Source:</strong> ${escapeHTML(activity.source)}</p>`;

  const renderLesson = (activity) => `
    <div class="lesson-copy">
      ${(activity.body || []).map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`).join("")}
      <div class="key-points">
        <strong>Working rules</strong>
        <ul>${(activity.keyPoints || []).map((point) => `<li>${escapeHTML(point)}</li>`).join("")}</ul>
      </div>
      <p class="source-strip"><strong>Source:</strong> ${escapeHTML(activity.source)}</p>
    </div>`;

  const renderChoiceActivity = (activity, extra = "") => {
    const type = activity.type === "multi" ? "checkbox" : "radio";
    const indices = shuffleAwayFromOriginal(activity.choices.map((_, index) => index));
    return `
      ${renderActivityMedia(activity)}
      ${extra}
      <fieldset class="activity-options">
        <legend class="sr-only">${escapeHTML(activity.prompt)}</legend>
        ${indices.map((index) => `
          <label class="activity-option">
            <input type="${type}" name="guided-answer" value="${index}">
            <span>${escapeHTML(activity.choices[index])}</span>
          </label>`).join("")}
      </fieldset>
      ${sourceAndHint(activity)}`;
  };

  const renderSelectActivity = (activity) => {
    const rows = activity.type === "sort" ? activity.items.map((item) => ({ label: item.text, answer: item.group })) : activity.rows;
    const options = activity.type === "sort" ? activity.groups : activity.options;
    learning.renderedSelectRows = shuffleAwayFromOriginal(rows);
    const shuffledOptions = shuffleAwayFromOriginal(options);
    return `
      <div class="select-grid" data-select-kind="${activity.type}">
        ${learning.renderedSelectRows.map((row, index) => `
          <label class="select-row">
            <span>${escapeHTML(row.label)}</span>
            <select data-row="${index}">
              <option value="">Choose…</option>
              ${shuffledOptions.map((option) => `<option value="${escapeHTML(option)}">${escapeHTML(option)}</option>`).join("")}
            </select>
          </label>`).join("")}
      </div>
      ${sourceAndHint(activity)}`;
  };

  const renderActivityMedia = (activity) => {
    const media = activity.media;
    if (!media) return "";
    if (media.missing) return `<aside class="evidence-boundary"><strong>Visual not present in the source packet</strong><p>${escapeHTML(media.notice)}</p></aside>`;
    return `<figure class="activity-media"><button type="button" class="visual-image-button" data-activity-media-zoom><img src="${escapeHTML(media.src)}" alt="${escapeHTML(media.alt)}"><span>Enlarge visual</span></button><figcaption>${escapeHTML(media.caption || "")}<small>${escapeHTML(media.source || activity.source)}</small></figcaption></figure>`;
  };

  const renderLabelActivity = (activity) => {
    const diagram = activity.diagram || activity.media || {};
    return `<div class="diagram-activity">
      <div class="diagram-canvas" aria-label="${escapeHTML(diagram.alt || activity.prompt)}">
        ${diagram.src ? `<img src="${escapeHTML(diagram.src)}" alt="${escapeHTML(diagram.alt || "Diagram to label")}">` : `<div class="diagram-placeholder"><strong>Original diagram required</strong><span>${escapeHTML(diagram.notice || "The label geometry is retained, but no source-backed visual was supplied.")}</span></div>`}
        ${(activity.zones || []).map((zone) => `<button class="diagram-zone" type="button" data-zone="${escapeHTML(zone.id)}" style="left:${Number(zone.x ?? 50)}%;top:${Number(zone.y ?? 50)}%" aria-label="${escapeHTML(zone.label || zone.id)}"><strong>${escapeHTML(zone.label || "Target")}</strong><span>Drop label</span></button>`).join("")}
      </div>
      <div><p class="interaction-instruction">Drag a label to a target, or select a label and then choose a target.</p><div class="label-bank" aria-label="Available labels"></div></div>
    </div>`;
  };

  const bindLabelActivity = (activity) => {
    const bank = document.querySelector(".label-bank");
    const zones = [...document.querySelectorAll(".diagram-zone")];
    learning.selectedLabel = null;
    learning.labelAssignments = {};

    const update = () => {
      bank.replaceChildren();
      activity.labels.forEach((labelText) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "label-chip";
        chip.textContent = labelText;
        chip.draggable = true;
        const assigned = Object.values(learning.labelAssignments).includes(labelText);
        chip.classList.toggle("assigned", assigned);
        chip.classList.toggle("selected", learning.selectedLabel === labelText);
        chip.addEventListener("click", () => {
          learning.selectedLabel = labelText;
          update();
        });
        chip.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/plain", labelText));
        bank.append(chip);
      });
      zones.forEach((zone) => {
        const assignment = learning.labelAssignments[zone.dataset.zone];
        zone.querySelector("span").textContent = assignment || "Drop label";
        zone.classList.toggle("filled", Boolean(assignment));
      });
    };

    const assign = (zoneId, labelText) => {
      if (!labelText || !activity.labels.includes(labelText)) return;
      Object.keys(learning.labelAssignments).forEach((key) => {
        if (learning.labelAssignments[key] === labelText) delete learning.labelAssignments[key];
      });
      learning.labelAssignments[zoneId] = labelText;
      learning.selectedLabel = null;
      update();
    };

    zones.forEach((zone) => {
      zone.addEventListener("click", () => assign(zone.dataset.zone, learning.selectedLabel));
      zone.addEventListener("dragover", (event) => event.preventDefault());
      zone.addEventListener("drop", (event) => {
        event.preventDefault();
        assign(zone.dataset.zone, event.dataTransfer.getData("text/plain"));
      });
    });
    update();
  };

  const renderSliderActivity = (activity) => `<div class="slider-panel generic-slider-panel">
    ${(activity.controls || []).map((control) => `<label>${escapeHTML(control.label)} <strong data-control-value="${escapeHTML(control.id)}">${escapeHTML(control.value)}</strong><input type="range" data-control-id="${escapeHTML(control.id)}" min="${Number(control.min)}" max="${Number(control.max)}" step="${Number(control.step || 1)}" value="${Number(control.value)}"></label>`).join("")}
    <p data-slider-readout>${escapeHTML(activity.readout?.initial || "Manipulate the controls, then commit to an answer.")}</p>
  </div>`;

  const bindSliders = (activity) => {
    const controls = [...document.querySelectorAll("[data-control-id]")];
    const update = () => {
      const values = Object.fromEntries(controls.map((control) => [control.dataset.controlId, Number(control.value)]));
      controls.forEach((control) => {
        const value = document.querySelector(`[data-control-value="${CSS.escape(control.dataset.controlId)}"]`);
        if (value) value.textContent = control.value;
      });
      const template = activity.readout?.template;
      if (template) {
        document.querySelector("[data-slider-readout]").textContent = template.replace(/\{([^}]+)\}/g, (_, id) => values[id] ?? `{${id}}`);
      }
    };
    controls.forEach((control) => control.addEventListener("input", update));
    update();
  };

  const renderTeachback = (activity) => `
    <div class="teachback">
      <label for="teachback-response">Your explanation</label>
      <textarea id="teachback-response" rows="6" placeholder="Explain the causal chain in your own words…"></textarea>
      <div class="teachback-meta"><span id="teachback-count">0 words</span><span>Not stored</span></div>
      <div id="rubric-host" class="rubric-host hidden"></div>
    </div>
    ${sourceAndHint(activity)}`;

  const bindTeachback = () => {
    const textarea = $("teachback-response");
    const update = () => {
      const words = textarea.value.trim() ? textarea.value.trim().split(/\s+/).length : 0;
      $("teachback-count").textContent = `${words} word${words === 1 ? "" : "s"}`;
      $("activity-primary").disabled = words < 5;
    };
    textarea.addEventListener("input", update);
    update();
  };

  const renderActivity = () => {
    if (learning.index >= learning.queue.length) {
      finishModule();
      return;
    }
    const activity = learning.queue[learning.index];
    learning.currentCorrect = null;
    learning.submitted = false;
    learning.confidenceRecorded = false;
    $("activity-feedback").className = "feedback hidden";
    $("activity-feedback").replaceChildren();
    $("confidence-panel").classList.add("hidden");
    document.querySelectorAll(".confidence-buttons button").forEach((button) => {
      button.disabled = false;
      button.classList.remove("selected");
    });
    $("activity-next").classList.add("hidden");
    $("activity-primary").classList.remove("hidden");
    $("activity-primary").disabled = false;

    $("lesson-progress-label").textContent = `Activity ${learning.index + 1} of ${learning.queue.length}`;
    const currentMasteryConcepts = masteryConcepts(learning.module);
    $("lesson-mastery-label").textContent = `${currentMasteryConcepts.filter(({ id }) => getConceptState(id).mastered).length}/${currentMasteryConcepts.length} concepts mastered`;
    $("lesson-progress-fill").style.width = `${(learning.index / learning.queue.length) * 100}%`;
    $("lesson-kicker").textContent = `Module ${learning.module.number} · ${learning.module.kicker}`;
    $("lesson-title").textContent = activity.title || activity.prompt;
    $("activity-type").textContent = activityTypeLabel(activity.type);
    $("activity-scope").textContent = activity.continuationLabel || "Source continuation · emphasis unconfirmed";
    $("activity-scope").classList.toggle("hidden", activity.status !== "continuation");

    const host = $("activity-host");
    host.replaceChildren();

    let body = "";
    if (activity.type === "lesson") body = renderLesson(activity);
    if (["single", "true-false", "multi", "hazard"].includes(activity.type)) body = renderChoiceActivity(activity);
    if (["sort", "match"].includes(activity.type)) body = renderSelectActivity(activity);
    if (activity.type === "label") body = `${renderLabelActivity(activity)}${sourceAndHint(activity)}`;
    if (["slider", "isostasy"].includes(activity.type)) body = renderChoiceActivity(activity, renderSliderActivity(activity));
    if (activity.type === "teachback") body = renderTeachback(activity);
    host.insertAdjacentHTML("beforeend", body);

    $("activity-primary").textContent = activity.type === "lesson" ? "Continue" : activity.type === "teachback" ? "Reveal rubric" : "Check answer";
    if (activity.type === "label") bindLabelActivity(activity);
    if (["slider", "isostasy"].includes(activity.type)) bindSliders(activity);
    if (activity.type === "teachback") bindTeachback();
    host.querySelector("[data-activity-media-zoom]")?.addEventListener("click", () => openVisualDialog(activity.media));
    host.querySelectorAll("[data-open-reference]").forEach((button) => button.addEventListener("click", () => openGuideDetail(learning.module.id)));
    $("activity-primary").focus({ preventScroll: true });
  };

  const selectedGuidedAnswers = () => [...document.querySelectorAll('input[name="guided-answer"]:checked')]
    .map((input) => Number(input.value)).sort((a, b) => a - b);

  const sameAnswers = (left, right) => left.length === right.length && left.every((value, index) => value === right[index]);

  const evaluateCurrent = (activity) => {
    if (["single", "true-false", "hazard", "isostasy", "slider"].includes(activity.type)) {
      const selected = selectedGuidedAnswers();
      return { ready: selected.length === 1, correct: selected[0] === activity.answer };
    }
    if (activity.type === "multi") {
      const selected = selectedGuidedAnswers();
      const answer = [...activity.answer].sort((a, b) => a - b);
      return { ready: selected.length > 0, correct: sameAnswers(selected, answer) };
    }
    if (["sort", "match"].includes(activity.type)) {
      const rows = learning.renderedSelectRows.map((row) => row.answer);
      const selected = [...document.querySelectorAll(".select-row select")].map((select) => select.value);
      return { ready: selected.every(Boolean), correct: selected.every((value, index) => value === rows[index]) };
    }
    if (activity.type === "label") {
      const ready = activity.zones.every((zone) => learning.labelAssignments[zone.id]);
      const correct = ready && activity.zones.every((zone) => learning.labelAssignments[zone.id] === zone.answer);
      return { ready, correct };
    }
    return { ready: false, correct: false };
  };

  const showAttemptFeedback = (activity, correct) => {
    learning.currentCorrect = correct;
    learning.submitted = true;
    const feedback = $("activity-feedback");
    feedback.className = `feedback ${correct ? "good" : "bad"}`;
    feedback.innerHTML = `
      <strong>${correct ? "Correct." : "Not yet."}</strong>
      <span>${escapeHTML(activity.explanation)}</span>
      <small>${escapeHTML(activity.source)}</small>`;
    $("activity-primary").classList.add("hidden");
    $("confidence-panel").classList.remove("hidden");
    document.querySelectorAll("#activity-host input, #activity-host select, #activity-host textarea, #activity-host .label-chip, #activity-host .diagram-zone")
      .forEach((control) => { control.disabled = true; });
  };

  const revealTeachbackRubric = (activity) => {
    if (learning.submitted) return;
    const rubric = $("rubric-host");
    rubric.classList.remove("hidden");
    rubric.innerHTML = `
      <strong>Compare your answer with this rubric</strong>
      <ul>${activity.rubric.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
      <p>${escapeHTML(activity.explanation)}</p>
      <div class="self-rating" role="group" aria-label="Self-rate teach-back response">
        <button type="button" data-rating="got">Got it</button>
        <button type="button" data-rating="partial">Partial</button>
        <button type="button" data-rating="missed">Missed it</button>
      </div>`;
    $("activity-primary").classList.add("hidden");
    $("teachback-response").disabled = true;
    rubric.querySelectorAll("button").forEach((button) => button.addEventListener("click", () => {
      const correct = button.dataset.rating === "got";
      rubric.querySelectorAll("button").forEach((item) => {
        item.disabled = true;
        item.classList.toggle("selected", item === button);
      });
      showAttemptFeedback(activity, correct);
    }));
  };

  const checkGuidedActivity = () => {
    const activity = learning.queue[learning.index];
    if (!activity) return;
    if (activity.type === "lesson") {
      learning.index += 1;
      renderActivity();
      return;
    }
    if (activity.type === "teachback") {
      revealTeachbackRubric(activity);
      return;
    }
    const result = evaluateCurrent(activity);
    if (!result.ready) {
      const feedback = $("activity-feedback");
      feedback.className = "feedback bad";
      feedback.innerHTML = "<strong>Complete the attempt first.</strong><span>Commit to every required choice before revealing the explanation.</span>";
      return;
    }
    showAttemptFeedback(activity, result.correct);
  };

  const hasFutureConcept = (conceptId) => learning.queue
    .slice(learning.index + 1)
    .some((activity) => activity.concept === conceptId);

  const insertAdaptiveReview = (activity, distance, guaranteeDistance = true) => {
    const rootId = activity._rootId || activity.id;
    const repeats = learning.repeatCounts[rootId] || 0;
    if (repeats >= 2) return;
    const requestedIndex = learning.index + distance + 1;
    if (guaranteeDistance && learning.queue.length < requestedIndex) {
      const bridgePool = learning.module.activities.filter((candidate) => gradedTypes.has(candidate.type) && candidate.id !== rootId);
      let cursor = 0;
      while (learning.queue.length < requestedIndex && bridgePool.length) {
        const bridge = bridgePool[cursor % bridgePool.length];
        learning.queue.push({ ...bridge, _rootId: bridge.id, _bridge: true });
        cursor += 1;
      }
    }
    const insertionIndex = guaranteeDistance ? Math.min(requestedIndex, learning.queue.length) : learning.queue.length;
    learning.queue.splice(insertionIndex, 0, { ...activity, _rootId: rootId, _repeat: true });
    learning.repeatCounts[rootId] = repeats + 1;
  };

  const recordGuidedAttempt = (confidence) => {
    if (!learning.submitted || learning.confidenceRecorded) return;
    const activity = learning.queue[learning.index];
    if (!gradedTypes.has(activity.type) || !activity.concept) return;
    const concept = getConceptState(activity.concept);
    concept.attempts += 1;
    concept.lastConfidence = confidence;
    if (learning.currentCorrect) {
      concept.correct += 1;
      concept.streak += 1;
      concept.needsReview = confidence === "low";
      if (confidence !== "low" && concept.streak >= 2) {
        concept.mastered = true;
        concept.needsReview = false;
        concept.misconception = false;
      }
    } else {
      concept.streak = 0;
      concept.mastered = false;
      concept.needsReview = true;
      if (confidence === "high") concept.misconception = true;
    }
    guidedProgress.concepts[activity.concept] = concept;

    if (!learning.currentCorrect) {
      insertAdaptiveReview(activity, 2);
    } else if (confidence === "low") {
      insertAdaptiveReview(activity, 4);
    } else if (concept.streak === 1 && !hasFutureConcept(activity.concept)) {
      insertAdaptiveReview(activity, 0, false);
    }

    saveGuidedProgress();
    learning.confidenceRecorded = true;
    document.querySelectorAll(".confidence-buttons button").forEach((button) => {
      button.disabled = true;
      button.classList.toggle("selected", button.dataset.confidence === confidence);
    });
    $("activity-next").textContent = learning.index === learning.queue.length - 1 ? "Finish module" : "Next activity";
    $("activity-next").classList.remove("hidden");
    renderLabLibrary();
  };

  const nextActivity = () => {
    if (!learning.confidenceRecorded) return;
    learning.index += 1;
    renderActivity();
  };

  const finishModule = () => {
    if (!learning.isReview) {
      guidedProgress.modules[learning.module.id] = {
        ...(guidedProgress.modules[learning.module.id] || {}),
        completed: true,
        completedAt: new Date().toISOString()
      };
      saveGuidedProgress();
    }
    const currentMasteryConcepts = masteryConcepts(learning.module);
    const masteredHere = currentMasteryConcepts.filter(({ id }) => getConceptState(id).mastered).length;
    $("lesson-progress-label").textContent = learning.isReview ? "Review complete" : "Module complete";
    $("lesson-mastery-label").textContent = `${masteredHere}/${currentMasteryConcepts.length} concepts mastered`;
    $("lesson-progress-fill").style.width = "100%";
    $("lesson-kicker").textContent = `Module ${learning.module.number}`;
    $("lesson-title").textContent = learning.isReview ? "Review cycle complete" : "Path complete";
    $("activity-type").textContent = "Checkpoint";
    $("activity-scope").classList.add("hidden");
    $("activity-feedback").className = "feedback hidden";
    $("confidence-panel").classList.add("hidden");
    $("activity-primary").classList.add("hidden");
    $("activity-next").classList.add("hidden");
    $("activity-host").innerHTML = `
      <div class="module-complete">
        <span class="completion-mark" aria-hidden="true">${currentMasteryConcepts.length > 0 && masteredHere === currentMasteryConcepts.length ? "✓" : "↻"}</span>
        <h3>${currentMasteryConcepts.length > 0 && masteredHere === currentMasteryConcepts.length ? "This module is mastered." : "Completion recorded. Retrieval remains."}</h3>
        <p>${masteredHere} of ${currentMasteryConcepts.length} mastery-eligible concepts currently meet the two-correct-at-medium-or-high rule.</p>
        <div class="completion-actions">
          <button class="button primary" type="button" data-finish="mastery">View mastery</button>
          <button class="button ghost" type="button" data-finish="guide">Study Guide</button>
          <button class="button ghost" type="button" data-finish="lab">${escapeHTML(activeExamLabel())} Lab</button>
        </div>
      </div>`;
    $("activity-host").querySelector('[data-finish="mastery"]').addEventListener("click", () => openMode("mastery"));
    $("activity-host").querySelector('[data-finish="guide"]').addEventListener("click", () => openMode("guide"));
    $("activity-host").querySelector('[data-finish="lab"]').addEventListener("click", () => openMode("lab"));
    renderLabLibrary();
  };

  const priorityRank = (concept) => {
    const state = getConceptState(concept.id);
    if (state.misconception) return 0;
    if (state.needsReview) return 1;
    if (state.attempts === 0) return 2;
    if (!state.mastered) return 3;
    return 4;
  };

  const renderMastery = () => {
    const concepts = activeConceptCatalog();
    const mastered = masteredCount();
    const percent = concepts.length ? Math.round(mastered / concepts.length * 100) : 0;
    $("mastery-percent").textContent = `${percent}%`;
    document.querySelector(".mastery-ring").style.setProperty("--mastery", `${percent * 3.6}deg`);
    const misconceptionCount = concepts.filter(({ id }) => getConceptState(id).misconception).length;
    const attempted = concepts.filter(({ id }) => getConceptState(id).attempts > 0).length;
    $("mastery-summary").textContent = concepts.length > 0 && mastered === concepts.length
      ? `${activeExamLabel()} path mastered`
      : mastered > 0
        ? `${mastered} of ${concepts.length} concepts mastered`
        : concepts.length ? "Begin the first module" : "No verified concepts yet";
    $("mastery-detail").textContent = attempted
      ? `${attempted} concepts attempted · ${misconceptionCount} high-confidence misconception flag${misconceptionCount === 1 ? "" : "s"}.`
      : "No guided attempts recorded yet.";

    const priority = [...concepts].sort((left, right) => priorityRank(left) - priorityRank(right))[0];
    const reviewButton = $("review-priority");
    if (concepts.length > 0 && mastered === concepts.length) {
      reviewButton.disabled = false;
      reviewButton.textContent = `Launch ${activeExamLabel()} Boss Drill`;
      reviewButton.onclick = () => {
        const boss = quizzes.find((quiz) => quiz.examId === activeExam && quiz.kind === "boss") || quizzes.find((quiz) => examLineage(activeExam).has(quiz.examId) && quiz.questions?.length);
        if (boss) startQuiz(boss);
      };
    } else if (priority) {
      reviewButton.disabled = false;
      reviewButton.textContent = priorityRank(priority) === 2 ? `Start Module ${priority.moduleNumber}` : `Review: ${priority.label}`;
      reviewButton.onclick = () => startModule(priority.moduleId, priority.id);
    } else {
      reviewButton.disabled = true;
      reviewButton.textContent = "Needs verified content";
      reviewButton.onclick = null;
    }

    const misconceptionCallout = $("misconception-callout");
    if (misconceptionCount) {
      misconceptionCallout.classList.remove("hidden");
      misconceptionCallout.innerHTML = `<strong>Misconception flag</strong><span>${misconceptionCount} concept${misconceptionCount === 1 ? " was" : "s were"} answered incorrectly with high confidence. Those take review priority.</span>`;
    } else {
      misconceptionCallout.classList.add("hidden");
      misconceptionCallout.replaceChildren();
    }

    const ledger = $("concept-ledger");
    ledger.replaceChildren();
    [...concepts].sort((left, right) => priorityRank(left) - priorityRank(right) || left.moduleNumber - right.moduleNumber).forEach((concept) => {
      const state = getConceptState(concept.id);
      const status = state.mastered ? "Mastered" : state.misconception ? "Misconception" : state.needsReview ? "Review due" : state.attempts ? "Building" : "Unattempted";
      const row = document.createElement("article");
      row.className = `concept-row status-${status.toLowerCase().replaceAll(" ", "-")}`;
      row.innerHTML = `
        <div><span class="concept-module">M${concept.moduleNumber}</span><strong>${escapeHTML(concept.label)}</strong><small>${escapeHTML(concept.moduleTitle)}</small></div>
        <div class="concept-stats"><span>${state.correct}/${state.attempts} correct</span><span>streak ${state.streak}</span><span>${state.lastConfidence ? `${state.lastConfidence} confidence` : "no confidence yet"}</span></div>
        <button type="button" class="status-button">${status}</button>`;
      row.querySelector("button").addEventListener("click", () => startModule(concept.moduleId, concept.id));
      ledger.append(row);
    });

    const moduleGrid = $("module-progress-grid");
    moduleGrid.replaceChildren();
    modulesForExam(activeExam).forEach((module) => {
      const completed = Boolean(guidedProgress.modules[module.id]?.completed);
      const eligibleConcepts = masteryConcepts(module);
      const count = eligibleConcepts.filter(({ id }) => getConceptState(id).mastered).length;
      const card = document.createElement("button");
      card.type = "button";
      card.className = "module-progress-card";
      card.innerHTML = `<span>Module ${module.number}</span><strong>${escapeHTML(module.title)}</strong><small>${completed ? "Completed" : "Open"} · ${count}/${eligibleConcepts.length} mastered</small>`;
      card.addEventListener("click", () => startModule(module.id));
      moduleGrid.append(card);
    });
  };

  const quizState = {
    quiz: null,
    questions: [],
    index: 0,
    score: 0,
    answered: false,
    responses: []
  };

  const readQuizProgress = () => safeRead(quizStorageKey, {});

  const questionsForQuiz = (quiz) => {
    if (!quiz?.sourceQuizId) return quiz?.questions || [];
    return quizzes.find((candidate) => candidate.id === quiz.sourceQuizId)?.questions || [];
  };

  const sourceInterleave = (questions) => {
    const buckets = new Map();
    shuffle(questions).forEach((question) => {
      const key = question.sourceGroup || "other";
      if (!buckets.has(key)) buckets.set(key, []);
      buckets.get(key).push(question);
    });
    const keys = shuffle([...buckets.keys()]);
    const result = [];
    while (keys.some((key) => buckets.get(key).length)) {
      keys.forEach((key) => {
        const next = buckets.get(key).shift();
        if (next) result.push(next);
      });
    }
    return result;
  };

  const selectSmartQuestions = (questions, selection) => {
    if (!selection?.size) return questions;
    const eligible = questions.filter((question) => question.simulatorEligible !== false);
    const picked = [];
    const pickedIds = new Set();
    const lineages = new Set();
    const add = (question) => {
      if (!question || pickedIds.has(question.id)) return false;
      picked.push(question);
      pickedIds.add(question.id);
      if (question.lineage) lineages.add(question.lineage);
      return true;
    };
    Object.entries(selection.quotas || {}).forEach(([domain, count]) => {
      const candidates = sourceInterleave(eligible.filter((question) => question.domain === domain && !pickedIds.has(question.id)));
      let domainCount = 0;
      for (const question of candidates) {
        if (domainCount >= count) break;
        if (!question.lineage || !lineages.has(question.lineage)) {
          add(question);
          domainCount += 1;
        }
      }
      for (const question of candidates) {
        if (domainCount >= count) break;
        if (add(question)) domainCount += 1;
      }
    });
    const remaining = sourceInterleave(eligible.filter((question) => !pickedIds.has(question.id)));
    for (const question of remaining) {
      if (picked.length >= selection.size) break;
      if (!question.lineage || !lineages.has(question.lineage)) add(question);
    }
    for (const question of remaining) {
      if (picked.length >= selection.size) break;
      add(question);
    }
    return picked.slice(0, selection.size);
  };

  const writeQuizProgress = (quizId, score, total) => {
    const progress = readQuizProgress();
    const previous = progress[quizId];
    if (!previous || score / total >= previous.score / previous.total) {
      progress[quizId] = { score, total, completedAt: new Date().toISOString() };
      localStorage.setItem(quizStorageKey, JSON.stringify(progress));
    }
  };

  const renderQuizLibrary = () => {
    const progress = readQuizProgress();
    const library = $("quiz-library");
    library.replaceChildren();
    const inheritedExamIds = examLineage(activeExam);
    const activeQuizzes = quizzes.filter((quiz) => inheritedExamIds.has(quiz.examId) || (!quiz.examId && quiz.lane === activeExamLabel()));
    const visibleQuizzes = activeQuizzes.some((quiz) => quiz.kind !== "shell" && questionsForQuiz(quiz).length)
      ? activeQuizzes.filter((quiz) => quiz.kind !== "shell")
      : activeQuizzes;
    if (visibleQuizzes.length === 0) {
      library.innerHTML = `<article class="empty-state compact"><span class="pill">Original drills</span><h3>No source-linked drill has been authored for ${escapeHTML(activeExamLabel())}.</h3><p>The lane remains visibly empty instead of borrowing questions from another exam.</p></article>`;
      return;
    }
    visibleQuizzes.forEach((quiz) => {
      const card = document.createElement("article");
      card.className = "quiz-tile";
      const saved = progress[quiz.id];
      const sourceQuestions = questionsForQuiz(quiz);
      const isSourceReview = quiz.kind === "source-review";
      const questionCount = isSourceReview ? window.ASTR1102_EXAM2.topHat.length : quiz.examId === "exam-two" && quiz.kind === "simulator" ? 25 : quiz.selection?.size || sourceQuestions.length;
      const disabled = sourceQuestions.length === 0 && !isSourceReview;
      card.innerHTML = `
        <span class="pill">${escapeHTML(quiz.lane || activeExamLabel())}</span>
        <h3>${escapeHTML(quiz.title)}</h3>
        <p>${escapeHTML(quiz.description)}</p>
        <div class="quiz-stats"><span>${escapeHTML(quiz.chapters)}</span><span>${isSourceReview && !questionCount ? "Private source pack" : `${questionCount} question${questionCount === 1 ? "" : "s"}`}</span></div>
        ${saved ? `<p class="saved-score">Best: ${saved.score}/${saved.total} (${Math.round(saved.score / saved.total * 100)}%)</p>` : ""}
        <button class="button ${disabled ? "ghost" : "primary"}" type="button" ${disabled ? "disabled" : ""}>${disabled ? escapeHTML(quiz.status) : isSourceReview ? (questionCount ? "Review supplied Top Hat" : "Add course source pack") : quiz.kind === "simulator" || quiz.selection ? "Generate 25-question exam" : "Start shuffled drill"}</button>`;
      if (!disabled) card.querySelector("button").addEventListener("click", () => startQuiz(quiz));
      library.append(card);
    });
  };

  const prepareQuestion = (question) => ({ ...question, displayIndices: shuffle(question.choices.map((_, index) => index)) });

  const startQuiz = (quiz, selectedQuestions = null) => {
    if (quiz.examId === "exam-two") {
      activeMode = "lab";
      markMode("lab");
      showOnly($("exam-simulator-view"));
      window.ASTRExamTwo.open($("exam-simulator-view"), () => { guidedProgress = getGuidedProgress(); openMode("lab"); }, {
        kind: quiz.kind === "boss" ? "boss" : quiz.kind === "simulator" ? "simulator" : quiz.kind === "source-review" ? "source-review" : "pool", title: quiz.title
      });
      return;
    }
    if (quiz.kind === "simulator") {
      showOnly($("exam-simulator-view"));
      window.ASTRExamSimulator.open($("exam-simulator-view"), () => openMode("lab"));
      return;
    }
    quizState.quiz = quiz;
    const sourceQuestions = selectedQuestions || selectSmartQuestions(questionsForQuiz(quiz), quiz.selection);
    quizState.questions = shuffle(sourceQuestions).map(prepareQuestion);
    quizState.index = 0;
    quizState.score = 0;
    quizState.answered = false;
    quizState.responses = [];
    activeMode = "lab";
    markMode("lab");
    showOnly($("quiz-view"));
    renderQuestion();
  };

  const normalizedAnswer = (question) => Array.isArray(question.answer) ? [...question.answer].sort((a, b) => a - b) : [question.answer];

  const renderQuestion = () => {
    const question = quizState.questions[quizState.index];
    quizState.answered = false;
    $("feedback").className = "feedback hidden";
    $("feedback").replaceChildren();
    $("next-question").classList.add("hidden");
    $("check-answer").disabled = false;
    $("progress-label").textContent = `Question ${quizState.index + 1} of ${quizState.questions.length}`;
    $("score-label").textContent = `${quizState.score} correct`;
    $("progress-fill").style.width = `${(quizState.index / quizState.questions.length) * 100}%`;
    $("question-topic").textContent = question.topic;
    $("question-source").textContent = question.source;
    $("question-prompt").textContent = question.prompt;
    const mediaHost = $("question-media");
    mediaHost.replaceChildren();
    mediaHost.classList.toggle("hidden", !question.media?.src);
    if (question.media?.src) {
      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.src = question.media.src;
      image.alt = question.media.alt || "Question reference image";
      const caption = document.createElement("figcaption");
      caption.textContent = question.media.caption || question.media.source || "Question reference image";
      figure.append(image, caption);
      mediaHost.append(figure);
    }
    const fieldset = $("answer-options");
    fieldset.replaceChildren();
    const inputType = question.type === "multi" ? "checkbox" : "radio";
    question.displayIndices.forEach((originalIndex) => {
      const label = document.createElement("label");
      label.className = "answer-option";
      const input = document.createElement("input");
      input.type = inputType;
      input.name = "answer";
      input.value = originalIndex;
      const copy = document.createElement("span");
      copy.textContent = question.choices[originalIndex];
      label.append(input, copy);
      fieldset.append(label);
    });
  };

  const selectedQuizAnswers = () => [...document.querySelectorAll("#answer-options input:checked")]
    .map((input) => Number(input.value)).sort((a, b) => a - b);

  const checkQuizAnswer = (event) => {
    event.preventDefault();
    if (quizState.answered) return;
    const question = quizState.questions[quizState.index];
    const selected = selectedQuizAnswers();
    if (selected.length === 0) {
      $("feedback").className = "feedback bad";
      $("feedback").innerHTML = "<strong>Select an answer first.</strong> Make the retrieval attempt before revealing the explanation.";
      return;
    }
    const correctAnswers = normalizedAnswer(question);
    const correct = sameAnswers(selected, correctAnswers);
    quizState.answered = true;
    if (correct) quizState.score += 1;
    quizState.responses.push({ question, selected, correct });
    document.querySelectorAll("#answer-options input").forEach((input) => {
      input.disabled = true;
      const originalIndex = Number(input.value);
      const label = input.closest("label");
      if (correctAnswers.includes(originalIndex)) label.classList.add("correct");
      else if (input.checked) label.classList.add("incorrect");
    });
    const feedback = $("feedback");
    feedback.className = `feedback ${correct ? "good" : "bad"}`;
    const correctCopy = correctAnswers.map((index) => question.choices[index]).join("; ");
    feedback.innerHTML = `<strong>${correct ? "Correct." : "Not yet."}</strong>${correct ? "" : `<p><b>Correct answer:</b> ${escapeHTML(correctCopy)}</p>`}<p>${escapeHTML(question.explanation)}</p>`;
    $("score-label").textContent = `${quizState.score} correct`;
    $("check-answer").disabled = true;
    $("next-question").textContent = quizState.index === quizState.questions.length - 1 ? "See results" : "Next question";
    $("next-question").classList.remove("hidden");
  };

  const nextQuestion = () => {
    if (quizState.index < quizState.questions.length - 1) {
      quizState.index += 1;
      renderQuestion();
    } else {
      renderResults();
    }
  };

  const renderResults = () => {
    const total = quizState.questions.length;
    const percent = Math.round(quizState.score / total * 100);
    writeQuizProgress(quizState.quiz.id, quizState.score, total);
    $("result-score").textContent = `${percent}%`;
    $("result-message").textContent = `${quizState.score} of ${total} correct. ${percent >= 80 ? "Strong retrieval. Now explain the misses without looking." : "The weak concepts have revealed themselves. Feed them back into the drill."}`;
    const missed = quizState.responses.filter((response) => !response.correct);
    $("retry-missed").classList.toggle("hidden", missed.length === 0);
    const review = $("missed-review");
    review.replaceChildren();
    missed.forEach(({ question }) => {
      const item = document.createElement("article");
      item.className = "review-item";
      const correct = normalizedAnswer(question).map((index) => question.choices[index]).join("; ");
      item.innerHTML = `<h3>${escapeHTML(question.prompt)}</h3><p><strong>Correct:</strong> ${escapeHTML(correct)}</p><p>${escapeHTML(question.explanation)}</p><small>${escapeHTML(question.source)}</small>`;
      review.append(item);
    });
    $("retry-missed").onclick = () => startQuiz(quizState.quiz, missed.map((item) => item.question));
    showOnly($("results-view"));
    renderQuizLibrary();
  };

  document.querySelectorAll(".mode-button, .mastery-button").forEach((button) => button.addEventListener("click", () => openMode(button.dataset.mode)));
  $("activity-primary").addEventListener("click", checkGuidedActivity);
  $("activity-next").addEventListener("click", nextActivity);
  $("back-to-lab").addEventListener("click", () => openMode("lab"));
  document.querySelectorAll(".confidence-buttons button").forEach((button) => button.addEventListener("click", () => recordGuidedAttempt(button.dataset.confidence)));
  $("answer-form").addEventListener("submit", checkQuizAnswer);
  $("next-question").addEventListener("click", nextQuestion);
  $("back-to-library").addEventListener("click", () => openMode("lab"));
  $("results-library").addEventListener("click", () => openMode("lab"));
  $("back-to-guide").addEventListener("click", () => openMode("guide"));
  $("test-guide-module").addEventListener("click", () => currentGuideModule && startModule(currentGuideModule.id));
  $("test-guide-module-bottom").addEventListener("click", () => currentGuideModule && startModule(currentGuideModule.id));
  $("lab-back-to-guide").addEventListener("click", () => openMode("guide"));
  $("view-mastery").addEventListener("click", () => openMode("mastery"));
  $("mastery-back-to-guide").addEventListener("click", () => openMode("guide"));
  $("mastery-back-to-lab").addEventListener("click", () => openMode("lab"));
  $("return-primary-exam").addEventListener("click", () => selectExam(primaryExamId));
  $("restart-quiz").addEventListener("click", () => startQuiz(quizState.quiz));
  $("print-results").addEventListener("click", () => window.print());
  $("clear-progress").addEventListener("click", () => {
    const scores = readQuizProgress();
    quizzes.filter(q => q.examId === activeExam || (!q.examId && q.lane === activeExamLabel())).forEach(q => delete scores[q.id]);
    localStorage.setItem(quizStorageKey, JSON.stringify(scores));
    renderQuizLibrary();
  });
  $("reset-guided-progress").addEventListener("click", () => {
    if (!window.confirm(`Reset ${activeExamLabel()} Lab and Mastery progress? Saved shuffled-drill scores will remain.`)) return;
    const saved = getGuidedProgress();
    modules.filter(m => moduleExamId(m) === activeExam).forEach(m => {
      delete saved.modules[m.id];
      (m.concepts || []).forEach(c => delete saved.concepts[c.id]);
    });
    if (activeExam === "exam-two") {
      localStorage.removeItem(window.ASTRExamTwo.keys.practice);
      localStorage.removeItem(window.ASTRExamTwo.keys.simulator);
    }
    localStorage.setItem(guidedStorageKey, JSON.stringify(saved));
    guidedProgress = getGuidedProgress();
    renderGuideLibrary();
    renderLabLibrary();
    renderMastery();
  });
  $("visual-dialog-close").addEventListener("click", () => $("visual-dialog").close());
  $("visual-dialog").addEventListener("click", (event) => {
    if (event.target === $("visual-dialog")) $("visual-dialog").close();
  });

  window.addEventListener("astr-progress-changed", () => {
    guidedProgress = getGuidedProgress();
    updateMasteryCounts();
    if (!$('mastery-view').classList.contains('hidden')) renderMastery();
  });
  window.ASTRExamTwo?.renderEvidence($("exam-two-evidence"));
  renderCourseChrome();
  renderExamNavigation();
  selectExam(primaryExamId);
})();

