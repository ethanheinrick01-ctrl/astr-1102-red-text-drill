window.ASTR1102_QUIZZES = [
  {
    "id": "exam-two-boss-drill",
    "examId": "exam-two",
    "kind": "boss",
    "title": "Exam 2 Boss Drill",
    "description": "25 original tasks across the supplied material, now including Lecture 18. Saved older forms remain unchanged.",
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
      }
    ]
  },
  {
    "id": "exam-two-everything-pool",
    "examId": "exam-two",
    "kind": "drill",
    "title": "Exam 2 Everything Pool",
    "description": "All original tasks, including matching, ordering, and an H–R image target. Adaptive review follows misses and low confidence.",
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
        "prompt": "A dense gas pocket cools while its size and composition are initially unchanged. Which effect makes collapse easier?",
        "choices": [
          "Its thermal pressure support decreases",
          "Its thermal pressure support increases",
          "Its self-gravity strengthens at fixed mass and size",
          "Its gas pressure stays fixed as temperature falls"
        ],
        "answer": 0,
        "hint": "Separate the initial temperature change from a later size change.",
        "explanation": "Lower temperature weakens thermal pressure support, favoring gravity in an already dense pocket. Cooling alone does not remove gravity.",
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
        "prompt": "Select the region that best combines weak thermal support with strong self-gravity in these comparable-size clouds.",
        "choices": [
          "Region A",
          "Region B",
          "Region C",
          "Region D"
        ],
        "answer": 1,
        "hint": "Look for both low temperature and high density.",
        "explanation": "B is the coldest and densest offered region. Its favorable combination, rather than visible brightness, supports the choice.",
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
        "prompt": "A cloud parcel has half its earlier particle density. What temperature change keeps its gas pressure unchanged in the simple model?",
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
          "External dust scattering maintains the core temperature",
          "Gravitational contraction releases heat at fixed radius"
        ],
        "answer": 0,
        "hint": "A long-lived energy source is different from a one-time heat release.",
        "explanation": "Sustained core hydrogen fusion replenishes the energy radiated away. Gravity is balanced by pressure; nuclear reactions supply the heat supporting that pressure.",
        "source": "Lecture 18 pages 12, 19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 12, 19",
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
        "prompt": "Which relationship lets you infer constant-radius lines from luminosity and surface temperature on an H–R diagram?",
        "choices": [
          "L = 4πR²σT⁴",
          "b = L/(4πd²)",
          "d(pc) = 1/p(arcsec)",
          "λpeak T = constant"
        ],
        "answer": 0,
        "hint": "You need the law that includes both emitting area and temperature-dependent surface flux.",
        "explanation": "The Stefan–Boltzmann luminosity relation combines R² with T⁴. The inverse-square law includes observer distance, Wien’s law gives the peak wavelength, and parallax gives distance.",
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
        "prompt": "A dense gas pocket cools while its size and composition are initially unchanged. Which effect makes collapse easier?",
        "choices": [
          "Its thermal pressure support decreases",
          "Its thermal pressure support increases",
          "Its self-gravity strengthens at fixed mass and size",
          "Its gas pressure stays fixed as temperature falls"
        ],
        "answer": 0,
        "hint": "Separate the initial temperature change from a later size change.",
        "explanation": "Lower temperature weakens thermal pressure support, favoring gravity in an already dense pocket. Cooling alone does not remove gravity.",
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
        "prompt": "Select the region that best combines weak thermal support with strong self-gravity in these comparable-size clouds.",
        "choices": [
          "Region A",
          "Region B",
          "Region C",
          "Region D"
        ],
        "answer": 1,
        "hint": "Look for both low temperature and high density.",
        "explanation": "B is the coldest and densest offered region. Its favorable combination, rather than visible brightness, supports the choice.",
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
        "prompt": "A cloud parcel has half its earlier particle density. What temperature change keeps its gas pressure unchanged in the simple model?",
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
          "External dust scattering maintains the core temperature",
          "Gravitational contraction releases heat at fixed radius"
        ],
        "answer": 0,
        "hint": "A long-lived energy source is different from a one-time heat release.",
        "explanation": "Sustained core hydrogen fusion replenishes the energy radiated away. Gravity is balanced by pressure; nuclear reactions supply the heat supporting that pressure.",
        "source": "Lecture 18 pages 12, 19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l18",
            "locator": "pages 12, 19",
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
        "prompt": "Which relationship lets you infer constant-radius lines from luminosity and surface temperature on an H–R diagram?",
        "choices": [
          "L = 4πR²σT⁴",
          "b = L/(4πd²)",
          "d(pc) = 1/p(arcsec)",
          "λpeak T = constant"
        ],
        "answer": 0,
        "hint": "You need the law that includes both emitting area and temperature-dependent surface flux.",
        "explanation": "The Stefan–Boltzmann luminosity relation combines R² with T⁴. The inverse-square law includes observer distance, Wien’s law gives the peak wavelength, and parallax gives distance.",
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
    "description": "Import a compatible private pack for supplied course questions and captures. Source review does not award mastery.",
    "chapters": "Lectures 13–18 · Exam 2: material available so far",
    "questions": [],
    "status": "review"
  }
];
