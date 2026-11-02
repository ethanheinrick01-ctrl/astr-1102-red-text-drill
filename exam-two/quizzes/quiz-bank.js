window.ASTR1102_QUIZZES = [
  {
    "id": "exam-two-boss-drill",
    "examId": "exam-two",
    "kind": "boss",
    "title": "Exam 2 Boss Drill",
    "description": "25 original tasks across the supplied material, now including Lectures 19–21. Saved older forms remain unchanged.",
    "lane": "Exam 2",
    "chapters": "Lectures 13–18 · Exam 2: material available so far",
    "status": "Ready",
    "questions": [
      {
        "id": "exam-two-item-parallax-reference",
        "rootId": "exam-two-item-parallax-reference",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parallax-geometry",
        "concept": "exam-two-concept-parallax-geometry",
        "type": "single",
        "responseType": "single",
        "prompt": "A nearby star changes position between January and July. What provides the reference for measuring its parallax?",
        "choices": [
          "Much more distant background stars",
          "A companion orbiting the target star",
          "The target’s position relative to the Sun",
          "Earth’s horizon at each observation"
        ],
        "answer": 0,
        "hint": "Separate a positional reference from a brightness measurement.",
        "explanation": "The distant background provides an approximately fixed reference for the nearby star’s apparent displacement.",
        "source": "Lecture 13 pages 7–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 7–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parallax-geometry"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-parsec-convert",
        "rootId": "exam-two-item-parsec-convert",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parsec",
        "concept": "exam-two-concept-parsec",
        "type": "single",
        "responseType": "single",
        "prompt": "A star has a parallax of 0.25 arcsecond. What is its distance?",
        "choices": [
          "0.25 pc",
          "2 pc",
          "4 pc",
          "25 pc"
        ],
        "answer": 2,
        "hint": "Take the reciprocal of the angle in arcseconds.",
        "explanation": "d = 1/0.25 = 4 pc. The units matter: p must be in arcseconds.",
        "source": "Lecture 13 pages 13–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 13–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parsec"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-observer-move",
        "rootId": "exam-two-item-observer-move",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-flux-luminosity",
        "concept": "exam-two-concept-flux-luminosity",
        "type": "single",
        "responseType": "single",
        "prompt": "An observer moves twice as far from a star whose radius and temperature stay fixed. Which quantity stays unchanged?",
        "choices": [
          "The star’s luminosity",
          "The light received per square meter",
          "The star’s apparent magnitude",
          "The star’s parallax angle"
        ],
        "answer": 0,
        "hint": "Ask which quantity belongs to the star rather than the observer.",
        "explanation": "Intrinsic luminosity stays fixed. Received brightness decreases, apparent magnitude increases, and parallax decreases.",
        "source": "Lecture 13 pages 19–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-flux-luminosity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-brightness-infer-distance",
        "rootId": "exam-two-item-brightness-infer-distance",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-inverse-square",
        "concept": "exam-two-concept-inverse-square",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars have equal luminosity and no dust obscuration. One appears nine times fainter. How much farther away is it?",
        "choices": [
          "Three times",
          "Nine times",
          "One-third as far",
          "One-ninth as far"
        ],
        "answer": 0,
        "hint": "Undo the square rather than keeping the brightness factor.",
        "explanation": "A brightness ratio of 1/9 corresponds to a distance ratio of √9 = 3.",
        "source": "Lecture 13 pages 19–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-inverse-square"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/brightness-assessment.svg",
          "alt": "Original schematic of the comparison described in the question; no answer is marked.",
          "caption": "Original instructional model from the supplied relationship.",
          "source": "Lecture 13 pages 19–25 · original practice"
        }
      },
      {
        "id": "exam-two-item-magnitude-five",
        "rootId": "exam-two-item-magnitude-five",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-magnitude-ratio",
        "concept": "exam-two-concept-magnitude-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Star A has apparent magnitude −1 and B has magnitude +4 in the same band. How do their brightnesses compare?",
        "choices": [
          "A is 5 times brighter",
          "A is 25 times brighter",
          "A is 100 times brighter",
          "B is 100 times brighter"
        ],
        "answer": 2,
        "hint": "Count the magnitude steps, including the negative value.",
        "explanation": "The gap is five magnitudes; the lower-magnitude star A is 100 times brighter.",
        "source": "Lecture 14 pages 10–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 10–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-magnitude-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-absolute-reference",
        "rootId": "exam-two-item-absolute-reference",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-absolute-magnitude",
        "concept": "exam-two-concept-absolute-magnitude",
        "type": "single",
        "responseType": "single",
        "prompt": "At what reference distance is a star’s absolute magnitude defined?",
        "choices": [
          "1 AU",
          "1 pc",
          "10 pc",
          "100 pc"
        ],
        "answer": 2,
        "hint": "This is a standardized distance, not its measured current distance.",
        "explanation": "Absolute magnitude uses a reference distance of 10 parsecs.",
        "source": "Lecture 14 pages 14–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 14–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-absolute-magnitude"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-dust-distance-correct",
        "rootId": "exam-two-item-dust-distance-correct",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-extinction-distance",
        "concept": "exam-two-concept-extinction-distance",
        "type": "single",
        "responseType": "single",
        "prompt": "An extinction-free distance-modulus calculation puts a dusty star too far away. After correcting for the dust, what happens to the estimated distance?",
        "choices": [
          "It increases",
          "It decreases",
          "It stays the same",
          "It depends on whether dust also reddens the light"
        ],
        "answer": 1,
        "hint": "Correct the brightness loss that was mistaken for extra distance.",
        "explanation": "Removing the extinction contribution lowers m − M and therefore lowers the estimated distance.",
        "source": "Lecture 14 pages 17–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 17–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-extinction-distance"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-color-ratio",
        "rootId": "exam-two-item-color-ratio",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-color-temperature",
        "concept": "exam-two-concept-color-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars have the same reddening. A has a smaller visual-to-blue brightness ratio than B. Which is hotter in the lecture’s model?",
        "choices": [
          "A",
          "B",
          "They have the same temperature",
          "The farther star"
        ],
        "answer": 0,
        "hint": "Smaller V/B means relatively more blue.",
        "explanation": "At equal reddening, more blue relative to visual light means a higher temperature.",
        "source": "Lecture 15 pages 4–5 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 4–5",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-color-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-spectral-removed",
        "rootId": "exam-two-item-spectral-removed",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-spectral-temperature",
        "concept": "exam-two-concept-spectral-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Which is hottest among B, F, G, and K stars?",
        "choices": [
          "B",
          "F",
          "G",
          "K"
        ],
        "answer": 0,
        "hint": "Use the temperature sequence and only the offered choices.",
        "explanation": "B precedes F, G, and K in the hot-to-cool sequence.",
        "source": "Lecture 16 pages 5, 9–12, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 5, 9–12, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-spectral-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-red-not-cool",
        "rootId": "exam-two-item-red-not-cool",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-reddening",
        "concept": "exam-two-concept-reddening",
        "type": "single",
        "responseType": "single",
        "prompt": "A previously unobscured star becomes redder after a dust cloud crosses the line of sight. Its spectrum indicates unchanged temperature. What changed?",
        "choices": [
          "The received light was reddened",
          "The star became a red giant",
          "The star’s surface flux rose",
          "Its spectral class necessarily changed"
        ],
        "answer": 0,
        "hint": "Distinguish the light’s journey from the source’s state.",
        "explanation": "The added dust changes the transmitted color; it does not establish a temperature or evolutionary change.",
        "source": "Lecture 15 pages 5–6 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 5–6",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-reddening"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-radius-from-luminosity",
        "rootId": "exam-two-item-radius-from-luminosity",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-radius-temperature",
        "concept": "exam-two-concept-radius-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars have equal surface temperatures. A is nine times as luminous as B. What is RA/RB?",
        "choices": [
          "3",
          "9",
          "18",
          "81"
        ],
        "answer": 0,
        "hint": "Luminosity scales with emitting area when temperatures match.",
        "explanation": "LA/LB = (RA/RB)², so RA/RB = √9 = 3. “Luminous” avoids the apparent-brightness ambiguity in L15 page 14.",
        "source": "Lecture 15 pages 7–11, 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 7–11, 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-radius-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-mass-evidence",
        "rootId": "exam-two-item-mass-evidence",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-mass-measurement",
        "concept": "exam-two-concept-mass-measurement",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation supplies the lecture’s direct route to measuring stellar masses?",
        "choices": [
          "Doppler shifts through a binary orbit",
          "Proper motion of an isolated star",
          "Annual parallax of an isolated star",
          "A dust-corrected stellar color ratio"
        ],
        "answer": 0,
        "hint": "Mass requires gravitational or orbital evidence.",
        "explanation": "Repeated binary orbital Doppler measurements constrain masses. The other observations alone do not supply that orbital information.",
        "source": "Lecture 16 pages 15, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 15, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-mass-measurement"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hr-right",
        "rootId": "exam-two-item-hr-right",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-axes",
        "concept": "exam-two-concept-hr-axes",
        "type": "single",
        "responseType": "single",
        "prompt": "On the standard H–R diagram, moving right at the same luminosity means which change?",
        "choices": [
          "Lower temperature",
          "Higher temperature",
          "Smaller radius",
          "Lower luminosity"
        ],
        "answer": 0,
        "hint": "Read the direction of the temperature axis.",
        "explanation": "Temperature decreases to the right. At fixed luminosity, a cooler surface requires a larger radius, so the smaller-radius distractor is also wrong.",
        "source": "Lecture 16 pages 6, 13–14, 22; Lecture 15 page 8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 6, 13–14, 22",
            "boundary": "verified"
          },
          {
            "id": "exam-two-source-l15",
            "locator": "pages 8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-axes"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-white-dwarf-reason",
        "rootId": "exam-two-item-white-dwarf-reason",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-regions",
        "concept": "exam-two-concept-hr-regions",
        "type": "single",
        "responseType": "single",
        "prompt": "A star is hot but has very low luminosity. Which description best fits its H–R position?",
        "choices": [
          "A compact white dwarf",
          "An expanded red giant",
          "A cool red dwarf",
          "A luminous supergiant"
        ],
        "answer": 0,
        "hint": "Low total power at high T implies a small emitting area.",
        "explanation": "White dwarfs occupy the hot, faint lower left. Their small radii keep total luminosity low.",
        "source": "Lecture 16 pages 13–16, 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 13–16, 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-mass-lifetime",
        "rootId": "exam-two-item-mass-lifetime",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-main-sequence-mass",
        "concept": "exam-two-concept-main-sequence-mass",
        "type": "single",
        "responseType": "single",
        "prompt": "Compared with a low-mass main-sequence star, a high-mass main-sequence star generally has which combination?",
        "choices": [
          "Higher luminosity and shorter lifetime",
          "Higher luminosity and longer lifetime",
          "Lower luminosity and shorter lifetime",
          "Lower luminosity and longer lifetime"
        ],
        "answer": 0,
        "hint": "Compare fuel-consumption rate as well as fuel supply.",
        "explanation": "Massive main-sequence stars burn fuel much faster, producing greater luminosity but shorter lifetimes.",
        "source": "Lecture 16 pages 19, 23, 26, 28 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 19, 23, 26, 28",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-main-sequence-mass"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-ism-not",
        "rootId": "exam-two-item-ism-not",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-ism-density",
        "concept": "exam-two-concept-ism-density",
        "type": "single",
        "responseType": "single",
        "prompt": "Which statement about the interstellar medium is NOT consistent with the supplied lecture?",
        "choices": [
          "It contains low-density gas",
          "It contains dust",
          "It is a perfect vacuum everywhere",
          "It can form concentrations called nebulae"
        ],
        "answer": 2,
        "hint": "Distinguish very low density from zero density.",
        "explanation": "The interstellar medium contains gas and dust, even though it is sparse compared with our atmosphere.",
        "source": "Lecture 17 pages 8–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 8–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ism-density"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-reflection-versus-transmission",
        "rootId": "exam-two-item-reflection-versus-transmission",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-dust-scattering",
        "concept": "exam-two-concept-dust-scattering",
        "type": "single",
        "responseType": "single",
        "prompt": "Dust scatters short-wavelength light out of a star’s direct beam. How do the direct and scattered views tend to differ?",
        "choices": [
          "Direct light is redder; scattered light is bluer",
          "Direct light is bluer; scattered light is redder",
          "Both views become equally red",
          "Both views become equally blue"
        ],
        "answer": 0,
        "hint": "Follow the path that keeps versus redirects the blue light.",
        "explanation": "Short wavelengths are preferentially redirected, leaving redder transmitted light and bluer scattered light.",
        "source": "Lecture 17 pages 10–11, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 10–11, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-dust-scattering"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-formation-material",
        "rootId": "exam-two-item-formation-material",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-formation-regions",
        "concept": "exam-two-concept-formation-regions",
        "type": "single",
        "responseType": "single",
        "prompt": "Which environment provides the raw material for new stars in the supplied lecture?",
        "choices": [
          "A cloud rich in cold gas and dust",
          "A hot white dwarf with no surrounding cloud",
          "An old star’s core after exhausting hydrogen",
          "A compact star cluster with its gas dispersed"
        ],
        "answer": 0,
        "hint": "Star formation requires a supply of matter.",
        "explanation": "Gas and dust clouds supply the material from which new stars form. The current lesson does not yet cover the detailed later sequence.",
        "source": "Lecture 17 pages 9–10, 13, 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 9–10, 13, 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-formation-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-bok-description",
        "rootId": "exam-two-item-bok-description",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-bok-globules",
        "concept": "exam-two-concept-bok-globules",
        "type": "single",
        "responseType": "single",
        "prompt": "Which description fits a Bok globule in the supplied lecture?",
        "choices": [
          "A compact dark cloud of gas and dust",
          "An extended cloud of ultraviolet-ionized gas",
          "An exposed hot remnant after a red-giant phase",
          "A bright knot along a young star’s outflow axis"
        ],
        "answer": 0,
        "hint": "Use the object’s material and appearance.",
        "explanation": "The supplied Bok-globule slide describes a compact dusty gas cloud associated with star birth.",
        "source": "Lecture 17 pages 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-bok-globules"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hh-association",
        "rootId": "exam-two-item-hh-association",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-herbig-haro",
        "concept": "exam-two-concept-herbig-haro",
        "type": "single",
        "responseType": "single",
        "prompt": "The supplied Herbig–Haro example is associated with which setting?",
        "choices": [
          "A young star and aligned outflow structures",
          "An old star and a broadly expanding gas shell",
          "A molecular cloud seen only as a compact silhouette",
          "An illuminated dust cloud reflecting blue starlight"
        ],
        "answer": 0,
        "hint": "Use the star-birth context and axis alignment in the figure.",
        "explanation": "The packet places Herbig–Haro objects in star-forming regions and associates their alignment with young stars.",
        "source": "Lecture 17 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-herbig-haro"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-collapse-not",
        "rootId": "exam-two-item-l18-collapse-not",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-conditions",
        "concept": "exam-two-concept-collapse-conditions",
        "type": "single",
        "responseType": "single",
        "prompt": "Which change would NOT favor collapse of an otherwise comparable cold, dense cloud?",
        "choices": [
          "Lowering its temperature",
          "Increasing its density at fixed size",
          "Heating it without increasing density",
          "Reducing its thermal support"
        ],
        "answer": 2,
        "hint": "Gravity must overcome the resistance supplied by thermal pressure.",
        "explanation": "Heating at unchanged density strengthens thermal pressure support. The other changes favor the balance toward collapse.",
        "source": "Lecture 18 pages 12–13 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 12–13",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-conditions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-infrared-pair",
        "rootId": "exam-two-item-l18-infrared-pair",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-infrared-protostars",
        "concept": "exam-two-concept-infrared-protostars",
        "type": "single",
        "responseType": "single",
        "prompt": "Which pair explains the lecture’s use of infrared for embedded young objects?",
        "choices": [
          "Less dust scattering and relatively long-wavelength emission",
          "More dust scattering and relatively long-wavelength emission",
          "Less dust scattering and relatively short-wavelength emission",
          "More dust scattering and relatively short-wavelength emission"
        ],
        "answer": 0,
        "hint": "One reason concerns the path; the other concerns the source.",
        "explanation": "The lecture combines reduced infrared scattering by dust with the cooler source’s longer-wavelength thermal emission.",
        "source": "Lecture 18 pages 7 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 7",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-infrared-protostars"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-energy-before-fusion",
        "rootId": "exam-two-item-l18-energy-before-fusion",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-energy",
        "concept": "exam-two-concept-protostar-energy",
        "type": "single",
        "responseType": "single",
        "prompt": "A young object is luminous, is contracting, and has not begun sustained core hydrogen burning. What supplies energy in the lecture model?",
        "choices": [
          "Release of gravitational potential energy",
          "Release of sustained hydrogen-fusion energy",
          "Release of energy mainly from chemical combustion",
          "Release of heat mainly by expansion of the gas"
        ],
        "answer": 0,
        "hint": "The source is named Kelvin–Helmholtz contraction.",
        "explanation": "Contraction releases gravitational energy; some heats the interior and some escapes as radiation. Luminosity alone does not prove sustained hydrogen fusion.",
        "source": "Lecture 18 pages 17–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 17–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-energy"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-pressure-ratio",
        "rootId": "exam-two-item-l18-pressure-ratio",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-pressure",
        "concept": "exam-two-concept-collapse-pressure",
        "type": "single",
        "responseType": "single",
        "prompt": "For gas of unchanged composition, particle density doubles and temperature falls to one quarter. In the lecture’s P ∝ nT model, what happens to pressure?",
        "choices": [
          "It becomes one half as large",
          "It becomes twice as large",
          "It becomes four times as large",
          "It remains unchanged"
        ],
        "answer": 0,
        "hint": "Multiply the two ratios.",
        "explanation": "Pnew/Pold = 2 × 1/4 = 1/2. Considering only the density gives the wrong result.",
        "source": "Lecture 18 pages 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-pressure"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-cool-and-resume",
        "rootId": "exam-two-item-l18-cool-and-resume",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-support",
        "concept": "exam-two-concept-protostar-support",
        "type": "single",
        "responseType": "single",
        "prompt": "A non-fusing young object radiates heat away after its contraction slows. Why can contraction resume?",
        "choices": [
          "Cooling reduces thermal pressure support",
          "Cooling increases thermal pressure support",
          "Radiation maintains the lost heat without a new energy source",
          "A temporary pressure balance prevents any further energy loss"
        ],
        "answer": 0,
        "hint": "Distinguish losing stored heat from generating replacement energy.",
        "explanation": "Without ongoing replenishment, radiation and cooling weaken pressure support. Gravity can then drive further contraction.",
        "source": "Lecture 18 pages 19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-support"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-kh-inverse",
        "rootId": "exam-two-item-l19-kh-inverse",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-kh-clock",
        "concept": "exam-two-concept-kh-clock",
        "type": "single",
        "responseType": "single",
        "prompt": "Two protostars have equal mass and radius. A has four times B’s luminosity. What is tKH,A/tKH,B?",
        "choices": [
          "1/16",
          "1/4",
          "4",
          "16"
        ],
        "answer": 1,
        "hint": "Luminosity is the energy-loss rate.",
        "explanation": "With M and R fixed, tKH is inversely proportional to L, so the ratio is 1/4.",
        "source": "Lecture 19 pages 5–8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 5–8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-kh-clock"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-trigger-cause",
        "rootId": "exam-two-item-l19-trigger-cause",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-triggered-birth",
        "concept": "exam-two-concept-triggered-birth",
        "type": "single",
        "responseType": "single",
        "prompt": "A supernova shock sweeps cold interstellar gas into a dense layer. What change can favor new star formation?",
        "choices": [
          "Reduced self-gravity in the layer",
          "Greater density available for collapse",
          "Greater thermal support without compression",
          "Lower density throughout the swept-up layer"
        ],
        "answer": 1,
        "hint": "Ask how compression changes gravity’s competition with support.",
        "explanation": "Compression raises gas density and can make self-gravity overcome support in suitable fragments.",
        "source": "Lecture 19 pages 9–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 9–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-triggered-birth"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-ms-calculation",
        "rootId": "exam-two-item-l19-ms-calculation",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-ms-lifetime-ratio",
        "concept": "exam-two-concept-ms-lifetime-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Use tSun = 10 billion years. A main-sequence star has M = 4 MSun and L = 200 LSun. What is its approximate lifetime?",
        "choices": [
          "20 million years",
          "200 million years",
          "2 billion years",
          "50 billion years"
        ],
        "answer": 1,
        "hint": "Multiply 10 billion by 4/200.",
        "explanation": "4/200 = 0.02; 0.02 × 10 billion years = 200 million years.",
        "source": "Lecture 19 pages 16–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 16–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ms-lifetime-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-cno-net",
        "rootId": "exam-two-item-l20-cno-net",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-hydrogen-pathways",
        "concept": "exam-two-concept-hydrogen-pathways",
        "type": "single",
        "responseType": "single",
        "prompt": "Carbon, nitrogen, and oxygen participate in a cycle inside a hot stellar core. What is the net fuel-to-ash conversion?",
        "choices": [
          "Hydrogen into helium",
          "Helium into carbon",
          "Carbon into iron",
          "Oxygen into hydrogen"
        ],
        "answer": 0,
        "hint": "A catalyst is different from the net consumed fuel.",
        "explanation": "The CNO cycle uses C, N, and O in intermediate reactions, but its net conversion is hydrogen into helium.",
        "source": "Lecture 20 pages 10–12, 16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 10–12, 16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hydrogen-pathways"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-alpha-name",
        "rootId": "exam-two-item-l20-alpha-name",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-triple-alpha",
        "concept": "exam-two-concept-triple-alpha",
        "type": "single",
        "responseType": "single",
        "prompt": "What is an alpha particle in the triple-alpha reaction?",
        "choices": [
          "A hydrogen nucleus",
          "A helium-4 nucleus",
          "A carbon-12 nucleus",
          "A free electron"
        ],
        "answer": 1,
        "hint": "The reaction name counts three copies of its input nucleus.",
        "explanation": "Alpha particles are helium-4 nuclei; three can combine through the triple-alpha sequence to form carbon.",
        "source": "Lecture 20 pages 13–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 13–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-triple-alpha"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-rate-rank",
        "rootId": "exam-two-item-l20-rate-rank",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-rate-temperature",
        "concept": "exam-two-concept-rate-temperature",
        "type": "order",
        "responseType": "order",
        "prompt": "Using the supplied powers, order the reactions from least to most temperature-sensitive.",
        "choices": [
          "Proton–proton chain",
          "CNO cycle",
          "Triple-alpha process"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "Compare 4, 16, and 41.",
        "explanation": "The lecture’s exponents increase as pp (4), CNO (16), triple-alpha (41). This orders fractional sensitivity within the model.",
        "source": "Lecture 20 pages 10, 13, 15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 10, 13, 15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-rate-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-solar-chain",
        "rootId": "exam-two-item-l20-solar-chain",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-solar-brightening",
        "concept": "exam-two-concept-solar-brightening",
        "type": "single",
        "responseType": "single",
        "prompt": "What drives the gradual luminosity increase during the Sun’s main-sequence life?",
        "choices": [
          "Helium buildup followed by core contraction and heating",
          "Helium-core fusion beginning at the present solar age",
          "Hydrogen-shell burning replacing core burning today",
          "A steady decline in the hydrogen-fusion rate"
        ],
        "answer": 0,
        "hint": "Keep the present phase distinct from the red giant phase.",
        "explanation": "Composition changes lead to slow contraction and higher core temperature; hydrogen fusion becomes faster and the Sun brighter.",
        "source": "Lecture 20 pages 7–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 7–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-solar-brightening"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-giant-fuel-location",
        "rootId": "exam-two-item-l20-giant-fuel-location",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-red-giant-shell",
        "concept": "exam-two-concept-red-giant-shell",
        "type": "single",
        "responseType": "single",
        "prompt": "Before helium ignition, what powers the Sun’s red-giant branch in the supplied model?",
        "choices": [
          "Hydrogen fusion in a shell around a helium core",
          "Helium fusion throughout the outer envelope",
          "Iron fusion in a main-sequence core",
          "Hydrogen fusion only at the photosphere"
        ],
        "answer": 0,
        "hint": "Identify both the fuel and its location.",
        "explanation": "Hydrogen fuses in a shell around an inert contracting helium core. Helium-core fusion has not yet ignited.",
        "source": "Lecture 20 pages 18–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 18–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-red-giant-shell"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-flash-observed",
        "rootId": "exam-two-item-l20-flash-observed",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-helium-hr",
        "concept": "exam-two-concept-helium-hr",
        "type": "single",
        "responseType": "single",
        "prompt": "Which statement fits the helium flash in the supplied Sun-like model?",
        "choices": [
          "Rapid internal helium ignition without a visible supernova",
          "A visible supernova that ejects the entire star",
          "Hydrogen ignition at the photosphere",
          "Fusion of iron beginning in the solar core"
        ],
        "answer": 0,
        "hint": "Separate an internal thermal event from an observable stellar explosion.",
        "explanation": "The helium flash rapidly ignites core helium; the star absorbs the energy internally rather than producing a visible supernova.",
        "source": "Lecture 20 pages 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-helium-hr"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-cluster-control",
        "rootId": "exam-two-item-l21-cluster-control",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-cluster-controls",
        "concept": "exam-two-concept-cluster-controls",
        "type": "single",
        "responseType": "single",
        "prompt": "Why is a star cluster useful for studying how stellar mass affects evolution?",
        "choices": [
          "Its stars share roughly one age and distance",
          "Its stars share exactly one mass and radius",
          "Its stars share exactly one luminosity and color",
          "Its stars share exactly one burning stage"
        ],
        "answer": 0,
        "hint": "Look for shared conditions, not identical outcomes.",
        "explanation": "A roughly common age, distance, and reddening help isolate the effects of different masses.",
        "source": "Lecture 21 pages 7–8, 11–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 7–8, 11–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-cluster-controls"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-turnoff-target",
        "rootId": "exam-two-item-l21-turnoff-target",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-cluster-turnoff",
        "concept": "exam-two-concept-cluster-turnoff",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the turnoff point belonging to the oldest of the three comparable clusters shown.",
        "choices": [
          "A",
          "B",
          "C"
        ],
        "answer": 2,
        "hint": "Older means the upper surviving main sequence ends lower and cooler.",
        "explanation": "C has the coolest, least luminous turnoff. Massive hot stars have already left its main sequence.",
        "source": "Lecture 21 pages 9–19, 32 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 9–19, 32",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-cluster-turnoff"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/turnoff-target.svg",
          "alt": "Schematic H–R diagram with three main-sequence turnoffs A (29%,24%), B (48%,45%), C (68%,68%); luminosity increases up and temperature increases left.",
          "caption": "Original cluster comparison; common composition and schematic axes."
        },
        "targets": [
          {
            "label": "A",
            "x": 29,
            "y": 24
          },
          {
            "label": "B",
            "x": 48,
            "y": 45
          },
          {
            "label": "C",
            "x": 68,
            "y": 68
          }
        ]
      },
      {
        "id": "exam-two-item-l21-metal-definition",
        "rootId": "exam-two-item-l21-metal-definition",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-population-metals",
        "concept": "exam-two-concept-population-metals",
        "type": "single",
        "responseType": "single",
        "prompt": "Which substance counts as a metal in the astronomical definition used here?",
        "choices": [
          "Hydrogen",
          "Helium",
          "Oxygen",
          "Hydrogen-2"
        ],
        "answer": 2,
        "hint": "The boundary is heavier than helium.",
        "explanation": "Oxygen is heavier than helium, so astronomers include it among metals. Hydrogen and helium are excluded.",
        "source": "Lecture 21 pages 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-population-metals"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-eclipse-mechanism",
        "rootId": "exam-two-item-l21-eclipse-mechanism",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-variable-mechanisms",
        "concept": "exam-two-concept-variable-mechanisms",
        "type": "single",
        "responseType": "single",
        "prompt": "An otherwise steady star dims when its companion moves in front of it. What directly causes the observed dimming?",
        "choices": [
          "Blocked light during an eclipse",
          "Radial pulsation of the visible star",
          "An eruption from the visible star",
          "A changing amount of foreground dust"
        ],
        "answer": 0,
        "hint": "Which mechanism is specified in the observation?",
        "explanation": "The foreground companion blocks some light. This is an eclipse, not evidence of radial pulsation.",
        "source": "Lecture 21 pages 26–27 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 26–27",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-variable-mechanisms"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-lightcurve-period",
        "rootId": "exam-two-item-l21-lightcurve-period",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-variable-periods",
        "concept": "exam-two-concept-variable-periods",
        "type": "single",
        "responseType": "single",
        "prompt": "A repeated light curve has maxima at days 2, 7, and 12. What is its period?",
        "choices": [
          "2 days",
          "5 days",
          "10 days",
          "12 days"
        ],
        "answer": 1,
        "hint": "Measure between consecutive equivalent phases.",
        "explanation": "7−2 = 5 days and 12−7 = 5 days. The interval across two cycles is ten days, not the period.",
        "source": "Lecture 21 pages 28–29 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 28–29",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-variable-periods"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-candle-order",
        "rootId": "exam-two-item-l21-candle-order",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-standard-candle",
        "concept": "exam-two-concept-standard-candle",
        "type": "order",
        "responseType": "order",
        "prompt": "Arrange the steps for a Cepheid distance estimate, assuming a known type and corrected extinction.",
        "choices": [
          "Measure its repeated pulsation period",
          "Use the appropriate period–luminosity calibration",
          "Compare intrinsic luminosity with apparent brightness",
          "Infer the distance"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "hint": "Obtain intrinsic output before using the inverse-square comparison.",
        "explanation": "Measure period, infer calibrated luminosity, compare with apparent brightness, then infer distance.",
        "source": "Lecture 21 pages 29–31 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 29–31",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-standard-candle"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-shell-location",
        "rootId": "exam-two-item-l22-shell-location",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-agb-shells",
        "concept": "exam-two-concept-agb-shells",
        "type": "single",
        "responseType": "single",
        "prompt": "In the lecture’s AGB model, where is helium fusion located relative to hydrogen fusion?",
        "choices": [
          "Farther from the center",
          "Inside the carbon–oxygen core",
          "At the same outer surface",
          "Closer to the center"
        ],
        "answer": 3,
        "hint": "Read the shells from the core outward.",
        "explanation": "The helium-burning shell lies just outside the carbon–oxygen core; the hydrogen-burning shell lies farther out. The core itself is inert in this model.",
        "source": "Lecture 22 pages 11–14, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 11–14, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-agb-shells"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-pulse-fuel",
        "rootId": "exam-two-item-l22-pulse-fuel",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-thermal-pulses",
        "concept": "exam-two-concept-thermal-pulses",
        "type": "single",
        "responseType": "single",
        "prompt": "What directly replenishes the helium available for shell burning in the AGB model?",
        "choices": [
          "Iron fusion in an outer atmosphere",
          "Hydrogen fusion in a surrounding shell",
          "Helium escaping through a surface wind",
          "Carbon fusion inside the central core"
        ],
        "answer": 1,
        "hint": "Identify the product of hydrogen fusion.",
        "explanation": "Hydrogen fusion makes helium, supplying material for subsequent helium-shell burning.",
        "source": "Lecture 22 pages 10, 13–14, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 10, 13–14, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-thermal-pulses"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-carbon-order",
        "rootId": "exam-two-item-l22-carbon-order",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-carbon-recycling",
        "concept": "exam-two-concept-carbon-recycling",
        "type": "order",
        "responseType": "order",
        "prompt": "Order the steps that return newly made carbon from an AGB star to surrounding gas.",
        "choices": [
          "Helium fusion produces carbon",
          "Convection mixes processed material outward",
          "A wind carries enriched envelope gas away"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "Separate production, transport and escape.",
        "explanation": "Carbon must be made before it can be mixed outward and then removed in the wind.",
        "source": "Lecture 22 pages 14–17, 35 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 14–17, 35",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-carbon-recycling"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-remnant-target",
        "rootId": "exam-two-item-l22-remnant-target",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-white-dwarf-remnant",
        "concept": "exam-two-concept-white-dwarf-remnant",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the compact remnant in this schematic planetary-nebula system.",
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": 1,
        "hint": "Separate the central object from the extended gas.",
        "explanation": "B marks the compact central remnant. A and C sample expelled gas, while D lies outside the shell.",
        "source": "Lecture 22 pages 18–22 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 18–22",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-white-dwarf-remnant"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/nebula-target.svg",
          "alt": "Expanding gas shell centered at 50 percent width and 50 percent height. A at 22,50 and C at 78,50 mark shell gas; B at 50,50 marks central remnant; D at 88,20 is outside.",
          "caption": "Original schematic. Sizes and distances are not to scale."
        },
        "targets": [
          {
            "label": "A",
            "x": 22,
            "y": 50
          },
          {
            "label": "B",
            "x": 50,
            "y": 50
          },
          {
            "label": "C",
            "x": 78,
            "y": 50
          },
          {
            "label": "D",
            "x": 88,
            "y": 20
          }
        ]
      },
      {
        "id": "exam-two-item-l22-gas-spectrum",
        "rootId": "exam-two-item-l22-gas-spectrum",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-nebula-spectrum",
        "concept": "exam-two-concept-nebula-spectrum",
        "type": "single",
        "responseType": "single",
        "prompt": "A narrow aperture samples bright planetary-nebula gas while excluding the central star. Which spectral feature is expected from that gas?",
        "choices": [
          "Bright emission lines",
          "No light because the gas is not a star",
          "Only a smooth thermal continuum",
          "Only dark stellar absorption lines"
        ],
        "answer": 0,
        "hint": "Low-density ionized gas emits at particular wavelengths.",
        "explanation": "The ionized nebular gas contributes bright emission lines. The aperture condition separates it from the central star’s spectrum.",
        "source": "Lecture 22 pages 22, 30, 34 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 22, 30, 34",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-spectrum"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-nebula-lifetime",
        "rootId": "exam-two-item-l22-nebula-lifetime",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-nebula-shapes",
        "concept": "exam-two-concept-nebula-shapes",
        "type": "single",
        "responseType": "single",
        "prompt": "A nebular shell expands while keeping approximately the same gas mass. What trend helps explain why it eventually becomes difficult to see?",
        "choices": [
          "Its gas becomes more dilute",
          "Its shell must move back toward the core",
          "Its gas becomes more tightly compressed",
          "Its central source must become more luminous"
        ],
        "answer": 0,
        "hint": "Spread the same mass through a larger volume.",
        "explanation": "Expansion lowers the gas density; changing illumination and dilution contribute to fading.",
        "source": "Lecture 22 pages 22–33 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 22–33",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-shapes"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-massive-clock",
        "rootId": "exam-two-item-l23-massive-clock",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-massive-demographics",
        "concept": "exam-two-concept-massive-demographics",
        "type": "single",
        "responseType": "single",
        "prompt": "Use t/tSun ≈ (M/MSun)/(L/LSun). A hypothetical star has 12 solar masses and 24,000 solar luminosities. What is its lifetime relative to the Sun?",
        "choices": [
          "2,000",
          "1/2,000",
          "1/200",
          "200"
        ],
        "answer": 1,
        "hint": "Divide the fuel scale by the output scale.",
        "explanation": "12/24,000 = 1/2,000. This approximate main-sequence relation is not a duration for every later burning stage.",
        "source": "Lecture 23 pages 6–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 6–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-massive-demographics"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-wind-history",
        "rootId": "exam-two-item-l23-wind-history",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-wind-environment",
        "concept": "exam-two-concept-wind-environment",
        "type": "single",
        "responseType": "single",
        "prompt": "A dense shell surrounds a massive star before its final explosion. Which process can build that shell?",
        "choices": [
          "Only material leaving after core bounce",
          "Mass loss during the star’s earlier life",
          "Only material ejected by the later explosion",
          "Only gas newly made in the later shock"
        ],
        "answer": 1,
        "hint": "The shell already exists before the terminal event.",
        "explanation": "Earlier winds or outbursts can supply circumstellar gas before the explosion.",
        "source": "Lecture 23 pages 9–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 9–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wind-environment"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-wr-surface",
        "rootId": "exam-two-item-l23-wr-surface",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-envelope-stripping",
        "concept": "exam-two-concept-envelope-stripping",
        "type": "single",
        "responseType": "single",
        "prompt": "A strong wind removes a massive star’s hydrogen-rich envelope. What can become visible underneath?",
        "choices": [
          "Hotter helium-rich layers",
          "An exposed iron core in every case",
          "A carbon–oxygen white dwarf in every case",
          "Cooler hydrogen-rich layers"
        ],
        "answer": 0,
        "hint": "Follow which material is removed and which remains.",
        "explanation": "Stripping the hydrogen-rich envelope can expose deeper hotter helium-rich layers, associated with Wolf–Rayet stars in the lecture.",
        "source": "Lecture 23 pages 9–13, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 9–13, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-envelope-stripping"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-next-fuel",
        "rootId": "exam-two-item-l23-next-fuel",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-successive-fuels",
        "concept": "exam-two-concept-successive-fuels",
        "type": "single",
        "responseType": "single",
        "prompt": "After one core fuel is exhausted, what normally enables the next heavier fuel to ignite in a massive star?",
        "choices": [
          "The previous fuel becomes unlimited again",
          "Envelope expansion cools every region equally",
          "A decrease in core temperature starts fusion",
          "Contraction raises core temperature and density"
        ],
        "answer": 3,
        "hint": "Follow the core rather than the photosphere.",
        "explanation": "Contraction heats and compresses the core until a new reaction can operate, if the star reaches the needed conditions.",
        "source": "Lecture 23 pages 16–17, 22, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 16–17, 22, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-successive-fuels"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-layers-reverse",
        "rootId": "exam-two-item-l23-layers-reverse",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-onion-order",
        "concept": "exam-two-concept-onion-order",
        "type": "order",
        "responseType": "order",
        "prompt": "Order these selected layers from the center outward in the lecture’s simplified massive-star model.",
        "choices": [
          "Carbon",
          "Hydrogen",
          "Iron",
          "Helium",
          "Silicon"
        ],
        "answer": [
          2,
          4,
          0,
          3,
          1
        ],
        "hint": "Reverse the supplied outside-to-center relationship.",
        "explanation": "Center outward gives iron → silicon → carbon → helium → hydrogen. Other detailed layers are omitted from this selected list.",
        "source": "Lecture 23 pages 16–17, 23, 28 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 16–17, 23, 28",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-onion-order"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-choice-iron",
        "rootId": "exam-two-item-l23-choice-iron",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-iron-endpoint",
        "concept": "exam-two-concept-iron-endpoint",
        "type": "single",
        "responseType": "single",
        "prompt": "Which is the heaviest of these listed products reached in the lecture’s normal massive-star fusion sequence?",
        "choices": [
          "Iron",
          "Carbon",
          "Silicon",
          "Helium"
        ],
        "answer": 0,
        "hint": "Check the actual alternatives before recalling a prior answer.",
        "explanation": "Iron is heaviest among this set and marks the iron-group endpoint. The supplied silicon answer used a different set that did not include iron.",
        "source": "Lecture 23 pages 15, 20, 27 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 15, 20, 27",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-iron-endpoint"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-limit-object",
        "rootId": "exam-two-item-l23-limit-object",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-core-support-limit",
        "concept": "exam-two-concept-core-support-limit",
        "type": "single",
        "responseType": "single",
        "prompt": "A 15-solar-mass progenitor contains an iron core near 1.4 solar masses. Which component is approaching the lecture’s electron-support limit?",
        "choices": [
          "Only the outer hydrogen shell",
          "The iron core",
          "The whole initial star",
          "Only gas already lost in winds"
        ],
        "answer": 1,
        "hint": "The support criterion applies to the degenerate central object.",
        "explanation": "The approximately 1.4-solar-mass limit concerns the electron-supported core, not the entire initial progenitor or its expelled gas.",
        "source": "Lecture 23 pages 18–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 18–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-core-support-limit"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-capture-products",
        "rootId": "exam-two-item-l23-capture-products",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-collapse-feedback",
        "concept": "exam-two-concept-collapse-feedback",
        "type": "single",
        "responseType": "single",
        "prompt": "Which products complete the electron-capture reaction p + e⁻ → ?",
        "choices": [
          "A proton and two electrons",
          "A proton and a photon",
          "A neutron and a neutrino",
          "A neutron and an electron"
        ],
        "answer": 2,
        "hint": "Conserve the reaction’s basic particle identity.",
        "explanation": "A proton and electron combine to form a neutron and neutrino in the supplied reaction.",
        "source": "Lecture 23 pages 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-feedback"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-bounce-clock",
        "rootId": "exam-two-item-l23-bounce-clock",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-bounce-remnants",
        "concept": "exam-two-concept-bounce-remnants",
        "type": "single",
        "responseType": "single",
        "prompt": "Why can the inner core bounce before a shock is seen reaching the stellar surface?",
        "choices": [
          "The shock needs time to cross the surrounding layers",
          "The shock and surface are always at the same radius",
          "The shock arrives before the central bounce occurs",
          "The shock cannot move through any stellar material"
        ],
        "answer": 0,
        "hint": "Separate the central event from outward propagation.",
        "explanation": "A central bounce launches a shock that must propagate through surrounding material; its surface arrival happens later.",
        "source": "Lecture 23 pages 19–21, 26 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 19–21, 26",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-bounce-remnants"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-energy-complement",
        "rootId": "exam-two-item-l24-energy-complement",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-sn-energy-budget",
        "concept": "exam-two-concept-sn-energy-budget",
        "type": "single",
        "responseType": "single",
        "prompt": "In a simplified collapse budget, 99 of 100 energy units escape as neutrinos. How many units remain for other channels?",
        "choices": [
          "100 units",
          "1 unit",
          "10 units",
          "99 units"
        ],
        "answer": 1,
        "hint": "Subtract the escaping share from the complete budget.",
        "explanation": "100 − 99 = 1 unit. The result concerns the non-neutrino remainder, not a measured visible-light fraction.",
        "source": "Lecture 24 pages 5–7, 10–11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 5–7, 10–11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn-energy-budget"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/sn-energy.svg",
          "alt": "Original labeled teaching diagram; all relevant physical relationships are also described in the question."
        }
      },
      {
        "id": "exam-two-item-l24-tail-source",
        "rootId": "exam-two-item-l24-tail-source",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-sn-radioactive-tail",
        "concept": "exam-two-concept-sn-radioactive-tail",
        "type": "single",
        "responseType": "single",
        "prompt": "Weeks after the initial shock heating, a supernova remains luminous longer than simple expansion cooling predicts. Which source explains the lecture’s late light?",
        "choices": [
          "Energy deposited by radioactive decay",
          "Steady core hydrogen burning in the remnant",
          "Reflection of unchanged progenitor light",
          "Expansion cooling as the only energy source"
        ],
        "answer": 0,
        "hint": "Look for a continuing energy supply inside the ejecta.",
        "explanation": "Radioactive nuclei made in the event decay and deposit energy. This is distinct from initial shock heating and from steady main-sequence fusion.",
        "source": "Lecture 24 pages 7, 33 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 7, 33",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn-radioactive-tail"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-model-evidence",
        "rootId": "exam-two-item-l24-model-evidence",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-animation-simulation",
        "concept": "exam-two-concept-animation-simulation",
        "type": "single",
        "responseType": "single",
        "prompt": "Two supernova movies look equally realistic. Only one solves stated physical equations from initial conditions. Which comparison is justified?",
        "choices": [
          "Its equations must reproduce every real explosion",
          "Its realism proves its initial conditions are exact",
          "Its rendering replaces comparison with observations",
          "Its computed states test the stated physical model"
        ],
        "answer": 3,
        "hint": "Separate visual polish from how the states were obtained.",
        "explanation": "Numerical evolution can test consequences of its stated physical model. Appearance alone establishes neither equations nor observational accuracy.",
        "source": "Lecture 24 pages 12–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 12–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-animation-simulation"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-shock-energy-conversion",
        "rootId": "exam-two-item-l24-shock-energy-conversion",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-remnant-shock-heating",
        "concept": "exam-two-concept-remnant-shock-heating",
        "type": "single",
        "responseType": "single",
        "prompt": "Fast ejecta strike slower gas around a supernova. Which energy conversion helps create X-ray-emitting plasma?",
        "choices": [
          "Optical reflection supplies the shocked gas’s heat",
          "Bulk kinetic energy becomes thermal energy",
          "Electron pressure becomes ordinary hydrogen fusion",
          "Thermal energy becomes faster bulk expansion only"
        ],
        "answer": 1,
        "hint": "Collisions and shocks can thermalize organized motion.",
        "explanation": "The shock converts part of the ejecta’s bulk motion into heat. Very hot plasma can emit X-rays.",
        "source": "Lecture 24 pages 17–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 17–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-remnant-shock-heating"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-hydrogen-class",
        "rootId": "exam-two-item-l24-hydrogen-class",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-supernova-spectral-types",
        "concept": "exam-two-concept-supernova-spectral-types",
        "type": "single",
        "responseType": "single",
        "prompt": "A supernova spectrum contains clear hydrogen lines. Which broad spectral class fits the lecture’s definition?",
        "choices": [
          "Type Ic",
          "Type II",
          "Type Ib",
          "Type Ia"
        ],
        "answer": 1,
        "hint": "Apply the feature defining the broad I/II split.",
        "explanation": "Hydrogen lines define Type II in this classification. Type I lacks them.",
        "source": "Lecture 24 pages 29–30 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 29–30",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-supernova-spectral-types"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-ozone-consequence",
        "rootId": "exam-two-item-l24-ozone-consequence",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-supernova-atmosphere",
        "concept": "exam-two-concept-supernova-atmosphere",
        "type": "single",
        "responseType": "single",
        "prompt": "In the lecture’s atmospheric pathway, high-energy radiation reduces ozone. Which consequence follows most directly?",
        "choices": [
          "Earth’s magnetic shielding becomes stronger",
          "Less solar ultraviolet reaches the surface",
          "The supernova’s visible flux stops at the ozone layer",
          "More solar ultraviolet reaches the surface"
        ],
        "answer": 3,
        "hint": "What protection does ozone provide?",
        "explanation": "Reduced ozone weakens shielding against solar ultraviolet radiation. This is an indirect atmospheric consequence, not direct ejecta impact.",
        "source": "Lecture 24 pages 26–28, 37 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 26–28, 37",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-supernova-atmosphere"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-1987a-significance",
        "rootId": "exam-two-item-l24-1987a-significance",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-sn1987a-neutrinos",
        "concept": "exam-two-concept-sn1987a-neutrinos",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation of SN 1987A most directly connected it to the core-collapse energy channel emphasized in this lecture?",
        "choices": [
          "A nearly spherical pattern of ejecta expansion",
          "A hydrogen-bearing optical spectrum",
          "A high apparent brightness in one optical photograph",
          "A short burst of neutrino detections"
        ],
        "answer": 3,
        "hint": "Choose the messenger associated with the collapsing core.",
        "explanation": "The neutrino burst supplied evidence for the collapse channel; optical brightness alone does not provide the same test.",
        "source": "Lecture 24 pages 31–33, 38 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 31–33, 38",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn1987a-neutrinos"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-ring-brightening",
        "rootId": "exam-two-item-l24-ring-brightening",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-sn1987a-ring",
        "concept": "exam-two-concept-sn1987a-ring",
        "type": "single",
        "responseType": "single",
        "prompt": "A pre-existing knot in SN 1987A’s ring brightens when the outward shock arrives. What is the supported explanation?",
        "choices": [
          "The older knot reflects the original optical flash only",
          "Shock interaction deposits energy in the knot",
          "The shock removes thermal energy from the knot",
          "The knot begins ordinary core hydrogen fusion"
        ],
        "answer": 1,
        "hint": "Connect collision, heating and radiation.",
        "explanation": "The outward shock heats circumstellar material. The resulting interaction can increase its emission.",
        "source": "Lecture 24 pages 17, 31–35 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 17, 31–35",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn1987a-ring"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-endpoint-match",
        "rootId": "exam-two-item-l24-endpoint-match",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-stellar-endpoint-paths",
        "concept": "exam-two-concept-stellar-endpoint-paths",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each explicitly stated evolutionary pathway to its outcome.",
        "choices": [
          "Black-hole outcome",
          "Planetary nebula plus white dwarf",
          "Supernova ejecta plus neutron star"
        ],
        "answer": [
          1,
          2,
          0
        ],
        "hint": "Match each observation to the mechanism it actually constrains.",
        "explanation": "The Sun-like path leaves an electron-supported remnant; the stated massive-star cases distinguish supported neutron-rich matter from continued collapse.",
        "source": "Lecture 24 pages 16, 30–36 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 16, 30–36",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-stellar-endpoint-paths"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Sun-like AGB envelope loss",
            "answer": "Planetary nebula plus white dwarf"
          },
          {
            "label": "Successful massive-star collapse with supported compact core",
            "answer": "Supernova ejecta plus neutron star"
          },
          {
            "label": "Continued collapse beyond compact-core support",
            "answer": "Black-hole outcome"
          }
        ],
        "options": [
          "Black-hole outcome",
          "Planetary nebula plus white dwarf",
          "Supernova ejecta plus neutron star"
        ]
      },
      {
        "id": "exam-two-item-l25-support-source",
        "rootId": "exam-two-item-l25-support-source",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-electron-support",
        "concept": "exam-two-concept-wd-electron-support",
        "type": "single",
        "responseType": "single",
        "prompt": "A carbon–oxygen remnant cools after ordinary core fusion has ended. What supports the resulting white dwarf in the lecture model?",
        "choices": [
          "Electron degeneracy pressure",
          "Neutron degeneracy pressure alone",
          "Radiation pressure from an active main-sequence core",
          "Thermal pressure from steady core hydrogen burning"
        ],
        "answer": 0,
        "hint": "Identify the pressure-bearing particles in this remnant.",
        "explanation": "Electron degeneracy pressure supports the white dwarf without requiring ongoing ordinary core fusion.",
        "source": "Lecture 25 pages 8–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 8–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-electron-support"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-progenitor-limit",
        "rootId": "exam-two-item-l25-progenitor-limit",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-mass-limit",
        "concept": "exam-two-concept-wd-mass-limit",
        "type": "single",
        "responseType": "single",
        "prompt": "A star begins with several solar masses, loses its envelope, and leaves a 0.7-solar-mass white dwarf. Which mass should be compared with the Chandrasekhar limit?",
        "choices": [
          "The 0.7-solar-mass remnant",
          "The total expelled-envelope mass",
          "The remnant plus all expelled material",
          "The initial whole-star mass"
        ],
        "answer": 0,
        "hint": "The limit applies to the electron-supported compact object.",
        "explanation": "The relevant mass is the white dwarf’s own mass. The initial progenitor and expelled gas are different physical objects.",
        "source": "Lecture 25 pages 10–11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 10–11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-mass-limit"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-hot-dim-cause",
        "rootId": "exam-two-item-l25-hot-dim-cause",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-hot-small",
        "concept": "exam-two-concept-wd-hot-small",
        "type": "single",
        "responseType": "single",
        "prompt": "The white-dwarf group lies below the main sequence at the same temperature on this H–R diagram. What explains its lower luminosity?",
        "choices": [
          "Its greater distance reduces intrinsic luminosity",
          "Its emitting surface area is much smaller",
          "Its small mass requires a much larger photosphere",
          "Its higher surface temperature reduces surface flux"
        ],
        "answer": 1,
        "hint": "Use both radius and temperature in the luminosity relation.",
        "explanation": "At the same surface temperature, luminosity scales with emitting surface area. A smaller radius gives a smaller total luminosity.",
        "source": "Lecture 25 pages 8, 11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 8, 11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-hot-small"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/wd-hr-target.svg",
          "alt": "Original labeled teaching diagram; all relevant physical relationships are also described in the question."
        }
      },
      {
        "id": "exam-two-item-l25-periodic-not-aliens",
        "rootId": "exam-two-item-l25-periodic-not-aliens",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-pulsar-discovery-evidence",
        "concept": "exam-two-concept-pulsar-discovery-evidence",
        "type": "single",
        "responseType": "single",
        "prompt": "Why did finding several similar pulsating sources weaken the initial LGM interpretation?",
        "choices": [
          "It uniquely established a white-dwarf interpretation",
          "It removed the need to explain the pulse periods",
          "It supported a natural astrophysical population",
          "It proved that every pulse was an instrument error"
        ],
        "answer": 2,
        "hint": "Use repeated observations to compare explanations.",
        "explanation": "A population of similar sources with astrophysical properties supported a natural explanation; the nickname did not establish intelligence.",
        "source": "Lecture 25 pages 14–17, 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 14–17, 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulsar-discovery-evidence"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-crab-model",
        "rootId": "exam-two-item-l25-crab-model",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-pulse-period-compactness",
        "concept": "exam-two-concept-pulse-period-compactness",
        "type": "single",
        "responseType": "single",
        "prompt": "Why was the Crab’s approximately 33-millisecond period a strong objection to the rotating-white-dwarf explanation?",
        "choices": [
          "A white-dwarf-sized object could not stay bound at that spin",
          "The measured pulse period is longer than solar rotation",
          "Any repeated signal must arise from a binary orbit",
          "White dwarfs must emit only optical light at every time"
        ],
        "answer": 0,
        "hint": "Compare the necessary rotation speed with the object’s size and binding.",
        "explanation": "At that period a white dwarf would need an unsustainable rotation. A much smaller neutron star can support the rapid-rotation interpretation.",
        "source": "Lecture 25 pages 12, 16–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 12, 16–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulse-period-compactness"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-density-radius",
        "rootId": "exam-two-item-l25-density-radius",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-neutron-density-evidence",
        "concept": "exam-two-concept-neutron-density-evidence",
        "type": "single",
        "responseType": "single",
        "prompt": "Two idealized spherical objects have the same mass. One has half the radius of the other. Using density = mass/volume and volume ∝ radius³, how do their mean densities compare?",
        "choices": [
          "The smaller one is twice as dense",
          "Their densities must be equal",
          "The smaller one is half as dense",
          "The smaller one is eight times denser"
        ],
        "answer": 3,
        "hint": "Volume is proportional to radius cubed.",
        "explanation": "At fixed mass, density scales as 1/R³. Halving radius reduces volume to 1/8 and raises density by a factor of eight.",
        "source": "Lecture 25 pages 17–19, 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 17–19, 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-neutron-density-evidence"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-spin-quarter-period",
        "rootId": "exam-two-item-l25-spin-quarter-period",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-compact-spin-up",
        "concept": "exam-two-concept-compact-spin-up",
        "type": "single",
        "responseType": "single",
        "prompt": "An isolated object keeps its mass and shape factor while its radius halves. Use I ∝ radius² and conserved angular momentum Iω. Its rotation period becomes what fraction of the original?",
        "choices": [
          "Twice",
          "One half",
          "Four times",
          "One quarter"
        ],
        "answer": 3,
        "hint": "Moment of inertia scales as radius squared under the stated assumptions.",
        "explanation": "I becomes 1/4 as large. Conserved Iω makes ω four times greater, so period becomes 1/4 as long.",
        "source": "Lecture 25 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-compact-spin-up"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-lighthouse-mechanism",
        "rootId": "exam-two-item-l25-lighthouse-mechanism",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-pulsar-beam-geometry",
        "concept": "exam-two-concept-pulsar-beam-geometry",
        "type": "single",
        "responseType": "single",
        "prompt": "A neutron star’s beam repeatedly crosses our line of sight. What causes the observed pulse train in the lecture model?",
        "choices": [
          "Rotation sweeps a directed beam across the observer",
          "Repeated fusion ignition switches the whole core on and off",
          "A fixed beam points at every observer during every rotation",
          "Bulk expansion and contraction pulses the entire star"
        ],
        "answer": 0,
        "hint": "The emitter’s geometry can change what we receive without the whole star pulsating.",
        "explanation": "The tilted magnetic-beam pattern rotates with the neutron star. We receive a pulse when the beam crosses our direction.",
        "source": "Lecture 25 pages 17–19, 22 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 17–19, 22",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulsar-beam-geometry"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-magnetar-defining",
        "rootId": "exam-two-item-l25-magnetar-defining",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-magnetar-fields",
        "concept": "exam-two-concept-magnetar-fields",
        "type": "single",
        "responseType": "single",
        "prompt": "Which property most directly distinguishes a magnetar in this lesson?",
        "choices": [
          "An event horizon surrounding every stellar surface",
          "An exceptionally strong neutron-star magnetic field",
          "A compulsory millisecond period in every observed case",
          "An electron-supported carbon–oxygen white-dwarf core"
        ],
        "answer": 1,
        "hint": "Separate the field-based category from one proposed birth-spin model.",
        "explanation": "The exceptionally strong magnetic field and related activity define the magnetar distinction. Its current period need not be milliseconds.",
        "source": "Lecture 25 pages 21, 26 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 21, 26",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-magnetar-fields"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      }
    ]
  },
  {
    "id": "exam-two-everything-pool",
    "examId": "exam-two",
    "kind": "drill",
    "title": "Exam 2 Everything Pool",
    "description": "219 original source-linked tasks; 79 concepts. Select sections/concepts for focused practice.",
    "lane": "Exam 2",
    "chapters": "Lectures 13–18 · Exam 2: material available so far",
    "status": "Ready",
    "questions": [
      {
        "id": "exam-two-item-parallax-reference",
        "rootId": "exam-two-item-parallax-reference",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parallax-geometry",
        "concept": "exam-two-concept-parallax-geometry",
        "type": "single",
        "responseType": "single",
        "prompt": "A nearby star changes position between January and July. What provides the reference for measuring its parallax?",
        "choices": [
          "Much more distant background stars",
          "A companion orbiting the target star",
          "The target’s position relative to the Sun",
          "Earth’s horizon at each observation"
        ],
        "answer": 0,
        "hint": "Separate a positional reference from a brightness measurement.",
        "explanation": "The distant background provides an approximately fixed reference for the nearby star’s apparent displacement.",
        "source": "Lecture 13 pages 7–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 7–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parallax-geometry"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-parallax-motion",
        "rootId": "exam-two-item-parallax-motion",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parallax-geometry",
        "concept": "exam-two-concept-parallax-geometry",
        "type": "single",
        "responseType": "single",
        "prompt": "Why observe a parallax target over several years rather than use only two photographs?",
        "choices": [
          "To make Earth’s orbital baseline grow each year",
          "To separate annual parallax from stellar motion",
          "To make the parallax angle steadily accumulate",
          "To remove all motion from the reference stars"
        ],
        "answer": 1,
        "hint": "One change can contain more than one kind of motion.",
        "explanation": "The annual displacement repeats with Earth’s orbit; proper motion contributes another positional change. Repeated measurements distinguish them.",
        "source": "Lecture 13 pages 7–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 7–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parallax-geometry"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-parsec-convert",
        "rootId": "exam-two-item-parsec-convert",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parsec",
        "concept": "exam-two-concept-parsec",
        "type": "single",
        "responseType": "single",
        "prompt": "A star has a parallax of 0.25 arcsecond. What is its distance?",
        "choices": [
          "0.25 pc",
          "2 pc",
          "4 pc",
          "25 pc"
        ],
        "answer": 2,
        "hint": "Take the reciprocal of the angle in arcseconds.",
        "explanation": "d = 1/0.25 = 4 pc. The units matter: p must be in arcseconds.",
        "source": "Lecture 13 pages 13–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 13–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parsec"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-parsec-limit",
        "rootId": "exam-two-item-parsec-limit",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parsec",
        "concept": "exam-two-concept-parsec",
        "type": "single",
        "responseType": "single",
        "prompt": "An instrument can resolve parallax down to 0.02 arcsecond. Using the lecture’s simple limit model, what distance corresponds to that angle?",
        "choices": [
          "0.02 pc",
          "2 pc",
          "20 pc",
          "50 pc"
        ],
        "answer": 3,
        "hint": "The smallest useful angle sets the largest useful distance.",
        "explanation": "d = 1/0.02 = 50 pc. A smaller measurable angle would extend the distance range.",
        "source": "Lecture 13 pages 13–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 13–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parsec"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-parallax-reverse",
        "rootId": "exam-two-item-parallax-reverse",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parallax-ratio",
        "concept": "exam-two-concept-parallax-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Star A is three times farther away than star B. How does A’s parallax compare with B’s?",
        "choices": [
          "Three times as large",
          "One-third as large",
          "Nine times as large",
          "The same size"
        ],
        "answer": 1,
        "hint": "Reverse the relationship between distance and angle.",
        "explanation": "Tripling distance divides parallax by three: pA/pB = dB/dA = 1/3.",
        "source": "Lecture 13 pages 10–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 10–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parallax-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/parallax-assessment.svg",
          "alt": "Original schematic of the comparison described in the question; no answer is marked.",
          "caption": "Original instructional model from the supplied relationship.",
          "source": "Lecture 13 pages 10–16 · original practice"
        }
      },
      {
        "id": "exam-two-item-parallax-compare",
        "rootId": "exam-two-item-parallax-compare",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parallax-ratio",
        "concept": "exam-two-concept-parallax-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Star X has p = 0.6 arcsecond and star Y has p = 0.15 arcsecond. Which comparison is correct?",
        "choices": [
          "X is four times farther away",
          "Y is twice as far away",
          "Y is four times farther away",
          "They are equally distant"
        ],
        "answer": 2,
        "hint": "The smaller parallax belongs to the farther star.",
        "explanation": "dY/dX = pX/pY = 0.6/0.15 = 4.",
        "source": "Lecture 13 pages 10–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 10–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parallax-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-observer-move",
        "rootId": "exam-two-item-observer-move",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-flux-luminosity",
        "concept": "exam-two-concept-flux-luminosity",
        "type": "single",
        "responseType": "single",
        "prompt": "An observer moves twice as far from a star whose radius and temperature stay fixed. Which quantity stays unchanged?",
        "choices": [
          "The star’s luminosity",
          "The light received per square meter",
          "The star’s apparent magnitude",
          "The star’s parallax angle"
        ],
        "answer": 0,
        "hint": "Ask which quantity belongs to the star rather than the observer.",
        "explanation": "Intrinsic luminosity stays fixed. Received brightness decreases, apparent magnitude increases, and parallax decreases.",
        "source": "Lecture 13 pages 19–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-flux-luminosity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-flux-not",
        "rootId": "exam-two-item-flux-not",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-flux-luminosity",
        "concept": "exam-two-concept-flux-luminosity",
        "type": "single",
        "responseType": "single",
        "prompt": "Which quantity is NOT a measurement of the star’s intrinsic light output?",
        "choices": [
          "Total luminosity",
          "Power emitted per second",
          "Apparent brightness at Earth",
          "Surface flux times surface area"
        ],
        "answer": 2,
        "hint": "Look for the quantity that also depends on distance.",
        "explanation": "Apparent brightness is received at Earth and depends on distance and extinction. The other descriptions are luminosity.",
        "source": "Lecture 13 pages 19–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-flux-luminosity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-brightness-infer-distance",
        "rootId": "exam-two-item-brightness-infer-distance",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-inverse-square",
        "concept": "exam-two-concept-inverse-square",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars have equal luminosity and no dust obscuration. One appears nine times fainter. How much farther away is it?",
        "choices": [
          "Three times",
          "Nine times",
          "One-third as far",
          "One-ninth as far"
        ],
        "answer": 0,
        "hint": "Undo the square rather than keeping the brightness factor.",
        "explanation": "A brightness ratio of 1/9 corresponds to a distance ratio of √9 = 3.",
        "source": "Lecture 13 pages 19–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-inverse-square"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/brightness-assessment.svg",
          "alt": "Original schematic of the comparison described in the question; no answer is marked.",
          "caption": "Original instructional model from the supplied relationship.",
          "source": "Lecture 13 pages 19–25 · original practice"
        }
      },
      {
        "id": "exam-two-item-brightness-quarter-distance",
        "rootId": "exam-two-item-brightness-quarter-distance",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-inverse-square",
        "concept": "exam-two-concept-inverse-square",
        "type": "single",
        "responseType": "single",
        "prompt": "A star is observed from one-quarter of its original distance. Its luminosity is unchanged. How does its apparent brightness change?",
        "choices": [
          "Four times brighter",
          "Sixteen times brighter",
          "Four times fainter",
          "Sixteen times fainter"
        ],
        "answer": 1,
        "hint": "The new distance is smaller; invert and square that factor.",
        "explanation": "bnew/bold = (dold/dnew)² = 4² = 16.",
        "source": "Lecture 13 pages 19–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-inverse-square"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-combined-luminosity",
        "rootId": "exam-two-item-combined-luminosity",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-combined-ratio",
        "concept": "exam-two-concept-combined-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Star A appears twice as bright as B and is three times farther away. Neglecting dust, what is LA/LB?",
        "choices": [
          "2",
          "6",
          "9",
          "18"
        ],
        "answer": 3,
        "hint": "Multiply the brightness ratio by the squared distance ratio.",
        "explanation": "LA/LB = 2 × 3² = 18.",
        "source": "Lecture 13 pages 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-combined-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-equal-brightness",
        "rootId": "exam-two-item-equal-brightness",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-combined-ratio",
        "concept": "exam-two-concept-combined-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars appear equally bright. Parallax places A twice as far away as B. With no extinction, which is correct?",
        "choices": [
          "A has half B’s luminosity",
          "A has twice B’s luminosity",
          "A has four times B’s luminosity",
          "They have equal luminosities"
        ],
        "answer": 2,
        "hint": "Equal received brightness does not imply equal emitted power at different distances.",
        "explanation": "LA/LB = 1 × 2² = 4. A needs four times the luminosity to look equally bright from twice as far away.",
        "source": "Lecture 13 pages 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-combined-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-magnitude-five",
        "rootId": "exam-two-item-magnitude-five",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-magnitude-ratio",
        "concept": "exam-two-concept-magnitude-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Star A has apparent magnitude −1 and B has magnitude +4 in the same band. How do their brightnesses compare?",
        "choices": [
          "A is 5 times brighter",
          "A is 25 times brighter",
          "A is 100 times brighter",
          "B is 100 times brighter"
        ],
        "answer": 2,
        "hint": "Count the magnitude steps, including the negative value.",
        "explanation": "The gap is five magnitudes; the lower-magnitude star A is 100 times brighter.",
        "source": "Lecture 14 pages 10–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 10–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-magnitude-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-magnitude-three",
        "rootId": "exam-two-item-magnitude-three",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-magnitude-ratio",
        "concept": "exam-two-concept-magnitude-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Using the lecture’s 2.5-per-magnitude approximation, a star fades from magnitude 3 to magnitude 6. What happens to its brightness?",
        "choices": [
          "About 3 times fainter",
          "About 7.5 times fainter",
          "About 16 times fainter",
          "About 16 times brighter"
        ],
        "answer": 2,
        "hint": "Apply one multiplicative factor for each step.",
        "explanation": "Three steps give 2.5³ = 15.625, about 16 times fainter.",
        "source": "Lecture 14 pages 10–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 10–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-magnitude-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-absolute-reference",
        "rootId": "exam-two-item-absolute-reference",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-absolute-magnitude",
        "concept": "exam-two-concept-absolute-magnitude",
        "type": "single",
        "responseType": "single",
        "prompt": "At what reference distance is a star’s absolute magnitude defined?",
        "choices": [
          "1 AU",
          "1 pc",
          "10 pc",
          "100 pc"
        ],
        "answer": 2,
        "hint": "This is a standardized distance, not its measured current distance.",
        "explanation": "Absolute magnitude uses a reference distance of 10 parsecs.",
        "source": "Lecture 14 pages 14–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 14–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-absolute-magnitude"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-absolute-equal",
        "rootId": "exam-two-item-absolute-equal",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-absolute-magnitude",
        "concept": "exam-two-concept-absolute-magnitude",
        "type": "single",
        "responseType": "single",
        "prompt": "A star is 10 pc away and there is no extinction. How do its apparent and absolute magnitudes compare?",
        "choices": [
          "m is smaller than M",
          "m equals M",
          "m is larger than M",
          "Their difference depends on spectral class"
        ],
        "answer": 1,
        "hint": "Compare the actual distance with the defining reference distance.",
        "explanation": "At the reference distance, the observed and reference magnitudes are equal: distance modulus is zero.",
        "source": "Lecture 14 pages 14–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 14–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-absolute-magnitude"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-dust-distance-correct",
        "rootId": "exam-two-item-dust-distance-correct",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-extinction-distance",
        "concept": "exam-two-concept-extinction-distance",
        "type": "single",
        "responseType": "single",
        "prompt": "An extinction-free distance-modulus calculation puts a dusty star too far away. After correcting for the dust, what happens to the estimated distance?",
        "choices": [
          "It increases",
          "It decreases",
          "It stays the same",
          "It depends on whether dust also reddens the light"
        ],
        "answer": 1,
        "hint": "Correct the brightness loss that was mistaken for extra distance.",
        "explanation": "Removing the extinction contribution lowers m − M and therefore lowers the estimated distance.",
        "source": "Lecture 14 pages 17–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 17–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-extinction-distance"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-dust-magnitude",
        "rootId": "exam-two-item-dust-magnitude",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-extinction-distance",
        "concept": "exam-two-concept-extinction-distance",
        "type": "single",
        "responseType": "single",
        "prompt": "A star’s measured magnitude is +5.0 behind dust. At the same distance, what would removing the dust do?",
        "choices": [
          "Make its magnitude lower than +5.0",
          "Make its magnitude higher than +5.0",
          "Keep its magnitude exactly +5.0",
          "Reduce its intrinsic luminosity"
        ],
        "answer": 0,
        "hint": "More received light means a smaller magnitude.",
        "explanation": "Dust removal makes the received light brighter, so m becomes lower. Its distance and intrinsic output are unchanged.",
        "source": "Lecture 14 pages 17–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 17–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-extinction-distance"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-color-ratio",
        "rootId": "exam-two-item-color-ratio",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-color-temperature",
        "concept": "exam-two-concept-color-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars have the same reddening. A has a smaller visual-to-blue brightness ratio than B. Which is hotter in the lecture’s model?",
        "choices": [
          "A",
          "B",
          "They have the same temperature",
          "The farther star"
        ],
        "answer": 0,
        "hint": "Smaller V/B means relatively more blue.",
        "explanation": "At equal reddening, more blue relative to visual light means a higher temperature.",
        "source": "Lecture 15 pages 4–5 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 4–5",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-color-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-photometry-tradeoff",
        "rootId": "exam-two-item-photometry-tradeoff",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-color-temperature",
        "concept": "exam-two-concept-color-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Why use multicolor photometry instead of spectroscopy for a very large group of faint stars?",
        "choices": [
          "It estimates many temperatures efficiently",
          "It resolves individual lines more precisely",
          "It separates temperature and dust with one filter",
          "It estimates masses from each color ratio"
        ],
        "answer": 0,
        "hint": "Use the method’s practical strength, not a capability it lacks.",
        "explanation": "Filter measurements can be taken for many faint stars together, though the temperature estimate is less precise and dust must be addressed.",
        "source": "Lecture 15 pages 4–5 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 4–5",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-color-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-spectral-removed",
        "rootId": "exam-two-item-spectral-removed",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-spectral-temperature",
        "concept": "exam-two-concept-spectral-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Which is hottest among B, F, G, and K stars?",
        "choices": [
          "B",
          "F",
          "G",
          "K"
        ],
        "answer": 0,
        "hint": "Use the temperature sequence and only the offered choices.",
        "explanation": "B precedes F, G, and K in the hot-to-cool sequence.",
        "source": "Lecture 16 pages 5, 9–12, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 5, 9–12, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-spectral-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-absorption-inference",
        "rootId": "exam-two-item-absorption-inference",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-spectral-temperature",
        "concept": "exam-two-concept-spectral-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "A star has weak hydrogen absorption lines. What is the best reason not to conclude immediately that it contains little hydrogen?",
        "choices": [
          "Line strength also depends on temperature",
          "Hydrogen lines only trace apparent brightness",
          "The strongest lines always identify the rarest element",
          "Every spectral class has the same line strengths"
        ],
        "answer": 0,
        "hint": "A spectral feature depends on physical conditions as well as abundance.",
        "explanation": "The slides use absorption patterns as thermometers as well as composition evidence; temperature can change line strength.",
        "source": "Lecture 16 pages 5, 9–12, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 5, 9–12, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-spectral-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-red-not-cool",
        "rootId": "exam-two-item-red-not-cool",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-reddening",
        "concept": "exam-two-concept-reddening",
        "type": "single",
        "responseType": "single",
        "prompt": "A previously unobscured star becomes redder after a dust cloud crosses the line of sight. Its spectrum indicates unchanged temperature. What changed?",
        "choices": [
          "The received light was reddened",
          "The star became a red giant",
          "The star’s surface flux rose",
          "Its spectral class necessarily changed"
        ],
        "answer": 0,
        "hint": "Distinguish the light’s journey from the source’s state.",
        "explanation": "The added dust changes the transmitted color; it does not establish a temperature or evolutionary change.",
        "source": "Lecture 15 pages 5–6 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 5–6",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-reddening"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-red-ambiguity",
        "rootId": "exam-two-item-red-ambiguity",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-reddening",
        "concept": "exam-two-concept-reddening",
        "type": "single",
        "responseType": "single",
        "prompt": "Why is “this star looks red, therefore it must be cool” incomplete reasoning?",
        "choices": [
          "Dust can also redden the light",
          "Red color directly measures luminosity",
          "Every red image shows reflected starlight",
          "Observed color is independent of extinction"
        ],
        "answer": 0,
        "hint": "Look for a second cause of the same observation.",
        "explanation": "Both a cooler thermal spectrum and intervening dust can produce a redder observed color.",
        "source": "Lecture 15 pages 5–6 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 5–6",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-reddening"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-radius-from-luminosity",
        "rootId": "exam-two-item-radius-from-luminosity",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-radius-temperature",
        "concept": "exam-two-concept-radius-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars have equal surface temperatures. A is nine times as luminous as B. What is RA/RB?",
        "choices": [
          "3",
          "9",
          "18",
          "81"
        ],
        "answer": 0,
        "hint": "Luminosity scales with emitting area when temperatures match.",
        "explanation": "LA/LB = (RA/RB)², so RA/RB = √9 = 3. “Luminous” avoids the apparent-brightness ambiguity in L15 page 14.",
        "source": "Lecture 15 pages 7–11, 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 7–11, 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-radius-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-temperature-compensate",
        "rootId": "exam-two-item-temperature-compensate",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-radius-temperature",
        "concept": "exam-two-concept-radius-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Star A has half B’s radius but twice B’s temperature in kelvin. What is LA/LB?",
        "choices": [
          "1/4",
          "1",
          "4",
          "16"
        ],
        "answer": 2,
        "hint": "Combine both factors, including their different exponents.",
        "explanation": "LA/LB = (1/2)² × 2⁴ = 4. The smaller radius is outweighed by the temperature factor.",
        "source": "Lecture 15 pages 7–11, 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 7–11, 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-radius-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-mass-evidence",
        "rootId": "exam-two-item-mass-evidence",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-mass-measurement",
        "concept": "exam-two-concept-mass-measurement",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation supplies the lecture’s direct route to measuring stellar masses?",
        "choices": [
          "Doppler shifts through a binary orbit",
          "Proper motion of an isolated star",
          "Annual parallax of an isolated star",
          "A dust-corrected stellar color ratio"
        ],
        "answer": 0,
        "hint": "Mass requires gravitational or orbital evidence.",
        "explanation": "Repeated binary orbital Doppler measurements constrain masses. The other observations alone do not supply that orbital information.",
        "source": "Lecture 16 pages 15, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 15, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-mass-measurement"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-spectroscopic-parallax",
        "rootId": "exam-two-item-spectroscopic-parallax",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-mass-measurement",
        "concept": "exam-two-concept-mass-measurement",
        "type": "single",
        "responseType": "single",
        "prompt": "Despite its name, what does spectroscopic parallax use to estimate distance?",
        "choices": [
          "Earth’s six-month angular baseline",
          "Stellar properties inferred from spectra and brightness",
          "Annual shifts in the star’s radial velocity",
          "A binary’s eclipse duration and apparent magnitude"
        ],
        "answer": 1,
        "hint": "This method’s name is not a description of annual geometric parallax.",
        "explanation": "Spectra classify the star and help estimate luminosity; comparison with apparent brightness gives a distance estimate.",
        "source": "Lecture 16 pages 15, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 15, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-mass-measurement"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-brown-dwarf-boundary",
        "rootId": "exam-two-item-brown-dwarf-boundary",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-brown-dwarfs",
        "concept": "exam-two-concept-brown-dwarfs",
        "type": "single",
        "responseType": "single",
        "prompt": "What separates a brown dwarf from an ordinary main-sequence star in this packet?",
        "choices": [
          "It does not sustain core hydrogen fusion",
          "It sustains core hydrogen fusion at a low rate",
          "It has exhausted hydrogen after a giant phase",
          "It appears faint because intervening dust dims it"
        ],
        "answer": 0,
        "hint": "Use the energy-source boundary, not the word dwarf.",
        "explanation": "Main-sequence stars sustain core hydrogen fusion. Brown dwarfs do not, although they radiate and form in a star-like way.",
        "source": "Lecture 16 pages 16, 19–20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 16, 19–20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-brown-dwarfs"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-brown-dwarf-classes",
        "rootId": "exam-two-item-brown-dwarf-classes",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-brown-dwarfs",
        "concept": "exam-two-concept-brown-dwarfs",
        "type": "single",
        "responseType": "single",
        "prompt": "Which pair extends the lecture’s spectral sequence into the cooler brown-dwarf regime?",
        "choices": [
          "O and B",
          "A and F",
          "G and K",
          "L and T"
        ],
        "answer": 3,
        "hint": "Look beyond M at the cooler end of the supplied table.",
        "explanation": "The packet introduces L and T for very cool brown-dwarf objects.",
        "source": "Lecture 16 pages 16, 19–20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 16, 19–20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-brown-dwarfs"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hr-right",
        "rootId": "exam-two-item-hr-right",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-axes",
        "concept": "exam-two-concept-hr-axes",
        "type": "single",
        "responseType": "single",
        "prompt": "On the standard H–R diagram, moving right at the same luminosity means which change?",
        "choices": [
          "Lower temperature",
          "Higher temperature",
          "Smaller radius",
          "Lower luminosity"
        ],
        "answer": 0,
        "hint": "Read the direction of the temperature axis.",
        "explanation": "Temperature decreases to the right. At fixed luminosity, a cooler surface requires a larger radius, so the smaller-radius distractor is also wrong.",
        "source": "Lecture 16 pages 6, 13–14, 22; Lecture 15 page 8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 6, 13–14, 22",
            "boundary": "verified"
          },
          {
            "id": "exam-two-source-l15",
            "locator": "pages 8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-axes"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hr-radius",
        "rootId": "exam-two-item-hr-radius",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-axes",
        "concept": "exam-two-concept-hr-axes",
        "type": "single",
        "responseType": "single",
        "prompt": "Which H–R region generally contains the largest stellar radii?",
        "choices": [
          "Hot and faint",
          "Cool and faint",
          "Hot and moderately luminous",
          "Cool and very luminous"
        ],
        "answer": 3,
        "hint": "Combine low T with high L in R ∝ √L/T².",
        "explanation": "Large luminosity at low temperature requires a large emitting area and radius.",
        "source": "Lecture 16 pages 6, 13–14, 22; Lecture 15 page 8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 6, 13–14, 22",
            "boundary": "verified"
          },
          {
            "id": "exam-two-source-l15",
            "locator": "pages 8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-axes"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-white-dwarf-reason",
        "rootId": "exam-two-item-white-dwarf-reason",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-regions",
        "concept": "exam-two-concept-hr-regions",
        "type": "single",
        "responseType": "single",
        "prompt": "A star is hot but has very low luminosity. Which description best fits its H–R position?",
        "choices": [
          "A compact white dwarf",
          "An expanded red giant",
          "A cool red dwarf",
          "A luminous supergiant"
        ],
        "answer": 0,
        "hint": "Low total power at high T implies a small emitting area.",
        "explanation": "White dwarfs occupy the hot, faint lower left. Their small radii keep total luminosity low.",
        "source": "Lecture 16 pages 13–16, 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 13–16, 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-main-sequence-definition",
        "rootId": "exam-two-item-main-sequence-definition",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-regions",
        "concept": "exam-two-concept-hr-regions",
        "type": "single",
        "responseType": "single",
        "prompt": "Which statement defines a main-sequence star in the lecture model?",
        "choices": [
          "It is fusing hydrogen in its core",
          "It is fusing hydrogen only in a shell",
          "It is luminous only from stored thermal energy",
          "It is fusing helium in a core without hydrogen fusion"
        ],
        "answer": 0,
        "hint": "Use the energy-producing state rather than its exact location or size.",
        "explanation": "Core hydrogen fusion defines the main-sequence phase. Main-sequence stars span a wide range of masses and temperatures.",
        "source": "Lecture 16 pages 13–16, 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 13–16, 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-mass-lifetime",
        "rootId": "exam-two-item-mass-lifetime",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-main-sequence-mass",
        "concept": "exam-two-concept-main-sequence-mass",
        "type": "single",
        "responseType": "single",
        "prompt": "Compared with a low-mass main-sequence star, a high-mass main-sequence star generally has which combination?",
        "choices": [
          "Higher luminosity and shorter lifetime",
          "Higher luminosity and longer lifetime",
          "Lower luminosity and shorter lifetime",
          "Lower luminosity and longer lifetime"
        ],
        "answer": 0,
        "hint": "Compare fuel-consumption rate as well as fuel supply.",
        "explanation": "Massive main-sequence stars burn fuel much faster, producing greater luminosity but shorter lifetimes.",
        "source": "Lecture 16 pages 19, 23, 26, 28 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 19, 23, 26, 28",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-main-sequence-mass"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-mass-location",
        "rootId": "exam-two-item-mass-location",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-main-sequence-mass",
        "concept": "exam-two-concept-main-sequence-mass",
        "type": "single",
        "responseType": "single",
        "prompt": "Which main-sequence stars occupy the lower-right end of the H–R diagram?",
        "choices": [
          "Low-mass, cool stars",
          "Low-mass, hot stars",
          "High-mass, cool stars",
          "High-mass, hot stars"
        ],
        "answer": 0,
        "hint": "Reverse the supplied “most massive” location question.",
        "explanation": "The main sequence runs from massive hot luminous stars at upper left to low-mass cool faint stars at lower right.",
        "source": "Lecture 16 pages 19, 23, 26, 28 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 19, 23, 26, 28",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-main-sequence-mass"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-sun-giant-properties",
        "rootId": "exam-two-item-sun-giant-properties",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-sun-path",
        "concept": "exam-two-concept-sun-path",
        "type": "single",
        "responseType": "single",
        "prompt": "As a Sun-like star expands toward the red-giant region in the supplied preview, what happens to its surface temperature and luminosity?",
        "choices": [
          "Temperature falls; luminosity rises",
          "Temperature rises; luminosity falls",
          "Both temperature and luminosity fall",
          "Both temperature and luminosity rise"
        ],
        "answer": 0,
        "hint": "Translate upper right into the two plotted quantities.",
        "explanation": "The red-giant region is cooler but more luminous. Expansion supplies enough surface area for greater total power.",
        "source": "Lecture 16 pages 27–29 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 27–29",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sun-path"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-sun-final-category",
        "rootId": "exam-two-item-sun-final-category",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-sun-path",
        "concept": "exam-two-concept-sun-path",
        "type": "single",
        "responseType": "single",
        "prompt": "Which final category completes the Sun’s broad evolution path in the supplied lecture?",
        "choices": [
          "Red dwarf",
          "Brown dwarf",
          "White dwarf",
          "Blue supergiant"
        ],
        "answer": 2,
        "hint": "Use the specific Sun path, not the fate of a very massive star.",
        "explanation": "Lecture 16’s preview ends with a white dwarf after the red-giant phase. Detailed later stages remain pending.",
        "source": "Lecture 16 pages 27–29 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 27–29",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sun-path"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-ism-not",
        "rootId": "exam-two-item-ism-not",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-ism-density",
        "concept": "exam-two-concept-ism-density",
        "type": "single",
        "responseType": "single",
        "prompt": "Which statement about the interstellar medium is NOT consistent with the supplied lecture?",
        "choices": [
          "It contains low-density gas",
          "It contains dust",
          "It is a perfect vacuum everywhere",
          "It can form concentrations called nebulae"
        ],
        "answer": 2,
        "hint": "Distinguish very low density from zero density.",
        "explanation": "The interstellar medium contains gas and dust, even though it is sparse compared with our atmosphere.",
        "source": "Lecture 17 pages 8–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 8–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ism-density"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-cloud-density",
        "rootId": "exam-two-item-cloud-density",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-ism-density",
        "concept": "exam-two-concept-ism-density",
        "type": "single",
        "responseType": "single",
        "prompt": "The lecture gives 10¹⁰ particles/m³ for a dense dust cloud and 10⁶ for diffuse interstellar space. What is the density ratio?",
        "choices": [
          "10²",
          "10⁴",
          "10⁶",
          "10¹⁶"
        ],
        "answer": 1,
        "hint": "Subtract the exponents when dividing powers of ten.",
        "explanation": "10¹⁰/10⁶ = 10⁴. This compares the supplied scale examples.",
        "source": "Lecture 17 pages 8–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 8–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ism-density"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-reflection-versus-transmission",
        "rootId": "exam-two-item-reflection-versus-transmission",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-dust-scattering",
        "concept": "exam-two-concept-dust-scattering",
        "type": "single",
        "responseType": "single",
        "prompt": "Dust scatters short-wavelength light out of a star’s direct beam. How do the direct and scattered views tend to differ?",
        "choices": [
          "Direct light is redder; scattered light is bluer",
          "Direct light is bluer; scattered light is redder",
          "Both views become equally red",
          "Both views become equally blue"
        ],
        "answer": 0,
        "hint": "Follow the path that keeps versus redirects the blue light.",
        "explanation": "Short wavelengths are preferentially redirected, leaving redder transmitted light and bluer scattered light.",
        "source": "Lecture 17 pages 10–11, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 10–11, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-dust-scattering"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-dust-band",
        "rootId": "exam-two-item-dust-band",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-dust-scattering",
        "concept": "exam-two-concept-dust-scattering",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observing band penetrates a dusty star-forming cloud more easily than visible light in the lecture’s comparison?",
        "choices": [
          "Ultraviolet",
          "Blue visible",
          "Infrared",
          "Violet visible"
        ],
        "answer": 2,
        "hint": "Look toward the longer-wavelength option.",
        "explanation": "Infrared is less attenuated by dust than the shorter wavelengths in this comparison.",
        "source": "Lecture 17 pages 10–11, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 10–11, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-dust-scattering"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hii-neutral",
        "rootId": "exam-two-item-hii-neutral",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-nebula-mechanism",
        "concept": "exam-two-concept-nebula-mechanism",
        "type": "single",
        "responseType": "single",
        "prompt": "Which label denotes neutral hydrogen in the lecture’s notation?",
        "choices": [
          "H I",
          "H II",
          "H₂",
          "He II"
        ],
        "answer": 0,
        "hint": "Roman numeral I denotes a neutral atom in this notation.",
        "explanation": "H I is neutral hydrogen; H II is ionized hydrogen. H₂ is molecular hydrogen.",
        "source": "Lecture 17 pages 12–14, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 12–14, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-mechanism"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-nebula-light",
        "rootId": "exam-two-item-nebula-light",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-nebula-mechanism",
        "concept": "exam-two-concept-nebula-mechanism",
        "type": "single",
        "responseType": "single",
        "prompt": "What produces the light characteristic of an H II emission nebula?",
        "choices": [
          "Ionized gas emits during recombination and atomic transitions",
          "Dust redirects an illuminating star’s visible light",
          "A gas cloud sustains hydrogen fusion throughout its volume",
          "Neutral gas removes light from a background star"
        ],
        "answer": 0,
        "hint": "Use the gas mechanism rather than dust reflection.",
        "explanation": "Hot O/B stars ionize hydrogen; recombination and atomic transitions produce emission.",
        "source": "Lecture 17 pages 12–14, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 12–14, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-mechanism"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-formation-material",
        "rootId": "exam-two-item-formation-material",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-formation-regions",
        "concept": "exam-two-concept-formation-regions",
        "type": "single",
        "responseType": "single",
        "prompt": "Which environment provides the raw material for new stars in the supplied lecture?",
        "choices": [
          "A cloud rich in cold gas and dust",
          "A hot white dwarf with no surrounding cloud",
          "An old star’s core after exhausting hydrogen",
          "A compact star cluster with its gas dispersed"
        ],
        "answer": 0,
        "hint": "Star formation requires a supply of matter.",
        "explanation": "Gas and dust clouds supply the material from which new stars form. The current lesson does not yet cover the detailed later sequence.",
        "source": "Lecture 17 pages 9–10, 13, 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 9–10, 13, 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-formation-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-dark-cloud-infer",
        "rootId": "exam-two-item-dark-cloud-infer",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-formation-regions",
        "concept": "exam-two-concept-formation-regions",
        "type": "single",
        "responseType": "single",
        "prompt": "A dust lane appears dark in a visible-light galaxy image. Which conclusion is justified?",
        "choices": [
          "It may obscure gas and stars behind it",
          "It proves there are no stars along that sightline",
          "It directly measures the distance to the cloud",
          "It shows that the cloud contains dust but no gas"
        ],
        "answer": 0,
        "hint": "Distinguish an obscured view from absence of material.",
        "explanation": "Dust can block the optical background. Darkness alone does not quantify hidden star formation, mass, or parallax.",
        "source": "Lecture 17 pages 9–10, 13, 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 9–10, 13, 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-formation-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-bok-description",
        "rootId": "exam-two-item-bok-description",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-bok-globules",
        "concept": "exam-two-concept-bok-globules",
        "type": "single",
        "responseType": "single",
        "prompt": "Which description fits a Bok globule in the supplied lecture?",
        "choices": [
          "A compact dark cloud of gas and dust",
          "An extended cloud of ultraviolet-ionized gas",
          "An exposed hot remnant after a red-giant phase",
          "A bright knot along a young star’s outflow axis"
        ],
        "answer": 0,
        "hint": "Use the object’s material and appearance.",
        "explanation": "The supplied Bok-globule slide describes a compact dusty gas cloud associated with star birth.",
        "source": "Lecture 17 pages 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-bok-globules"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-bok-hydrogen",
        "rootId": "exam-two-item-bok-hydrogen",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-bok-globules",
        "concept": "exam-two-concept-bok-globules",
        "type": "single",
        "responseType": "single",
        "prompt": "The slide says Bok globules are mostly molecular hydrogen. Which notation represents that material?",
        "choices": [
          "H I",
          "H II",
          "H₂",
          "He"
        ],
        "answer": 2,
        "hint": "A molecule is different from the Roman-numeral ionization labels.",
        "explanation": "H₂ is molecular hydrogen. H I and H II specify neutral and ionized atomic hydrogen.",
        "source": "Lecture 17 pages 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-bok-globules"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hh-association",
        "rootId": "exam-two-item-hh-association",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-herbig-haro",
        "concept": "exam-two-concept-herbig-haro",
        "type": "single",
        "responseType": "single",
        "prompt": "The supplied Herbig–Haro example is associated with which setting?",
        "choices": [
          "A young star and aligned outflow structures",
          "An old star and a broadly expanding gas shell",
          "A molecular cloud seen only as a compact silhouette",
          "An illuminated dust cloud reflecting blue starlight"
        ],
        "answer": 0,
        "hint": "Use the star-birth context and axis alignment in the figure.",
        "explanation": "The packet places Herbig–Haro objects in star-forming regions and associates their alignment with young stars.",
        "source": "Lecture 17 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-herbig-haro"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hh-distinguish",
        "rootId": "exam-two-item-hh-distinguish",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-herbig-haro",
        "concept": "exam-two-concept-herbig-haro",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation best distinguishes the supplied Herbig–Haro example from a Bok globule?",
        "choices": [
          "Structures aligned with a young star’s axis",
          "A compact dark silhouette hiding background light",
          "A blue cloud scattering an illuminating star’s light",
          "A broad emission region around hot massive stars"
        ],
        "answer": 0,
        "hint": "Both can occur in gas and dust; identify the more specific structure.",
        "explanation": "The aligned young-star structures identify the supplied Herbig–Haro example. A compact dark silhouette fits a Bok globule; blue scattering fits reflection nebulosity; broad photoionized emission fits an H II region.",
        "source": "Lecture 17 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-herbig-haro"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-luminosity-tf",
        "rootId": "exam-two-item-luminosity-tf",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-flux-luminosity",
        "concept": "exam-two-concept-flux-luminosity",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "Moving a fixed star farther from the observer reduces its intrinsic luminosity.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Does the observer change the star’s emitted power?",
        "explanation": "False. Apparent brightness decreases; intrinsic luminosity is unchanged.",
        "source": "Lecture 13 pages 19–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-flux-luminosity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-quantity-match",
        "rootId": "exam-two-item-quantity-match",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-flux-luminosity",
        "concept": "exam-two-concept-flux-luminosity",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each measured quantity to its meaning. Use each description once.",
        "choices": [
          "Power leaving each square meter of stellar surface",
          "Total power emitted by the star",
          "Power received per square meter at the observer",
          "Annual apparent angular displacement"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "hint": "Separate source, observer, and geometric measurements.",
        "explanation": "F is surface power per area; L is total emitted power; b is received power per area; p is the parallax angle.",
        "source": "Lecture 13 pages 19–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-flux-luminosity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Surface flux F",
            "answer": "Power leaving each square meter of stellar surface"
          },
          {
            "label": "Luminosity L",
            "answer": "Total power emitted by the star"
          },
          {
            "label": "Apparent brightness b",
            "answer": "Power received per square meter at the observer"
          },
          {
            "label": "Parallax p",
            "answer": "Annual apparent angular displacement"
          }
        ],
        "options": [
          "Power leaving each square meter of stellar surface",
          "Total power emitted by the star",
          "Power received per square meter at the observer",
          "Annual apparent angular displacement"
        ]
      },
      {
        "id": "exam-two-item-spectral-order",
        "rootId": "exam-two-item-spectral-order",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-spectral-temperature",
        "concept": "exam-two-concept-spectral-temperature",
        "type": "sort",
        "responseType": "order",
        "prompt": "Arrange all seven ordinary stellar spectral classes from hottest to coolest.",
        "choices": [
          "O",
          "B",
          "A",
          "F",
          "G",
          "K",
          "M"
        ],
        "answer": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "hint": "Reconstruct the full sequence rather than selecting only one end.",
        "explanation": "The complete hot-to-cool sequence is O → B → A → F → G → K → M. L and T are outside this seven-class task.",
        "source": "Lecture 16 pages 5, 9–12, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 5, 9–12, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-spectral-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "groups": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "items": [
          {
            "text": "O",
            "group": "1"
          },
          {
            "text": "B",
            "group": "2"
          },
          {
            "text": "A",
            "group": "3"
          },
          {
            "text": "F",
            "group": "4"
          },
          {
            "text": "G",
            "group": "5"
          },
          {
            "text": "K",
            "group": "6"
          },
          {
            "text": "M",
            "group": "7"
          }
        ]
      },
      {
        "id": "exam-two-item-hr-white-dwarf-target",
        "rootId": "exam-two-item-hr-white-dwarf-target",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-regions",
        "concept": "exam-two-concept-hr-regions",
        "type": "single",
        "responseType": "target",
        "prompt": "Select the region where white dwarfs belong on this standard H–R diagram.",
        "choices": [
          "Region A",
          "Region B",
          "Region C",
          "Region D"
        ],
        "answer": 2,
        "hint": "Combine high temperature with low luminosity.",
        "explanation": "White dwarfs belong in the hot, faint lower-left region C of this original schematic.",
        "source": "Lecture 16 pages 13–16, 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 13–16, 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/hr-assessment.svg",
          "alt": "H–R axes with hotter temperatures to the left, luminosity increasing upward, and four selectable regions A through D.",
          "caption": "Original schematic; positions are conceptual, not measured stellar values.",
          "source": "Based on Lecture 16 pages 13–16, 22"
        },
        "targets": [
          {
            "label": "A",
            "x": 30,
            "y": 25
          },
          {
            "label": "B",
            "x": 77,
            "y": 25
          },
          {
            "label": "C",
            "x": 30,
            "y": 75
          },
          {
            "label": "D",
            "x": 77,
            "y": 75
          }
        ]
      },
      {
        "id": "exam-two-item-sun-phase-order",
        "rootId": "exam-two-item-sun-phase-order",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-sun-path",
        "concept": "exam-two-concept-sun-path",
        "type": "sort",
        "responseType": "order",
        "prompt": "Arrange the three broad phases in the supplied Sun evolution preview.",
        "choices": [
          "Main sequence",
          "Red giant",
          "White dwarf"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "Use the Sun’s path, not a massive-star supernova path.",
        "explanation": "The packet’s broad phase order is main sequence → red giant → white dwarf. Later details remain pending.",
        "source": "Lecture 16 pages 27–29 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 27–29",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sun-path"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": false,
        "groups": [
          "1",
          "2",
          "3"
        ],
        "items": [
          {
            "text": "Main sequence",
            "group": "1"
          },
          {
            "text": "Red giant",
            "group": "2"
          },
          {
            "text": "White dwarf",
            "group": "3"
          }
        ]
      },
      {
        "id": "exam-two-item-nebula-match",
        "rootId": "exam-two-item-nebula-match",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-nebula-mechanism",
        "concept": "exam-two-concept-nebula-mechanism",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each cloud type to the most specific supplied mechanism or setting.",
        "choices": [
          "Ionized gas emits after ultraviolet illumination",
          "Dust redirects an illuminating star’s light",
          "Compact dusty molecular birth cloud"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "Emission, reflection, and dark obscuration are different mechanisms.",
        "explanation": "H II regions involve ionized emitting gas; reflection nebulae scatter starlight; Bok globules are compact dark clouds.",
        "source": "Lecture 17 pages 12–14, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 12–14, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-mechanism"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "H II emission region",
            "answer": "Ionized gas emits after ultraviolet illumination"
          },
          {
            "label": "Reflection nebula",
            "answer": "Dust redirects an illuminating star’s light"
          },
          {
            "label": "Bok globule",
            "answer": "Compact dusty molecular birth cloud"
          }
        ],
        "options": [
          "Ionized gas emits after ultraviolet illumination",
          "Dust redirects an illuminating star’s light",
          "Compact dusty molecular birth cloud"
        ]
      },
      {
        "id": "exam-two-item-l18-cooling-core",
        "rootId": "exam-two-item-l18-cooling-core",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-conditions",
        "concept": "exam-two-concept-collapse-conditions",
        "type": "single",
        "responseType": "single",
        "prompt": "A dense gas pocket cools while its mass, size and composition are initially unchanged. Which effect makes collapse easier?",
        "choices": [
          "Its thermal pressure support decreases",
          "Its thermal pressure support increases",
          "Its self-gravity strengthens at fixed mass and size",
          "Its gas pressure stays fixed as temperature falls"
        ],
        "answer": 0,
        "hint": "Separate the initial temperature change from a later size change.",
        "explanation": "Lower temperature weakens thermal pressure support, favoring gravity in an already dense pocket. Cooling alone does not remove gravity.",
        "source": "Lecture 18 pages 12–13, 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 12–13, 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-conditions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-collapse-not",
        "rootId": "exam-two-item-l18-collapse-not",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-conditions",
        "concept": "exam-two-concept-collapse-conditions",
        "type": "single",
        "responseType": "single",
        "prompt": "Which change would NOT favor collapse of an otherwise comparable cold, dense cloud?",
        "choices": [
          "Lowering its temperature",
          "Increasing its density at fixed size",
          "Heating it without increasing density",
          "Reducing its thermal support"
        ],
        "answer": 2,
        "hint": "Gravity must overcome the resistance supplied by thermal pressure.",
        "explanation": "Heating at unchanged density strengthens thermal pressure support. The other changes favor the balance toward collapse.",
        "source": "Lecture 18 pages 12–13 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 12–13",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-conditions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-cloud-target",
        "rootId": "exam-two-item-l18-cloud-target",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-conditions",
        "concept": "exam-two-concept-collapse-conditions",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the region that most favors gravity over thermal support in these comparable-size clouds.",
        "choices": [
          "Region A",
          "Region B",
          "Region C",
          "Region D"
        ],
        "answer": 1,
        "hint": "Look for both low temperature and high density.",
        "explanation": "B is both coldest and densest. Lower temperature reduces thermal resistance, while higher density strengthens self-gravity in comparable-size clouds. The choice depends on that balance, not on claiming B has the lowest absolute gas pressure.",
        "source": "Lecture 18 pages 13 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 13",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-conditions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/l18-cloud-regions.svg",
          "alt": "Four comparable-size gas regions labeled A to D; A: 20 K, 50 particles per cubic centimeter; B: 10 K, 2000; C: 80 K, 30; D: 80 K, 1000.",
          "caption": "Original comparison diagram; cloud size and composition are held comparable."
        },
        "targets": [
          {
            "label": "A",
            "x": 25,
            "y": 31
          },
          {
            "label": "B",
            "x": 75,
            "y": 31
          },
          {
            "label": "C",
            "x": 25,
            "y": 73
          },
          {
            "label": "D",
            "x": 75,
            "y": 73
          }
        ]
      },
      {
        "id": "exam-two-item-l18-infrared-pair",
        "rootId": "exam-two-item-l18-infrared-pair",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-infrared-protostars",
        "concept": "exam-two-concept-infrared-protostars",
        "type": "single",
        "responseType": "single",
        "prompt": "Which pair explains the lecture’s use of infrared for embedded young objects?",
        "choices": [
          "Less dust scattering and relatively long-wavelength emission",
          "More dust scattering and relatively long-wavelength emission",
          "Less dust scattering and relatively short-wavelength emission",
          "More dust scattering and relatively short-wavelength emission"
        ],
        "answer": 0,
        "hint": "One reason concerns the path; the other concerns the source.",
        "explanation": "The lecture combines reduced infrared scattering by dust with the cooler source’s longer-wavelength thermal emission.",
        "source": "Lecture 18 pages 7 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 7",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-infrared-protostars"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-hidden-object",
        "rootId": "exam-two-item-l18-hidden-object",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-infrared-protostars",
        "concept": "exam-two-concept-infrared-protostars",
        "type": "single",
        "responseType": "single",
        "prompt": "A compact object appears in an infrared image but is obscured in a visible image taken at the same time. What is the supported inference?",
        "choices": [
          "Dust can obscure visible light more strongly than infrared light",
          "Infrared detection alone establishes sustained core hydrogen fusion",
          "Detection only in infrared establishes a hotter surface than nearby O stars",
          "The visible image establishes an empty cavity rather than a hidden source"
        ],
        "answer": 0,
        "hint": "A change of observing band need not be a physical change in the source.",
        "explanation": "Infrared can reveal objects behind dust that hides them in visible light. The observation does not alone establish a temperature change or fusion state.",
        "source": "Lecture 18 pages 7 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 7",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-infrared-protostars"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-energy-before-fusion",
        "rootId": "exam-two-item-l18-energy-before-fusion",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-energy",
        "concept": "exam-two-concept-protostar-energy",
        "type": "single",
        "responseType": "single",
        "prompt": "A young object is luminous, is contracting, and has not begun sustained core hydrogen burning. What supplies energy in the lecture model?",
        "choices": [
          "Release of gravitational potential energy",
          "Release of sustained hydrogen-fusion energy",
          "Release of energy mainly from chemical combustion",
          "Release of heat mainly by expansion of the gas"
        ],
        "answer": 0,
        "hint": "The source is named Kelvin–Helmholtz contraction.",
        "explanation": "Contraction releases gravitational energy; some heats the interior and some escapes as radiation. Luminosity alone does not prove sustained hydrogen fusion.",
        "source": "Lecture 18 pages 17–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 17–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-energy"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-shrinks-heats",
        "rootId": "exam-two-item-l18-shrinks-heats",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-energy",
        "concept": "exam-two-concept-protostar-energy",
        "type": "single",
        "responseType": "single",
        "prompt": "During gravitational contraction, which combination is consistent with the lecture?",
        "choices": [
          "Radius decreases while the interior heats",
          "Radius increases while the interior heats",
          "Density decreases while the interior heats",
          "Radius decreases while the interior must cool"
        ],
        "answer": 0,
        "hint": "Shrinking does not imply an increasingly cold interior.",
        "explanation": "Contraction compresses the gas and releases energy, allowing a smaller, denser object with a hotter interior. The surface track needs separate interpretation.",
        "source": "Lecture 18 pages 17–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 17–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-energy"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-pressure-ratio",
        "rootId": "exam-two-item-l18-pressure-ratio",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-pressure",
        "concept": "exam-two-concept-collapse-pressure",
        "type": "single",
        "responseType": "single",
        "prompt": "For gas of unchanged composition, particle density doubles and temperature falls to one quarter. In the lecture’s P ∝ nT model, what happens to pressure?",
        "choices": [
          "It becomes one half as large",
          "It becomes twice as large",
          "It becomes four times as large",
          "It remains unchanged"
        ],
        "answer": 0,
        "hint": "Multiply the two ratios.",
        "explanation": "Pnew/Pold = 2 × 1/4 = 1/2. Considering only the density gives the wrong result.",
        "source": "Lecture 18 pages 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-pressure"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-pressure-same",
        "rootId": "exam-two-item-l18-pressure-same",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-pressure",
        "concept": "exam-two-concept-collapse-pressure",
        "type": "single",
        "responseType": "single",
        "prompt": "A cloud parcel of unchanged composition has half its earlier particle density. What temperature change keeps its gas pressure unchanged in the simple model?",
        "choices": [
          "Double the temperature",
          "Halve the temperature",
          "Quarter the temperature",
          "Keep the temperature unchanged"
        ],
        "answer": 0,
        "hint": "The product of the density and temperature ratios must be one.",
        "explanation": "A density factor of 1/2 requires a temperature factor of 2 so that nT, and hence pressure, is unchanged.",
        "source": "Lecture 18 pages 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-pressure"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-cool-and-resume",
        "rootId": "exam-two-item-l18-cool-and-resume",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-support",
        "concept": "exam-two-concept-protostar-support",
        "type": "single",
        "responseType": "single",
        "prompt": "A non-fusing young object radiates heat away after its contraction slows. Why can contraction resume?",
        "choices": [
          "Cooling reduces thermal pressure support",
          "Cooling increases thermal pressure support",
          "Radiation maintains the lost heat without a new energy source",
          "A temporary pressure balance prevents any further energy loss"
        ],
        "answer": 0,
        "hint": "Distinguish losing stored heat from generating replacement energy.",
        "explanation": "Without ongoing replenishment, radiation and cooling weaken pressure support. Gravity can then drive further contraction.",
        "source": "Lecture 18 pages 19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-support"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-main-sequence-heating",
        "rootId": "exam-two-item-l18-main-sequence-heating",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-support",
        "concept": "exam-two-concept-protostar-support",
        "type": "single",
        "responseType": "single",
        "prompt": "What change supplies the sustained heating associated with a stable main-sequence phase?",
        "choices": [
          "Core hydrogen fusion replaces radiated energy",
          "Stored heat replaces radiated energy indefinitely",
          "Core helium fusion supplies ordinary main-sequence heating",
          "Gravitational contraction releases heat at fixed radius"
        ],
        "answer": 0,
        "hint": "A long-lived energy source is different from a one-time heat release.",
        "explanation": "Sustained core hydrogen fusion replenishes the energy radiated away. Gravity is balanced by pressure; nuclear reactions supply the heat supporting that pressure.",
        "source": "Lecture 18 pages 12, 19; Lecture 16 pages 16, 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 12, 19",
            "boundary": "verified"
          },
          {
            "id": "exam-two-source-l16",
            "locator": "pages 16, 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-support"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-sequence-setting",
        "rootId": "exam-two-item-l18-sequence-setting",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-track",
        "concept": "exam-two-concept-protostar-track",
        "type": "single",
        "responseType": "single",
        "prompt": "In the supplied formation sequence, a central young object has an infalling envelope, a disk, and a bipolar flow. Which stage fits?",
        "choices": [
          "The illustrated protostar stage",
          "The initial uncollapsed dark core",
          "The illustrated pre-main-sequence stage with a remaining disk",
          "The illustrated young stellar system"
        ],
        "answer": 0,
        "hint": "Use the structures shown, rather than the brightness of the cloud.",
        "explanation": "The protostar panel contains the envelope, disk, central object and bipolar outflow. The supplied pre-main-sequence and young-system panels show later structures rather than the same infalling envelope.",
        "source": "Lecture 18 pages 16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-track"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-shrinking-luminosity",
        "rootId": "exam-two-item-l18-shrinking-luminosity",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-track",
        "concept": "exam-two-concept-protostar-track",
        "type": "single",
        "responseType": "single",
        "prompt": "A young object halves its radius while its surface temperature stays approximately fixed. What is its new luminosity relative to before?",
        "choices": [
          "One quarter",
          "One half",
          "Twice as large",
          "Four times as large"
        ],
        "answer": 0,
        "hint": "Surface area depends on radius squared.",
        "explanation": "At fixed surface temperature, Lnew/Lold = (1/2)² = 1/4. Internal heating alone does not force the surface luminosity to rise.",
        "source": "Lecture 18 pages 20–21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 20–21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-track"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-formation-order",
        "rootId": "exam-two-item-l18-formation-order",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-track",
        "concept": "exam-two-concept-protostar-track",
        "type": "order",
        "responseType": "order",
        "prompt": "Arrange the six stages in the order shown by the supplied formation illustration.",
        "choices": [
          "Dense dark-cloud core",
          "Gravitational collapse",
          "Protostar with disk and bipolar flow",
          "T Tauri stage",
          "Pre-main-sequence star with remaining disk",
          "Young stellar system"
        ],
        "answer": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "hint": "Follow the supplied a-to-f illustrated sequence.",
        "explanation": "The figure progresses from dense core and collapse to a protostar, T Tauri and pre-main-sequence stages, and then a young stellar system. The displayed ages are illustrative rather than universal.",
        "source": "Lecture 18 pages 16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-track"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-luminosity-tf",
        "rootId": "exam-two-item-l18-luminosity-tf",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-track",
        "concept": "exam-two-concept-protostar-track",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: In the supplied protostar model, contraction guarantees a steady increase in total luminosity at every stage.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Total luminosity has both a radius factor and a surface-temperature factor.",
        "explanation": "False. Radius and surface temperature change together; the lecture explicitly allows luminosity to rise or fall.",
        "source": "Lecture 18 pages 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-track"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-radius-lines-law",
        "rootId": "exam-two-item-l18-radius-lines-law",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-radius-temperature",
        "concept": "exam-two-concept-radius-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Constant-radius lines on an H–R diagram combine emitting area with temperature-dependent surface flux. Which named relation supplies both factors?",
        "choices": [
          "Stefan–Boltzmann: L = 4πR²σT⁴",
          "Inverse-square: b = L/(4πd²)",
          "Parallax: d(pc) = 1/p(arcsec)",
          "Wien: λpeak T = constant"
        ],
        "answer": 0,
        "hint": "You need the law that includes both emitting area and temperature-dependent surface flux.",
        "explanation": "Stefan–Boltzmann combines emitting surface area with temperature-dependent flux, giving L = 4πR²σT⁴. Inverse-square relates the light received to observer distance, parallax measures distance, and Wien locates the peak wavelength. This is a named-law decision, not a multi-row matching task.",
        "source": "Lecture 18 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "page 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-radius-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-constant-radius-track",
        "rootId": "exam-two-item-l18-constant-radius-track",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-radius-temperature",
        "concept": "exam-two-concept-radius-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Along a constant-radius line, surface temperature doubles. What must happen to luminosity?",
        "choices": [
          "It becomes sixteen times as large",
          "It becomes four times as large",
          "It becomes twice as large",
          "It becomes one quarter as large"
        ],
        "answer": 0,
        "hint": "Radius is held fixed; retain the temperature exponent.",
        "explanation": "L ∝ T⁴ at fixed radius, so doubling T gives a factor of 2⁴ = 16. The area factor does not change.",
        "source": "Lecture 18 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-radius-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-nebular-emission",
        "rootId": "exam-two-item-l18-nebular-emission",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-nebula-mechanism",
        "concept": "exam-two-concept-nebula-mechanism",
        "type": "single",
        "responseType": "single",
        "prompt": "A nebular spectrum contains strong emission lines after hot stars ionize its hydrogen. Which mechanism explains the glow?",
        "choices": [
          "Emission from excited gas, including recombination",
          "Reflection of a smooth stellar continuum by dust",
          "Extinction of background starlight by cool dust",
          "Thermal emission from the surface of a cool star"
        ],
        "answer": 0,
        "hint": "Distinguish emitted radiation from scattered illumination.",
        "explanation": "Excitation and recombination in ionized gas produce emission. Reflection redirects light from another source; dark obscuration does not itself explain the emitted lines.",
        "source": "Lecture 18 pages 4, 6 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 4, 6",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-mechanism"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-mixed-nebula",
        "rootId": "exam-two-item-l18-mixed-nebula",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-nebula-mechanism",
        "concept": "exam-two-concept-nebula-mechanism",
        "type": "single",
        "responseType": "single",
        "prompt": "One nebular field contains pink line-emitting gas, blue reflected starlight, and a dark foreground lane. Which interpretation is supported?",
        "choices": [
          "Emission, reflection and obscuration coexist in this field",
          "Hydrogen emission produces all three regions in this field",
          "The dark lane marks a cavity with little intervening dust",
          "The blue color alone establishes hotter gas than the pink region"
        ],
        "answer": 0,
        "hint": "The discussion asks you to identify three mechanisms in one field.",
        "explanation": "A single field can include glowing gas, dust-scattered starlight and dust obscuration. Color alone is not a complete temperature or density measurement.",
        "source": "Lecture 18 pages 6, 14–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 6, 14–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-mechanism"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-kh-inverse",
        "rootId": "exam-two-item-l19-kh-inverse",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-kh-clock",
        "concept": "exam-two-concept-kh-clock",
        "type": "single",
        "responseType": "single",
        "prompt": "Two protostars have equal mass and radius. A has four times B’s luminosity. What is tKH,A/tKH,B?",
        "choices": [
          "1/16",
          "1/4",
          "4",
          "16"
        ],
        "answer": 1,
        "hint": "Luminosity is the energy-loss rate.",
        "explanation": "With M and R fixed, tKH is inversely proportional to L, so the ratio is 1/4.",
        "source": "Lecture 19 pages 5–8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 5–8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-kh-clock"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-kh-mass-target",
        "rootId": "exam-two-item-l19-kh-mass-target",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-kh-clock",
        "concept": "exam-two-concept-kh-clock",
        "type": "single",
        "responseType": "single",
        "prompt": "At equal radius and luminosity, A’s contraction time is nine times B’s. What is MA/MB?",
        "choices": [
          "1/9",
          "1/3",
          "3",
          "9"
        ],
        "answer": 2,
        "hint": "Undo the square of the mass ratio.",
        "explanation": "tA/tB = (MA/MB)² = 9, so MA/MB = 3.",
        "source": "Lecture 19 pages 5–8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 5–8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-kh-clock"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-kh-reservoir",
        "rootId": "exam-two-item-l19-kh-reservoir",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-kh-clock",
        "concept": "exam-two-concept-kh-clock",
        "type": "single",
        "responseType": "single",
        "prompt": "Why does greater luminosity shorten tKH when mass and radius stay fixed?",
        "choices": [
          "The available gravitational energy is lost faster",
          "The initial gravitational energy becomes smaller",
          "The mass of nuclear fuel becomes larger",
          "The object must have a cooler interior"
        ],
        "answer": 0,
        "hint": "Separate the energy reservoir from its loss rate.",
        "explanation": "At fixed M and R the energy scale is unchanged. Higher luminosity drains that reservoir faster.",
        "source": "Lecture 19 pages 5–8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 5–8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-kh-clock"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-trigger-cause",
        "rootId": "exam-two-item-l19-trigger-cause",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-triggered-birth",
        "concept": "exam-two-concept-triggered-birth",
        "type": "single",
        "responseType": "single",
        "prompt": "A supernova shock sweeps cold interstellar gas into a dense layer. What change can favor new star formation?",
        "choices": [
          "Reduced self-gravity in the layer",
          "Greater density available for collapse",
          "Greater thermal support without compression",
          "Lower density throughout the swept-up layer"
        ],
        "answer": 1,
        "hint": "Ask how compression changes gravity’s competition with support.",
        "explanation": "Compression raises gas density and can make self-gravity overcome support in suitable fragments.",
        "source": "Lecture 19 pages 9–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 9–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-triggered-birth"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-co-tracer",
        "rootId": "exam-two-item-l19-co-tracer",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-triggered-birth",
        "concept": "exam-two-concept-triggered-birth",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation in this lecture maps molecular material that is hard to see in optical light?",
        "choices": [
          "Visible hydrogen emission from ionized gas",
          "Microwave line emission from CO molecules",
          "Optical continuum scattered by dust grains",
          "X-ray emission from shock-heated plasma"
        ],
        "answer": 1,
        "hint": "Distinguish the reservoir from the molecule used to trace it.",
        "explanation": "The lecture uses CO microwave emission to trace the giant molecular clouds.",
        "source": "Lecture 19 pages 9–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 9–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-triggered-birth"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-enrichment",
        "rootId": "exam-two-item-l19-enrichment",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-triggered-birth",
        "concept": "exam-two-concept-triggered-birth",
        "type": "single",
        "responseType": "single",
        "prompt": "Compared with gas that has never been processed in stars, enriched birth gas is expected to contain what?",
        "choices": [
          "A higher heavy-element fraction",
          "A lower heavy-element fraction",
          "Exactly the same heavy-element fraction",
          "Only hydrogen and helium"
        ],
        "answer": 0,
        "hint": "Follow the synthesized material back into interstellar gas.",
        "explanation": "Stellar nucleosynthesis and returned material can enrich the gas that later stars form from. This is a trend, not identical enrichment everywhere.",
        "source": "Lecture 19 pages 9–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 9–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-triggered-birth"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-ms-calculation",
        "rootId": "exam-two-item-l19-ms-calculation",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-ms-lifetime-ratio",
        "concept": "exam-two-concept-ms-lifetime-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Use tSun = 10 billion years. A main-sequence star has M = 4 MSun and L = 200 LSun. What is its approximate lifetime?",
        "choices": [
          "20 million years",
          "200 million years",
          "2 billion years",
          "50 billion years"
        ],
        "answer": 1,
        "hint": "Multiply 10 billion by 4/200.",
        "explanation": "4/200 = 0.02; 0.02 × 10 billion years = 200 million years.",
        "source": "Lecture 19 pages 16–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 16–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ms-lifetime-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-ms-infer-l",
        "rootId": "exam-two-item-l19-ms-infer-l",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-ms-lifetime-ratio",
        "concept": "exam-two-concept-ms-lifetime-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "In the fuel-over-luminosity model, A has twice B’s mass but half B’s main-sequence lifetime. What is LA/LB?",
        "choices": [
          "1/4",
          "1",
          "2",
          "4"
        ],
        "answer": 3,
        "hint": "Write 1/2 = 2 divided by the luminosity ratio.",
        "explanation": "tA/tB = (MA/MB)/(LA/LB), so 1/2 = 2/(LA/LB), giving LA/LB = 4.",
        "source": "Lecture 19 pages 16–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 16–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ms-lifetime-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l19-ms-fuel",
        "rootId": "exam-two-item-l19-ms-fuel",
        "moduleId": "exam-two-module-10",
        "conceptId": "exam-two-concept-ms-lifetime-ratio",
        "concept": "exam-two-concept-ms-lifetime-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Why can a massive main-sequence star die sooner even though it has more fuel?",
        "choices": [
          "Its luminosity rises faster than its fuel supply",
          "Its fuel supply rises faster than its luminosity",
          "Its luminosity falls while its fuel supply rises",
          "Its fuel supply and luminosity rise equally"
        ],
        "answer": 0,
        "hint": "Compare the numerator and denominator of M/L.",
        "explanation": "For the main-sequence trend discussed, the luminosity increase outweighs the larger fuel supply, shortening the lifetime.",
        "source": "Lecture 19 pages 16–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l19",
            "locator": "pages 16–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ms-lifetime-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-cno-net",
        "rootId": "exam-two-item-l20-cno-net",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-hydrogen-pathways",
        "concept": "exam-two-concept-hydrogen-pathways",
        "type": "single",
        "responseType": "single",
        "prompt": "Carbon, nitrogen, and oxygen participate in a cycle inside a hot stellar core. What is the net fuel-to-ash conversion?",
        "choices": [
          "Hydrogen into helium",
          "Helium into carbon",
          "Carbon into iron",
          "Oxygen into hydrogen"
        ],
        "answer": 0,
        "hint": "A catalyst is different from the net consumed fuel.",
        "explanation": "The CNO cycle uses C, N, and O in intermediate reactions, but its net conversion is hydrogen into helium.",
        "source": "Lecture 20 pages 10–12, 16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 10–12, 16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hydrogen-pathways"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-hydrogen-not",
        "rootId": "exam-two-item-l20-hydrogen-not",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-hydrogen-pathways",
        "concept": "exam-two-concept-hydrogen-pathways",
        "type": "single",
        "responseType": "single",
        "prompt": "Which reaction is NOT a hydrogen-to-helium pathway?",
        "choices": [
          "Proton–proton chain",
          "CNO cycle",
          "Triple-alpha process"
        ],
        "answer": 2,
        "hint": "Identify the fuel, not the presence of a helium product in another pathway.",
        "explanation": "Triple-alpha consumes helium nuclei to make carbon. Both pp and CNO consume hydrogen to make helium.",
        "source": "Lecture 20 pages 10–12, 16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 10–12, 16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hydrogen-pathways"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-hotter-core",
        "rootId": "exam-two-item-l20-hotter-core",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-hydrogen-pathways",
        "concept": "exam-two-concept-hydrogen-pathways",
        "type": "single",
        "responseType": "single",
        "prompt": "Compared with the Sun’s core, a sufficiently hotter hydrogen-burning core favors which additional pathway?",
        "choices": [
          "CNO cycling",
          "Proton–proton dominance",
          "Triple-alpha burning",
          "Carbon burning"
        ],
        "answer": 0,
        "hint": "Stay within hydrogen burning.",
        "explanation": "CNO becomes much more important as hydrogen-burning core temperature rises. Triple-alpha burns helium instead.",
        "source": "Lecture 20 pages 10–12, 16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 10–12, 16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hydrogen-pathways"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-alpha-name",
        "rootId": "exam-two-item-l20-alpha-name",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-triple-alpha",
        "concept": "exam-two-concept-triple-alpha",
        "type": "single",
        "responseType": "single",
        "prompt": "What is an alpha particle in the triple-alpha reaction?",
        "choices": [
          "A hydrogen nucleus",
          "A helium-4 nucleus",
          "A carbon-12 nucleus",
          "A free electron"
        ],
        "answer": 1,
        "hint": "The reaction name counts three copies of its input nucleus.",
        "explanation": "Alpha particles are helium-4 nuclei; three can combine through the triple-alpha sequence to form carbon.",
        "source": "Lecture 20 pages 13–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 13–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-triple-alpha"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-alpha-ash",
        "rootId": "exam-two-item-l20-alpha-ash",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-triple-alpha",
        "concept": "exam-two-concept-triple-alpha",
        "type": "single",
        "responseType": "single",
        "prompt": "Which pair describes the main ash discussed for helium burning?",
        "choices": [
          "Hydrogen and helium",
          "Carbon and oxygen",
          "Iron and nickel",
          "Nitrogen and hydrogen"
        ],
        "answer": 1,
        "hint": "Separate the next fuel from the products left by helium burning.",
        "explanation": "Triple-alpha produces carbon, and some carbon captures helium to form oxygen.",
        "source": "Lecture 20 pages 13–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 13–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-triple-alpha"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-nuclear-match",
        "rootId": "exam-two-item-l20-nuclear-match",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-triple-alpha",
        "concept": "exam-two-concept-triple-alpha",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each reaction pathway to its net fuel or role.",
        "choices": [
          "Hydrogen fusion through light-nucleus steps",
          "Hydrogen fusion using C, N, O catalysts",
          "Helium fusion producing carbon"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "Match net fuel rather than every intermediate nucleus.",
        "explanation": "pp and CNO both burn hydrogen to helium through different routes; triple-alpha burns helium to carbon.",
        "source": "Lecture 20 pages 10–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 10–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-triple-alpha"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Proton–proton chain",
            "answer": "Hydrogen fusion through light-nucleus steps"
          },
          {
            "label": "CNO cycle",
            "answer": "Hydrogen fusion using C, N, O catalysts"
          },
          {
            "label": "Triple-alpha process",
            "answer": "Helium fusion producing carbon"
          }
        ],
        "options": [
          "Hydrogen fusion through light-nucleus steps",
          "Hydrogen fusion using C, N, O catalysts",
          "Helium fusion producing carbon"
        ]
      },
      {
        "id": "exam-two-item-l20-rate-rank",
        "rootId": "exam-two-item-l20-rate-rank",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-rate-temperature",
        "concept": "exam-two-concept-rate-temperature",
        "type": "order",
        "responseType": "order",
        "prompt": "Using the supplied powers, order the reactions from least to most temperature-sensitive.",
        "choices": [
          "Proton–proton chain",
          "CNO cycle",
          "Triple-alpha process"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "Compare 4, 16, and 41.",
        "explanation": "The lecture’s exponents increase as pp (4), CNO (16), triple-alpha (41). This orders fractional sensitivity within the model.",
        "source": "Lecture 20 pages 10, 13, 15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 10, 13, 15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-rate-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-rate-fourth",
        "rootId": "exam-two-item-l20-rate-fourth",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-rate-temperature",
        "concept": "exam-two-concept-rate-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Using rate ∝ T⁴ at fixed other conditions, what happens when temperature rises by a factor of 2?",
        "choices": [
          "The rate doubles",
          "The rate rises fourfold",
          "The rate rises eightfold",
          "The rate rises sixteenfold"
        ],
        "answer": 3,
        "hint": "Apply the exponent to the entire temperature ratio.",
        "explanation": "2⁴ = 16. This is a calculation within the stated power-law model, not a claim that T⁴ is exact over all physical conditions.",
        "source": "Lecture 20 pages 10, 13, 15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 10, 13, 15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-rate-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-exponent-limit",
        "rootId": "exam-two-item-l20-exponent-limit",
        "moduleId": "exam-two-module-11",
        "conceptId": "exam-two-concept-rate-temperature",
        "concept": "exam-two-concept-rate-temperature",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: T⁴, T¹⁶, and T⁴¹ alone prove which reaction supplies the most power in any star.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Sensitivity and absolute power are different.",
        "explanation": "False. Fuel availability, density, temperature regime, and baseline rates also matter. The powers describe relative sensitivity in the lecture model.",
        "source": "Lecture 20 pages 10, 13, 15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 10, 13, 15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-rate-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-solar-chain",
        "rootId": "exam-two-item-l20-solar-chain",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-solar-brightening",
        "concept": "exam-two-concept-solar-brightening",
        "type": "single",
        "responseType": "single",
        "prompt": "What drives the gradual luminosity increase during the Sun’s main-sequence life?",
        "choices": [
          "Helium buildup followed by core contraction and heating",
          "Helium-core fusion beginning at the present solar age",
          "Hydrogen-shell burning replacing core burning today",
          "A steady decline in the hydrogen-fusion rate"
        ],
        "answer": 0,
        "hint": "Keep the present phase distinct from the red giant phase.",
        "explanation": "Composition changes lead to slow contraction and higher core temperature; hydrogen fusion becomes faster and the Sun brighter.",
        "source": "Lecture 20 pages 7–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 7–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-solar-brightening"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-pressure-qualifier",
        "rootId": "exam-two-item-l20-pressure-qualifier",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-solar-brightening",
        "concept": "exam-two-concept-solar-brightening",
        "type": "single",
        "responseType": "single",
        "prompt": "At fixed mass density and temperature, helium enrichment lowers gas pressure by reducing which quantity?",
        "choices": [
          "Free-particle number density",
          "Mean mass per free particle",
          "Mass density of the gas",
          "Temperature of the gas"
        ],
        "answer": 0,
        "hint": "Gas pressure counts moving particles, not just mass.",
        "explanation": "The mean mass per free particle rises, so a fixed mass density contains fewer pressure-bearing particles.",
        "source": "Lecture 20 pages 7–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 7–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-solar-brightening"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-faint-sun",
        "rootId": "exam-two-item-l20-faint-sun",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-solar-brightening",
        "concept": "exam-two-concept-solar-brightening",
        "type": "single",
        "responseType": "single",
        "prompt": "Which effect does the lecture invoke to help keep early Earth warm under a fainter young Sun?",
        "choices": [
          "Stronger greenhouse warming",
          "Much weaker greenhouse warming",
          "A lower solar fusion rate alone",
          "A higher terrestrial reflectivity"
        ],
        "answer": 0,
        "hint": "Separate the star’s power from Earth’s atmospheric response.",
        "explanation": "The lecture discusses a CO₂-rich greenhouse atmosphere as a warming contribution under the fainter Sun, rather than a full quantified climate solution.",
        "source": "Lecture 20 pages 7–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 7–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-solar-brightening"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-giant-fuel-location",
        "rootId": "exam-two-item-l20-giant-fuel-location",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-red-giant-shell",
        "concept": "exam-two-concept-red-giant-shell",
        "type": "single",
        "responseType": "single",
        "prompt": "Before helium ignition, what powers the Sun’s red-giant branch in the supplied model?",
        "choices": [
          "Hydrogen fusion in a shell around a helium core",
          "Helium fusion throughout the outer envelope",
          "Iron fusion in a main-sequence core",
          "Hydrogen fusion only at the photosphere"
        ],
        "answer": 0,
        "hint": "Identify both the fuel and its location.",
        "explanation": "Hydrogen fuses in a shell around an inert contracting helium core. Helium-core fusion has not yet ignited.",
        "source": "Lecture 20 pages 18–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 18–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-red-giant-shell"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-core-envelope",
        "rootId": "exam-two-item-l20-core-envelope",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-red-giant-shell",
        "concept": "exam-two-concept-red-giant-shell",
        "type": "single",
        "responseType": "single",
        "prompt": "While a Sun-like star ascends the red-giant branch, which paired change is expected?",
        "choices": [
          "Core expands; envelope contracts",
          "Core contracts; envelope expands",
          "Core cools; envelope heats",
          "Core and envelope both contract"
        ],
        "answer": 1,
        "hint": "Track inner and outer regions separately.",
        "explanation": "The helium core contracts and heats while the envelope expands and its surface cools.",
        "source": "Lecture 20 pages 18–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 18–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-red-giant-shell"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-giant-order",
        "rootId": "exam-two-item-l20-giant-order",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-red-giant-shell",
        "concept": "exam-two-concept-red-giant-shell",
        "type": "order",
        "responseType": "order",
        "prompt": "Order the supplied Sun-like sequence before stable helium-core burning.",
        "choices": [
          "Core hydrogen becomes exhausted",
          "Helium core contracts and heats",
          "Hydrogen-shell burning intensifies",
          "The expanded envelope has a cooler surface"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "hint": "Fuel exhaustion precedes the core–shell–envelope response.",
        "explanation": "The ordering follows the lecture’s simplified causal progression. The coupled stages overlap in a real star rather than occurring as instantaneous isolated events.",
        "source": "Lecture 20 pages 18–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 18–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-red-giant-shell"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-flash-observed",
        "rootId": "exam-two-item-l20-flash-observed",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-helium-hr",
        "concept": "exam-two-concept-helium-hr",
        "type": "single",
        "responseType": "single",
        "prompt": "Which statement fits the helium flash in the supplied Sun-like model?",
        "choices": [
          "Rapid internal helium ignition without a visible supernova",
          "A visible supernova that ejects the entire star",
          "Hydrogen ignition at the photosphere",
          "Fusion of iron beginning in the solar core"
        ],
        "answer": 0,
        "hint": "Separate an internal thermal event from an observable stellar explosion.",
        "explanation": "The helium flash rapidly ignites core helium; the star absorbs the energy internally rather than producing a visible supernova.",
        "source": "Lecture 20 pages 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-helium-hr"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-helium-direction",
        "rootId": "exam-two-item-l20-helium-direction",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-helium-hr",
        "concept": "exam-two-concept-helium-hr",
        "type": "single",
        "responseType": "single",
        "prompt": "After helium ignition, the supplied track moves down and left on the H–R diagram. What changes?",
        "choices": [
          "Luminosity falls; surface temperature rises",
          "Luminosity rises; surface temperature rises",
          "Luminosity falls; surface temperature falls",
          "Luminosity rises; surface temperature falls"
        ],
        "answer": 0,
        "hint": "Read the directions of both axes.",
        "explanation": "Down is lower luminosity; left is higher surface temperature on this H–R diagram.",
        "source": "Lecture 20 pages 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-helium-hr"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l20-helium-region",
        "rootId": "exam-two-item-l20-helium-region",
        "moduleId": "exam-two-module-12",
        "conceptId": "exam-two-concept-helium-hr",
        "concept": "exam-two-concept-helium-hr",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the labeled location of the settled helium-burning stage following the giant-branch tip in this schematic.",
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": 3,
        "hint": "Use the depicted track, not an inferred position from star color alone.",
        "explanation": "The track runs A → B → C → D. D lies below and left of the giant-branch tip C: less luminous and hotter.",
        "source": "Lecture 20 pages 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l20",
            "locator": "pages 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-helium-hr"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/evolution-target.svg",
          "alt": "Schematic H–R track with hotter left and luminosity up. A at (22%,70%), B at (55%,60%), C at (78%,20%), D at (53%,39%).",
          "caption": "Original teaching model of a Sun-like track; positions are qualitative."
        },
        "targets": [
          {
            "label": "A",
            "x": 22,
            "y": 70
          },
          {
            "label": "B",
            "x": 55,
            "y": 60
          },
          {
            "label": "C",
            "x": 78,
            "y": 20
          },
          {
            "label": "D",
            "x": 53,
            "y": 39
          }
        ]
      },
      {
        "id": "exam-two-item-l21-cluster-control",
        "rootId": "exam-two-item-l21-cluster-control",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-cluster-controls",
        "concept": "exam-two-concept-cluster-controls",
        "type": "single",
        "responseType": "single",
        "prompt": "Why is a star cluster useful for studying how stellar mass affects evolution?",
        "choices": [
          "Its stars share roughly one age and distance",
          "Its stars share exactly one mass and radius",
          "Its stars share exactly one luminosity and color",
          "Its stars share exactly one burning stage"
        ],
        "answer": 0,
        "hint": "Look for shared conditions, not identical outcomes.",
        "explanation": "A roughly common age, distance, and reddening help isolate the effects of different masses.",
        "source": "Lecture 21 pages 7–8, 11–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 7–8, 11–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-cluster-controls"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-globular-location",
        "rootId": "exam-two-item-l21-globular-location",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-cluster-controls",
        "concept": "exam-two-concept-cluster-controls",
        "type": "single",
        "responseType": "single",
        "prompt": "Which location best matches the supplied Galactic globular-cluster distribution?",
        "choices": [
          "A broad halo and central distribution",
          "Only the thin gas-rich spiral arms",
          "Only the Galactic disk’s outer rim",
          "Only nearby active molecular clouds"
        ],
        "answer": 0,
        "hint": "Use the old population’s distribution rather than current star-forming gas.",
        "explanation": "The source figure shows a broad distribution around the Galactic center and halo, not confinement to spiral-arm star formation.",
        "source": "Lecture 21 pages 7–8, 11–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 7–8, 11–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-cluster-controls"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-cluster-type",
        "rootId": "exam-two-item-l21-cluster-type",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-cluster-controls",
        "concept": "exam-two-concept-cluster-controls",
        "type": "single",
        "responseType": "single",
        "prompt": "An old dense cluster contains low-mass main-sequence stars, red giants, and horizontal-branch stars. Which class best fits?",
        "choices": [
          "Open cluster",
          "Globular cluster",
          "Giant molecular cloud",
          "Reflection nebula"
        ],
        "answer": 1,
        "hint": "Match the whole population, not one blue or red star.",
        "explanation": "This is the lecture’s globular-cluster population. Open clusters are typically looser and often younger.",
        "source": "Lecture 21 pages 7–8, 11–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 7–8, 11–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-cluster-controls"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-turnoff-target",
        "rootId": "exam-two-item-l21-turnoff-target",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-cluster-turnoff",
        "concept": "exam-two-concept-cluster-turnoff",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the turnoff point belonging to the oldest of the three comparable clusters shown.",
        "choices": [
          "A",
          "B",
          "C"
        ],
        "answer": 2,
        "hint": "Older means the upper surviving main sequence ends lower and cooler.",
        "explanation": "C has the coolest, least luminous turnoff. Massive hot stars have already left its main sequence.",
        "source": "Lecture 21 pages 9–19, 32 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 9–19, 32",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-cluster-turnoff"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/turnoff-target.svg",
          "alt": "Schematic H–R diagram with three main-sequence turnoffs A (29%,24%), B (48%,45%), C (68%,68%); luminosity increases up and temperature increases left.",
          "caption": "Original cluster comparison; common composition and schematic axes."
        },
        "targets": [
          {
            "label": "A",
            "x": 29,
            "y": 24
          },
          {
            "label": "B",
            "x": 48,
            "y": 45
          },
          {
            "label": "C",
            "x": 68,
            "y": 68
          }
        ]
      },
      {
        "id": "exam-two-item-l21-turnoff-absence",
        "rootId": "exam-two-item-l21-turnoff-absence",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-cluster-turnoff",
        "concept": "exam-two-concept-cluster-turnoff",
        "type": "single",
        "responseType": "single",
        "prompt": "Why does an old cluster lack hot massive stars on its upper main sequence?",
        "choices": [
          "They have already exhausted core hydrogen",
          "They all migrated to a greater distance",
          "Every member cooled while staying on the same main-sequence point",
          "Its low-mass stars used up fuel first"
        ],
        "answer": 0,
        "hint": "Which stars use their core fuel fastest?",
        "explanation": "Massive stars have short nuclear lifetimes and evolve off the main sequence first. The surviving turnoff is therefore lower and cooler.",
        "source": "Lecture 21 pages 9–19, 32 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 9–19, 32",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-cluster-turnoff"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-arrive-leave",
        "rootId": "exam-two-item-l21-arrive-leave",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-cluster-turnoff",
        "concept": "exam-two-concept-cluster-turnoff",
        "type": "single",
        "responseType": "single",
        "prompt": "In the supplied cluster evolution sequence, which stars generally both reach the main sequence sooner and leave it sooner?",
        "choices": [
          "Higher-mass members",
          "Lower-mass members",
          "All masses at the same time",
          "Only stars with large apparent brightness"
        ],
        "answer": 0,
        "hint": "Keep contraction time separate from nuclear lifetime while using the sequence.",
        "explanation": "The high-mass tracks reach the main sequence sooner in the supplied sequence and then consume their core fuel sooner. Their large luminosities matter in both comparisons.",
        "source": "Lecture 21 pages 9–19, 32 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 9–19, 32",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-cluster-turnoff"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-metal-definition",
        "rootId": "exam-two-item-l21-metal-definition",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-population-metals",
        "concept": "exam-two-concept-population-metals",
        "type": "single",
        "responseType": "single",
        "prompt": "Which substance counts as a metal in the astronomical definition used here?",
        "choices": [
          "Hydrogen",
          "Helium",
          "Oxygen",
          "Hydrogen-2"
        ],
        "answer": 2,
        "hint": "The boundary is heavier than helium.",
        "explanation": "Oxygen is heavier than helium, so astronomers include it among metals. Hydrogen and helium are excluded.",
        "source": "Lecture 21 pages 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-population-metals"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-population-match",
        "rootId": "exam-two-item-l21-population-match",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-population-metals",
        "concept": "exam-two-concept-population-metals",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each population label to the supplied composition description.",
        "choices": [
          "Relatively metal-rich",
          "Old and metal-poor",
          "First generation, essentially metal-free"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "The numeral is not a chronological birth order.",
        "explanation": "Population I is relatively metal-rich, II is old/metal-poor, and III names the first essentially metal-free generation.",
        "source": "Lecture 21 pages 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-population-metals"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Population I",
            "answer": "Relatively metal-rich"
          },
          {
            "label": "Population II",
            "answer": "Old and metal-poor"
          },
          {
            "label": "Population III",
            "answer": "First generation, essentially metal-free"
          }
        ],
        "options": [
          "Relatively metal-rich",
          "Old and metal-poor",
          "First generation, essentially metal-free"
        ]
      },
      {
        "id": "exam-two-item-l21-younger-gas",
        "rootId": "exam-two-item-l21-younger-gas",
        "moduleId": "exam-two-module-13",
        "conceptId": "exam-two-concept-population-metals",
        "concept": "exam-two-concept-population-metals",
        "type": "single",
        "responseType": "single",
        "prompt": "Why are typical open-cluster birth compositions more metal-rich than those of old globular clusters?",
        "choices": [
          "Their birth gas had more prior stellar enrichment",
          "All their member stars began with identical masses",
          "Their metals appeared only after their stars formed",
          "Their younger age requires less recycled stellar gas"
        ],
        "answer": 0,
        "hint": "Follow the products of stellar processing.",
        "explanation": "Typical younger open clusters formed from gas that had undergone more earlier stellar enrichment. The metallicity was part of their birth composition, not caused by blue color or equal stellar masses.",
        "source": "Lecture 21 pages 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-population-metals"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-eclipse-mechanism",
        "rootId": "exam-two-item-l21-eclipse-mechanism",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-variable-mechanisms",
        "concept": "exam-two-concept-variable-mechanisms",
        "type": "single",
        "responseType": "single",
        "prompt": "An otherwise steady star dims when its companion moves in front of it. What directly causes the observed dimming?",
        "choices": [
          "Blocked light during an eclipse",
          "Radial pulsation of the visible star",
          "An eruption from the visible star",
          "A changing amount of foreground dust"
        ],
        "answer": 0,
        "hint": "Which mechanism is specified in the observation?",
        "explanation": "The foreground companion blocks some light. This is an eclipse, not evidence of radial pulsation.",
        "source": "Lecture 21 pages 26–27 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 26–27",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-variable-mechanisms"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-mira-anchor",
        "rootId": "exam-two-item-l21-mira-anchor",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-variable-mechanisms",
        "concept": "exam-two-concept-variable-mechanisms",
        "type": "single",
        "responseType": "single",
        "prompt": "Which lecture example is the red giant with a roughly 332-day pulsation period?",
        "choices": [
          "Algol",
          "Mira",
          "Delta Cephei",
          "RR Lyrae"
        ],
        "answer": 1,
        "hint": "Separate the long-period pulsator from the eclipse example.",
        "explanation": "The lecture identifies Mira as a long-period red-giant variable with an illustrative 332-day period.",
        "source": "Lecture 21 pages 26–27 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 26–27",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-variable-mechanisms"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-all-variables-tf",
        "rootId": "exam-two-item-l21-all-variables-tf",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-variable-mechanisms",
        "concept": "exam-two-concept-variable-mechanisms",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: Every variable star changes brightness because its own radius pulsates.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "The lecture gives geometric and eruptive examples too.",
        "explanation": "False. Eclipses and eruptions also cause variability. Pulsation is one mechanism.",
        "source": "Lecture 21 pages 26–27 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 26–27",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-variable-mechanisms"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-lightcurve-period",
        "rootId": "exam-two-item-l21-lightcurve-period",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-variable-periods",
        "concept": "exam-two-concept-variable-periods",
        "type": "single",
        "responseType": "single",
        "prompt": "A repeated light curve has maxima at days 2, 7, and 12. What is its period?",
        "choices": [
          "2 days",
          "5 days",
          "10 days",
          "12 days"
        ],
        "answer": 1,
        "hint": "Measure between consecutive equivalent phases.",
        "explanation": "7−2 = 5 days and 12−7 = 5 days. The interval across two cycles is ten days, not the period.",
        "source": "Lecture 21 pages 28–29 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 28–29",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-variable-periods"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-short-pulsator",
        "rootId": "exam-two-item-l21-short-pulsator",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-variable-periods",
        "concept": "exam-two-concept-variable-periods",
        "type": "single",
        "responseType": "single",
        "prompt": "Which class has the shortest characteristic pulsation times in the supplied comparison?",
        "choices": [
          "Mira-like long-period variables",
          "Cepheid variables",
          "RR Lyrae variables",
          "Pulsating white dwarfs"
        ],
        "answer": 3,
        "hint": "Compare hundreds of days, days, fractions of a day, and minutes.",
        "explanation": "The lecture places white-dwarf pulsations on minute timescales, shorter than the other listed classes.",
        "source": "Lecture 21 pages 28–29 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 28–29",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-variable-periods"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-rr-identity",
        "rootId": "exam-two-item-l21-rr-identity",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-variable-periods",
        "concept": "exam-two-concept-variable-periods",
        "type": "single",
        "responseType": "single",
        "prompt": "Which description best fits the lecture’s RR Lyrae variables?",
        "choices": [
          "Lower-mass helium-burning stars with sub-day periods",
          "Massive Cepheid stars with several-day periods",
          "Red-giant Mira variables with year-scale periods",
          "Compact white dwarfs with minute-scale periods"
        ],
        "answer": 0,
        "hint": "Identify both the stellar class and characteristic period.",
        "explanation": "RR Lyrae are lower-mass helium-burning pulsators with characteristic periods shorter than a day in this lecture.",
        "source": "Lecture 21 pages 28–29 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 28–29",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-variable-periods"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-candle-order",
        "rootId": "exam-two-item-l21-candle-order",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-standard-candle",
        "concept": "exam-two-concept-standard-candle",
        "type": "order",
        "responseType": "order",
        "prompt": "Arrange the steps for a Cepheid distance estimate, assuming a known type and corrected extinction.",
        "choices": [
          "Measure its repeated pulsation period",
          "Use the appropriate period–luminosity calibration",
          "Compare intrinsic luminosity with apparent brightness",
          "Infer the distance"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "hint": "Obtain intrinsic output before using the inverse-square comparison.",
        "explanation": "Measure period, infer calibrated luminosity, compare with apparent brightness, then infer distance.",
        "source": "Lecture 21 pages 29–31 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 29–31",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-standard-candle"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-candle-distance",
        "rootId": "exam-two-item-l21-candle-distance",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-standard-candle",
        "concept": "exam-two-concept-standard-candle",
        "type": "single",
        "responseType": "single",
        "prompt": "Two Cepheids have the same calibrated luminosity and negligible extinction. A appears nine times fainter than B. How far away is A compared with B?",
        "choices": [
          "One ninth as far",
          "One third as far",
          "Three times as far",
          "Nine times as far"
        ],
        "answer": 2,
        "hint": "Brightness depends on inverse distance squared.",
        "explanation": "bA/bB = 1/9 = (dB/dA)², so dA/dB = 3.",
        "source": "Lecture 21 pages 29–31 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 29–31",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-standard-candle"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l21-candle-calibration",
        "rootId": "exam-two-item-l21-candle-calibration",
        "moduleId": "exam-two-module-14",
        "conceptId": "exam-two-concept-standard-candle",
        "concept": "exam-two-concept-standard-candle",
        "type": "single",
        "responseType": "single",
        "prompt": "Why must the Cepheid type be identified before applying a period–luminosity calibration?",
        "choices": [
          "Different types can have different luminosities at one period",
          "All types have identical luminosity at every period",
          "The type fixes its apparent brightness at Earth",
          "The period directly equals its distance"
        ],
        "answer": 0,
        "hint": "Separate intrinsic calibration from received brightness.",
        "explanation": "Type I and Type II Cepheids follow different calibrations, so one period cannot be converted using an arbitrary relation.",
        "source": "Lecture 21 pages 29–31 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l21",
            "locator": "pages 29–31",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-standard-candle"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-shell-location",
        "rootId": "exam-two-item-l22-shell-location",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-agb-shells",
        "concept": "exam-two-concept-agb-shells",
        "type": "single",
        "responseType": "single",
        "prompt": "In the lecture’s AGB model, where is helium fusion located relative to hydrogen fusion?",
        "choices": [
          "Farther from the center",
          "Inside the carbon–oxygen core",
          "At the same outer surface",
          "Closer to the center"
        ],
        "answer": 3,
        "hint": "Read the shells from the core outward.",
        "explanation": "The helium-burning shell lies just outside the carbon–oxygen core; the hydrogen-burning shell lies farther out. The core itself is inert in this model.",
        "source": "Lecture 22 pages 11–14, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 11–14, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-agb-shells"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-phase-match",
        "rootId": "exam-two-item-l22-phase-match",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-agb-shells",
        "concept": "exam-two-concept-agb-shells",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each stage to its characteristic central structure in the supplied Sun-like sequence.",
        "choices": [
          "Inert carbon–oxygen core",
          "Inert helium core",
          "Helium-burning core"
        ],
        "answer": [
          1,
          2,
          0
        ],
        "hint": "Separate core burning from shell burning.",
        "explanation": "The red giant branch has an inert helium core; settled helium burning consumes helium in the core; the AGB has an inert carbon–oxygen core.",
        "source": "Lecture 22 pages 11–14, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 11–14, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-agb-shells"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "First red giant branch",
            "answer": "Inert helium core"
          },
          {
            "label": "Settled helium-burning stage",
            "answer": "Helium-burning core"
          },
          {
            "label": "Asymptotic giant branch",
            "answer": "Inert carbon–oxygen core"
          }
        ],
        "options": [
          "Inert carbon–oxygen core",
          "Inert helium core",
          "Helium-burning core"
        ]
      },
      {
        "id": "exam-two-item-l22-cool-hot",
        "rootId": "exam-two-item-l22-cool-hot",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-agb-shells",
        "concept": "exam-two-concept-agb-shells",
        "type": "single",
        "responseType": "single",
        "prompt": "An AGB star has a cool red photosphere. Which conclusion about its interior is supported?",
        "choices": [
          "Its interior has no remaining nuclear reactions",
          "Its burning shells must have the surface temperature",
          "Its burning shells can still be very hot",
          "Its central carbon must already be burning"
        ],
        "answer": 2,
        "hint": "Surface and interior are different regions.",
        "explanation": "The extended envelope produces a cool surface while hot interior shells continue fusion. Surface color does not set every interior temperature.",
        "source": "Lecture 22 pages 11–14, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 11–14, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-agb-shells"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-pulse-fuel",
        "rootId": "exam-two-item-l22-pulse-fuel",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-thermal-pulses",
        "concept": "exam-two-concept-thermal-pulses",
        "type": "single",
        "responseType": "single",
        "prompt": "What directly replenishes the helium available for shell burning in the AGB model?",
        "choices": [
          "Iron fusion in an outer atmosphere",
          "Hydrogen fusion in a surrounding shell",
          "Helium escaping through a surface wind",
          "Carbon fusion inside the central core"
        ],
        "answer": 1,
        "hint": "Identify the product of hydrogen fusion.",
        "explanation": "Hydrogen fusion makes helium, supplying material for subsequent helium-shell burning.",
        "source": "Lecture 22 pages 10, 13–14, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 10, 13–14, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-thermal-pulses"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-flash-pulse",
        "rootId": "exam-two-item-l22-flash-pulse",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-thermal-pulses",
        "concept": "exam-two-concept-thermal-pulses",
        "type": "single",
        "responseType": "single",
        "prompt": "Which feature distinguishes an AGB thermal pulse from the earlier helium flash?",
        "choices": [
          "Helium first ignites in the degenerate core",
          "Hydrogen becomes helium in the main-sequence core",
          "Iron loses its supporting electrons",
          "Helium ignites unstably in a shell"
        ],
        "answer": 3,
        "hint": "Use the location and evolutionary stage.",
        "explanation": "The AGB pulse concerns helium-shell instability. The earlier helium flash starts core helium burning in the low-mass sequence.",
        "source": "Lecture 22 pages 10, 13–14, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 10, 13–14, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-thermal-pulses"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-force-outward",
        "rootId": "exam-two-item-l22-force-outward",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-thermal-pulses",
        "concept": "exam-two-concept-thermal-pulses",
        "type": "single",
        "responseType": "single",
        "prompt": "A stellar layer begins accelerating outward from rest in the lecture’s pressure-versus-gravity model. What must be true at that moment?",
        "choices": [
          "Both forces fall to zero",
          "The two forces cancel exactly",
          "Gravity exceeds the outward pressure force",
          "The outward pressure force exceeds gravity"
        ],
        "answer": 3,
        "hint": "Acceleration follows the direction of the net force.",
        "explanation": "Outward acceleration requires a net outward force in this model, so the outward pressure force exceeds inward gravity. The stem specifies acceleration rather than expansion velocity alone.",
        "source": "Lecture 22 pages 10, 13–14, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 10, 13–14, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-thermal-pulses"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-carbon-order",
        "rootId": "exam-two-item-l22-carbon-order",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-carbon-recycling",
        "concept": "exam-two-concept-carbon-recycling",
        "type": "order",
        "responseType": "order",
        "prompt": "Order the steps that return newly made carbon from an AGB star to surrounding gas.",
        "choices": [
          "Helium fusion produces carbon",
          "Convection mixes processed material outward",
          "A wind carries enriched envelope gas away"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "Separate production, transport and escape.",
        "explanation": "Carbon must be made before it can be mixed outward and then removed in the wind.",
        "source": "Lecture 22 pages 14–17, 35 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 14–17, 35",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-carbon-recycling"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-wind-rate",
        "rootId": "exam-two-item-l22-wind-rate",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-carbon-recycling",
        "concept": "exam-two-concept-carbon-recycling",
        "type": "single",
        "responseType": "single",
        "prompt": "A hypothetical AGB wind stays at 10⁻⁴ solar masses per year for 3,000 years. How much mass leaves?",
        "choices": [
          "30 solar masses",
          "0.3 solar masses",
          "3 solar masses",
          "0.03 solar masses"
        ],
        "answer": 1,
        "hint": "Multiply a rate by elapsed time.",
        "explanation": "10⁻⁴ × 3,000 = 0.3 solar masses. The constant rate is an explicit assumption, not a lifetime average inferred from the slide.",
        "source": "Lecture 22 pages 14–17, 35 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 14–17, 35",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-carbon-recycling"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-dredge-mechanism",
        "rootId": "exam-two-item-l22-dredge-mechanism",
        "moduleId": "exam-two-module-15",
        "conceptId": "exam-two-concept-carbon-recycling",
        "concept": "exam-two-concept-carbon-recycling",
        "type": "single",
        "responseType": "single",
        "prompt": "A giant’s surface becomes enriched in carbon made deeper inside. Which process transports that material outward in this model?",
        "choices": [
          "Electron capture",
          "Convective mixing",
          "Photon escape alone",
          "Core photodisintegration"
        ],
        "answer": 1,
        "hint": "Which process moves matter through the envelope?",
        "explanation": "Convection moves processed matter toward the surface. Radiation carries energy; electron capture and photodisintegration are different nuclear processes.",
        "source": "Lecture 22 pages 14–17, 35 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 14–17, 35",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-carbon-recycling"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-remnant-target",
        "rootId": "exam-two-item-l22-remnant-target",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-white-dwarf-remnant",
        "concept": "exam-two-concept-white-dwarf-remnant",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the compact remnant in this schematic planetary-nebula system.",
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": 1,
        "hint": "Separate the central object from the extended gas.",
        "explanation": "B marks the compact central remnant. A and C sample expelled gas, while D lies outside the shell.",
        "source": "Lecture 22 pages 18–22 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 18–22",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-white-dwarf-remnant"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/nebula-target.svg",
          "alt": "Expanding gas shell centered at 50 percent width and 50 percent height. A at 22,50 and C at 78,50 mark shell gas; B at 50,50 marks central remnant; D at 88,20 is outside.",
          "caption": "Original schematic. Sizes and distances are not to scale."
        },
        "targets": [
          {
            "label": "A",
            "x": 22,
            "y": 50
          },
          {
            "label": "B",
            "x": 50,
            "y": 50
          },
          {
            "label": "C",
            "x": 78,
            "y": 50
          },
          {
            "label": "D",
            "x": 88,
            "y": 20
          }
        ]
      },
      {
        "id": "exam-two-item-l22-dwarf-power",
        "rootId": "exam-two-item-l22-dwarf-power",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-white-dwarf-remnant",
        "concept": "exam-two-concept-white-dwarf-remnant",
        "type": "single",
        "responseType": "single",
        "prompt": "What mainly supplies the light of an isolated, cooling white dwarf in this course model?",
        "choices": [
          "Sustained core carbon fusion",
          "Accretion from a companion",
          "Stored thermal energy",
          "Sustained core hydrogen fusion"
        ],
        "answer": 2,
        "hint": "The stem specifies an isolated remnant.",
        "explanation": "A cooling white dwarf radiates stored heat. It is not a main-sequence hydrogen-burning star and is not supplied by a companion in this isolated case.",
        "source": "Lecture 22 pages 18–22 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 18–22",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-white-dwarf-remnant"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-dwarf-match",
        "rootId": "exam-two-item-l22-dwarf-match",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-white-dwarf-remnant",
        "concept": "exam-two-concept-white-dwarf-remnant",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each object to its defining distinction.",
        "choices": [
          "Never sustains ordinary core hydrogen fusion",
          "Compact evolved remnant",
          "Low-mass hydrogen-burning star"
        ],
        "answer": [
          2,
          0,
          1
        ],
        "hint": "A similar name does not imply the same history.",
        "explanation": "Red dwarfs sustain core hydrogen fusion; brown dwarfs never sustain ordinary core hydrogen fusion; white dwarfs are compact evolved remnants.",
        "source": "Lecture 22 pages 18–22 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 18–22",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-white-dwarf-remnant"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Red dwarf",
            "answer": "Low-mass hydrogen-burning star"
          },
          {
            "label": "Brown dwarf",
            "answer": "Never sustains ordinary core hydrogen fusion"
          },
          {
            "label": "White dwarf",
            "answer": "Compact evolved remnant"
          }
        ],
        "options": [
          "Never sustains ordinary core hydrogen fusion",
          "Compact evolved remnant",
          "Low-mass hydrogen-burning star"
        ]
      },
      {
        "id": "exam-two-item-l22-gas-spectrum",
        "rootId": "exam-two-item-l22-gas-spectrum",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-nebula-spectrum",
        "concept": "exam-two-concept-nebula-spectrum",
        "type": "single",
        "responseType": "single",
        "prompt": "A narrow aperture samples bright planetary-nebula gas while excluding the central star. Which spectral feature is expected from that gas?",
        "choices": [
          "Bright emission lines",
          "No light because the gas is not a star",
          "Only a smooth thermal continuum",
          "Only dark stellar absorption lines"
        ],
        "answer": 0,
        "hint": "Low-density ionized gas emits at particular wavelengths.",
        "explanation": "The ionized nebular gas contributes bright emission lines. The aperture condition separates it from the central star’s spectrum.",
        "source": "Lecture 22 pages 22, 30, 34 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 22, 30, 34",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-spectrum"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-spectrum-change",
        "rootId": "exam-two-item-l22-spectrum-change",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-nebula-spectrum",
        "concept": "exam-two-concept-nebula-spectrum",
        "type": "single",
        "responseType": "single",
        "prompt": "Two apertures view one planetary nebula: one samples shell gas, the other includes the central star. Why can the spectra differ?",
        "choices": [
          "The gas changes into a new element instantly",
          "They must measure different cosmic ages",
          "They collect different physical components",
          "The star’s distance changes between apertures"
        ],
        "answer": 2,
        "hint": "Same system, different regions.",
        "explanation": "The relative contributions from ionized gas and the stellar source differ with the aperture. Different components have different emission processes.",
        "source": "Lecture 22 pages 22, 30, 34 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 22, 30, 34",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-spectrum"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-uv-source",
        "rootId": "exam-two-item-l22-uv-source",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-nebula-spectrum",
        "concept": "exam-two-concept-nebula-spectrum",
        "type": "single",
        "responseType": "single",
        "prompt": "What powers the glow of the ejected gas in the lecture’s planetary-nebula model?",
        "choices": [
          "Reflected visible light from nearby planets",
          "Hydrogen fusion throughout the nebular shell",
          "Iron fusion inside the central remnant",
          "Ultraviolet radiation from the hot remnant"
        ],
        "answer": 3,
        "hint": "Separate illumination from nuclear burning in the gas.",
        "explanation": "The hot central source supplies ionizing ultraviolet radiation; the gas then emits line radiation.",
        "source": "Lecture 22 pages 22, 30, 34 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 22, 30, 34",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-spectrum"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-nebula-lifetime",
        "rootId": "exam-two-item-l22-nebula-lifetime",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-nebula-shapes",
        "concept": "exam-two-concept-nebula-shapes",
        "type": "single",
        "responseType": "single",
        "prompt": "A nebular shell expands while keeping approximately the same gas mass. What trend helps explain why it eventually becomes difficult to see?",
        "choices": [
          "Its gas becomes more dilute",
          "Its shell must move back toward the core",
          "Its gas becomes more tightly compressed",
          "Its central source must become more luminous"
        ],
        "answer": 0,
        "hint": "Spread the same mass through a larger volume.",
        "explanation": "Expansion lowers the gas density; changing illumination and dilution contribute to fading.",
        "source": "Lecture 22 pages 22–33 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 22–33",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-shapes"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-pn-identity-tf",
        "rootId": "exam-two-item-l22-pn-identity-tf",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-nebula-shapes",
        "concept": "exam-two-concept-nebula-shapes",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: A planetary nebula is the disk from which a young star’s planets are forming.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Compare the young-star and dying-star stages.",
        "explanation": "False. Here it is an aging star’s ejected envelope, illuminated by the exposed hot remnant.",
        "source": "Lecture 22 pages 22–33 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 22–33",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-shapes"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l22-shape-inference",
        "rootId": "exam-two-item-l22-shape-inference",
        "moduleId": "exam-two-module-16",
        "conceptId": "exam-two-concept-nebula-shapes",
        "concept": "exam-two-concept-nebula-shapes",
        "type": "single",
        "responseType": "single",
        "prompt": "A nebula looks bipolar in an image. Which inference is justified from that shape alone?",
        "choices": [
          "The image fixes the remnant’s core composition",
          "The image establishes exactly one companion",
          "The image alone does not establish a companion",
          "The image fixes the ejection speed uniquely"
        ],
        "answer": 2,
        "hint": "Different structures and viewing angles can overlap in appearance.",
        "explanation": "Bipolar shape can motivate a shaping hypothesis, but it does not uniquely establish a companion or the system’s full history.",
        "source": "Lecture 22 pages 22–33 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l22",
            "locator": "pages 22–33",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-shapes"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-massive-clock",
        "rootId": "exam-two-item-l23-massive-clock",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-massive-demographics",
        "concept": "exam-two-concept-massive-demographics",
        "type": "single",
        "responseType": "single",
        "prompt": "Use t/tSun ≈ (M/MSun)/(L/LSun). A hypothetical star has 12 solar masses and 24,000 solar luminosities. What is its lifetime relative to the Sun?",
        "choices": [
          "2,000",
          "1/2,000",
          "1/200",
          "200"
        ],
        "answer": 1,
        "hint": "Divide the fuel scale by the output scale.",
        "explanation": "12/24,000 = 1/2,000. This approximate main-sequence relation is not a duration for every later burning stage.",
        "source": "Lecture 23 pages 6–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 6–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-massive-demographics"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-population",
        "rootId": "exam-two-item-l23-population",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-massive-demographics",
        "concept": "exam-two-concept-massive-demographics",
        "type": "single",
        "responseType": "single",
        "prompt": "Which population statement matches the lecture’s initial stellar mass distribution?",
        "choices": [
          "The brightest group must be the most numerous",
          "Massive stars outnumber lower-mass stars",
          "The two groups always have equal numbers",
          "Lower-mass stars outnumber massive stars"
        ],
        "answer": 3,
        "hint": "Do not confuse luminosity with abundance.",
        "explanation": "The mass distribution favors lower-mass stars; massive stars are a small fraction even though they can dominate light.",
        "source": "Lecture 23 pages 6–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 6–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-massive-demographics"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-eight-meaning",
        "rootId": "exam-two-item-l23-eight-meaning",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-massive-demographics",
        "concept": "exam-two-concept-massive-demographics",
        "type": "single",
        "responseType": "single",
        "prompt": "In the lecture’s approximate “above 8 solar masses” criterion, which mass is meant?",
        "choices": [
          "The star’s initial mass",
          "Only its central neutron-star mass",
          "Only its final iron-core mass",
          "Only its ejected gas mass"
        ],
        "answer": 0,
        "hint": "Identify what the evolutionary classification describes.",
        "explanation": "The criterion refers to the initial stellar mass. The final core and ejecta have different masses after burning and mass loss.",
        "source": "Lecture 23 pages 6–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 6–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-massive-demographics"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-wind-history",
        "rootId": "exam-two-item-l23-wind-history",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-wind-environment",
        "concept": "exam-two-concept-wind-environment",
        "type": "single",
        "responseType": "single",
        "prompt": "A dense shell surrounds a massive star before its final explosion. Which process can build that shell?",
        "choices": [
          "Only material leaving after core bounce",
          "Mass loss during the star’s earlier life",
          "Only material ejected by the later explosion",
          "Only gas newly made in the later shock"
        ],
        "answer": 1,
        "hint": "The shell already exists before the terminal event.",
        "explanation": "Earlier winds or outbursts can supply circumstellar gas before the explosion.",
        "source": "Lecture 23 pages 9–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 9–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wind-environment"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-radiation-wind",
        "rootId": "exam-two-item-l23-radiation-wind",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-wind-environment",
        "concept": "exam-two-concept-wind-environment",
        "type": "single",
        "responseType": "single",
        "prompt": "How can large luminosity help drive a massive star’s wind?",
        "choices": [
          "Radiation stops all nuclear reactions at once",
          "Radiation transfers outward momentum to gas",
          "Radiation increases the gas’s inward attraction",
          "Radiation makes the outer gas completely inert"
        ],
        "answer": 1,
        "hint": "Photons can transfer momentum when interacting with matter.",
        "explanation": "Radiative momentum transfer can accelerate outer material outward and contribute to mass loss.",
        "source": "Lecture 23 pages 9–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 9–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wind-environment"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-ejecta-order",
        "rootId": "exam-two-item-l23-ejecta-order",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-wind-environment",
        "concept": "exam-two-concept-wind-environment",
        "type": "order",
        "responseType": "order",
        "prompt": "Order these events in a model where supernova ejecta encounter an older wind shell.",
        "choices": [
          "The living star expels wind material",
          "The wind material forms a surrounding environment",
          "The star produces fast explosion ejecta",
          "The ejecta reach the older surrounding gas"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "hint": "The material encountered must already be outside the star.",
        "explanation": "Earlier mass loss builds the environment; later explosion ejecta travel into it.",
        "source": "Lecture 23 pages 9–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 9–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wind-environment"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-wr-surface",
        "rootId": "exam-two-item-l23-wr-surface",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-envelope-stripping",
        "concept": "exam-two-concept-envelope-stripping",
        "type": "single",
        "responseType": "single",
        "prompt": "A strong wind removes a massive star’s hydrogen-rich envelope. What can become visible underneath?",
        "choices": [
          "Hotter helium-rich layers",
          "An exposed iron core in every case",
          "A carbon–oxygen white dwarf in every case",
          "Cooler hydrogen-rich layers"
        ],
        "answer": 0,
        "hint": "Follow which material is removed and which remains.",
        "explanation": "Stripping the hydrogen-rich envelope can expose deeper hotter helium-rich layers, associated with Wolf–Rayet stars in the lecture.",
        "source": "Lecture 23 pages 9–13, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 9–13, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-envelope-stripping"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-stripping-tf",
        "rootId": "exam-two-item-l23-stripping-tf",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-envelope-stripping",
        "concept": "exam-two-concept-envelope-stripping",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: Exposing a helium-rich surface requires all the removed surface hydrogen to fuse into helium at that surface.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Removal and nuclear conversion are different mechanisms.",
        "explanation": "False. A wind can remove hydrogen-rich material and expose helium-rich material that was deeper inside.",
        "source": "Lecture 23 pages 9–13, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 9–13, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-envelope-stripping"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-nebula-origin",
        "rootId": "exam-two-item-l23-nebula-origin",
        "moduleId": "exam-two-module-17",
        "conceptId": "exam-two-concept-envelope-stripping",
        "concept": "exam-two-concept-envelope-stripping",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars have glowing surrounding shells. One is an AGB remnant; the other is a massive star losing its envelope. What best distinguishes the shells’ origins?",
        "choices": [
          "The fact that both shells have curved edges",
          "The progenitors and their mass-loss histories",
          "The fact that both shells emit visible light",
          "The fact that both shells surround central stars"
        ],
        "answer": 1,
        "hint": "Appearance alone can be shared by different histories.",
        "explanation": "The stellar evolutionary context and mass-loss history distinguish a planetary nebula from a massive-star wind environment.",
        "source": "Lecture 23 pages 9–13, 17 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 9–13, 17",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-envelope-stripping"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-next-fuel",
        "rootId": "exam-two-item-l23-next-fuel",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-successive-fuels",
        "concept": "exam-two-concept-successive-fuels",
        "type": "single",
        "responseType": "single",
        "prompt": "After one core fuel is exhausted, what normally enables the next heavier fuel to ignite in a massive star?",
        "choices": [
          "The previous fuel becomes unlimited again",
          "Envelope expansion cools every region equally",
          "A decrease in core temperature starts fusion",
          "Contraction raises core temperature and density"
        ],
        "answer": 3,
        "hint": "Follow the core rather than the photosphere.",
        "explanation": "Contraction heats and compresses the core until a new reaction can operate, if the star reaches the needed conditions.",
        "source": "Lecture 23 pages 16–17, 22, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 16–17, 22, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-successive-fuels"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-stage-times",
        "rootId": "exam-two-item-l23-stage-times",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-successive-fuels",
        "concept": "exam-two-concept-successive-fuels",
        "type": "single",
        "responseType": "single",
        "prompt": "Which trend fits the supplied massive-star burning-stage example?",
        "choices": [
          "Later core burning stages are much shorter",
          "Every stage lasts the same number of years",
          "All burning stages finish in one core-bounce time",
          "Silicon burning lasts longer than hydrogen burning"
        ],
        "answer": 0,
        "hint": "Compare the first long-lived fuel with the final stages.",
        "explanation": "The example progresses from long hydrogen burning to rapidly shortening late stages. Core bounce is a separate millisecond process.",
        "source": "Lecture 23 pages 16–17, 22, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 16–17, 22, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-successive-fuels"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-core-envelope",
        "rootId": "exam-two-item-l23-core-envelope",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-successive-fuels",
        "concept": "exam-two-concept-successive-fuels",
        "type": "single",
        "responseType": "single",
        "prompt": "During a fuel-exhaustion adjustment, which pair of motions is consistent with the lecture’s model?",
        "choices": [
          "Core and envelope must always contract together",
          "Core contracts while envelope expands",
          "Neither region can change while a shell burns",
          "Core and envelope must always expand together"
        ],
        "answer": 1,
        "hint": "Different regions can respond in opposite directions.",
        "explanation": "The lecture describes core contraction and envelope expansion during these adjustments, while noting late-stage departures from a simple surface response.",
        "source": "Lecture 23 pages 16–17, 22, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 16–17, 22, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-successive-fuels"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-layers-reverse",
        "rootId": "exam-two-item-l23-layers-reverse",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-onion-order",
        "concept": "exam-two-concept-onion-order",
        "type": "order",
        "responseType": "order",
        "prompt": "Order these selected layers from the center outward in the lecture’s simplified massive-star model.",
        "choices": [
          "Carbon",
          "Hydrogen",
          "Iron",
          "Helium",
          "Silicon"
        ],
        "answer": [
          2,
          4,
          0,
          3,
          1
        ],
        "hint": "Reverse the supplied outside-to-center relationship.",
        "explanation": "Center outward gives iron → silicon → carbon → helium → hydrogen. Other detailed layers are omitted from this selected list.",
        "source": "Lecture 23 pages 16–17, 23, 28 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 16–17, 23, 28",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-onion-order"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-iron-target",
        "rootId": "exam-two-item-l23-iron-target",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-onion-order",
        "concept": "exam-two-concept-onion-order",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the inert iron-rich center in this selected-layer schematic.",
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": 3,
        "hint": "The most processed material is at the center.",
        "explanation": "D points to the iron-rich center. The other targets lie in progressively more external selected layers.",
        "source": "Lecture 23 pages 16–17, 23, 28 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 16–17, 23, 28",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-onion-order"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/onion-target.svg",
          "alt": "Concentric selected layers centered at 50,50. Targets A at 21,50; B at 31,50; C at 41,50; D at 50,50. Outer to inner highlighted zones are H, He, C, Si, Fe.",
          "caption": "Original selected-layer schematic; intermediate layers and physical scales simplified."
        },
        "targets": [
          {
            "label": "A",
            "x": 21,
            "y": 50
          },
          {
            "label": "B",
            "x": 31,
            "y": 50
          },
          {
            "label": "C",
            "x": 41,
            "y": 50
          },
          {
            "label": "D",
            "x": 50,
            "y": 50
          }
        ]
      },
      {
        "id": "exam-two-item-l23-layer-between",
        "rootId": "exam-two-item-l23-layer-between",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-onion-order",
        "concept": "exam-two-concept-onion-order",
        "type": "single",
        "responseType": "single",
        "prompt": "In the selected H–He–C–Si–Fe sequence, which listed element lies inward of helium but outward of silicon?",
        "choices": [
          "Helium",
          "Iron",
          "Carbon",
          "Hydrogen"
        ],
        "answer": 2,
        "hint": "Use both positional constraints.",
        "explanation": "Carbon is between helium and silicon in the selected sequence.",
        "source": "Lecture 23 pages 16–17, 23, 28 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 16–17, 23, 28",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-onion-order"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-choice-iron",
        "rootId": "exam-two-item-l23-choice-iron",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-iron-endpoint",
        "concept": "exam-two-concept-iron-endpoint",
        "type": "single",
        "responseType": "single",
        "prompt": "Which is the heaviest of these listed products reached in the lecture’s normal massive-star fusion sequence?",
        "choices": [
          "Iron",
          "Carbon",
          "Silicon",
          "Helium"
        ],
        "answer": 0,
        "hint": "Check the actual alternatives before recalling a prior answer.",
        "explanation": "Iron is heaviest among this set and marks the iron-group endpoint. The supplied silicon answer used a different set that did not include iron.",
        "source": "Lecture 23 pages 15, 20, 27 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 15, 20, 27",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-iron-endpoint"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-iron-energy",
        "rootId": "exam-two-item-l23-iron-energy",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-iron-endpoint",
        "concept": "exam-two-concept-iron-endpoint",
        "type": "single",
        "responseType": "single",
        "prompt": "Why does ordinary fusion beyond the iron group fail to sustain another normal core-burning stage?",
        "choices": [
          "It supplies more energy per reaction than hydrogen",
          "It prevents any further core contraction",
          "It does not provide the needed net energy release",
          "It restores the original core hydrogen reservoir"
        ],
        "answer": 2,
        "hint": "Focus on the energy balance rather than whether a nucleus can exist.",
        "explanation": "The iron group is near peak binding energy per nucleon; further fusion does not supply a continuing net energy source for support.",
        "source": "Lecture 23 pages 15, 20, 27 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 15, 20, 27",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-iron-endpoint"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-heavy-tf",
        "rootId": "exam-two-item-l23-heavy-tf",
        "moduleId": "exam-two-module-18",
        "conceptId": "exam-two-concept-iron-endpoint",
        "concept": "exam-two-concept-iron-endpoint",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: The iron-group fusion limit means elements heavier than iron can never be produced anywhere.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "A limit on one energy-producing route is not a limit on all synthesis.",
        "explanation": "False. Other pathways can produce heavier nuclei. The course’s fusion endpoint concerns the support-producing core sequence.",
        "source": "Lecture 23 pages 15, 20, 27 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 15, 20, 27",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-iron-endpoint"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-limit-object",
        "rootId": "exam-two-item-l23-limit-object",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-core-support-limit",
        "concept": "exam-two-concept-core-support-limit",
        "type": "single",
        "responseType": "single",
        "prompt": "A 15-solar-mass progenitor contains an iron core near 1.4 solar masses. Which component is approaching the lecture’s electron-support limit?",
        "choices": [
          "Only the outer hydrogen shell",
          "The iron core",
          "The whole initial star",
          "Only gas already lost in winds"
        ],
        "answer": 1,
        "hint": "The support criterion applies to the degenerate central object.",
        "explanation": "The approximately 1.4-solar-mass limit concerns the electron-supported core, not the entire initial progenitor or its expelled gas.",
        "source": "Lecture 23 pages 18–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 18–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-core-support-limit"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-support-kind",
        "rootId": "exam-two-item-l23-support-kind",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-core-support-limit",
        "concept": "exam-two-concept-core-support-limit",
        "type": "single",
        "responseType": "single",
        "prompt": "Which support is becoming insufficient at the start of the lecture’s iron-core collapse?",
        "choices": [
          "Electron degeneracy pressure",
          "Hydrogen-shell fusion alone",
          "Rotation of the entire Galactic disk",
          "Neutron degeneracy pressure alone"
        ],
        "answer": 0,
        "hint": "Identify the pressure source specified for the dense core.",
        "explanation": "Electron degeneracy pressure cannot indefinitely support the growing iron core near its limiting scale.",
        "source": "Lecture 23 pages 18–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 18–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-core-support-limit"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-no-fusion-rescue",
        "rootId": "exam-two-item-l23-no-fusion-rescue",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-core-support-limit",
        "concept": "exam-two-concept-core-support-limit",
        "type": "single",
        "responseType": "single",
        "prompt": "Why can the contracting iron core not simply ignite an ordinary iron-fusion stage to restore support?",
        "choices": [
          "The iron core has returned to main-sequence conditions",
          "A cool photosphere prevents every interior reaction",
          "Iron fusion restores the original hydrogen supply",
          "Further fusion fails to supply net supporting energy"
        ],
        "answer": 3,
        "hint": "Connect the energy endpoint with the structural failure.",
        "explanation": "Further iron-group fusion is not a net energy source for a new normal core-burning stage, so the usual contraction-to-new-fuel rescue ends.",
        "source": "Lecture 23 pages 18–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 18–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-core-support-limit"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-capture-products",
        "rootId": "exam-two-item-l23-capture-products",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-collapse-feedback",
        "concept": "exam-two-concept-collapse-feedback",
        "type": "single",
        "responseType": "single",
        "prompt": "Which products complete the electron-capture reaction p + e⁻ → ?",
        "choices": [
          "A proton and two electrons",
          "A proton and a photon",
          "A neutron and a neutrino",
          "A neutron and an electron"
        ],
        "answer": 2,
        "hint": "Conserve the reaction’s basic particle identity.",
        "explanation": "A proton and electron combine to form a neutron and neutrino in the supplied reaction.",
        "source": "Lecture 23 pages 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-feedback"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-photo-energy",
        "rootId": "exam-two-item-l23-photo-energy",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-collapse-feedback",
        "concept": "exam-two-concept-collapse-feedback",
        "type": "single",
        "responseType": "single",
        "prompt": "What does photodisintegration of heavy nuclei do to the collapsing core’s energy budget?",
        "choices": [
          "It restores electron support without using energy",
          "It releases energy by building heavier nuclei",
          "It replenishes the iron-fusion fuel supply",
          "It consumes energy to break nuclei apart"
        ],
        "answer": 3,
        "hint": "Breaking a bound nucleus costs energy.",
        "explanation": "High-energy photons can break heavy nuclei apart; this absorbs energy and helps weaken support.",
        "source": "Lecture 23 pages 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-feedback"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-capture-pressure",
        "rootId": "exam-two-item-l23-capture-pressure",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-collapse-feedback",
        "concept": "exam-two-concept-collapse-feedback",
        "type": "single",
        "responseType": "single",
        "prompt": "Why does electron capture contribute to the loss of core support?",
        "choices": [
          "More electrons remain to supply degeneracy pressure",
          "The same electrons supply greater pressure at fixed density",
          "Fewer electrons remain to supply degeneracy pressure",
          "All electron pressure is replaced by core hydrogen fusion"
        ],
        "answer": 2,
        "hint": "Track the number of electrons consumed.",
        "explanation": "Each capture consumes an electron, reducing the electron population contributing to degeneracy pressure.",
        "source": "Lecture 23 pages 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-feedback"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-bounce-clock",
        "rootId": "exam-two-item-l23-bounce-clock",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-bounce-remnants",
        "concept": "exam-two-concept-bounce-remnants",
        "type": "single",
        "responseType": "single",
        "prompt": "Why can the inner core bounce before a shock is seen reaching the stellar surface?",
        "choices": [
          "The shock needs time to cross the surrounding layers",
          "The shock and surface are always at the same radius",
          "The shock arrives before the central bounce occurs",
          "The shock cannot move through any stellar material"
        ],
        "answer": 0,
        "hint": "Separate the central event from outward propagation.",
        "explanation": "A central bounce launches a shock that must propagate through surrounding material; its surface arrival happens later.",
        "source": "Lecture 23 pages 19–21, 26 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 19–21, 26",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-bounce-remnants"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-bounce-guarantee",
        "rootId": "exam-two-item-l23-bounce-guarantee",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-bounce-remnants",
        "concept": "exam-two-concept-bounce-remnants",
        "type": "single",
        "responseType": "single",
        "prompt": "Which statement best respects the limits of the lecture’s simplified core-bounce picture?",
        "choices": [
          "Every bounce instantly ejects every stellar layer",
          "A neutron star is stable at any possible mass",
          "Shock formation alone does not guarantee an explosion",
          "Every massive progenitor leaves the same remnant mass"
        ],
        "answer": 2,
        "hint": "Separate a possible pathway from a universal outcome.",
        "explanation": "A shock may stall and need additional heating; the final explosion and compact remnant depend on the evolving system.",
        "source": "Lecture 23 pages 19–21, 26 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 19–21, 26",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-bounce-remnants"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l23-neutron-limit",
        "rootId": "exam-two-item-l23-neutron-limit",
        "moduleId": "exam-two-module-19",
        "conceptId": "exam-two-concept-bounce-remnants",
        "concept": "exam-two-concept-bounce-remnants",
        "type": "single",
        "responseType": "single",
        "prompt": "A compact remnant exceeds the mass that neutron-rich matter can support. Which outcome is consistent with the lecture?",
        "choices": [
          "Continued collapse toward a black hole",
          "Permanent neutron-star support at any greater mass",
          "A return to electron-supported white-dwarf equilibrium",
          "A new stable phase of ordinary iron fusion"
        ],
        "answer": 0,
        "hint": "A second kind of support still has a limit.",
        "explanation": "If compact-remnant support is insufficient, continued collapse can form a black hole. The neutron-star limit is separate from the earlier electron-core limit.",
        "source": "Lecture 23 pages 19–21, 26 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l23",
            "locator": "pages 19–21, 26",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-bounce-remnants"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-energy-complement",
        "rootId": "exam-two-item-l24-energy-complement",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-sn-energy-budget",
        "concept": "exam-two-concept-sn-energy-budget",
        "type": "single",
        "responseType": "single",
        "prompt": "In a simplified collapse budget, 99 of 100 energy units escape as neutrinos. How many units remain for other channels?",
        "choices": [
          "100 units",
          "1 unit",
          "10 units",
          "99 units"
        ],
        "answer": 1,
        "hint": "Subtract the escaping share from the complete budget.",
        "explanation": "100 − 99 = 1 unit. The result concerns the non-neutrino remainder, not a measured visible-light fraction.",
        "source": "Lecture 24 pages 5–7, 10–11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 5–7, 10–11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn-energy-budget"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/sn-energy.svg",
          "alt": "Original labeled teaching diagram; all relevant physical relationships are also described in the question."
        }
      },
      {
        "id": "exam-two-item-l24-neutrino-detection-paradox",
        "rootId": "exam-two-item-l24-neutrino-detection-paradox",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-sn-energy-budget",
        "concept": "exam-two-concept-sn-energy-budget",
        "type": "single",
        "responseType": "single",
        "prompt": "A supernova emits an enormous number of neutrinos, but a terrestrial detector records very few. What best explains this?",
        "choices": [
          "A neutrino must first become a visible photon",
          "Most cross the detector without interacting",
          "Most are absorbed in the star’s outermost gas",
          "The emitted count is the detected count"
        ],
        "answer": 1,
        "hint": "Distinguish emission from detection probability.",
        "explanation": "Weak interaction with matter lets most neutrinos traverse Earth and the detector without a detectable interaction. A tiny detected sample need not imply a weak source.",
        "source": "Lecture 24 pages 5–7, 10–11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 5–7, 10–11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn-energy-budget"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-one-percent-tf",
        "rootId": "exam-two-item-l24-one-percent-tf",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-sn-energy-budget",
        "concept": "exam-two-concept-sn-energy-budget",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: The lecture’s roughly 1% non-neutrino remainder means exactly 1% of the collapse energy is observed as visible light.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "An available energy budget is broader than one radiation band.",
        "explanation": "False. The remainder includes other energy channels, especially kinetic explosion energy; it is not identical to optical radiation.",
        "source": "Lecture 24 pages 5–7, 10–11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 5–7, 10–11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn-energy-budget"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-tail-source",
        "rootId": "exam-two-item-l24-tail-source",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-sn-radioactive-tail",
        "concept": "exam-two-concept-sn-radioactive-tail",
        "type": "single",
        "responseType": "single",
        "prompt": "Weeks after the initial shock heating, a supernova remains luminous longer than simple expansion cooling predicts. Which source explains the lecture’s late light?",
        "choices": [
          "Energy deposited by radioactive decay",
          "Steady core hydrogen burning in the remnant",
          "Reflection of unchanged progenitor light",
          "Expansion cooling as the only energy source"
        ],
        "answer": 0,
        "hint": "Look for a continuing energy supply inside the ejecta.",
        "explanation": "Radioactive nuclei made in the event decay and deposit energy. This is distinct from initial shock heating and from steady main-sequence fusion.",
        "source": "Lecture 24 pages 7, 33 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 7, 33",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn-radioactive-tail"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-decay-chain",
        "rootId": "exam-two-item-l24-decay-chain",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-sn-radioactive-tail",
        "concept": "exam-two-concept-sn-radioactive-tail",
        "type": "order",
        "responseType": "order",
        "prompt": "Order the nuclei in the standard radioactive chain discussed for a supernova’s fading light.",
        "choices": [
          "Nickel-56",
          "Cobalt-56",
          "Iron-56"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "Follow the parent, intermediate and stable endpoint.",
        "explanation": "Nickel-56 decays to cobalt-56, which decays to stable iron-56. These decays are not a claim that a nucleus splits into two comparable fragments.",
        "source": "Lecture 24 pages 7, 33 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 7, 33",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn-radioactive-tail"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-fission-boundary",
        "rootId": "exam-two-item-l24-fission-boundary",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-sn-radioactive-tail",
        "concept": "exam-two-concept-sn-radioactive-tail",
        "type": "single",
        "responseType": "single",
        "prompt": "Nickel-56 changes into cobalt-56 and then iron-56 in a supernova. How is this sequence classified?",
        "choices": [
          "Fusion of light nuclei into heavier nuclei",
          "Radioactive decay of unstable nuclei",
          "Fission of heavy nuclei into smaller fragments",
          "Cooling without any nuclear transformation"
        ],
        "answer": 1,
        "hint": "Follow how the unstable nuclei change, rather than treating every nuclear process as fusion or fission.",
        "explanation": "This is a radioactive decay chain. Fusion joins nuclei; fission splits a heavy nucleus into substantial fragments. The slide’s loose fission wording does not change the intended nickel–cobalt–iron decay mechanism.",
        "source": "Lecture 24 pages 7, 33 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 7, 33",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn-radioactive-tail"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-model-evidence",
        "rootId": "exam-two-item-l24-model-evidence",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-animation-simulation",
        "concept": "exam-two-concept-animation-simulation",
        "type": "single",
        "responseType": "single",
        "prompt": "Two supernova movies look equally realistic. Only one solves stated physical equations from initial conditions. Which comparison is justified?",
        "choices": [
          "Its equations must reproduce every real explosion",
          "Its realism proves its initial conditions are exact",
          "Its rendering replaces comparison with observations",
          "Its computed states test the stated physical model"
        ],
        "answer": 3,
        "hint": "Separate visual polish from how the states were obtained.",
        "explanation": "Numerical evolution can test consequences of its stated physical model. Appearance alone establishes neither equations nor observational accuracy.",
        "source": "Lecture 24 pages 12–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 12–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-animation-simulation"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-simulation-limits",
        "rootId": "exam-two-item-l24-simulation-limits",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-animation-simulation",
        "concept": "exam-two-concept-animation-simulation",
        "type": "single",
        "responseType": "single",
        "prompt": "What additional check best supports a numerical supernova model’s scientific use?",
        "choices": [
          "Replace uncertain outputs with a smoother hand-drawn sequence",
          "Compare predictions with observations and model limitations",
          "Judge the result only by the number of rendered frames",
          "Assume a supercomputer eliminates all approximations"
        ],
        "answer": 1,
        "hint": "A computed result still needs empirical and numerical scrutiny.",
        "explanation": "Observational comparison and checks of assumptions/resolution help assess what the model can support. More computing power alone is not validation.",
        "source": "Lecture 24 pages 12–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 12–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-animation-simulation"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-method-match",
        "rootId": "exam-two-item-l24-method-match",
        "moduleId": "exam-two-module-20",
        "conceptId": "exam-two-concept-animation-simulation",
        "concept": "exam-two-concept-animation-simulation",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each product or claim to the appropriate evidential role.",
        "choices": [
          "Observed evidence",
          "Teaching reconstruction",
          "Numerical model result"
        ],
        "answer": [
          1,
          2,
          0
        ],
        "hint": "Match each observation to the mechanism it actually constrains.",
        "explanation": "Illustration explains a chosen story; simulation computes a model; observation measures a signal. One does not silently become another.",
        "source": "Lecture 24 pages 12–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 12–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-animation-simulation"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "An authored movie illustrating shock travel",
            "answer": "Teaching reconstruction"
          },
          {
            "label": "Computed evolution from equations and initial conditions",
            "answer": "Numerical model result"
          },
          {
            "label": "A measured neutrino burst from the sky",
            "answer": "Observed evidence"
          }
        ],
        "options": [
          "Observed evidence",
          "Teaching reconstruction",
          "Numerical model result"
        ]
      },
      {
        "id": "exam-two-item-l24-shock-energy-conversion",
        "rootId": "exam-two-item-l24-shock-energy-conversion",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-remnant-shock-heating",
        "concept": "exam-two-concept-remnant-shock-heating",
        "type": "single",
        "responseType": "single",
        "prompt": "Fast ejecta strike slower gas around a supernova. Which energy conversion helps create X-ray-emitting plasma?",
        "choices": [
          "Optical reflection supplies the shocked gas’s heat",
          "Bulk kinetic energy becomes thermal energy",
          "Electron pressure becomes ordinary hydrogen fusion",
          "Thermal energy becomes faster bulk expansion only"
        ],
        "answer": 1,
        "hint": "Collisions and shocks can thermalize organized motion.",
        "explanation": "The shock converts part of the ejecta’s bulk motion into heat. Very hot plasma can emit X-rays.",
        "source": "Lecture 24 pages 17–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 17–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-remnant-shock-heating"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-remnant-region",
        "rootId": "exam-two-item-l24-remnant-region",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-remnant-shock-heating",
        "concept": "exam-two-concept-remnant-shock-heating",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the extended shock-heated shell rather than the central compact remnant.",
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": 1,
        "hint": "Use the diagram’s physical regions and axis labels.",
        "explanation": "B lies on the expanding shell. A is the compact center; C and D are away from the marked shock-heated region.",
        "source": "Lecture 24 pages 17–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 17–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-remnant-shock-heating"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/sn-remnant-target.svg",
          "alt": "Original schematic; A at 50 percent width, 50 percent height; B at 76 percent width, 50 percent height; C at 50 percent width, 12 percent height; D at 12 percent width, 80 percent height",
          "caption": "Original teaching diagram. Schematic scales; labeled axes and regions define the comparison."
        },
        "targets": [
          {
            "label": "A",
            "x": 50,
            "y": 50
          },
          {
            "label": "B",
            "x": 76,
            "y": 50
          },
          {
            "label": "C",
            "x": 50,
            "y": 12
          },
          {
            "label": "D",
            "x": 12,
            "y": 80
          }
        ]
      },
      {
        "id": "exam-two-item-l24-remnant-components",
        "rootId": "exam-two-item-l24-remnant-components",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-remnant-shock-heating",
        "concept": "exam-two-concept-remnant-shock-heating",
        "type": "single",
        "responseType": "single",
        "prompt": "An X-ray ring surrounds a tiny central pulsar. Which description correctly distinguishes them?",
        "choices": [
          "The ring is the neutron-star surface; the center is interstellar gas",
          "The ring is an unburned main-sequence core; the pulsar is its envelope",
          "The ring is extended remnant gas; the pulsar is a compact star",
          "The two are alternate photographs of the same-sized object"
        ],
        "answer": 2,
        "hint": "Keep the central object separate from the much larger ejecta environment.",
        "explanation": "The compact neutron star can power a pulsar, while the surrounding remnant occupies a far greater scale.",
        "source": "Lecture 24 pages 17–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 17–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-remnant-shock-heating"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/sn-remnant-target.svg",
          "alt": "Original labeled teaching diagram; all relevant physical relationships are also described in the question."
        }
      },
      {
        "id": "exam-two-item-l24-hydrogen-class",
        "rootId": "exam-two-item-l24-hydrogen-class",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-supernova-spectral-types",
        "concept": "exam-two-concept-supernova-spectral-types",
        "type": "single",
        "responseType": "single",
        "prompt": "A supernova spectrum contains clear hydrogen lines. Which broad spectral class fits the lecture’s definition?",
        "choices": [
          "Type Ic",
          "Type II",
          "Type Ib",
          "Type Ia"
        ],
        "answer": 1,
        "hint": "Apply the feature defining the broad I/II split.",
        "explanation": "Hydrogen lines define Type II in this classification. Type I lacks them.",
        "source": "Lecture 24 pages 29–30 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 29–30",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-supernova-spectral-types"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-stripped-core-collapse",
        "rootId": "exam-two-item-l24-stripped-core-collapse",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-supernova-spectral-types",
        "concept": "exam-two-concept-supernova-spectral-types",
        "type": "single",
        "responseType": "single",
        "prompt": "A massive progenitor loses its hydrogen envelope before core collapse. Why need its supernova not be Type II?",
        "choices": [
          "Every core collapse must retain hydrogen lines",
          "Envelope stripping can remove its hydrogen lines",
          "Removing surface hydrogen forces a white-dwarf remnant",
          "Every hydrogen-free event must be Type Ia"
        ],
        "answer": 1,
        "hint": "Envelope composition can change while the collapse mechanism remains.",
        "explanation": "Stripping can remove the hydrogen signature. Core-collapse Types Ib/Ic need not have Type II hydrogen lines.",
        "source": "Lecture 24 pages 29–30 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 29–30",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-supernova-spectral-types"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-spectral-group-match",
        "rootId": "exam-two-item-l24-spectral-group-match",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-supernova-spectral-types",
        "concept": "exam-two-concept-supernova-spectral-types",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each label to the statement supported by the lecture grouping.",
        "choices": [
          "No hydrogen lines in the spectrum",
          "Massive-star core-collapse classes",
          "Hydrogen lines in the spectrum"
        ],
        "answer": [
          2,
          0,
          1
        ],
        "hint": "Match each observation to the mechanism it actually constrains.",
        "explanation": "II is hydrogen-bearing; I lacks hydrogen; Ib/Ic/II share the course’s massive-star collapse grouping. Type I is broader than one physical pathway.",
        "source": "Lecture 24 pages 29–30 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 29–30",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-supernova-spectral-types"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Type II",
            "answer": "Hydrogen lines in the spectrum"
          },
          {
            "label": "Type I as a broad class",
            "answer": "No hydrogen lines in the spectrum"
          },
          {
            "label": "Ib, Ic and II together",
            "answer": "Massive-star core-collapse classes"
          }
        ],
        "options": [
          "No hydrogen lines in the spectrum",
          "Massive-star core-collapse classes",
          "Hydrogen lines in the spectrum"
        ]
      },
      {
        "id": "exam-two-item-l24-ozone-consequence",
        "rootId": "exam-two-item-l24-ozone-consequence",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-supernova-atmosphere",
        "concept": "exam-two-concept-supernova-atmosphere",
        "type": "single",
        "responseType": "single",
        "prompt": "In the lecture’s atmospheric pathway, high-energy radiation reduces ozone. Which consequence follows most directly?",
        "choices": [
          "Earth’s magnetic shielding becomes stronger",
          "Less solar ultraviolet reaches the surface",
          "The supernova’s visible flux stops at the ozone layer",
          "More solar ultraviolet reaches the surface"
        ],
        "answer": 3,
        "hint": "What protection does ozone provide?",
        "explanation": "Reduced ozone weakens shielding against solar ultraviolet radiation. This is an indirect atmospheric consequence, not direct ejecta impact.",
        "source": "Lecture 24 pages 26–28, 37 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 26–28, 37",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-supernova-atmosphere"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-flux-distance",
        "rootId": "exam-two-item-l24-flux-distance",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-supernova-atmosphere",
        "concept": "exam-two-concept-supernova-atmosphere",
        "type": "single",
        "responseType": "single",
        "prompt": "For the same supernova luminosity, compare received radiative flux at 5 light-years with that at 0.5 light-year, ignoring absorption.",
        "choices": [
          "One hundredth as much",
          "Ten times as much",
          "One tenth as much",
          "One hundred times as much"
        ],
        "answer": 0,
        "hint": "The distance grows by ten; square that factor.",
        "explanation": "F ∝ 1/d². At ten times the distance the flux is 1/100 of the nearer value. This is flux comparison, not an atmospheric lethality calculation.",
        "source": "Lecture 24 pages 26–28, 37 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 26–28, 37",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-supernova-atmosphere"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-hazard-not",
        "rootId": "exam-two-item-l24-hazard-not",
        "moduleId": "exam-two-module-21",
        "conceptId": "exam-two-concept-supernova-atmosphere",
        "concept": "exam-two-concept-supernova-atmosphere",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation is LEAST informative about the proposed pathway from high-energy radiation to ozone loss and increased solar ultraviolet exposure?",
        "choices": [
          "Atmospheric chemistry changes after irradiation",
          "Solar ultraviolet shielding decreases",
          "The received spectrum includes energetic radiation",
          "The event looks bright in visible light"
        ],
        "answer": 3,
        "hint": "Identify the observation that does not directly describe a step in that pathway.",
        "explanation": "Visible brightness alone does not identify the received high-energy dose or the atmospheric response. The other observations bear on steps in the proposed pathway, although no single one establishes the complete causal chain.",
        "source": "Lecture 24 pages 26–28, 37 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 26–28, 37",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-supernova-atmosphere"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-1987a-significance",
        "rootId": "exam-two-item-l24-1987a-significance",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-sn1987a-neutrinos",
        "concept": "exam-two-concept-sn1987a-neutrinos",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation of SN 1987A most directly connected it to the core-collapse energy channel emphasized in this lecture?",
        "choices": [
          "A nearly spherical pattern of ejecta expansion",
          "A hydrogen-bearing optical spectrum",
          "A high apparent brightness in one optical photograph",
          "A short burst of neutrino detections"
        ],
        "answer": 3,
        "hint": "Choose the messenger associated with the collapsing core.",
        "explanation": "The neutrino burst supplied evidence for the collapse channel; optical brightness alone does not provide the same test.",
        "source": "Lecture 24 pages 31–33, 38 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 31–33, 38",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn1987a-neutrinos"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-1987a-count-tf",
        "rootId": "exam-two-item-l24-1987a-count-tf",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-sn1987a-neutrinos",
        "concept": "exam-two-concept-sn1987a-neutrinos",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: The lecture’s detected neutrino count represents the total number emitted by SN 1987A.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Emission and a tiny terrestrial sample are different counts.",
        "explanation": "False. Most neutrinos missed Earth, and most that crossed a detector did not interact. The detected sample is vastly smaller than the emitted population.",
        "source": "Lecture 24 pages 31–33, 38 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 31–33, 38",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn1987a-neutrinos"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-1987a-progenitor",
        "rootId": "exam-two-item-l24-1987a-progenitor",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-sn1987a-neutrinos",
        "concept": "exam-two-concept-sn1987a-neutrinos",
        "type": "single",
        "responseType": "single",
        "prompt": "Which progenitor description is supported for SN 1987A in the supplied lecture?",
        "choices": [
          "A brown dwarf below sustained hydrogen burning",
          "A compact blue supergiant",
          "An isolated carbon–oxygen white dwarf",
          "A small red dwarf still on the main sequence"
        ],
        "answer": 1,
        "hint": "Use this event’s evidence rather than assuming every massive star has the same surface state.",
        "explanation": "The lecture identifies SN 1987A’s progenitor as a compact blue supergiant, an important reminder that massive-star endpoints are not all visibly red.",
        "source": "Lecture 24 pages 31–33, 38 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 31–33, 38",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn1987a-neutrinos"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-ring-brightening",
        "rootId": "exam-two-item-l24-ring-brightening",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-sn1987a-ring",
        "concept": "exam-two-concept-sn1987a-ring",
        "type": "single",
        "responseType": "single",
        "prompt": "A pre-existing knot in SN 1987A’s ring brightens when the outward shock arrives. What is the supported explanation?",
        "choices": [
          "The older knot reflects the original optical flash only",
          "Shock interaction deposits energy in the knot",
          "The shock removes thermal energy from the knot",
          "The knot begins ordinary core hydrogen fusion"
        ],
        "answer": 1,
        "hint": "Connect collision, heating and radiation.",
        "explanation": "The outward shock heats circumstellar material. The resulting interaction can increase its emission.",
        "source": "Lecture 24 pages 17, 31–35 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 17, 31–35",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn1987a-ring"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-ring-order",
        "rootId": "exam-two-item-l24-ring-order",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-sn1987a-ring",
        "concept": "exam-two-concept-sn1987a-ring",
        "type": "order",
        "responseType": "order",
        "prompt": "Order the events for the lecture’s circumstellar-ring interaction.",
        "choices": [
          "The progenitor loses ring material",
          "The core-collapse explosion launches ejecta",
          "The outward shock encounters ring knots",
          "Heated knots brighten"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "hint": "Separate material already present from the later energy delivery.",
        "explanation": "The material precedes the explosion; ejecta then propagate outward and heat the encountered knots. The brightening follows that interaction.",
        "source": "Lecture 24 pages 17, 31–35 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 17, 31–35",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn1987a-ring"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-ring-target",
        "rootId": "exam-two-item-l24-ring-target",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-sn1987a-ring",
        "concept": "exam-two-concept-sn1987a-ring",
        "type": "target",
        "responseType": "target",
        "prompt": "Select a dense circumstellar knot where a traveling shock can produce localized brightening.",
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": 2,
        "hint": "Use the diagram’s physical regions and axis labels.",
        "explanation": "C marks a dense knot on the pre-existing ring. A marks the central source; B and D are not the marked ring interaction.",
        "source": "Lecture 24 pages 17, 31–35 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 17, 31–35",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sn1987a-ring"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/sn1987a-target.svg",
          "alt": "Original schematic; A at 50 percent width, 50 percent height; B at 50 percent width, 17 percent height; C at 78 percent width, 50 percent height; D at 15 percent width, 82 percent height",
          "caption": "Original teaching diagram. Schematic scales; labeled axes and regions define the comparison."
        },
        "targets": [
          {
            "label": "A",
            "x": 50,
            "y": 50
          },
          {
            "label": "B",
            "x": 50,
            "y": 17
          },
          {
            "label": "C",
            "x": 78,
            "y": 50
          },
          {
            "label": "D",
            "x": 15,
            "y": 82
          }
        ]
      },
      {
        "id": "exam-two-item-l24-endpoint-match",
        "rootId": "exam-two-item-l24-endpoint-match",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-stellar-endpoint-paths",
        "concept": "exam-two-concept-stellar-endpoint-paths",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each explicitly stated evolutionary pathway to its outcome.",
        "choices": [
          "Black-hole outcome",
          "Planetary nebula plus white dwarf",
          "Supernova ejecta plus neutron star"
        ],
        "answer": [
          1,
          2,
          0
        ],
        "hint": "Match each observation to the mechanism it actually constrains.",
        "explanation": "The Sun-like path leaves an electron-supported remnant; the stated massive-star cases distinguish supported neutron-rich matter from continued collapse.",
        "source": "Lecture 24 pages 16, 30–36 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 16, 30–36",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-stellar-endpoint-paths"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Sun-like AGB envelope loss",
            "answer": "Planetary nebula plus white dwarf"
          },
          {
            "label": "Successful massive-star collapse with supported compact core",
            "answer": "Supernova ejecta plus neutron star"
          },
          {
            "label": "Continued collapse beyond compact-core support",
            "answer": "Black-hole outcome"
          }
        ],
        "options": [
          "Black-hole outcome",
          "Planetary nebula plus white dwarf",
          "Supernova ejecta plus neutron star"
        ]
      },
      {
        "id": "exam-two-item-l24-remnant-nondetection",
        "rootId": "exam-two-item-l24-remnant-nondetection",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-stellar-endpoint-paths",
        "concept": "exam-two-concept-stellar-endpoint-paths",
        "type": "single",
        "responseType": "single",
        "prompt": "An old remnant image shows no detected central neutron star. Which inference is justified from that non-detection alone?",
        "choices": [
          "It proves a black hole is the compact object",
          "It proves every compact object is absent",
          "It does not uniquely identify the compact object",
          "It proves a white dwarf is the compact object"
        ],
        "answer": 2,
        "hint": "Failure to detect one source is not a unique identification of another.",
        "explanation": "A non-detection depends on sensitivity, obscuration and source properties. It cannot alone establish a black hole or eliminate every compact remnant.",
        "source": "Lecture 24 pages 16, 30–36 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 16, 30–36",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-stellar-endpoint-paths"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l24-remnant-conditional",
        "rootId": "exam-two-item-l24-remnant-conditional",
        "moduleId": "exam-two-module-22",
        "conceptId": "exam-two-concept-stellar-endpoint-paths",
        "concept": "exam-two-concept-stellar-endpoint-paths",
        "type": "single",
        "responseType": "single",
        "prompt": "A core-collapse event leaves stable neutron-rich matter at its center. What is that central object in the course model?",
        "choices": [
          "The extended ejecta shell",
          "A neutron star",
          "A black hole",
          "A white dwarf"
        ],
        "answer": 1,
        "hint": "The stem specifies the compact material and its support.",
        "explanation": "Supported neutron-rich compact matter is a neutron star. The expanding shell is a separate, much larger component.",
        "source": "Lecture 24 pages 16, 30–36 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l24",
            "locator": "pages 16, 30–36",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-stellar-endpoint-paths"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-support-source",
        "rootId": "exam-two-item-l25-support-source",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-electron-support",
        "concept": "exam-two-concept-wd-electron-support",
        "type": "single",
        "responseType": "single",
        "prompt": "A carbon–oxygen remnant cools after ordinary core fusion has ended. What supports the resulting white dwarf in the lecture model?",
        "choices": [
          "Electron degeneracy pressure",
          "Neutron degeneracy pressure alone",
          "Radiation pressure from an active main-sequence core",
          "Thermal pressure from steady core hydrogen burning"
        ],
        "answer": 0,
        "hint": "Identify the pressure-bearing particles in this remnant.",
        "explanation": "Electron degeneracy pressure supports the white dwarf without requiring ongoing ordinary core fusion.",
        "source": "Lecture 25 pages 8–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 8–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-electron-support"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-degeneracy-cause",
        "rootId": "exam-two-item-l25-degeneracy-cause",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-electron-support",
        "concept": "exam-two-concept-wd-electron-support",
        "type": "single",
        "responseType": "single",
        "prompt": "In a simplified degenerate electron gas, what makes further crowding resist compression?",
        "choices": [
          "Every possible quantum state becomes occupied",
          "Electrons all share one lowest-momentum state",
          "Electrons must occupy higher-momentum states",
          "Pressure requires a continuing rise in temperature"
        ],
        "answer": 2,
        "hint": "The restriction concerns identical-particle state occupancy.",
        "explanation": "Pauli exclusion requires additional occupied momentum states as density rises. That pressure is not literal occupation of every possible state.",
        "source": "Lecture 25 pages 8–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 8–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-electron-support"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-incompressible-tf",
        "rootId": "exam-two-item-l25-incompressible-tf",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-electron-support",
        "concept": "exam-two-concept-wd-electron-support",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: Electron degeneracy makes a white dwarf literally incompressible under every possible added mass.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "A support mechanism can resist compression without preventing it absolutely.",
        "explanation": "False. White-dwarf structure changes with mass, and electron-degeneracy support has a limiting mass scale. “Incompressible” is a simplified slide description.",
        "source": "Lecture 25 pages 8–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 8–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-electron-support"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-progenitor-limit",
        "rootId": "exam-two-item-l25-progenitor-limit",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-mass-limit",
        "concept": "exam-two-concept-wd-mass-limit",
        "type": "single",
        "responseType": "single",
        "prompt": "A star begins with several solar masses, loses its envelope, and leaves a 0.7-solar-mass white dwarf. Which mass should be compared with the Chandrasekhar limit?",
        "choices": [
          "The 0.7-solar-mass remnant",
          "The total expelled-envelope mass",
          "The remnant plus all expelled material",
          "The initial whole-star mass"
        ],
        "answer": 0,
        "hint": "The limit applies to the electron-supported compact object.",
        "explanation": "The relevant mass is the white dwarf’s own mass. The initial progenitor and expelled gas are different physical objects.",
        "source": "Lecture 25 pages 10–11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 10–11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-mass-limit"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-limit-identification",
        "rootId": "exam-two-item-l25-limit-identification",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-mass-limit",
        "concept": "exam-two-concept-wd-mass-limit",
        "type": "single",
        "responseType": "single",
        "prompt": "Which object is directly associated with the lecture’s roughly 1.4-solar-mass maximum for electron-degeneracy support?",
        "choices": [
          "A red giant’s diffuse outer envelope",
          "A neutron star at the same maximum mass",
          "A white dwarf supported by electrons",
          "An ordinary main-sequence star"
        ],
        "answer": 2,
        "hint": "Match the support mechanism to the object.",
        "explanation": "The Chandrasekhar scale refers to the electron-supported white dwarf. Neutron stars have a separate support problem and limiting mass.",
        "source": "Lecture 25 pages 10–11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 10–11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-mass-limit"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-wd-mass-radius",
        "rootId": "exam-two-item-l25-wd-mass-radius",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-mass-limit",
        "concept": "exam-two-concept-wd-mass-limit",
        "type": "single",
        "responseType": "single",
        "prompt": "A white dwarf has a substantial fraction of the Sun’s mass packed into roughly Earth’s radius. What follows about its mean density compared with the Sun?",
        "choices": [
          "It is lower because the total mass is lower",
          "It is similar because their masses have the same order of magnitude",
          "It is fixed by surface temperature alone",
          "It is much higher because its volume is so much smaller"
        ],
        "answer": 3,
        "hint": "Mean density compares mass with volume, not mass alone.",
        "explanation": "An Earth-scale volume containing a substantial fraction of a solar mass has a much greater mean density than the Sun. The radius is an illustrative scale; white dwarfs do not all have one exact radius.",
        "source": "Lecture 25 pages 10–11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 10–11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-mass-limit"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-hot-dim-cause",
        "rootId": "exam-two-item-l25-hot-dim-cause",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-hot-small",
        "concept": "exam-two-concept-wd-hot-small",
        "type": "single",
        "responseType": "single",
        "prompt": "The white-dwarf group lies below the main sequence at the same temperature on this H–R diagram. What explains its lower luminosity?",
        "choices": [
          "Its greater distance reduces intrinsic luminosity",
          "Its emitting surface area is much smaller",
          "Its small mass requires a much larger photosphere",
          "Its higher surface temperature reduces surface flux"
        ],
        "answer": 1,
        "hint": "Use both radius and temperature in the luminosity relation.",
        "explanation": "At the same surface temperature, luminosity scales with emitting surface area. A smaller radius gives a smaller total luminosity.",
        "source": "Lecture 25 pages 8, 11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 8, 11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-hot-small"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/wd-hr-target.svg",
          "alt": "Original labeled teaching diagram; all relevant physical relationships are also described in the question."
        }
      },
      {
        "id": "exam-two-item-l25-wd-hr-target",
        "rootId": "exam-two-item-l25-wd-hr-target",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-hot-small",
        "concept": "exam-two-concept-wd-hot-small",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the hot, low-luminosity region where white dwarfs belong on this H–R diagram.",
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": 2,
        "hint": "Use the diagram’s physical regions and axis labels.",
        "explanation": "C is hot and dim: the lower-left region on the conventional H–R axes. A is hot/bright; B is cool/bright; D is cool/dim.",
        "source": "Lecture 25 pages 8, 11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 8, 11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-hot-small"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/wd-hr-target.svg",
          "alt": "Original schematic; A at 23 percent width, 24 percent height; B at 76 percent width, 24 percent height; C at 23 percent width, 76 percent height; D at 76 percent width, 76 percent height",
          "caption": "Original teaching diagram. Schematic scales; labeled axes and regions define the comparison."
        },
        "targets": [
          {
            "label": "A",
            "x": 23,
            "y": 24
          },
          {
            "label": "B",
            "x": 76,
            "y": 24
          },
          {
            "label": "C",
            "x": 23,
            "y": 76
          },
          {
            "label": "D",
            "x": 76,
            "y": 76
          }
        ]
      },
      {
        "id": "exam-two-item-l25-equal-temperature-area",
        "rootId": "exam-two-item-l25-equal-temperature-area",
        "moduleId": "exam-two-module-23",
        "conceptId": "exam-two-concept-wd-hot-small",
        "concept": "exam-two-concept-wd-hot-small",
        "type": "single",
        "responseType": "single",
        "prompt": "Two idealized stars have the same surface temperature. One has one tenth the other’s radius. Its luminosity is what fraction of the larger star’s?",
        "choices": [
          "10",
          "1/10",
          "1/100",
          "100"
        ],
        "answer": 2,
        "hint": "At fixed temperature, luminosity follows radius squared.",
        "explanation": "Lsmall/Llarge = (Rsmall/Rlarge)² = (1/10)² = 1/100. The equal-temperature assumption fixes the T⁴ factor.",
        "source": "Lecture 25 pages 8, 11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 8, 11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-wd-hot-small"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-periodic-not-aliens",
        "rootId": "exam-two-item-l25-periodic-not-aliens",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-pulsar-discovery-evidence",
        "concept": "exam-two-concept-pulsar-discovery-evidence",
        "type": "single",
        "responseType": "single",
        "prompt": "Why did finding several similar pulsating sources weaken the initial LGM interpretation?",
        "choices": [
          "It uniquely established a white-dwarf interpretation",
          "It removed the need to explain the pulse periods",
          "It supported a natural astrophysical population",
          "It proved that every pulse was an instrument error"
        ],
        "answer": 2,
        "hint": "Use repeated observations to compare explanations.",
        "explanation": "A population of similar sources with astrophysical properties supported a natural explanation; the nickname did not establish intelligence.",
        "source": "Lecture 25 pages 14–17, 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 14–17, 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulsar-discovery-evidence"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-discovery-person",
        "rootId": "exam-two-item-l25-discovery-person",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-pulsar-discovery-evidence",
        "concept": "exam-two-concept-pulsar-discovery-evidence",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation is associated with Jocelyn Bell in the supplied pulsar-discovery account?",
        "choices": [
          "Identifying the radioactive tail of SN 1987A",
          "Recognizing a regular radio pulse signal",
          "Discovering hydrogen-line supernova classification",
          "Deriving the limiting mass of white dwarfs"
        ],
        "answer": 1,
        "hint": "Identify the observation, not merely a familiar scientist’s name.",
        "explanation": "Bell recognized the repeating radio signal in the 1967 account. Its regularity helped launch the investigation of pulsars.",
        "source": "Lecture 25 pages 14–17, 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 14–17, 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulsar-discovery-evidence"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-lgm-label",
        "rootId": "exam-two-item-l25-lgm-label",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-pulsar-discovery-evidence",
        "concept": "exam-two-concept-pulsar-discovery-evidence",
        "type": "single",
        "responseType": "single",
        "prompt": "In the lecture’s discovery story, what did the provisional label LGM refer to?",
        "choices": [
          "Little Green Men",
          "Large Galactic Magnet",
          "Low Gravity Motion",
          "Luminous Giant Matter"
        ],
        "answer": 0,
        "hint": "This is historical naming, not the accepted mechanism.",
        "explanation": "LGM stood for Little Green Men. The later astrophysical explanation concerns rotating neutron stars, not alien transmitters.",
        "source": "Lecture 25 pages 14–17, 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 14–17, 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulsar-discovery-evidence"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-crab-model",
        "rootId": "exam-two-item-l25-crab-model",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-pulse-period-compactness",
        "concept": "exam-two-concept-pulse-period-compactness",
        "type": "single",
        "responseType": "single",
        "prompt": "Why was the Crab’s approximately 33-millisecond period a strong objection to the rotating-white-dwarf explanation?",
        "choices": [
          "A white-dwarf-sized object could not stay bound at that spin",
          "The measured pulse period is longer than solar rotation",
          "Any repeated signal must arise from a binary orbit",
          "White dwarfs must emit only optical light at every time"
        ],
        "answer": 0,
        "hint": "Compare the necessary rotation speed with the object’s size and binding.",
        "explanation": "At that period a white dwarf would need an unsustainable rotation. A much smaller neutron star can support the rapid-rotation interpretation.",
        "source": "Lecture 25 pages 12, 16–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 12, 16–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulse-period-compactness"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-period-frequency",
        "rootId": "exam-two-item-l25-period-frequency",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-pulse-period-compactness",
        "concept": "exam-two-concept-pulse-period-compactness",
        "type": "single",
        "responseType": "single",
        "prompt": "A pulsar repeats every 0.02 seconds. What is its repetition frequency?",
        "choices": [
          "200 cycles per second",
          "50 cycles per second",
          "2 cycles per second",
          "0.02 cycles per second"
        ],
        "answer": 1,
        "hint": "Frequency is the reciprocal of period.",
        "explanation": "f = 1/0.02 s = 50 s⁻¹. This is a direct conversion between time per pulse and pulses per second.",
        "source": "Lecture 25 pages 12, 16–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 12, 16–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulse-period-compactness"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-period-order",
        "rootId": "exam-two-item-l25-period-order",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-pulse-period-compactness",
        "concept": "exam-two-concept-pulse-period-compactness",
        "type": "order",
        "responseType": "order",
        "prompt": "Order the pulse periods from slowest repetition to fastest repetition.",
        "choices": [
          "0.714 seconds",
          "0.35 seconds",
          "0.033 seconds",
          "0.0058 seconds"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "hint": "Slowest repetition has the longest time between pulses.",
        "explanation": "Decreasing period means increasing frequency: 0.714, 0.35, 0.033, then 0.0058 seconds. All four entries are included.",
        "source": "Lecture 25 pages 12, 16–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 12, 16–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulse-period-compactness"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-density-radius",
        "rootId": "exam-two-item-l25-density-radius",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-neutron-density-evidence",
        "concept": "exam-two-concept-neutron-density-evidence",
        "type": "single",
        "responseType": "single",
        "prompt": "Two idealized spherical objects have the same mass. One has half the radius of the other. Using density = mass/volume and volume ∝ radius³, how do their mean densities compare?",
        "choices": [
          "The smaller one is twice as dense",
          "Their densities must be equal",
          "The smaller one is half as dense",
          "The smaller one is eight times denser"
        ],
        "answer": 3,
        "hint": "Volume is proportional to radius cubed.",
        "explanation": "At fixed mass, density scales as 1/R³. Halving radius reduces volume to 1/8 and raises density by a factor of eight.",
        "source": "Lecture 25 pages 17–19, 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 17–19, 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-neutron-density-evidence"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-crab-location-evidence",
        "rootId": "exam-two-item-l25-crab-location-evidence",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-neutron-density-evidence",
        "concept": "exam-two-concept-neutron-density-evidence",
        "type": "single",
        "responseType": "single",
        "prompt": "A rapid pulsar lies at the center of the Crab supernova remnant. What connection does this support?",
        "choices": [
          "Every hydrogen-poor supernova leaves the same remnant",
          "The pulsar and nebula must have the same radius",
          "Core collapse can leave a neutron star",
          "Optical brightness alone proves neutron degeneracy"
        ],
        "answer": 2,
        "hint": "Use position together with the compact-source interpretation.",
        "explanation": "The central compact pulsar and surrounding supernova remnant support the neutron-star/core-collapse connection. This does not make every explosion identical.",
        "source": "Lecture 25 pages 17–19, 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 17–19, 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-neutron-density-evidence"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-object-scale-match",
        "rootId": "exam-two-item-l25-object-scale-match",
        "moduleId": "exam-two-module-24",
        "conceptId": "exam-two-concept-neutron-density-evidence",
        "concept": "exam-two-concept-neutron-density-evidence",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each object or component to the appropriate description.",
        "choices": [
          "Earth-scale electron-supported remnant",
          "Expanding shocked gas on a far larger scale",
          "City-scale stellar-mass compact remnant"
        ],
        "answer": [
          2,
          0,
          1
        ],
        "hint": "Match each observation to the mechanism it actually constrains.",
        "explanation": "The compact objects differ in scale and support; the supernova remnant is the extended affected gas, not a compact-star surface.",
        "source": "Lecture 25 pages 17–19, 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 17–19, 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-neutron-density-evidence"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Neutron star",
            "answer": "City-scale stellar-mass compact remnant"
          },
          {
            "label": "White dwarf",
            "answer": "Earth-scale electron-supported remnant"
          },
          {
            "label": "Extended supernova remnant",
            "answer": "Expanding shocked gas on a far larger scale"
          }
        ],
        "options": [
          "Earth-scale electron-supported remnant",
          "Expanding shocked gas on a far larger scale",
          "City-scale stellar-mass compact remnant"
        ]
      },
      {
        "id": "exam-two-item-l25-spin-quarter-period",
        "rootId": "exam-two-item-l25-spin-quarter-period",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-compact-spin-up",
        "concept": "exam-two-concept-compact-spin-up",
        "type": "single",
        "responseType": "single",
        "prompt": "An isolated object keeps its mass and shape factor while its radius halves. Use I ∝ radius² and conserved angular momentum Iω. Its rotation period becomes what fraction of the original?",
        "choices": [
          "Twice",
          "One half",
          "Four times",
          "One quarter"
        ],
        "answer": 3,
        "hint": "Moment of inertia scales as radius squared under the stated assumptions.",
        "explanation": "I becomes 1/4 as large. Conserved Iω makes ω four times greater, so period becomes 1/4 as long.",
        "source": "Lecture 25 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-compact-spin-up"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-spin-assumption",
        "rootId": "exam-two-item-l25-spin-assumption",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-compact-spin-up",
        "concept": "exam-two-concept-compact-spin-up",
        "type": "single",
        "responseType": "single",
        "prompt": "Which condition is needed for the simple contraction-to-spin-up argument used here?",
        "choices": [
          "External torque and angular-momentum loss are negligible",
          "All magnetic fields have exactly equal strength",
          "A large braking torque acts throughout contraction",
          "Contraction leaves the moment of inertia unchanged"
        ],
        "answer": 0,
        "hint": "Identify what lets the angular momentum remain approximately fixed.",
        "explanation": "The simple argument assumes angular momentum is retained. Large torques or mass/angular-momentum loss change the prediction.",
        "source": "Lecture 25 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-compact-spin-up"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-sun-analogy-tf",
        "rootId": "exam-two-item-l25-sun-analogy-tf",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-compact-spin-up",
        "concept": "exam-two-concept-compact-spin-up",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: The Sun-to-neutron-star spin analogy proves the actual Sun will become a neutron star.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "A hypothetical comparison does not establish the star’s evolutionary endpoint.",
        "explanation": "False. The analogy illustrates angular momentum in contraction. The Sun-like evolutionary pathway leaves a white dwarf in the course model.",
        "source": "Lecture 25 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-compact-spin-up"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-lighthouse-mechanism",
        "rootId": "exam-two-item-l25-lighthouse-mechanism",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-pulsar-beam-geometry",
        "concept": "exam-two-concept-pulsar-beam-geometry",
        "type": "single",
        "responseType": "single",
        "prompt": "A neutron star’s beam repeatedly crosses our line of sight. What causes the observed pulse train in the lecture model?",
        "choices": [
          "Rotation sweeps a directed beam across the observer",
          "Repeated fusion ignition switches the whole core on and off",
          "A fixed beam points at every observer during every rotation",
          "Bulk expansion and contraction pulses the entire star"
        ],
        "answer": 0,
        "hint": "The emitter’s geometry can change what we receive without the whole star pulsating.",
        "explanation": "The tilted magnetic-beam pattern rotates with the neutron star. We receive a pulse when the beam crosses our direction.",
        "source": "Lecture 25 pages 17–19, 22 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 17–19, 22",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulsar-beam-geometry"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-viewing-direction",
        "rootId": "exam-two-item-l25-viewing-direction",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-pulsar-beam-geometry",
        "concept": "exam-two-concept-pulsar-beam-geometry",
        "type": "single",
        "responseType": "single",
        "prompt": "The same active neutron star beams away from Earth throughout its rotation. What observation is consistent with this geometry?",
        "choices": [
          "The absence of pulses proves no beam is emitted",
          "The absence of pulses proves the star is not neutron-rich",
          "The absence of pulses proves the rotation has stopped",
          "No beam pulses reach us while rotation continues"
        ],
        "answer": 3,
        "hint": "Emission and our intersection with the swept beam are separate conditions.",
        "explanation": "A rotating neutron star can be invisible as a pulsar to a particular observer if the beam never crosses that sightline.",
        "source": "Lecture 25 pages 17–19, 22 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 17–19, 22",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulsar-beam-geometry"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-magnetic-pole-target",
        "rootId": "exam-two-item-l25-magnetic-pole-target",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-pulsar-beam-geometry",
        "concept": "exam-two-concept-pulsar-beam-geometry",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the magnetic-pole emission region in the tilted-axis diagram, rather than the rotation pole.",
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": 1,
        "hint": "Use the diagram’s physical regions and axis labels.",
        "explanation": "B marks the tilted magnetic-pole/beam region. A is on the rotation axis; C is the center; D is outside the marked emission region.",
        "source": "Lecture 25 pages 17–19, 22 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 17–19, 22",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pulsar-beam-geometry"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/pulsar-axes-target.svg",
          "alt": "Original schematic; A at 50 percent width, 18 percent height; B at 69 percent width, 34 percent height; C at 50 percent width, 50 percent height; D at 88 percent width, 74 percent height",
          "caption": "Original teaching diagram. Schematic scales; labeled axes and regions define the comparison."
        },
        "targets": [
          {
            "label": "A",
            "x": 50,
            "y": 18
          },
          {
            "label": "B",
            "x": 69,
            "y": 34
          },
          {
            "label": "C",
            "x": 50,
            "y": 50
          },
          {
            "label": "D",
            "x": 88,
            "y": 74
          }
        ]
      },
      {
        "id": "exam-two-item-l25-magnetar-defining",
        "rootId": "exam-two-item-l25-magnetar-defining",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-magnetar-fields",
        "concept": "exam-two-concept-magnetar-fields",
        "type": "single",
        "responseType": "single",
        "prompt": "Which property most directly distinguishes a magnetar in this lesson?",
        "choices": [
          "An event horizon surrounding every stellar surface",
          "An exceptionally strong neutron-star magnetic field",
          "A compulsory millisecond period in every observed case",
          "An electron-supported carbon–oxygen white-dwarf core"
        ],
        "answer": 1,
        "hint": "Separate the field-based category from one proposed birth-spin model.",
        "explanation": "The exceptionally strong magnetic field and related activity define the magnetar distinction. Its current period need not be milliseconds.",
        "source": "Lecture 25 pages 21, 26 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 21, 26",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-magnetar-fields"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-magnetar-second-period",
        "rootId": "exam-two-item-l25-magnetar-second-period",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-magnetar-fields",
        "concept": "exam-two-concept-magnetar-fields",
        "type": "single",
        "responseType": "single",
        "prompt": "A neutron star rotates once every seven seconds and exhibits strong magnetic outbursts. Does the period alone rule out a magnetar?",
        "choices": [
          "Yes; a seconds-long period implies a weak magnetic field",
          "Yes; every magnetar must rotate faster than one millisecond",
          "No; observed magnetars need not have millisecond periods",
          "No; every object with a seven-second period is a magnetar"
        ],
        "answer": 2,
        "hint": "Current observed spin and possible rapid birth spin are different quantities.",
        "explanation": "A second-long period is compatible with observed magnetars. Classification also requires magnetic/activity evidence; period alone is insufficient either way.",
        "source": "Lecture 25 pages 21, 26 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 21, 26",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-magnetar-fields"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l25-magnetar-power-conditional",
        "rootId": "exam-two-item-l25-magnetar-power-conditional",
        "moduleId": "exam-two-module-25",
        "conceptId": "exam-two-concept-magnetar-fields",
        "concept": "exam-two-concept-magnetar-fields",
        "type": "single",
        "responseType": "single",
        "prompt": "A model proposes that a newborn, rapidly rotating magnetar transfers rotational energy into supernova ejecta. Which statement preserves the model’s proper scope?",
        "choices": [
          "It uniquely identifies every bright supernova as a magnetar",
          "It is a possible energy source for some luminous events",
          "It requires all radioactive heating to stop completely",
          "It requires energy transfer without any rotational-energy loss"
        ],
        "answer": 1,
        "hint": "A proposed mechanism for some events is not a universal identification.",
        "explanation": "Rapidly rotating magnetars can be modeled as energy sources for some luminous explosions. The premise does not establish that explanation for every supernova.",
        "source": "Lecture 25 pages 21, 26 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l25",
            "locator": "pages 21, 26",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-magnetar-fields"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      }
    ]
  },
  {
    "id": "exam-two-smart-simulator",
    "examId": "exam-two",
    "kind": "simulator",
    "title": "Exam 2 Rehearsal · 25 questions",
    "description": "Feedback waits until submission. Uses the observed Exam 1 format mix as a practice design, not a confirmed Exam 2 blueprint.",
    "lane": "Exam 2",
    "chapters": "Lectures 13–18 · Exam 2: material available so far",
    "status": "Ready",
    "questions": [
      {
        "id": "exam-two-item-parallax-reference",
        "rootId": "exam-two-item-parallax-reference",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parallax-geometry",
        "concept": "exam-two-concept-parallax-geometry",
        "type": "single",
        "responseType": "single",
        "prompt": "A nearby star changes position between January and July. What provides the reference for measuring its parallax?",
        "choices": [
          "Much more distant background stars",
          "A companion orbiting the target star",
          "The target’s position relative to the Sun",
          "Earth’s horizon at each observation"
        ],
        "answer": 0,
        "hint": "Separate a positional reference from a brightness measurement.",
        "explanation": "The distant background provides an approximately fixed reference for the nearby star’s apparent displacement.",
        "source": "Lecture 13 pages 7–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 7–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parallax-geometry"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-parallax-motion",
        "rootId": "exam-two-item-parallax-motion",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parallax-geometry",
        "concept": "exam-two-concept-parallax-geometry",
        "type": "single",
        "responseType": "single",
        "prompt": "Why observe a parallax target over several years rather than use only two photographs?",
        "choices": [
          "To make Earth’s orbital baseline grow each year",
          "To separate annual parallax from stellar motion",
          "To make the parallax angle steadily accumulate",
          "To remove all motion from the reference stars"
        ],
        "answer": 1,
        "hint": "One change can contain more than one kind of motion.",
        "explanation": "The annual displacement repeats with Earth’s orbit; proper motion contributes another positional change. Repeated measurements distinguish them.",
        "source": "Lecture 13 pages 7–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 7–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parallax-geometry"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-parsec-convert",
        "rootId": "exam-two-item-parsec-convert",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parsec",
        "concept": "exam-two-concept-parsec",
        "type": "single",
        "responseType": "single",
        "prompt": "A star has a parallax of 0.25 arcsecond. What is its distance?",
        "choices": [
          "0.25 pc",
          "2 pc",
          "4 pc",
          "25 pc"
        ],
        "answer": 2,
        "hint": "Take the reciprocal of the angle in arcseconds.",
        "explanation": "d = 1/0.25 = 4 pc. The units matter: p must be in arcseconds.",
        "source": "Lecture 13 pages 13–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 13–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parsec"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-parsec-limit",
        "rootId": "exam-two-item-parsec-limit",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parsec",
        "concept": "exam-two-concept-parsec",
        "type": "single",
        "responseType": "single",
        "prompt": "An instrument can resolve parallax down to 0.02 arcsecond. Using the lecture’s simple limit model, what distance corresponds to that angle?",
        "choices": [
          "0.02 pc",
          "2 pc",
          "20 pc",
          "50 pc"
        ],
        "answer": 3,
        "hint": "The smallest useful angle sets the largest useful distance.",
        "explanation": "d = 1/0.02 = 50 pc. A smaller measurable angle would extend the distance range.",
        "source": "Lecture 13 pages 13–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 13–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parsec"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-parallax-reverse",
        "rootId": "exam-two-item-parallax-reverse",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parallax-ratio",
        "concept": "exam-two-concept-parallax-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Star A is three times farther away than star B. How does A’s parallax compare with B’s?",
        "choices": [
          "Three times as large",
          "One-third as large",
          "Nine times as large",
          "The same size"
        ],
        "answer": 1,
        "hint": "Reverse the relationship between distance and angle.",
        "explanation": "Tripling distance divides parallax by three: pA/pB = dB/dA = 1/3.",
        "source": "Lecture 13 pages 10–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 10–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parallax-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/parallax-assessment.svg",
          "alt": "Original schematic of the comparison described in the question; no answer is marked.",
          "caption": "Original instructional model from the supplied relationship.",
          "source": "Lecture 13 pages 10–16 · original practice"
        }
      },
      {
        "id": "exam-two-item-parallax-compare",
        "rootId": "exam-two-item-parallax-compare",
        "moduleId": "exam-two-module-01",
        "conceptId": "exam-two-concept-parallax-ratio",
        "concept": "exam-two-concept-parallax-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Star X has p = 0.6 arcsecond and star Y has p = 0.15 arcsecond. Which comparison is correct?",
        "choices": [
          "X is four times farther away",
          "Y is twice as far away",
          "Y is four times farther away",
          "They are equally distant"
        ],
        "answer": 2,
        "hint": "The smaller parallax belongs to the farther star.",
        "explanation": "dY/dX = pX/pY = 0.6/0.15 = 4.",
        "source": "Lecture 13 pages 10–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 10–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-parallax-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-observer-move",
        "rootId": "exam-two-item-observer-move",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-flux-luminosity",
        "concept": "exam-two-concept-flux-luminosity",
        "type": "single",
        "responseType": "single",
        "prompt": "An observer moves twice as far from a star whose radius and temperature stay fixed. Which quantity stays unchanged?",
        "choices": [
          "The star’s luminosity",
          "The light received per square meter",
          "The star’s apparent magnitude",
          "The star’s parallax angle"
        ],
        "answer": 0,
        "hint": "Ask which quantity belongs to the star rather than the observer.",
        "explanation": "Intrinsic luminosity stays fixed. Received brightness decreases, apparent magnitude increases, and parallax decreases.",
        "source": "Lecture 13 pages 19–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-flux-luminosity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-flux-not",
        "rootId": "exam-two-item-flux-not",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-flux-luminosity",
        "concept": "exam-two-concept-flux-luminosity",
        "type": "single",
        "responseType": "single",
        "prompt": "Which quantity is NOT a measurement of the star’s intrinsic light output?",
        "choices": [
          "Total luminosity",
          "Power emitted per second",
          "Apparent brightness at Earth",
          "Surface flux times surface area"
        ],
        "answer": 2,
        "hint": "Look for the quantity that also depends on distance.",
        "explanation": "Apparent brightness is received at Earth and depends on distance and extinction. The other descriptions are luminosity.",
        "source": "Lecture 13 pages 19–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-flux-luminosity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-brightness-infer-distance",
        "rootId": "exam-two-item-brightness-infer-distance",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-inverse-square",
        "concept": "exam-two-concept-inverse-square",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars have equal luminosity and no dust obscuration. One appears nine times fainter. How much farther away is it?",
        "choices": [
          "Three times",
          "Nine times",
          "One-third as far",
          "One-ninth as far"
        ],
        "answer": 0,
        "hint": "Undo the square rather than keeping the brightness factor.",
        "explanation": "A brightness ratio of 1/9 corresponds to a distance ratio of √9 = 3.",
        "source": "Lecture 13 pages 19–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-inverse-square"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/brightness-assessment.svg",
          "alt": "Original schematic of the comparison described in the question; no answer is marked.",
          "caption": "Original instructional model from the supplied relationship.",
          "source": "Lecture 13 pages 19–25 · original practice"
        }
      },
      {
        "id": "exam-two-item-brightness-quarter-distance",
        "rootId": "exam-two-item-brightness-quarter-distance",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-inverse-square",
        "concept": "exam-two-concept-inverse-square",
        "type": "single",
        "responseType": "single",
        "prompt": "A star is observed from one-quarter of its original distance. Its luminosity is unchanged. How does its apparent brightness change?",
        "choices": [
          "Four times brighter",
          "Sixteen times brighter",
          "Four times fainter",
          "Sixteen times fainter"
        ],
        "answer": 1,
        "hint": "The new distance is smaller; invert and square that factor.",
        "explanation": "bnew/bold = (dold/dnew)² = 4² = 16.",
        "source": "Lecture 13 pages 19–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-inverse-square"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-combined-luminosity",
        "rootId": "exam-two-item-combined-luminosity",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-combined-ratio",
        "concept": "exam-two-concept-combined-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Star A appears twice as bright as B and is three times farther away. Neglecting dust, what is LA/LB?",
        "choices": [
          "2",
          "6",
          "9",
          "18"
        ],
        "answer": 3,
        "hint": "Multiply the brightness ratio by the squared distance ratio.",
        "explanation": "LA/LB = 2 × 3² = 18.",
        "source": "Lecture 13 pages 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-combined-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-equal-brightness",
        "rootId": "exam-two-item-equal-brightness",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-combined-ratio",
        "concept": "exam-two-concept-combined-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars appear equally bright. Parallax places A twice as far away as B. With no extinction, which is correct?",
        "choices": [
          "A has half B’s luminosity",
          "A has twice B’s luminosity",
          "A has four times B’s luminosity",
          "They have equal luminosities"
        ],
        "answer": 2,
        "hint": "Equal received brightness does not imply equal emitted power at different distances.",
        "explanation": "LA/LB = 1 × 2² = 4. A needs four times the luminosity to look equally bright from twice as far away.",
        "source": "Lecture 13 pages 23–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 23–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-combined-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-magnitude-five",
        "rootId": "exam-two-item-magnitude-five",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-magnitude-ratio",
        "concept": "exam-two-concept-magnitude-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Star A has apparent magnitude −1 and B has magnitude +4 in the same band. How do their brightnesses compare?",
        "choices": [
          "A is 5 times brighter",
          "A is 25 times brighter",
          "A is 100 times brighter",
          "B is 100 times brighter"
        ],
        "answer": 2,
        "hint": "Count the magnitude steps, including the negative value.",
        "explanation": "The gap is five magnitudes; the lower-magnitude star A is 100 times brighter.",
        "source": "Lecture 14 pages 10–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 10–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-magnitude-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-magnitude-three",
        "rootId": "exam-two-item-magnitude-three",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-magnitude-ratio",
        "concept": "exam-two-concept-magnitude-ratio",
        "type": "single",
        "responseType": "single",
        "prompt": "Using the lecture’s 2.5-per-magnitude approximation, a star fades from magnitude 3 to magnitude 6. What happens to its brightness?",
        "choices": [
          "About 3 times fainter",
          "About 7.5 times fainter",
          "About 16 times fainter",
          "About 16 times brighter"
        ],
        "answer": 2,
        "hint": "Apply one multiplicative factor for each step.",
        "explanation": "Three steps give 2.5³ = 15.625, about 16 times fainter.",
        "source": "Lecture 14 pages 10–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 10–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-magnitude-ratio"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-absolute-reference",
        "rootId": "exam-two-item-absolute-reference",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-absolute-magnitude",
        "concept": "exam-two-concept-absolute-magnitude",
        "type": "single",
        "responseType": "single",
        "prompt": "At what reference distance is a star’s absolute magnitude defined?",
        "choices": [
          "1 AU",
          "1 pc",
          "10 pc",
          "100 pc"
        ],
        "answer": 2,
        "hint": "This is a standardized distance, not its measured current distance.",
        "explanation": "Absolute magnitude uses a reference distance of 10 parsecs.",
        "source": "Lecture 14 pages 14–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 14–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-absolute-magnitude"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-absolute-equal",
        "rootId": "exam-two-item-absolute-equal",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-absolute-magnitude",
        "concept": "exam-two-concept-absolute-magnitude",
        "type": "single",
        "responseType": "single",
        "prompt": "A star is 10 pc away and there is no extinction. How do its apparent and absolute magnitudes compare?",
        "choices": [
          "m is smaller than M",
          "m equals M",
          "m is larger than M",
          "Their difference depends on spectral class"
        ],
        "answer": 1,
        "hint": "Compare the actual distance with the defining reference distance.",
        "explanation": "At the reference distance, the observed and reference magnitudes are equal: distance modulus is zero.",
        "source": "Lecture 14 pages 14–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 14–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-absolute-magnitude"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-dust-distance-correct",
        "rootId": "exam-two-item-dust-distance-correct",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-extinction-distance",
        "concept": "exam-two-concept-extinction-distance",
        "type": "single",
        "responseType": "single",
        "prompt": "An extinction-free distance-modulus calculation puts a dusty star too far away. After correcting for the dust, what happens to the estimated distance?",
        "choices": [
          "It increases",
          "It decreases",
          "It stays the same",
          "It depends on whether dust also reddens the light"
        ],
        "answer": 1,
        "hint": "Correct the brightness loss that was mistaken for extra distance.",
        "explanation": "Removing the extinction contribution lowers m − M and therefore lowers the estimated distance.",
        "source": "Lecture 14 pages 17–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 17–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-extinction-distance"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-dust-magnitude",
        "rootId": "exam-two-item-dust-magnitude",
        "moduleId": "exam-two-module-03",
        "conceptId": "exam-two-concept-extinction-distance",
        "concept": "exam-two-concept-extinction-distance",
        "type": "single",
        "responseType": "single",
        "prompt": "A star’s measured magnitude is +5.0 behind dust. At the same distance, what would removing the dust do?",
        "choices": [
          "Make its magnitude lower than +5.0",
          "Make its magnitude higher than +5.0",
          "Keep its magnitude exactly +5.0",
          "Reduce its intrinsic luminosity"
        ],
        "answer": 0,
        "hint": "More received light means a smaller magnitude.",
        "explanation": "Dust removal makes the received light brighter, so m becomes lower. Its distance and intrinsic output are unchanged.",
        "source": "Lecture 14 pages 17–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l14",
            "locator": "pages 17–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-extinction-distance"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-color-ratio",
        "rootId": "exam-two-item-color-ratio",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-color-temperature",
        "concept": "exam-two-concept-color-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars have the same reddening. A has a smaller visual-to-blue brightness ratio than B. Which is hotter in the lecture’s model?",
        "choices": [
          "A",
          "B",
          "They have the same temperature",
          "The farther star"
        ],
        "answer": 0,
        "hint": "Smaller V/B means relatively more blue.",
        "explanation": "At equal reddening, more blue relative to visual light means a higher temperature.",
        "source": "Lecture 15 pages 4–5 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 4–5",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-color-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-photometry-tradeoff",
        "rootId": "exam-two-item-photometry-tradeoff",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-color-temperature",
        "concept": "exam-two-concept-color-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Why use multicolor photometry instead of spectroscopy for a very large group of faint stars?",
        "choices": [
          "It estimates many temperatures efficiently",
          "It resolves individual lines more precisely",
          "It separates temperature and dust with one filter",
          "It estimates masses from each color ratio"
        ],
        "answer": 0,
        "hint": "Use the method’s practical strength, not a capability it lacks.",
        "explanation": "Filter measurements can be taken for many faint stars together, though the temperature estimate is less precise and dust must be addressed.",
        "source": "Lecture 15 pages 4–5 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 4–5",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-color-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-spectral-removed",
        "rootId": "exam-two-item-spectral-removed",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-spectral-temperature",
        "concept": "exam-two-concept-spectral-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Which is hottest among B, F, G, and K stars?",
        "choices": [
          "B",
          "F",
          "G",
          "K"
        ],
        "answer": 0,
        "hint": "Use the temperature sequence and only the offered choices.",
        "explanation": "B precedes F, G, and K in the hot-to-cool sequence.",
        "source": "Lecture 16 pages 5, 9–12, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 5, 9–12, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-spectral-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-absorption-inference",
        "rootId": "exam-two-item-absorption-inference",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-spectral-temperature",
        "concept": "exam-two-concept-spectral-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "A star has weak hydrogen absorption lines. What is the best reason not to conclude immediately that it contains little hydrogen?",
        "choices": [
          "Line strength also depends on temperature",
          "Hydrogen lines only trace apparent brightness",
          "The strongest lines always identify the rarest element",
          "Every spectral class has the same line strengths"
        ],
        "answer": 0,
        "hint": "A spectral feature depends on physical conditions as well as abundance.",
        "explanation": "The slides use absorption patterns as thermometers as well as composition evidence; temperature can change line strength.",
        "source": "Lecture 16 pages 5, 9–12, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 5, 9–12, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-spectral-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-red-not-cool",
        "rootId": "exam-two-item-red-not-cool",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-reddening",
        "concept": "exam-two-concept-reddening",
        "type": "single",
        "responseType": "single",
        "prompt": "A previously unobscured star becomes redder after a dust cloud crosses the line of sight. Its spectrum indicates unchanged temperature. What changed?",
        "choices": [
          "The received light was reddened",
          "The star became a red giant",
          "The star’s surface flux rose",
          "Its spectral class necessarily changed"
        ],
        "answer": 0,
        "hint": "Distinguish the light’s journey from the source’s state.",
        "explanation": "The added dust changes the transmitted color; it does not establish a temperature or evolutionary change.",
        "source": "Lecture 15 pages 5–6 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 5–6",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-reddening"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-red-ambiguity",
        "rootId": "exam-two-item-red-ambiguity",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-reddening",
        "concept": "exam-two-concept-reddening",
        "type": "single",
        "responseType": "single",
        "prompt": "Why is “this star looks red, therefore it must be cool” incomplete reasoning?",
        "choices": [
          "Dust can also redden the light",
          "Red color directly measures luminosity",
          "Every red image shows reflected starlight",
          "Observed color is independent of extinction"
        ],
        "answer": 0,
        "hint": "Look for a second cause of the same observation.",
        "explanation": "Both a cooler thermal spectrum and intervening dust can produce a redder observed color.",
        "source": "Lecture 15 pages 5–6 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 5–6",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-reddening"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-radius-from-luminosity",
        "rootId": "exam-two-item-radius-from-luminosity",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-radius-temperature",
        "concept": "exam-two-concept-radius-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stars have equal surface temperatures. A is nine times as luminous as B. What is RA/RB?",
        "choices": [
          "3",
          "9",
          "18",
          "81"
        ],
        "answer": 0,
        "hint": "Luminosity scales with emitting area when temperatures match.",
        "explanation": "LA/LB = (RA/RB)², so RA/RB = √9 = 3. “Luminous” avoids the apparent-brightness ambiguity in L15 page 14.",
        "source": "Lecture 15 pages 7–11, 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 7–11, 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-radius-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-temperature-compensate",
        "rootId": "exam-two-item-temperature-compensate",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-radius-temperature",
        "concept": "exam-two-concept-radius-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Star A has half B’s radius but twice B’s temperature in kelvin. What is LA/LB?",
        "choices": [
          "1/4",
          "1",
          "4",
          "16"
        ],
        "answer": 2,
        "hint": "Combine both factors, including their different exponents.",
        "explanation": "LA/LB = (1/2)² × 2⁴ = 4. The smaller radius is outweighed by the temperature factor.",
        "source": "Lecture 15 pages 7–11, 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l15",
            "locator": "pages 7–11, 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-radius-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-mass-evidence",
        "rootId": "exam-two-item-mass-evidence",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-mass-measurement",
        "concept": "exam-two-concept-mass-measurement",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation supplies the lecture’s direct route to measuring stellar masses?",
        "choices": [
          "Doppler shifts through a binary orbit",
          "Proper motion of an isolated star",
          "Annual parallax of an isolated star",
          "A dust-corrected stellar color ratio"
        ],
        "answer": 0,
        "hint": "Mass requires gravitational or orbital evidence.",
        "explanation": "Repeated binary orbital Doppler measurements constrain masses. The other observations alone do not supply that orbital information.",
        "source": "Lecture 16 pages 15, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 15, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-mass-measurement"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-spectroscopic-parallax",
        "rootId": "exam-two-item-spectroscopic-parallax",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-mass-measurement",
        "concept": "exam-two-concept-mass-measurement",
        "type": "single",
        "responseType": "single",
        "prompt": "Despite its name, what does spectroscopic parallax use to estimate distance?",
        "choices": [
          "Earth’s six-month angular baseline",
          "Stellar properties inferred from spectra and brightness",
          "Annual shifts in the star’s radial velocity",
          "A binary’s eclipse duration and apparent magnitude"
        ],
        "answer": 1,
        "hint": "This method’s name is not a description of annual geometric parallax.",
        "explanation": "Spectra classify the star and help estimate luminosity; comparison with apparent brightness gives a distance estimate.",
        "source": "Lecture 16 pages 15, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 15, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-mass-measurement"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-brown-dwarf-boundary",
        "rootId": "exam-two-item-brown-dwarf-boundary",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-brown-dwarfs",
        "concept": "exam-two-concept-brown-dwarfs",
        "type": "single",
        "responseType": "single",
        "prompt": "What separates a brown dwarf from an ordinary main-sequence star in this packet?",
        "choices": [
          "It does not sustain core hydrogen fusion",
          "It sustains core hydrogen fusion at a low rate",
          "It has exhausted hydrogen after a giant phase",
          "It appears faint because intervening dust dims it"
        ],
        "answer": 0,
        "hint": "Use the energy-source boundary, not the word dwarf.",
        "explanation": "Main-sequence stars sustain core hydrogen fusion. Brown dwarfs do not, although they radiate and form in a star-like way.",
        "source": "Lecture 16 pages 16, 19–20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 16, 19–20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-brown-dwarfs"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-brown-dwarf-classes",
        "rootId": "exam-two-item-brown-dwarf-classes",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-brown-dwarfs",
        "concept": "exam-two-concept-brown-dwarfs",
        "type": "single",
        "responseType": "single",
        "prompt": "Which pair extends the lecture’s spectral sequence into the cooler brown-dwarf regime?",
        "choices": [
          "O and B",
          "A and F",
          "G and K",
          "L and T"
        ],
        "answer": 3,
        "hint": "Look beyond M at the cooler end of the supplied table.",
        "explanation": "The packet introduces L and T for very cool brown-dwarf objects.",
        "source": "Lecture 16 pages 16, 19–20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 16, 19–20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-brown-dwarfs"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hr-right",
        "rootId": "exam-two-item-hr-right",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-axes",
        "concept": "exam-two-concept-hr-axes",
        "type": "single",
        "responseType": "single",
        "prompt": "On the standard H–R diagram, moving right at the same luminosity means which change?",
        "choices": [
          "Lower temperature",
          "Higher temperature",
          "Smaller radius",
          "Lower luminosity"
        ],
        "answer": 0,
        "hint": "Read the direction of the temperature axis.",
        "explanation": "Temperature decreases to the right. At fixed luminosity, a cooler surface requires a larger radius, so the smaller-radius distractor is also wrong.",
        "source": "Lecture 16 pages 6, 13–14, 22; Lecture 15 page 8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 6, 13–14, 22",
            "boundary": "verified"
          },
          {
            "id": "exam-two-source-l15",
            "locator": "pages 8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-axes"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hr-radius",
        "rootId": "exam-two-item-hr-radius",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-axes",
        "concept": "exam-two-concept-hr-axes",
        "type": "single",
        "responseType": "single",
        "prompt": "Which H–R region generally contains the largest stellar radii?",
        "choices": [
          "Hot and faint",
          "Cool and faint",
          "Hot and moderately luminous",
          "Cool and very luminous"
        ],
        "answer": 3,
        "hint": "Combine low T with high L in R ∝ √L/T².",
        "explanation": "Large luminosity at low temperature requires a large emitting area and radius.",
        "source": "Lecture 16 pages 6, 13–14, 22; Lecture 15 page 8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 6, 13–14, 22",
            "boundary": "verified"
          },
          {
            "id": "exam-two-source-l15",
            "locator": "pages 8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-axes"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-white-dwarf-reason",
        "rootId": "exam-two-item-white-dwarf-reason",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-regions",
        "concept": "exam-two-concept-hr-regions",
        "type": "single",
        "responseType": "single",
        "prompt": "A star is hot but has very low luminosity. Which description best fits its H–R position?",
        "choices": [
          "A compact white dwarf",
          "An expanded red giant",
          "A cool red dwarf",
          "A luminous supergiant"
        ],
        "answer": 0,
        "hint": "Low total power at high T implies a small emitting area.",
        "explanation": "White dwarfs occupy the hot, faint lower left. Their small radii keep total luminosity low.",
        "source": "Lecture 16 pages 13–16, 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 13–16, 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-main-sequence-definition",
        "rootId": "exam-two-item-main-sequence-definition",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-regions",
        "concept": "exam-two-concept-hr-regions",
        "type": "single",
        "responseType": "single",
        "prompt": "Which statement defines a main-sequence star in the lecture model?",
        "choices": [
          "It is fusing hydrogen in its core",
          "It is fusing hydrogen only in a shell",
          "It is luminous only from stored thermal energy",
          "It is fusing helium in a core without hydrogen fusion"
        ],
        "answer": 0,
        "hint": "Use the energy-producing state rather than its exact location or size.",
        "explanation": "Core hydrogen fusion defines the main-sequence phase. Main-sequence stars span a wide range of masses and temperatures.",
        "source": "Lecture 16 pages 13–16, 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 13–16, 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-mass-lifetime",
        "rootId": "exam-two-item-mass-lifetime",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-main-sequence-mass",
        "concept": "exam-two-concept-main-sequence-mass",
        "type": "single",
        "responseType": "single",
        "prompt": "Compared with a low-mass main-sequence star, a high-mass main-sequence star generally has which combination?",
        "choices": [
          "Higher luminosity and shorter lifetime",
          "Higher luminosity and longer lifetime",
          "Lower luminosity and shorter lifetime",
          "Lower luminosity and longer lifetime"
        ],
        "answer": 0,
        "hint": "Compare fuel-consumption rate as well as fuel supply.",
        "explanation": "Massive main-sequence stars burn fuel much faster, producing greater luminosity but shorter lifetimes.",
        "source": "Lecture 16 pages 19, 23, 26, 28 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 19, 23, 26, 28",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-main-sequence-mass"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-mass-location",
        "rootId": "exam-two-item-mass-location",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-main-sequence-mass",
        "concept": "exam-two-concept-main-sequence-mass",
        "type": "single",
        "responseType": "single",
        "prompt": "Which main-sequence stars occupy the lower-right end of the H–R diagram?",
        "choices": [
          "Low-mass, cool stars",
          "Low-mass, hot stars",
          "High-mass, cool stars",
          "High-mass, hot stars"
        ],
        "answer": 0,
        "hint": "Reverse the supplied “most massive” location question.",
        "explanation": "The main sequence runs from massive hot luminous stars at upper left to low-mass cool faint stars at lower right.",
        "source": "Lecture 16 pages 19, 23, 26, 28 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 19, 23, 26, 28",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-main-sequence-mass"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-sun-giant-properties",
        "rootId": "exam-two-item-sun-giant-properties",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-sun-path",
        "concept": "exam-two-concept-sun-path",
        "type": "single",
        "responseType": "single",
        "prompt": "As a Sun-like star expands toward the red-giant region in the supplied preview, what happens to its surface temperature and luminosity?",
        "choices": [
          "Temperature falls; luminosity rises",
          "Temperature rises; luminosity falls",
          "Both temperature and luminosity fall",
          "Both temperature and luminosity rise"
        ],
        "answer": 0,
        "hint": "Translate upper right into the two plotted quantities.",
        "explanation": "The red-giant region is cooler but more luminous. Expansion supplies enough surface area for greater total power.",
        "source": "Lecture 16 pages 27–29 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 27–29",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sun-path"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-sun-final-category",
        "rootId": "exam-two-item-sun-final-category",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-sun-path",
        "concept": "exam-two-concept-sun-path",
        "type": "single",
        "responseType": "single",
        "prompt": "Which final category completes the Sun’s broad evolution path in the supplied lecture?",
        "choices": [
          "Red dwarf",
          "Brown dwarf",
          "White dwarf",
          "Blue supergiant"
        ],
        "answer": 2,
        "hint": "Use the specific Sun path, not the fate of a very massive star.",
        "explanation": "Lecture 16’s preview ends with a white dwarf after the red-giant phase. Detailed later stages remain pending.",
        "source": "Lecture 16 pages 27–29 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 27–29",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sun-path"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-ism-not",
        "rootId": "exam-two-item-ism-not",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-ism-density",
        "concept": "exam-two-concept-ism-density",
        "type": "single",
        "responseType": "single",
        "prompt": "Which statement about the interstellar medium is NOT consistent with the supplied lecture?",
        "choices": [
          "It contains low-density gas",
          "It contains dust",
          "It is a perfect vacuum everywhere",
          "It can form concentrations called nebulae"
        ],
        "answer": 2,
        "hint": "Distinguish very low density from zero density.",
        "explanation": "The interstellar medium contains gas and dust, even though it is sparse compared with our atmosphere.",
        "source": "Lecture 17 pages 8–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 8–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ism-density"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-cloud-density",
        "rootId": "exam-two-item-cloud-density",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-ism-density",
        "concept": "exam-two-concept-ism-density",
        "type": "single",
        "responseType": "single",
        "prompt": "The lecture gives 10¹⁰ particles/m³ for a dense dust cloud and 10⁶ for diffuse interstellar space. What is the density ratio?",
        "choices": [
          "10²",
          "10⁴",
          "10⁶",
          "10¹⁶"
        ],
        "answer": 1,
        "hint": "Subtract the exponents when dividing powers of ten.",
        "explanation": "10¹⁰/10⁶ = 10⁴. This compares the supplied scale examples.",
        "source": "Lecture 17 pages 8–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 8–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ism-density"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-reflection-versus-transmission",
        "rootId": "exam-two-item-reflection-versus-transmission",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-dust-scattering",
        "concept": "exam-two-concept-dust-scattering",
        "type": "single",
        "responseType": "single",
        "prompt": "Dust scatters short-wavelength light out of a star’s direct beam. How do the direct and scattered views tend to differ?",
        "choices": [
          "Direct light is redder; scattered light is bluer",
          "Direct light is bluer; scattered light is redder",
          "Both views become equally red",
          "Both views become equally blue"
        ],
        "answer": 0,
        "hint": "Follow the path that keeps versus redirects the blue light.",
        "explanation": "Short wavelengths are preferentially redirected, leaving redder transmitted light and bluer scattered light.",
        "source": "Lecture 17 pages 10–11, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 10–11, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-dust-scattering"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-dust-band",
        "rootId": "exam-two-item-dust-band",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-dust-scattering",
        "concept": "exam-two-concept-dust-scattering",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observing band penetrates a dusty star-forming cloud more easily than visible light in the lecture’s comparison?",
        "choices": [
          "Ultraviolet",
          "Blue visible",
          "Infrared",
          "Violet visible"
        ],
        "answer": 2,
        "hint": "Look toward the longer-wavelength option.",
        "explanation": "Infrared is less attenuated by dust than the shorter wavelengths in this comparison.",
        "source": "Lecture 17 pages 10–11, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 10–11, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-dust-scattering"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hii-neutral",
        "rootId": "exam-two-item-hii-neutral",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-nebula-mechanism",
        "concept": "exam-two-concept-nebula-mechanism",
        "type": "single",
        "responseType": "single",
        "prompt": "Which label denotes neutral hydrogen in the lecture’s notation?",
        "choices": [
          "H I",
          "H II",
          "H₂",
          "He II"
        ],
        "answer": 0,
        "hint": "Roman numeral I denotes a neutral atom in this notation.",
        "explanation": "H I is neutral hydrogen; H II is ionized hydrogen. H₂ is molecular hydrogen.",
        "source": "Lecture 17 pages 12–14, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 12–14, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-mechanism"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-nebula-light",
        "rootId": "exam-two-item-nebula-light",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-nebula-mechanism",
        "concept": "exam-two-concept-nebula-mechanism",
        "type": "single",
        "responseType": "single",
        "prompt": "What produces the light characteristic of an H II emission nebula?",
        "choices": [
          "Ionized gas emits during recombination and atomic transitions",
          "Dust redirects an illuminating star’s visible light",
          "A gas cloud sustains hydrogen fusion throughout its volume",
          "Neutral gas removes light from a background star"
        ],
        "answer": 0,
        "hint": "Use the gas mechanism rather than dust reflection.",
        "explanation": "Hot O/B stars ionize hydrogen; recombination and atomic transitions produce emission.",
        "source": "Lecture 17 pages 12–14, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 12–14, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-mechanism"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-formation-material",
        "rootId": "exam-two-item-formation-material",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-formation-regions",
        "concept": "exam-two-concept-formation-regions",
        "type": "single",
        "responseType": "single",
        "prompt": "Which environment provides the raw material for new stars in the supplied lecture?",
        "choices": [
          "A cloud rich in cold gas and dust",
          "A hot white dwarf with no surrounding cloud",
          "An old star’s core after exhausting hydrogen",
          "A compact star cluster with its gas dispersed"
        ],
        "answer": 0,
        "hint": "Star formation requires a supply of matter.",
        "explanation": "Gas and dust clouds supply the material from which new stars form. The current lesson does not yet cover the detailed later sequence.",
        "source": "Lecture 17 pages 9–10, 13, 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 9–10, 13, 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-formation-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-dark-cloud-infer",
        "rootId": "exam-two-item-dark-cloud-infer",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-formation-regions",
        "concept": "exam-two-concept-formation-regions",
        "type": "single",
        "responseType": "single",
        "prompt": "A dust lane appears dark in a visible-light galaxy image. Which conclusion is justified?",
        "choices": [
          "It may obscure gas and stars behind it",
          "It proves there are no stars along that sightline",
          "It directly measures the distance to the cloud",
          "It shows that the cloud contains dust but no gas"
        ],
        "answer": 0,
        "hint": "Distinguish an obscured view from absence of material.",
        "explanation": "Dust can block the optical background. Darkness alone does not quantify hidden star formation, mass, or parallax.",
        "source": "Lecture 17 pages 9–10, 13, 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 9–10, 13, 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-formation-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-bok-description",
        "rootId": "exam-two-item-bok-description",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-bok-globules",
        "concept": "exam-two-concept-bok-globules",
        "type": "single",
        "responseType": "single",
        "prompt": "Which description fits a Bok globule in the supplied lecture?",
        "choices": [
          "A compact dark cloud of gas and dust",
          "An extended cloud of ultraviolet-ionized gas",
          "An exposed hot remnant after a red-giant phase",
          "A bright knot along a young star’s outflow axis"
        ],
        "answer": 0,
        "hint": "Use the object’s material and appearance.",
        "explanation": "The supplied Bok-globule slide describes a compact dusty gas cloud associated with star birth.",
        "source": "Lecture 17 pages 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-bok-globules"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-bok-hydrogen",
        "rootId": "exam-two-item-bok-hydrogen",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-bok-globules",
        "concept": "exam-two-concept-bok-globules",
        "type": "single",
        "responseType": "single",
        "prompt": "The slide says Bok globules are mostly molecular hydrogen. Which notation represents that material?",
        "choices": [
          "H I",
          "H II",
          "H₂",
          "He"
        ],
        "answer": 2,
        "hint": "A molecule is different from the Roman-numeral ionization labels.",
        "explanation": "H₂ is molecular hydrogen. H I and H II specify neutral and ionized atomic hydrogen.",
        "source": "Lecture 17 pages 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-bok-globules"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hh-association",
        "rootId": "exam-two-item-hh-association",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-herbig-haro",
        "concept": "exam-two-concept-herbig-haro",
        "type": "single",
        "responseType": "single",
        "prompt": "The supplied Herbig–Haro example is associated with which setting?",
        "choices": [
          "A young star and aligned outflow structures",
          "An old star and a broadly expanding gas shell",
          "A molecular cloud seen only as a compact silhouette",
          "An illuminated dust cloud reflecting blue starlight"
        ],
        "answer": 0,
        "hint": "Use the star-birth context and axis alignment in the figure.",
        "explanation": "The packet places Herbig–Haro objects in star-forming regions and associates their alignment with young stars.",
        "source": "Lecture 17 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-herbig-haro"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-hh-distinguish",
        "rootId": "exam-two-item-hh-distinguish",
        "moduleId": "exam-two-module-08",
        "conceptId": "exam-two-concept-herbig-haro",
        "concept": "exam-two-concept-herbig-haro",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation best distinguishes the supplied Herbig–Haro example from a Bok globule?",
        "choices": [
          "Structures aligned with a young star’s axis",
          "A compact dark silhouette hiding background light",
          "A blue cloud scattering an illuminating star’s light",
          "A broad emission region around hot massive stars"
        ],
        "answer": 0,
        "hint": "Both can occur in gas and dust; identify the more specific structure.",
        "explanation": "The aligned young-star structures identify the supplied Herbig–Haro example. A compact dark silhouette fits a Bok globule; blue scattering fits reflection nebulosity; broad photoionized emission fits an H II region.",
        "source": "Lecture 17 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-herbig-haro"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-luminosity-tf",
        "rootId": "exam-two-item-luminosity-tf",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-flux-luminosity",
        "concept": "exam-two-concept-flux-luminosity",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "Moving a fixed star farther from the observer reduces its intrinsic luminosity.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Does the observer change the star’s emitted power?",
        "explanation": "False. Apparent brightness decreases; intrinsic luminosity is unchanged.",
        "source": "Lecture 13 pages 19–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-flux-luminosity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-quantity-match",
        "rootId": "exam-two-item-quantity-match",
        "moduleId": "exam-two-module-02",
        "conceptId": "exam-two-concept-flux-luminosity",
        "concept": "exam-two-concept-flux-luminosity",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each measured quantity to its meaning. Use each description once.",
        "choices": [
          "Power leaving each square meter of stellar surface",
          "Total power emitted by the star",
          "Power received per square meter at the observer",
          "Annual apparent angular displacement"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "hint": "Separate source, observer, and geometric measurements.",
        "explanation": "F is surface power per area; L is total emitted power; b is received power per area; p is the parallax angle.",
        "source": "Lecture 13 pages 19–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l13",
            "locator": "pages 19–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-flux-luminosity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Surface flux F",
            "answer": "Power leaving each square meter of stellar surface"
          },
          {
            "label": "Luminosity L",
            "answer": "Total power emitted by the star"
          },
          {
            "label": "Apparent brightness b",
            "answer": "Power received per square meter at the observer"
          },
          {
            "label": "Parallax p",
            "answer": "Annual apparent angular displacement"
          }
        ],
        "options": [
          "Power leaving each square meter of stellar surface",
          "Total power emitted by the star",
          "Power received per square meter at the observer",
          "Annual apparent angular displacement"
        ]
      },
      {
        "id": "exam-two-item-spectral-order",
        "rootId": "exam-two-item-spectral-order",
        "moduleId": "exam-two-module-04",
        "conceptId": "exam-two-concept-spectral-temperature",
        "concept": "exam-two-concept-spectral-temperature",
        "type": "sort",
        "responseType": "order",
        "prompt": "Arrange all seven ordinary stellar spectral classes from hottest to coolest.",
        "choices": [
          "O",
          "B",
          "A",
          "F",
          "G",
          "K",
          "M"
        ],
        "answer": [
          0,
          1,
          2,
          3,
          4,
          5,
          6
        ],
        "hint": "Reconstruct the full sequence rather than selecting only one end.",
        "explanation": "The complete hot-to-cool sequence is O → B → A → F → G → K → M. L and T are outside this seven-class task.",
        "source": "Lecture 16 pages 5, 9–12, 24–25 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 5, 9–12, 24–25",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-spectral-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "groups": [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7"
        ],
        "items": [
          {
            "text": "O",
            "group": "1"
          },
          {
            "text": "B",
            "group": "2"
          },
          {
            "text": "A",
            "group": "3"
          },
          {
            "text": "F",
            "group": "4"
          },
          {
            "text": "G",
            "group": "5"
          },
          {
            "text": "K",
            "group": "6"
          },
          {
            "text": "M",
            "group": "7"
          }
        ]
      },
      {
        "id": "exam-two-item-hr-white-dwarf-target",
        "rootId": "exam-two-item-hr-white-dwarf-target",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-hr-regions",
        "concept": "exam-two-concept-hr-regions",
        "type": "single",
        "responseType": "target",
        "prompt": "Select the region where white dwarfs belong on this standard H–R diagram.",
        "choices": [
          "Region A",
          "Region B",
          "Region C",
          "Region D"
        ],
        "answer": 2,
        "hint": "Combine high temperature with low luminosity.",
        "explanation": "White dwarfs belong in the hot, faint lower-left region C of this original schematic.",
        "source": "Lecture 16 pages 13–16, 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 13–16, 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-hr-regions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/hr-assessment.svg",
          "alt": "H–R axes with hotter temperatures to the left, luminosity increasing upward, and four selectable regions A through D.",
          "caption": "Original schematic; positions are conceptual, not measured stellar values.",
          "source": "Based on Lecture 16 pages 13–16, 22"
        },
        "targets": [
          {
            "label": "A",
            "x": 30,
            "y": 25
          },
          {
            "label": "B",
            "x": 77,
            "y": 25
          },
          {
            "label": "C",
            "x": 30,
            "y": 75
          },
          {
            "label": "D",
            "x": 77,
            "y": 75
          }
        ]
      },
      {
        "id": "exam-two-item-sun-phase-order",
        "rootId": "exam-two-item-sun-phase-order",
        "moduleId": "exam-two-module-06",
        "conceptId": "exam-two-concept-sun-path",
        "concept": "exam-two-concept-sun-path",
        "type": "sort",
        "responseType": "order",
        "prompt": "Arrange the three broad phases in the supplied Sun evolution preview.",
        "choices": [
          "Main sequence",
          "Red giant",
          "White dwarf"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "Use the Sun’s path, not a massive-star supernova path.",
        "explanation": "The packet’s broad phase order is main sequence → red giant → white dwarf. Later details remain pending.",
        "source": "Lecture 16 pages 27–29 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l16",
            "locator": "pages 27–29",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-sun-path"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": false,
        "groups": [
          "1",
          "2",
          "3"
        ],
        "items": [
          {
            "text": "Main sequence",
            "group": "1"
          },
          {
            "text": "Red giant",
            "group": "2"
          },
          {
            "text": "White dwarf",
            "group": "3"
          }
        ]
      },
      {
        "id": "exam-two-item-nebula-match",
        "rootId": "exam-two-item-nebula-match",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-nebula-mechanism",
        "concept": "exam-two-concept-nebula-mechanism",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each cloud type to the most specific supplied mechanism or setting.",
        "choices": [
          "Ionized gas emits after ultraviolet illumination",
          "Dust redirects an illuminating star’s light",
          "Compact dusty molecular birth cloud"
        ],
        "answer": [
          0,
          1,
          2
        ],
        "hint": "Emission, reflection, and dark obscuration are different mechanisms.",
        "explanation": "H II regions involve ionized emitting gas; reflection nebulae scatter starlight; Bok globules are compact dark clouds.",
        "source": "Lecture 17 pages 12–14, 17–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l17",
            "locator": "pages 12–14, 17–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-mechanism"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "H II emission region",
            "answer": "Ionized gas emits after ultraviolet illumination"
          },
          {
            "label": "Reflection nebula",
            "answer": "Dust redirects an illuminating star’s light"
          },
          {
            "label": "Bok globule",
            "answer": "Compact dusty molecular birth cloud"
          }
        ],
        "options": [
          "Ionized gas emits after ultraviolet illumination",
          "Dust redirects an illuminating star’s light",
          "Compact dusty molecular birth cloud"
        ]
      },
      {
        "id": "exam-two-item-l18-cooling-core",
        "rootId": "exam-two-item-l18-cooling-core",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-conditions",
        "concept": "exam-two-concept-collapse-conditions",
        "type": "single",
        "responseType": "single",
        "prompt": "A dense gas pocket cools while its mass, size and composition are initially unchanged. Which effect makes collapse easier?",
        "choices": [
          "Its thermal pressure support decreases",
          "Its thermal pressure support increases",
          "Its self-gravity strengthens at fixed mass and size",
          "Its gas pressure stays fixed as temperature falls"
        ],
        "answer": 0,
        "hint": "Separate the initial temperature change from a later size change.",
        "explanation": "Lower temperature weakens thermal pressure support, favoring gravity in an already dense pocket. Cooling alone does not remove gravity.",
        "source": "Lecture 18 pages 12–13, 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 12–13, 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-conditions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-collapse-not",
        "rootId": "exam-two-item-l18-collapse-not",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-conditions",
        "concept": "exam-two-concept-collapse-conditions",
        "type": "single",
        "responseType": "single",
        "prompt": "Which change would NOT favor collapse of an otherwise comparable cold, dense cloud?",
        "choices": [
          "Lowering its temperature",
          "Increasing its density at fixed size",
          "Heating it without increasing density",
          "Reducing its thermal support"
        ],
        "answer": 2,
        "hint": "Gravity must overcome the resistance supplied by thermal pressure.",
        "explanation": "Heating at unchanged density strengthens thermal pressure support. The other changes favor the balance toward collapse.",
        "source": "Lecture 18 pages 12–13 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 12–13",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-conditions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-cloud-target",
        "rootId": "exam-two-item-l18-cloud-target",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-conditions",
        "concept": "exam-two-concept-collapse-conditions",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the region that most favors gravity over thermal support in these comparable-size clouds.",
        "choices": [
          "Region A",
          "Region B",
          "Region C",
          "Region D"
        ],
        "answer": 1,
        "hint": "Look for both low temperature and high density.",
        "explanation": "B is both coldest and densest. Lower temperature reduces thermal resistance, while higher density strengthens self-gravity in comparable-size clouds. The choice depends on that balance, not on claiming B has the lowest absolute gas pressure.",
        "source": "Lecture 18 pages 13 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 13",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-conditions"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/l18-cloud-regions.svg",
          "alt": "Four comparable-size gas regions labeled A to D; A: 20 K, 50 particles per cubic centimeter; B: 10 K, 2000; C: 80 K, 30; D: 80 K, 1000.",
          "caption": "Original comparison diagram; cloud size and composition are held comparable."
        },
        "targets": [
          {
            "label": "A",
            "x": 25,
            "y": 31
          },
          {
            "label": "B",
            "x": 75,
            "y": 31
          },
          {
            "label": "C",
            "x": 25,
            "y": 73
          },
          {
            "label": "D",
            "x": 75,
            "y": 73
          }
        ]
      },
      {
        "id": "exam-two-item-l18-infrared-pair",
        "rootId": "exam-two-item-l18-infrared-pair",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-infrared-protostars",
        "concept": "exam-two-concept-infrared-protostars",
        "type": "single",
        "responseType": "single",
        "prompt": "Which pair explains the lecture’s use of infrared for embedded young objects?",
        "choices": [
          "Less dust scattering and relatively long-wavelength emission",
          "More dust scattering and relatively long-wavelength emission",
          "Less dust scattering and relatively short-wavelength emission",
          "More dust scattering and relatively short-wavelength emission"
        ],
        "answer": 0,
        "hint": "One reason concerns the path; the other concerns the source.",
        "explanation": "The lecture combines reduced infrared scattering by dust with the cooler source’s longer-wavelength thermal emission.",
        "source": "Lecture 18 pages 7 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 7",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-infrared-protostars"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-hidden-object",
        "rootId": "exam-two-item-l18-hidden-object",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-infrared-protostars",
        "concept": "exam-two-concept-infrared-protostars",
        "type": "single",
        "responseType": "single",
        "prompt": "A compact object appears in an infrared image but is obscured in a visible image taken at the same time. What is the supported inference?",
        "choices": [
          "Dust can obscure visible light more strongly than infrared light",
          "Infrared detection alone establishes sustained core hydrogen fusion",
          "Detection only in infrared establishes a hotter surface than nearby O stars",
          "The visible image establishes an empty cavity rather than a hidden source"
        ],
        "answer": 0,
        "hint": "A change of observing band need not be a physical change in the source.",
        "explanation": "Infrared can reveal objects behind dust that hides them in visible light. The observation does not alone establish a temperature change or fusion state.",
        "source": "Lecture 18 pages 7 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 7",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-infrared-protostars"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-energy-before-fusion",
        "rootId": "exam-two-item-l18-energy-before-fusion",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-energy",
        "concept": "exam-two-concept-protostar-energy",
        "type": "single",
        "responseType": "single",
        "prompt": "A young object is luminous, is contracting, and has not begun sustained core hydrogen burning. What supplies energy in the lecture model?",
        "choices": [
          "Release of gravitational potential energy",
          "Release of sustained hydrogen-fusion energy",
          "Release of energy mainly from chemical combustion",
          "Release of heat mainly by expansion of the gas"
        ],
        "answer": 0,
        "hint": "The source is named Kelvin–Helmholtz contraction.",
        "explanation": "Contraction releases gravitational energy; some heats the interior and some escapes as radiation. Luminosity alone does not prove sustained hydrogen fusion.",
        "source": "Lecture 18 pages 17–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 17–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-energy"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-shrinks-heats",
        "rootId": "exam-two-item-l18-shrinks-heats",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-energy",
        "concept": "exam-two-concept-protostar-energy",
        "type": "single",
        "responseType": "single",
        "prompt": "During gravitational contraction, which combination is consistent with the lecture?",
        "choices": [
          "Radius decreases while the interior heats",
          "Radius increases while the interior heats",
          "Density decreases while the interior heats",
          "Radius decreases while the interior must cool"
        ],
        "answer": 0,
        "hint": "Shrinking does not imply an increasingly cold interior.",
        "explanation": "Contraction compresses the gas and releases energy, allowing a smaller, denser object with a hotter interior. The surface track needs separate interpretation.",
        "source": "Lecture 18 pages 17–18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 17–18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-energy"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-pressure-ratio",
        "rootId": "exam-two-item-l18-pressure-ratio",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-pressure",
        "concept": "exam-two-concept-collapse-pressure",
        "type": "single",
        "responseType": "single",
        "prompt": "For gas of unchanged composition, particle density doubles and temperature falls to one quarter. In the lecture’s P ∝ nT model, what happens to pressure?",
        "choices": [
          "It becomes one half as large",
          "It becomes twice as large",
          "It becomes four times as large",
          "It remains unchanged"
        ],
        "answer": 0,
        "hint": "Multiply the two ratios.",
        "explanation": "Pnew/Pold = 2 × 1/4 = 1/2. Considering only the density gives the wrong result.",
        "source": "Lecture 18 pages 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-pressure"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-pressure-same",
        "rootId": "exam-two-item-l18-pressure-same",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-collapse-pressure",
        "concept": "exam-two-concept-collapse-pressure",
        "type": "single",
        "responseType": "single",
        "prompt": "A cloud parcel of unchanged composition has half its earlier particle density. What temperature change keeps its gas pressure unchanged in the simple model?",
        "choices": [
          "Double the temperature",
          "Halve the temperature",
          "Quarter the temperature",
          "Keep the temperature unchanged"
        ],
        "answer": 0,
        "hint": "The product of the density and temperature ratios must be one.",
        "explanation": "A density factor of 1/2 requires a temperature factor of 2 so that nT, and hence pressure, is unchanged.",
        "source": "Lecture 18 pages 18 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 18",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-collapse-pressure"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-cool-and-resume",
        "rootId": "exam-two-item-l18-cool-and-resume",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-support",
        "concept": "exam-two-concept-protostar-support",
        "type": "single",
        "responseType": "single",
        "prompt": "A non-fusing young object radiates heat away after its contraction slows. Why can contraction resume?",
        "choices": [
          "Cooling reduces thermal pressure support",
          "Cooling increases thermal pressure support",
          "Radiation maintains the lost heat without a new energy source",
          "A temporary pressure balance prevents any further energy loss"
        ],
        "answer": 0,
        "hint": "Distinguish losing stored heat from generating replacement energy.",
        "explanation": "Without ongoing replenishment, radiation and cooling weaken pressure support. Gravity can then drive further contraction.",
        "source": "Lecture 18 pages 19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-support"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-main-sequence-heating",
        "rootId": "exam-two-item-l18-main-sequence-heating",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-support",
        "concept": "exam-two-concept-protostar-support",
        "type": "single",
        "responseType": "single",
        "prompt": "What change supplies the sustained heating associated with a stable main-sequence phase?",
        "choices": [
          "Core hydrogen fusion replaces radiated energy",
          "Stored heat replaces radiated energy indefinitely",
          "Core helium fusion supplies ordinary main-sequence heating",
          "Gravitational contraction releases heat at fixed radius"
        ],
        "answer": 0,
        "hint": "A long-lived energy source is different from a one-time heat release.",
        "explanation": "Sustained core hydrogen fusion replenishes the energy radiated away. Gravity is balanced by pressure; nuclear reactions supply the heat supporting that pressure.",
        "source": "Lecture 18 pages 12, 19; Lecture 16 pages 16, 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 12, 19",
            "boundary": "verified"
          },
          {
            "id": "exam-two-source-l16",
            "locator": "pages 16, 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-support"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-sequence-setting",
        "rootId": "exam-two-item-l18-sequence-setting",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-track",
        "concept": "exam-two-concept-protostar-track",
        "type": "single",
        "responseType": "single",
        "prompt": "In the supplied formation sequence, a central young object has an infalling envelope, a disk, and a bipolar flow. Which stage fits?",
        "choices": [
          "The illustrated protostar stage",
          "The initial uncollapsed dark core",
          "The illustrated pre-main-sequence stage with a remaining disk",
          "The illustrated young stellar system"
        ],
        "answer": 0,
        "hint": "Use the structures shown, rather than the brightness of the cloud.",
        "explanation": "The protostar panel contains the envelope, disk, central object and bipolar outflow. The supplied pre-main-sequence and young-system panels show later structures rather than the same infalling envelope.",
        "source": "Lecture 18 pages 16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-track"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-shrinking-luminosity",
        "rootId": "exam-two-item-l18-shrinking-luminosity",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-track",
        "concept": "exam-two-concept-protostar-track",
        "type": "single",
        "responseType": "single",
        "prompt": "A young object halves its radius while its surface temperature stays approximately fixed. What is its new luminosity relative to before?",
        "choices": [
          "One quarter",
          "One half",
          "Twice as large",
          "Four times as large"
        ],
        "answer": 0,
        "hint": "Surface area depends on radius squared.",
        "explanation": "At fixed surface temperature, Lnew/Lold = (1/2)² = 1/4. Internal heating alone does not force the surface luminosity to rise.",
        "source": "Lecture 18 pages 20–21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 20–21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-track"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-formation-order",
        "rootId": "exam-two-item-l18-formation-order",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-track",
        "concept": "exam-two-concept-protostar-track",
        "type": "order",
        "responseType": "order",
        "prompt": "Arrange the six stages in the order shown by the supplied formation illustration.",
        "choices": [
          "Dense dark-cloud core",
          "Gravitational collapse",
          "Protostar with disk and bipolar flow",
          "T Tauri stage",
          "Pre-main-sequence star with remaining disk",
          "Young stellar system"
        ],
        "answer": [
          0,
          1,
          2,
          3,
          4,
          5
        ],
        "hint": "Follow the supplied a-to-f illustrated sequence.",
        "explanation": "The figure progresses from dense core and collapse to a protostar, T Tauri and pre-main-sequence stages, and then a young stellar system. The displayed ages are illustrative rather than universal.",
        "source": "Lecture 18 pages 16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-track"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-luminosity-tf",
        "rootId": "exam-two-item-l18-luminosity-tf",
        "moduleId": "exam-two-module-09",
        "conceptId": "exam-two-concept-protostar-track",
        "concept": "exam-two-concept-protostar-track",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: In the supplied protostar model, contraction guarantees a steady increase in total luminosity at every stage.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Total luminosity has both a radius factor and a surface-temperature factor.",
        "explanation": "False. Radius and surface temperature change together; the lecture explicitly allows luminosity to rise or fall.",
        "source": "Lecture 18 pages 20 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 20",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-protostar-track"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-radius-lines-law",
        "rootId": "exam-two-item-l18-radius-lines-law",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-radius-temperature",
        "concept": "exam-two-concept-radius-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Constant-radius lines on an H–R diagram combine emitting area with temperature-dependent surface flux. Which named relation supplies both factors?",
        "choices": [
          "Stefan–Boltzmann: L = 4πR²σT⁴",
          "Inverse-square: b = L/(4πd²)",
          "Parallax: d(pc) = 1/p(arcsec)",
          "Wien: λpeak T = constant"
        ],
        "answer": 0,
        "hint": "You need the law that includes both emitting area and temperature-dependent surface flux.",
        "explanation": "Stefan–Boltzmann combines emitting surface area with temperature-dependent flux, giving L = 4πR²σT⁴. Inverse-square relates the light received to observer distance, parallax measures distance, and Wien locates the peak wavelength. This is a named-law decision, not a multi-row matching task.",
        "source": "Lecture 18 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "page 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-radius-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-constant-radius-track",
        "rootId": "exam-two-item-l18-constant-radius-track",
        "moduleId": "exam-two-module-05",
        "conceptId": "exam-two-concept-radius-temperature",
        "concept": "exam-two-concept-radius-temperature",
        "type": "single",
        "responseType": "single",
        "prompt": "Along a constant-radius line, surface temperature doubles. What must happen to luminosity?",
        "choices": [
          "It becomes sixteen times as large",
          "It becomes four times as large",
          "It becomes twice as large",
          "It becomes one quarter as large"
        ],
        "answer": 0,
        "hint": "Radius is held fixed; retain the temperature exponent.",
        "explanation": "L ∝ T⁴ at fixed radius, so doubling T gives a factor of 2⁴ = 16. The area factor does not change.",
        "source": "Lecture 18 pages 21 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 21",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-radius-temperature"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-nebular-emission",
        "rootId": "exam-two-item-l18-nebular-emission",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-nebula-mechanism",
        "concept": "exam-two-concept-nebula-mechanism",
        "type": "single",
        "responseType": "single",
        "prompt": "A nebular spectrum contains strong emission lines after hot stars ionize its hydrogen. Which mechanism explains the glow?",
        "choices": [
          "Emission from excited gas, including recombination",
          "Reflection of a smooth stellar continuum by dust",
          "Extinction of background starlight by cool dust",
          "Thermal emission from the surface of a cool star"
        ],
        "answer": 0,
        "hint": "Distinguish emitted radiation from scattered illumination.",
        "explanation": "Excitation and recombination in ionized gas produce emission. Reflection redirects light from another source; dark obscuration does not itself explain the emitted lines.",
        "source": "Lecture 18 pages 4, 6 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 4, 6",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-mechanism"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l18-mixed-nebula",
        "rootId": "exam-two-item-l18-mixed-nebula",
        "moduleId": "exam-two-module-07",
        "conceptId": "exam-two-concept-nebula-mechanism",
        "concept": "exam-two-concept-nebula-mechanism",
        "type": "single",
        "responseType": "single",
        "prompt": "One nebular field contains pink line-emitting gas, blue reflected starlight, and a dark foreground lane. Which interpretation is supported?",
        "choices": [
          "Emission, reflection and obscuration coexist in this field",
          "Hydrogen emission produces all three regions in this field",
          "The dark lane marks a cavity with little intervening dust",
          "The blue color alone establishes hotter gas than the pink region"
        ],
        "answer": 0,
        "hint": "The discussion asks you to identify three mechanisms in one field.",
        "explanation": "A single field can include glowing gas, dust-scattered starlight and dust obscuration. Color alone is not a complete temperature or density measurement.",
        "source": "Lecture 18 pages 6, 14–15 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 6, 14–15",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nebula-mechanism"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      }
    ]
  },
  {
    "id": "exam-two-top-hat-review",
    "examId": "exam-two",
    "kind": "source-review",
    "lane": "Exam 2",
    "title": "Top Hat source review",
    "description": "Supplied course questions with separate selected responses, grades, displayed keys, and supported answers. Replay earns no mastery.",
    "chapters": "Lectures 13–18 · Exam 2: material available so far",
    "questions": [],
    "status": "review"
  }
];
