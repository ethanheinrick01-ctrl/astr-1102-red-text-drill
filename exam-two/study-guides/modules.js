window.ASTR1102_MODULES = [
  {
    "id": "exam-two-module-01",
    "examId": "exam-two",
    "number": 1,
    "kicker": "Distance",
    "title": "Distance and parallax",
    "description": "Use viewpoint changes to measure distance without guessing from brightness.",
    "source": "Lecture 13 pages 7–18; Lecture 14 page 4",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-parallax-geometry",
        "label": "Annual parallax and the reference background",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-parsec",
        "label": "Parsecs and angular units",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-parallax-ratio",
        "label": "Parallax ratios reverse distance ratios",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-01-lesson",
        "type": "lesson",
        "title": "Distance and parallax",
        "body": [
          "Parallax is an apparent change in a nearby star’s position relative to much more distant background stars when the observer changes position. Opposite sides of Earth’s orbit give a baseline of about 2 AU. The conventional angle p is half the full six-month shift. Actual stellar motion also changes positions, so repeated observations separate the annual pattern from proper motion.",
          "Worked example: A nearby finger shifts more than a faraway wall when you switch eyes. Earth’s orbital viewpoints provide the analogous astronomical baseline.",
          "Common mistake: The star does not need to physically cross the sky to show parallax; brightness alone does not establish distance.",
          "A parsec is a distance unit: the distance corresponding to a parallax angle of one arcsecond. One parsec is about 3.26 light-years. Use arcseconds with d = 1/p; milliarcseconds must first be divided by 1000. Tiny angles limit how far a given instrument can measure useful parallax. The slide’s ground-based 0.01 arcsecond example corresponds to 100 pc; it is a course illustration, not a universal current instrument specification.",
          "Worked example: p = 0.25 arcsec gives d = 4 pc, about 13 light-years. A 10 milliarcsecond parallax equals 0.010 arcsec and gives 100 pc.",
          "Common mistake: Parsec is neither a time nor a speed; do not insert milliarcseconds directly into an arcsecond formula.",
          "Distance is inversely proportional to parallax. For two stars, dA/dB = pB/pA. A star with a larger parallax is closer, regardless of which star looks brighter. Compare the ratio before converting to absolute distances when only a relative answer is needed.",
          "Worked example: If pA = 0.2 arcsec and pB = 1.2 arcsec, dA/dB = 6, so A is six times farther away.",
          "Common mistake: Keeping the same ratio direction gives the opposite distance conclusion."
        ],
        "keyPoints": [
          "Larger parallax means a nearer star.",
          "d(pc) = 1 / p(arcsec).",
          "Annual parallax is measured against background stars."
        ],
        "source": "Lecture 13 pages 7–18; Lecture 14 page 4"
      },
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
      }
    ]
  },
  {
    "id": "exam-two-module-02",
    "examId": "exam-two",
    "number": 2,
    "kicker": "Light output",
    "title": "Brightness and luminosity",
    "description": "Keep surface flux, total output, and received light separate.",
    "source": "Lecture 13 pages 6, 19–26; Lecture 14 pages 5–9, 23",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-flux-luminosity",
        "label": "Surface flux, luminosity, and apparent brightness",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-inverse-square",
        "label": "Inverse-square brightness comparisons",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-combined-ratio",
        "label": "Recover luminosity from brightness and distance",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-02-lesson",
        "type": "lesson",
        "title": "Brightness and luminosity",
        "body": [
          "Surface flux F is power leaving one square meter of stellar surface; in the thermal model F = σT⁴. Luminosity L is the star’s total emitted power, L = 4πR²F. Apparent brightness b is received power per square meter at the observer, b = L/(4πd²) without extinction. Moving the observer changes b, not the star’s intrinsic L or F. The lecture compares the Sun and Sirius to separate apparent from intrinsic brightness.",
          "Worked example: A larger star with the same temperature has the same surface flux but more emitting area and greater total luminosity.",
          "Common mistake: Calling every use of “brightness” luminosity hides whether the measurement is at the surface or at Earth.",
          "For fixed luminosity and no extinction, apparent brightness falls as distance squared. Tripling distance makes a star nine times fainter. A distance comparison concerns the observer’s received light and does not require changing the star’s temperature. At equal distances, brightness ratios instead equal luminosity ratios.",
          "Worked example: The Mars/Venus class question uses a factor of two in distance, giving one-quarter the received sunlight. At 10 versus 1000 light-years the distance ratio is 100 and brightness ratio is 1/10,000.",
          "Common mistake: A factor of two in distance does not mean a factor of two in brightness.",
          "With extinction neglected and the same measurement convention, luminosity ratios follow L1/L2 = (b1/b2)(d1/d2)². Distance supplies information that apparent brightness alone lacks. If the same distance is used, the distance term cancels. Measuring one optical magnitude does not by itself specify a bolometric luminosity without assumptions about extinction and the spectrum; the ambiguous supplied Top Hat key is retained in source review.",
          "Worked example: Ten times the received brightness at five times the distance means 10 × 5² = 250 times the luminosity.",
          "Common mistake: Using a linear distance factor gives 50 rather than 250; reversing the distance term gives the wrong comparison."
        ],
        "keyPoints": [
          "F = σT⁴ is surface flux.",
          "L is total power; b is received power per area.",
          "b = L / (4πd²), assuming no extinction."
        ],
        "source": "Lecture 13 pages 6, 19–26; Lecture 14 pages 5–9, 23"
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
      }
    ]
  },
  {
    "id": "exam-two-module-03",
    "examId": "exam-two",
    "number": 3,
    "kicker": "Brightness scale",
    "title": "Magnitudes and extinction",
    "description": "Read the reversed magnitude scale and recognize how dust biases distance.",
    "source": "Lecture 14 pages 10–18; Lecture 15 page 5; supplied L15 Top Hat Q3",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-magnitude-ratio",
        "label": "The logarithmic magnitude scale",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-absolute-magnitude",
        "label": "Apparent magnitude, absolute magnitude, and distance modulus",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-extinction-distance",
        "label": "Dust, magnitude, and inferred distance",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-03-lesson",
        "type": "lesson",
        "title": "Magnitudes and extinction",
        "body": [
          "Lower numerical magnitude means greater received brightness. One magnitude is about a factor of 2.5 (more precisely 100^(1/5)); five magnitudes are exactly a factor of 100 in the defined scale. Multiply factors across several magnitude steps. A negative magnitude can describe a very bright object. The dark-site naked-eye limit is approximately magnitude 6 in the lecture example.",
          "Worked example: Magnitudes 2 and 6 differ by four steps: the magnitude-2 star is about 2.5⁴ ≈ 39 times brighter (about 40 with the precise factor).",
          "Common mistake: The numerical magnitude difference is not the brightness ratio. Use the lecture’s approximation only when the question explicitly requests it.",
          "Apparent magnitude m measures received brightness from Earth in a specified band. Absolute magnitude M is the apparent magnitude the star would have at 10 pc, conventionally without intervening extinction. Distance modulus is m − M. In the no-extinction relation, m − M = 5 log10(d/10 pc); d = 10 × 10^((m−M)/5) pc. Greater distance modulus means greater inferred distance. Lecture 14 page 16’s conversion from absolute magnitude to luminosity is explicitly “No need to know this”; keep that formula optional.",
          "Worked example: At 10 pc and no extinction, m = M. A distance modulus of 5 gives 100 pc.",
          "Common mistake: Absolute magnitude is not the brightness you happen to see now; the 10-pc reference is essential.",
          "Dust reduces the light reaching us, making apparent magnitude numerically larger and often reddening the light. If distance modulus is interpreted without correcting extinction, the extra faintness is incorrectly assigned to distance and the estimate is too large. Parallax itself is geometric; this photometric bias is not the same as changing the star’s actual distance.",
          "Worked example: A star measured at m = +4.3 behind dust would have a lower apparent magnitude if the dust were removed.",
          "Common mistake: “Fainter” means a higher magnitude. Dust can alter the observation without moving the star."
        ],
        "keyPoints": [
          "Smaller magnitude means brighter.",
          "Five magnitudes correspond to a factor of 100.",
          "Absolute magnitude places the star at 10 pc.",
          "Ignoring extinction can overestimate a photometric distance."
        ],
        "source": "Lecture 14 pages 10–18; Lecture 15 page 5; supplied L15 Top Hat Q3"
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
      }
    ]
  },
  {
    "id": "exam-two-module-04",
    "examId": "exam-two",
    "number": 4,
    "kicker": "Temperature",
    "title": "Stellar colors and spectra",
    "description": "Use color ratios and spectral lines without confusing dust with temperature.",
    "source": "Lecture 14 pages 19–22; Lecture 15 pages 4–6, 18; Lecture 16 pages 5, 9–12",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-color-temperature",
        "label": "Color ratios and temperature",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-spectral-temperature",
        "label": "Spectral sequence and absorption lines",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-reddening",
        "label": "Reddening versus an intrinsically cool star",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-04-lesson",
        "type": "lesson",
        "title": "Stellar colors and spectra",
        "body": [
          "Photometry through U, B, and V filters measures brightness in different wavelength bands. In the lecture convention, a hotter star has more blue relative to visual light and therefore a smaller bV/bB ratio, if reddening is controlled. Multicolor photometry measures many faint stars efficiently but is less precise than spectroscopy. False-color composite images need not reproduce naked-eye colors.",
          "Worked example: The slides give bV/bB = 1.87 for the Sun (5800 K) and 0.81 for Bellatrix (21,500 K). The smaller ratio corresponds to the hotter star.",
          "Common mistake: A larger visual-to-blue ratio does not mean more blue light; check which band is in the numerator.",
          "O, B, A, F, G, K, M is the hot-to-cool stellar spectral sequence; the Sun is G2. L and T extend toward cooler brown-dwarf regimes in the slides. Spectral types were organized from absorption-line patterns, and temperature changes which lines are strong. A weak hydrogen line alone is not proof of little hydrogen. The table’s wavelength-of-peak colors are not a literal description of every star’s perceived color.",
          "Worked example: Among A, G, M, F, and K, A is hottest and M coolest. If B is added, B becomes hottest; the correct choice depends on the offered set.",
          "Common mistake: Do not assume alphabetical order or always answer O when O is absent.",
          "A star can appear red because it is cool or because intervening dust preferentially removes shorter-wavelength light from the direct view. The lecture uses both V/B and B/U comparisons to help correct reddening. A red appearance alone is insufficient to determine temperature. Reflected light from dust can be blue while transmitted starlight is redder.",
          "Worked example: A blue star viewed through a dusty line of sight may appear redder without becoming cooler.",
          "Common mistake: Dust does not need to change the star’s temperature to change its observed color."
        ],
        "keyPoints": [
          "Hotter stars generally have bluer thermal spectra.",
          "O B A F G K M runs from hot to cool.",
          "Absorption patterns reflect temperature as well as composition.",
          "Multicolor photometry is useful but less precise than spectroscopy."
        ],
        "source": "Lecture 14 pages 19–22; Lecture 15 pages 4–6, 18; Lecture 16 pages 5, 9–12"
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
      }
    ]
  },
  {
    "id": "exam-two-module-05",
    "examId": "exam-two",
    "number": 5,
    "kicker": "Physical properties",
    "title": "Stellar radius and mass",
    "description": "Connect emitting area and temperature, and identify how masses are measured.",
    "source": "Lecture 15 pages 7–16; Lecture 16 pages 15, 17–20",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-radius-temperature",
        "label": "Radius, temperature, and total luminosity",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-mass-measurement",
        "label": "Binary-star mass measurements",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-brown-dwarfs",
        "label": "Brown dwarfs versus main-sequence stars",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-05-lesson",
        "type": "lesson",
        "title": "Stellar radius and mass",
        "body": [
          "Thermal stellar luminosity combines surface flux and emitting area: L = 4πR²σT⁴. Ratios are usually simpler than inserting constants. At fixed temperature, doubling radius quadruples luminosity. At fixed radius, doubling temperature increases luminosity sixteenfold. A luminous but relatively cool star, such as the lecture’s Betelgeuse example, must have a large radius. The supplied values are course examples rather than newly measured stellar parameters.",
          "Worked example: For T1/T2 = 2 and R1/R2 = 1/2, L1/L2 = (1/2)² × 2⁴ = 4.",
          "Common mistake: The temperature factor is fourth power; area is radius squared. Neither exponent can be replaced by a linear factor.",
          "The slides identify mass as the hardest listed stellar property to measure and use Doppler shifts in binary stars to study orbital motion. Brightness and spectra provide temperature and luminosity clues; an orbit supplies gravitational information needed to constrain masses. The label “spectroscopic parallax” refers to a distance estimate from stellar properties, not a direct annual angular parallax measurement.",
          "Worked example: Repeated alternating Doppler shifts in a binary track orbital velocity; this is different evidence from one color measurement.",
          "Common mistake: A temperature spectrum is not, by itself, a direct mass measurement for every stellar class.",
          "The defining distinction used here is sustained hydrogen fusion in the core: main-sequence stars maintain it; brown dwarfs do not. Brown dwarfs form in a star-like way and radiate stored heat and contraction energy. L and T are the cooler spectral classes introduced in the packet. The word “dwarf” also appears in white dwarf and red dwarf, so the full category matters.",
          "Worked example: A cool L/T object without sustained core hydrogen fusion fits the brown-dwarf category rather than an ordinary main-sequence star.",
          "Common mistake: White dwarfs are evolved stellar remnants; brown dwarfs are not simply old white dwarfs."
        ],
        "keyPoints": [
          "L ∝ R²T⁴.",
          "A cool star can be very luminous if its radius is large.",
          "Binary orbits and Doppler shifts constrain mass.",
          "Brown dwarfs lack sustained core hydrogen fusion."
        ],
        "source": "Lecture 15 pages 7–16; Lecture 16 pages 15, 17–20"
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
      }
    ]
  },
  {
    "id": "exam-two-module-06",
    "examId": "exam-two",
    "number": 6,
    "kicker": "Stellar map",
    "title": "The H–R diagram",
    "description": "Translate between axes, stellar regions, radius, and evolutionary state.",
    "source": "Lecture 15 pages 17–18; Lecture 16 pages 6–8, 13–16, 19–29; Lecture 17 pages 4–5",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-hr-axes",
        "label": "H–R axes and radius patterns",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-hr-regions",
        "label": "Main sequence, giants, and white dwarfs",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-main-sequence-mass",
        "label": "Main-sequence mass, luminosity, and lifetime",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-sun-path",
        "label": "The supplied Sun evolution preview",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-06-lesson",
        "type": "lesson",
        "title": "The H–R diagram",
        "body": [
          "The standard H–R diagram puts temperature on the horizontal axis decreasing toward the right, and luminosity increasing upward. Absolute magnitude can replace luminosity, with brighter objects having smaller magnitudes. At a fixed temperature, greater luminosity means larger radius. Combining L ∝ R²T⁴ gives R ∝ √L/T²: large-radius objects lie toward the luminous, cool upper right; small-radius objects toward the faint, hot lower left. The lecture’s page 22 proportional wording is qualitative; the exact powers come from Lecture 15 page 8.",
          "Worked example: Two points vertically separated at the same temperature differ in luminosity and therefore in radius. A cool luminous giant must have a much larger radius than a hot faint white dwarf.",
          "Common mistake: An H–R x-axis is not an ordinary “bigger temperature toward the right” plot.",
          "Most stars in the lecture’s simplified population lie along the main sequence from upper left to lower right and fuse hydrogen in their cores. Red giants are cool but luminous; supergiants are extremely luminous and span multiple colors. White dwarfs are faint, compact remnants with no nuclear fusion, initially relatively hot and then cooling. The approximate 90% main-sequence population and lifetime statements are classroom models, not a probability for every observational sample.",
          "Worked example: The supplied white-dwarf question targets the lower-left part of the diagram. “Hot” does not require high total luminosity if radius is small.",
          "Common mistake: Do not equate white dwarf with cool red dwarf, or use an unbiased-population percentage for a brightness-selected sample.",
          "Along the main sequence, higher-mass stars are hotter and more luminous and lie toward the upper left. Stronger gravity produces hotter cores and much faster nuclear burning. Their greater fuel supply does not compensate for the faster consumption, so high-mass main-sequence stars have shorter lifetimes. Low-mass red dwarfs are common and dim; the Sun is brighter than most nearby stars, not the most common representative.",
          "Worked example: A massive blue main-sequence star uses fuel faster and lives less long than a low-mass red dwarf. Under the class’s rough 90% model, 10% are outside the main sequence.",
          "Common mistake: The mass sequence applies along the main sequence; being bright does not make a red giant a high-mass main-sequence star.",
          "The current packet introduces the Sun’s broad path: main-sequence core hydrogen burning, expansion into a red giant, and a final white dwarf. After core hydrogen exhaustion, the red-giant direction is toward cooler surface temperature and greater luminosity, upward and rightward on the standard H–R plot. Detailed later burning, remnant physics, and massive-star deaths await the later lectures. This is a broad phase path, not a monotonic step-by-step trajectory.",
          "Worked example: The lecture’s Sun path is main sequence → red giant → white dwarf, not blue supergiant → white dwarf.",
          "Common mistake: A cooler surface during giant expansion does not mean the star has become less luminous; radius also changes."
        ],
        "keyPoints": [
          "Hotter is left; greater luminosity is up.",
          "White dwarfs are hot but faint; red giants are cool but luminous.",
          "The main sequence is a mass sequence.",
          "The supplied Sun path is main sequence → red giant → white dwarf."
        ],
        "source": "Lecture 15 pages 17–18; Lecture 16 pages 6–8, 13–16, 19–29; Lecture 17 pages 4–5"
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
      }
    ]
  },
  {
    "id": "exam-two-module-07",
    "examId": "exam-two",
    "number": 7,
    "kicker": "Gas and dust",
    "title": "Interstellar material",
    "description": "Distinguish gas emission, dust scattering, and obscuration.",
    "source": "Lecture 17 pages 8–19",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-ism-density",
        "label": "Gas, dust, and density scales",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-dust-scattering",
        "label": "Transmitted, reflected, and infrared light",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-nebula-mechanism",
        "label": "H II regions and reflection nebulae",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-07-lesson",
        "type": "lesson",
        "title": "Interstellar material",
        "body": [
          "Interstellar space is not empty: it contains low-density gas and dust. A concentration is a nebula. Gas can produce absorption or emission lines; dust dims and reddens background sources and can radiate infrared. The density examples on page 8 span many orders of magnitude: dense dust clouds exceed diffuse interstellar space, while our atmosphere is much denser still. Treat these as lecture scale examples, not universal constants.",
          "Worked example: The supplied dense-cloud example is 10¹⁰ particles/m³ versus 10⁶ in interstellar space, a factor of 10⁴.",
          "Common mistake: Dark on an optical image does not mean no material is present; dense dust can obscure the background.",
          "Dust removes light from a direct line of sight through scattering and absorption. The course emphasizes stronger removal/scattering of shorter wavelengths: transmitted visible starlight is redder, while scattered light seen from the side can look blue. Infrared is less obstructed and useful for seeing into dusty regions. Page 17’s “not absorbed” wording is a simplification; do not treat it as a universal physical rule.",
          "Worked example: A dusty cloud can redden a background star while the cloud’s reflection nebulosity looks blue. These are two different paths taken by the light.",
          "Common mistake: A blue reflection nebula does not mean the transmitted background light is blue, and infrared penetration is not perfectly unlimited.",
          "In an H II emission region, energetic ultraviolet photons from young hot O/B stars ionize hydrogen. H I means neutral hydrogen and H II means ionized hydrogen, not a molecule containing two atoms. Recombination and atomic transitions produce characteristic emission. A reflection nebula instead redirects an illuminating star’s light by dust scattering. The Orion Nebula is the supplied emission-region example and the Witch Head the supplied reflection example.",
          "Worked example: When an electron recombines with an ionized hydrogen atom, emitted light can contribute to an emission nebula. Reflection does not require the same ionization mechanism.",
          "Common mistake: H II is not H₂. Do not infer that a reflection nebula’s blue color proves core nuclear fusion in the cloud."
        ],
        "keyPoints": [
          "The space between stars contains sparse gas and dust.",
          "Dust makes transmitted light fainter and redder.",
          "H I is neutral; H II is ionized.",
          "Emission and reflection nebulae produce light by different mechanisms."
        ],
        "source": "Lecture 17 pages 8–19"
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
    "id": "exam-two-module-08",
    "examId": "exam-two",
    "number": 8,
    "kicker": "Stellar nurseries",
    "title": "Beginning of star formation",
    "description": "Recognize the supplied birth environments while keeping later stages pending.",
    "source": "Lecture 17 pages 6–7, 10, 13, 15–16, 20–21",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-formation-regions",
        "label": "Where new stars form",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-bok-globules",
        "label": "Bok globules as dark birth environments",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-herbig-haro",
        "label": "Young-star outflows and the source boundary",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-08-lesson",
        "type": "lesson",
        "title": "Beginning of star formation",
        "body": [
          "The packet associates star birth with clouds of gas and dust, including dark nebulae and dusty galactic regions. The Orion Nebula images supply a nearby stellar-nursery example. Dark patches are not necessarily empty holes; optical obscuration can hide material and young stars. Page 7 asks about later collapse stages, lost material, and triggering by stellar death but does not yet teach their full answers. Those targets stay pending.",
          "Worked example: In a galaxy image, gas-rich dust lanes are more promising star-forming environments than regions with little gas. The image alone is not a precise star-formation-rate measurement.",
          "Common mistake: Do not turn every dark region into proof of active star formation, or infer the full later collapse sequence from a guiding question.",
          "Bok globules are compact dark clouds of dust and gas, mostly molecular hydrogen in the supplied slide. The lecture gives sizes around one light-year and masses of about 2–50 solar masses, and associates them with formation of double or multiple systems. These are characteristic examples, not exact properties of every globule. “Dark” describes obscuration in the visible view rather than an absence of gas.",
          "Worked example: A compact dusty cloud can hide the young stars forming inside it. The cloud’s mass is not identical to the eventual mass of one star.",
          "Common mistake: Do not confuse a molecular cloud with an H II region or assume all available cloud matter becomes one star.",
          "The supplied Herbig–Haro slide associates these objects with star-forming regions and alignment with young stars’ rotational axes. They are structures associated with young-star outflows, distinct from a dark Bok globule. Its universal lifetime and composition wording needs qualification, so those details are excluded from scored questions. NASA describes shocks when young-star jets encounter surrounding material; this clarification supports the figure but does not expand the exam pool.",
          "Worked example: Opposed structures aligned with a young star’s axis support an outflow interpretation; a dark round cloud without that evidence does not establish the same interpretation.",
          "Common mistake: Do not grade “all Herbig–Haro objects last less than 100 years” as a universal fact from this slide."
        ],
        "keyPoints": [
          "Gas-rich, dusty regions provide the material for new stars.",
          "Bok globules are compact dark clouds of gas and dust.",
          "Herbig–Haro objects are associated with young-star outflows.",
          "The detailed formation sequence awaits later lectures."
        ],
        "source": "Lecture 17 pages 6–7, 10, 13, 15–16, 20–21"
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
      }
    ]
  },
  {
    "id": "exam-two-module-09",
    "examId": "exam-two",
    "number": 9,
    "kicker": "Lecture 18",
    "title": "Cloud collapse and protostars",
    "description": "Connect cold dense clouds, contraction energy, pressure, infrared observations, and the route to a young star.",
    "source": "Lecture 18 pages 7, 12–21",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-collapse-conditions",
        "label": "Why cold, dense regions collapse",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-infrared-protostars",
        "label": "Why infrared reveals embedded young stars",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-protostar-energy",
        "label": "Kelvin–Helmholtz contraction supplies energy",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-collapse-pressure",
        "label": "Temperature and density both affect pressure",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-protostar-support",
        "label": "Why contraction heating is not permanent support",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-protostar-track",
        "label": "Formation sequence and changing luminosity",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-09-lesson",
        "type": "lesson",
        "title": "Cloud collapse and protostars",
        "body": [
          "Cloud contraction begins when inward gravity overcomes pressure support. For comparable cloud sizes and composition, higher density strengthens self-gravity, while lower temperature reduces thermal support. Both matter: the coldest, densest pockets are the favored sites in the lecture. Bright ionized gas near O/B stars is not, by itself, evidence of a collapsing cold core. The quoted Bok-globule values (about 10 K and 100–10,000 particles/cm³) are classroom examples, not universal thresholds.",
          "Worked example: Among comparable regions, 10 K with 2,000 particles/cm³ is a stronger candidate than 80 K with 30 particles/cm³.",
          "Common mistake: Dense gas can also have substantial pressure. High density helps gravity; low temperature reduces thermal resistance. Do not equate a glowing nebula with the best birth site.",
          "Dust obscures many young objects at visible wavelengths. Infrared is scattered less than visible light in the lecture model, allowing more of it to reach us. Cool objects also radiate relatively strongly at longer wavelengths according to Wien’s relationship. These are two reasons to use infrared: the intervening dust and the source spectrum. “Penetrates” does not mean every infrared wavelength passes through every cloud unchanged.",
          "Worked example: A compact object hidden in a dusty visible image may appear in infrared without the object having changed.",
          "Common mistake: Infrared does not create protostars, erase all extinction, or require that every object in an infrared image be a protostar.",
          "Before sustained core hydrogen fusion powers the main-sequence phase, contraction releases gravitational potential energy. Part becomes internal thermal energy and part is radiated. The contracting object becomes smaller and denser while its interior heats. The slide’s friction analogy is a teaching simplification; the important energy reservoir is gravity. Interior heating does not require surface temperature to rise at every point along a plotted pre-main-sequence track.",
          "Worked example: A shrinking young object can remain luminous before sustained hydrogen fusion begins because it releases gravitational energy.",
          "Common mistake: Do not infer that a luminous protostar is already powered mainly by stable hydrogen burning, or that internal and surface temperature are interchangeable.",
          "For the same gas composition in the simple lecture model, pressure is proportional to temperature times particle density: P ∝ nT. Contraction raises density and heats the gas, increasing pressure support. This helps slow contraction or establish approximate mechanical balance, but it does not prove that energy losses have ceased. Compare ratios only when composition and the model assumptions stay the same.",
          "Worked example: Doubling particle density while temperature falls to one quarter gives Pnew/Pold = 2 × 1/4 = 1/2.",
          "Common mistake: A temperature change alone cannot determine the pressure ratio when density changes too. Mechanical balance and a long-term energy supply are separate questions.",
          "Contraction can replenish thermal energy only while contraction continues. If the object radiates energy away, cooling reduces thermal support and further contraction can follow. Temporary pressure support is not an inexhaustible energy supply. Sustained nuclear heating eventually balances radiative losses for a main-sequence star. Later compact-object support and detailed late evolution are not established by this lecture’s broad gravity-versus-pressure slogan.",
          "Worked example: If a non-fusing young object radiates away heat after contraction slows, reduced thermal support can allow it to contract again.",
          "Common mistake: “Collapse heats the gas” does not mean “collapse permanently stops itself.” Do not treat the slogan “gravity always wins” as a universal immediate collapse rule.",
          "The supplied sequence shows a dense dark core, gravitational collapse, a protostar with a disk and bipolar flow, a T Tauri stage, a pre-main-sequence star with a remaining disk, and a young stellar system. Its sizes and ages illustrate that model, not one timetable for all masses. The H–R track plots surface temperature and luminosity, not physical travel through space. Luminosity depends on both radius and surface temperature: L ∝ R²T⁴, so a shrinking object need not become brighter. Some young phases exceed the eventual main-sequence luminosity. The Sun-like example gives about 20 million years, much shorter than its main-sequence lifetime.",
          "Worked example: At approximately fixed surface temperature, shrinking to half the radius reduces luminosity to one quarter. Diagonal constant-radius lines combine surface area with Stefan–Boltzmann surface flux.",
          "Common mistake: A protostar can heat internally while surface temperature changes little. Its light output cannot be inferred from the word “hotter” without specifying temperature and radius."
        ],
        "keyPoints": [
          "Cold, dense cores favor collapse.",
          "Infrared helps with both dust obscuration and cool-source emission.",
          "Contraction converts gravitational energy to heat and radiation.",
          "Pressure depends on temperature and density.",
          "Sustained heating must replace radiated energy.",
          "Read surface temperature, radius and luminosity separately."
        ],
        "source": "Lecture 18 pages 7, 12–21"
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
      }
    ]
  },
  {
    "id": "exam-two-module-10",
    "examId": "exam-two",
    "number": 10,
    "kicker": "Lecture 19",
    "title": "Stellar clocks and triggered birth",
    "description": "Separate contraction time from nuclear lifetime, and connect cloud compression to new stars.",
    "source": "Lecture 19 pages 4–19; Lecture 20 pages 4–6",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-kh-clock",
        "label": "The Kelvin–Helmholtz contraction clock",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-triggered-birth",
        "label": "Compression, molecular clouds, and enrichment",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-ms-lifetime-ratio",
        "label": "Fuel supply divided by fuel-use rate",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-10-lesson",
        "type": "lesson",
        "title": "Stellar clocks and triggered birth",
        "body": [
          "Before sustained core hydrogen fusion, gravitational contraction can power a protostar. The lecture estimates tKH = GM²/(RL): gravitational energy scale GM²/R divided by luminosity, an energy loss rate. Compare ratios with the other variables fixed. This is a characteristic thermal timescale, not an exact integrated age for every protostar. The lecture gives roughly 20 million years for the Sun’s formation, only about 0.2% of its 10-billion-year main-sequence lifetime. Interior heating does not force total luminosity to rise monotonically.",
          "Worked example: At equal mass and radius, an object radiating twice the luminosity has half the characteristic contraction time.",
          "Common mistake: The M² dependence belongs to the contraction clock. Main-sequence nuclear lifetime uses M/L, not M²/(RL).",
          "Spiral-arm density waves, cloud collisions, and supernova shocks can compress interstellar gas. Increased density can let gravity overcome thermal support in cold regions. A shock can trigger collapse in suitable gas; an explosion does not create a star automatically. Giant molecular clouds are reservoirs for many stars and clusters. The lecture quotes masses near 100,000–2,000,000 solar masses and about 5,000 Galactic clouds as classroom estimates. CO microwave emission traces much molecular material hidden in optical images. Massive stars also return newly made heavy elements to interstellar gas, enriching later generations. The suggestion that a nearby supernova triggered the Sun’s birth is presented as a possibility.",
          "Worked example: A shock sweeps diffuse gas into a denser shell. A cold fragment can then collapse; the shock is the trigger, while gravity drives collapse.",
          "Common mistake: Do not confuse compression with heating alone, or treat the proposed trigger of the Sun’s birth as an observed certainty.",
          "The main sequence is sustained core hydrogen fusion. In the lecture approximation, usable fuel scales with stellar mass and consumption rate scales with luminosity, giving tMS/tSun ≈ (M/MSun)/(L/LSun). Use a solar reference of 10 billion years. More massive main-sequence stars usually have much higher luminosities, so fuel use outruns their larger fuel supply. This is a model comparison, not a law that fixes lifetime from mass without knowing luminosity. Lecture 20 repeats it with a 5-solar-mass, 15-solar-luminosity example.",
          "Worked example: For M = 4 MSun and L = 200 LSun, lifetime is 0.02 times the Sun’s, or 200 million years.",
          "Common mistake: Mass alone is not lifetime. Do not square M here or confuse million with billion."
        ],
        "keyPoints": [
          "Contraction clock: tKH ∝ M²/(RL).",
          "Nuclear lifetime: tMS/tSun ≈ (M/MSun)/(L/LSun).",
          "Compression can create cold dense regions where gravity wins."
        ],
        "source": "Lecture 19 pages 4–19; Lecture 20 pages 4–6"
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
      }
    ]
  },
  {
    "id": "exam-two-module-11",
    "examId": "exam-two",
    "number": 11,
    "kicker": "Lecture 20",
    "title": "Nuclear burning and temperature",
    "description": "Distinguish pp, CNO, and triple-alpha reactions, their fuels, and the limits of energy-producing fusion.",
    "source": "Lecture 20 pages 10–16; Lecture 21 page 4",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-hydrogen-pathways",
        "label": "Two routes from hydrogen to helium",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-triple-alpha",
        "label": "Helium burning, alpha particles, and ash",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-rate-temperature",
        "label": "Comparing temperature sensitivities",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-11-lesson",
        "type": "lesson",
        "title": "Nuclear burning and temperature",
        "body": [
          "Both the proton–proton chain and the CNO cycle produce helium from hydrogen. In CNO burning, carbon, nitrogen, and oxygen nuclei participate as catalysts; the net fuel is still hydrogen. The pp chain dominates in the Sun’s present core model, while CNO becomes more important in hotter stellar cores. Read each reaction’s net fuel and ash, not just the names of nuclei encountered during its steps.",
          "Worked example: Finding carbon in the reaction cycle does not mean that the cycle’s net fuel is carbon.",
          "Common mistake: Triple-alpha is not a third hydrogen-burning route; it consumes helium.",
          "An alpha particle is a helium-4 nucleus. At core temperatures around 100 million kelvin, the triple-alpha sequence combines two helium nuclei briefly into beryllium, then adds a third to form carbon. Additional capture of helium by carbon can make oxygen. Thus helium burning leaves carbon and oxygen ash. Core hydrogen exhaustion does not instantly ignite helium: contraction and heating intervene.",
          "Worked example: Three helium-4 nuclei contain 12 nucleons, matching carbon-12; oxygen requires an additional alpha capture.",
          "Common mistake: Do not label triple-alpha as hydrogen burning or claim every carbon nucleus must immediately become oxygen.",
          "The slides use approximate local scalings: pp rate ∝ T⁴, CNO rate ∝ T¹⁶, and triple-alpha rate ∝ T⁴¹. For the same fractional temperature rise, the larger exponent gives the larger fractional rate change if other relevant conditions are fixed. These are approximations over applicable stellar conditions; compare sensitivities rather than claiming one fixed exponent at every possible temperature and density. The lecture also places carbon, neon, oxygen, and silicon burning in sufficiently hot massive stars. Near the iron group, further fusion no longer provides a net energy source; this does not mean heavier elements cannot exist or form by other processes.",
          "Worked example: For a 10% rise, 1.1⁴ ≈ 1.46 and 1.1¹⁶ ≈ 4.6. These explain the lecture’s rounded 50%-faster and fivefold examples.",
          "Common mistake: A larger exponent does not alone tell you which reaction dominates when fuels, density, and baseline rates differ."
        ],
        "keyPoints": [
          "pp and CNO: hydrogen → helium.",
          "Triple-alpha: helium → carbon; further alpha capture can make oxygen.",
          "The supplied temperature powers are local approximations, not universal constants."
        ],
        "source": "Lecture 20 pages 10–16; Lecture 21 page 4"
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
      }
    ]
  },
  {
    "id": "exam-two-module-12",
    "examId": "exam-two",
    "number": 12,
    "kicker": "Lecture 20",
    "title": "The changing Sun and red giants",
    "description": "Follow the core and envelope separately through hydrogen exhaustion, shell burning, and helium ignition.",
    "source": "Lecture 20 pages 7–9, 18–25; Lecture 21 pages 4–6",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-solar-brightening",
        "label": "Why the main-sequence Sun brightens slowly",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-red-giant-shell",
        "label": "Core contraction and envelope expansion",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-helium-hr",
        "label": "Helium ignition and the H–R track",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-12-lesson",
        "type": "lesson",
        "title": "The changing Sun and red giants",
        "body": [
          "As core hydrogen becomes helium, the mean mass per free particle rises. At the same mass density and temperature, fewer particles provide less gas pressure. The core slowly contracts and heats, increasing the hydrogen-fusion rate and luminosity. Approximate pressure balance can be maintained during slow structural adjustment. This is not yet sustained helium-core burning or the post-main-sequence hydrogen-shell phase. The lecture’s faint-young-Sun example uses roughly 70% of present luminosity and greenhouse warming to discuss early Earth; its simple temperature estimates are not a complete climate calculation.",
          "Worked example: Compare two equal-mass-density samples: the helium-rich sample has fewer particles. Maintaining support requires structural and thermal adjustment.",
          "Common mistake: Do not compare at equal particle density and still claim helium gives lower ideal-gas pressure: P = nkT depends on n, not the nucleus’s name.",
          "When usable core hydrogen is exhausted, an inert helium core contracts and heats. Hydrogen surrounding that core can fuse in a shell. Core contraction continues while shell burning becomes more intense, and the outer envelope expands and cools. The star can be both more luminous and cooler at its surface because its radiating area becomes much larger. The detailed core–shell–envelope coupling is complex; the source explicitly cautions against a single oversimplified mechanical story. On the H–R diagram, the track moves toward cooler temperatures as the envelope expands, then climbs the giant branch.",
          "Worked example: A red giant has a hot dense core inside a very large cool envelope. “Cooler star” here refers to the surface, not every interior layer.",
          "Common mistake: Core and envelope do not have to expand or cool together. Shell burning is not the same as helium burning in the core.",
          "In the supplied low-mass/Sun-like story, helium ignites rapidly after the core reaches about 100 million kelvin. The helium flash is internal; it is not a visible supernova explosion. After ignition, the core expands and cools somewhat, luminosity drops, and the envelope shrinks and warms. The H–R track moves down and left into the helium-core-burning region. The horizontal branch is especially clear in low-metallicity cluster diagrams. Not every stellar mass ignites helium in a flash, and not every helium-burning star is blue. The source timeline gives approximate teaching durations: 10 billion years on the main sequence, 0.25 billion as a red giant, and 0.1 billion for core helium burning. Later stages are not supplied here.",
          "Worked example: Down means less luminous and left means hotter surface temperature. The internal flash does not put the star above the diagram as a supernova.",
          "Common mistake: Do not apply the helium-flash story to every stellar mass or confuse the horizontal branch with hydrogen-core main-sequence burning."
        ],
        "keyPoints": [
          "A hotter contracting core can coexist with a cooler expanding surface.",
          "Red-giant-branch energy comes mainly from a hydrogen-burning shell.",
          "After helium ignition in the supplied low-mass track, the star becomes hotter and less luminous."
        ],
        "source": "Lecture 20 pages 7–9, 18–25; Lecture 21 pages 4–6"
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
      }
    ]
  },
  {
    "id": "exam-two-module-13",
    "examId": "exam-two",
    "number": 13,
    "kicker": "Lecture 21",
    "title": "Clusters as stellar clocks",
    "description": "Use shared birth conditions, main-sequence turnoffs, and metallicity to compare stellar populations.",
    "source": "Lecture 21 pages 7–25, 32",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-cluster-controls",
        "label": "Open and globular clusters as comparisons",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-cluster-turnoff",
        "label": "Reading age from the main-sequence turnoff",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-population-metals",
        "label": "Metallicity and stellar generations",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-13-lesson",
        "type": "lesson",
        "title": "Clusters as stellar clocks",
        "body": [
          "Cluster stars are approximately coeval, at a common distance, and affected by similar reddening in the lecture model. That makes different stellar masses easier to compare. Open clusters are relatively loose, often young groups: tens to thousands of stars over a few tens of light-years in the supplied examples. Pleiades and the double cluster h/χ Persei are examples. The blue Pleiades nebulosity illustrates reflection of starlight by dust. Globular clusters are dense old systems that can contain up to about a million stars in a region under roughly 100 light-years across. They contain surviving low-mass main-sequence stars, red giants, and horizontal-branch stars. The Galactic distribution figure places globular clusters around the central region and halo rather than only in gas-rich spiral arms.",
          "Worked example: Within one idealized cluster, compare high- and low-mass stars without first treating their different apparent brightnesses as distance differences.",
          "Common mistake: Same age and distance do not mean same mass, same evolutionary stage, or perfectly identical extinction for every star.",
          "The most massive main-sequence stars exhaust core hydrogen first. As a cluster ages, its surviving main sequence ends at progressively lower mass, luminosity, and surface temperature. The main-sequence turnoff is the bend away from the main sequence, not the single brightest red giant. A younger cluster retains a hotter, more luminous upper main sequence and generally appears bluer in the supplied comparison. During the early formation sequence, high-mass stars also reach the main sequence sooner; reaching and leaving it are different events. The sequence spans approximately 0, 5,000, 100,000, 3 million, 30 million, 66 million, 100 million, and 4.25 billion years in the supplied illustrative frames. These are not fixed ages for all clusters.",
          "Worked example: Cluster A turns off at a hotter, more luminous point than cluster B. Within comparable composition/model assumptions, A is younger.",
          "Common mistake: A hot horizontal-branch star in an old cluster does not make the cluster young. Use the main-sequence turnoff.",
          "Astronomical metals are all elements heavier than helium, including carbon and oxygen. The lecture’s rough local-gas composition is 74% hydrogen, 25% helium, 1% heavier elements; use it as an illustrative mixture, not every cloud’s exact composition. Population I means relatively metal-rich stars such as the Sun and typical open-cluster stars. Population II means older metal-poor stars such as typical globular-cluster populations. Population III denotes the first essentially metal-free stellar generation. Their proposed large masses are uncertain; the slide’s observation-status statement is dated and is not used as a scored fact. Stellar processing and recycling generally increase the heavy-element abundance available to later generations.",
          "Worked example: Oxygen counts as a metal in astronomy even though ordinary chemistry classifies it as a nonmetal.",
          "Common mistake: Population I is not the first generation. Population numbers are historical labels, and metallicity is a trend rather than a clock for each star."
        ],
        "keyPoints": [
          "Turnoff mass decreases as a cluster ages.",
          "Open and globular clusters describe populations, not identical individual stars.",
          "In astronomy, metals means elements heavier than helium."
        ],
        "source": "Lecture 21 pages 7–25, 32"
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
      }
    ]
  },
  {
    "id": "exam-two-module-14",
    "examId": "exam-two",
    "number": 14,
    "kicker": "Lecture 21",
    "title": "Variable stars and distance",
    "description": "Distinguish eclipses from pulsation, read a light curve, and connect period to calibrated luminosity and distance.",
    "source": "Lecture 21 pages 26–31",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-variable-mechanisms",
        "label": "Several ways stars vary in brightness",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-variable-periods",
        "label": "Read periods and distinguish pulsator classes",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-standard-candle",
        "label": "From pulsation period to distance",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-14-lesson",
        "type": "lesson",
        "title": "Variable stars and distance",
        "body": [
          "A changing brightness need not mean a pulsating stellar surface. An eclipsing binary dims when one star passes in front of the other, while an eruptive variable can brighten through an outburst. Pulsating stars change their structure and intrinsic output. The lecture contrasts Algol (eclipses), Eta Carinae (eruption), and Mira (a pulsating red giant). Its Mira example varies by roughly a factor of 100 over 332 days. Eta Carinae’s historical eruption illustrates eruptive variability; the slide’s tentative statement about its companion is retained as dated source wording rather than a current scored claim.",
          "Worked example: A repeatable dip caused by one star hiding another is geometric variability. Radial pulsation changes the star itself.",
          "Common mistake: Do not identify every periodic light curve as an eclipse or every eruption as a regular pulsation.",
          "A light curve plots apparent brightness or magnitude against time. A period is the interval between equivalent repeated phases, such as one maximum and the next. Magnitude axes often put brighter (smaller) values higher on the plot. The supplied classes are luminous Cepheids (roughly 1–100 days), lower-mass helium-burning RR Lyrae (typically under one day), and pulsating white dwarfs (minutes). These ranges are teaching examples rather than guarantees that every object falls into a hard boundary. The plotted Cepheid example shows a period near 5.4 days. Period, amplitude, and a full stellar classification are different observations.",
          "Worked example: Three consecutive peaks at days 2, 7, and 12 imply a five-day period, not ten days.",
          "Common mistake: Amplitude is the vertical brightness change; period is measured along the time axis. A period alone is not a complete classification.",
          "A calibrated period–luminosity relation lets an identified Cepheid’s period indicate its intrinsic luminosity or absolute magnitude. The lecture credits Henrietta Leavitt’s 1912 work. Longer-period Cepheids are more luminous within the same calibrated type. Compare inferred luminosity with observed apparent brightness, accounting for extinction, to obtain distance. Type I and Type II Cepheids require different calibrations; equal period does not give one universal luminosity for all variable-star classes. RR Lyrae also provide distance indicators, especially within the Galaxy, while luminous Cepheids can be detected in other galaxies. Page 31 gives one V-band relation: MV ≈ −2.43(log10 P − 1) − 4.05, P in days. It is a calibration example, not a requirement to memorize coefficients or a formula for every pulsator.",
          "Worked example: For equal calibrated luminosity and negligible extinction, a candle appearing four times fainter is twice as far away.",
          "Common mistake: Period is not apparent brightness. A longer period does not alone determine greater distance, and the correct variable-star type/calibration matters."
        ],
        "keyPoints": [
          "Brightness variability can have several causes.",
          "Cepheids, RR Lyrae, Mira, and white dwarfs have different characteristic periods.",
          "Period → calibrated luminosity; luminosity + apparent brightness → distance."
        ],
        "source": "Lecture 21 pages 26–31"
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
      }
    ]
  },
  {
    "id": "exam-two-module-15",
    "examId": "exam-two",
    "number": 15,
    "kicker": "Lectures 22–23",
    "title": "AGB shells and carbon recycling",
    "description": "Follow burning shells, thermal pulses, convection and winds through the late life of a Sun-like star.",
    "source": "Lecture 22 pages 10–17, 35",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-agb-shells",
        "label": "Locate the burning regions",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-thermal-pulses",
        "label": "Thermal pulses and envelope response",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-carbon-recycling",
        "label": "Make carbon, dredge it up, then lose it",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-15-lesson",
        "type": "lesson",
        "title": "AGB shells and carbon recycling",
        "body": [
          "After main-sequence core hydrogen burning, the red giant branch has hydrogen-shell burning around a helium core. The settled helium-burning stage has core helium fusion and a surrounding hydrogen shell. Once core helium is exhausted, the asymptotic giant branch (AGB) has a carbon–oxygen core with helium burning closer to it and hydrogen burning farther out. The extended envelope can be cool even while the shells are extremely hot. The lecture gives luminosities up to roughly 1,000 solar luminosities on the first giant branch and 10,000 on the AGB as illustrative scales, not a unique phase classifier.",
          "Worked example: An inert carbon–oxygen center with two burning shells is an AGB structure; a helium-burning center belongs to the earlier settled helium-burning stage.",
          "Common mistake: Do not identify the fuel from the red surface color or put hydrogen fusion inside the inert carbon–oxygen core.",
          "Hydrogen-shell burning deposits helium that can fuel a surrounding helium-burning shell. The helium shell can become thermally unstable, producing pulses and structural readjustments that contribute to mass loss. These recurrent shell events differ from the earlier core helium flash. The supplied class vote credits pressure overcoming gravity for an expanding star: read this as the course’s force-imbalance model for initiating outward acceleration. Expansion velocity alone does not prove an instantaneous outward force imbalance, because an already moving layer can coast or decelerate.",
          "Worked example: Follow fuel supply: hydrogen fusion produces helium; helium accumulates; unstable helium-shell burning pulses; the envelope responds.",
          "Common mistake: A pulse is not a core-collapse supernova, and an outward-moving surface does not by itself measure the current net force.",
          "Triple-alpha helium fusion produces carbon in processed interior regions. Deep convective mixing can dredge processed material into the envelope and toward the surface; do not picture convection stirring through the entire inert carbon–oxygen core. Strong AGB winds then return enriched gas to interstellar space. The very large radius gives low surface gravity, helping mass loss. The lecture quotes rates up to about 10⁻⁴ solar masses per year and identifies AGB stars as the expected answer for most Galactic carbon in its comparison. Treat that as the course emphasis, not a universal fraction for every epoch and chemical population.",
          "Worked example: If a hypothetical wind stayed at 10⁻⁴ solar masses per year for 2,000 years, it would remove 0.2 solar masses. Real rates change with time.",
          "Common mistake: Fusion makes carbon; convection transports it; winds eject it. None of these three verbs can replace the others."
        ],
        "keyPoints": [
          "An AGB star has an inert carbon–oxygen core and hydrogen/helium burning shells.",
          "Thermal pulses involve helium-shell burning, not the earlier core helium flash.",
          "Carbon production, dredge-up and wind loss are different steps."
        ],
        "source": "Lecture 22 pages 10–17, 35"
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
      }
    ]
  },
  {
    "id": "exam-two-module-16",
    "examId": "exam-two",
    "number": 16,
    "kicker": "Lectures 22–23",
    "title": "Planetary nebulae and white dwarfs",
    "description": "Separate the exposed remnant from its expanding gas, then connect illumination, spectra and shapes.",
    "source": "Lecture 22 pages 18–34",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-white-dwarf-remnant",
        "label": "A compact remnant that cools",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-nebula-spectrum",
        "label": "Illumination and the region you sample",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-nebula-shapes",
        "label": "Expanding shells, finite lifetimes and shapes",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-16-lesson",
        "type": "lesson",
        "title": "Planetary nebulae and white dwarfs",
        "body": [
          "A Sun-like AGB star loses its envelope, exposing a hot compact remnant that becomes a carbon–oxygen white dwarf, roughly Earth-sized. The remnant cannot sustain the next carbon-fusion stage in the course model and gradually radiates stored heat, cooling and fading. A white dwarf is distinct from a red dwarf (a low-mass hydrogen-burning star) and a brown dwarf (an object that never sustains ordinary core hydrogen fusion). On the H–R diagram, the exposed core can become hotter before the later cooling track; do not treat all post-AGB evolution as one monotonic temperature decline.",
          "Worked example: If a system contains a hot compact central star and a large expanding gas shell, the compact star is the remnant and the shell is the planetary nebula.",
          "Common mistake: The Sun-like path is envelope loss and a white dwarf, not iron-core collapse. A small physical radius does not imply a low initial temperature.",
          "The exposed central star can be near 100,000 K in the illustrative late-stage sequence. Its ultraviolet radiation ionizes surrounding gas, which emits bright spectral lines. A spectrum centered on nebular gas can therefore differ from one dominated by the central star, which supplies a stellar continuum and atmospheric features. Classify the observed component before predicting the spectrum. A view of shell gas and a view centered on the star need not produce the same mixture.",
          "Worked example: Place an observing aperture away from the central star but on glowing gas: emission lines should dominate that component. Moving onto the central star adds its stellar spectrum.",
          "Common mistake: “Planetary nebula” names the system’s gas, not one universal spectrum independent of aperture, contamination or component.",
          "Planetary nebulae are expanding envelopes from late giant evolution. The lecture gives expansion speeds about 10–30 km/s, sizes near a light-year and visible lifetimes of tens of thousands of years as order-of-magnitude examples. As the material spreads and the central source evolves, the nebula fades. Rings, bipolar lobes and viewing angle produce varied appearances; equatorial density concentrations and binary interaction can help shape the gas. A slide presents a binary-only formation proposal but explicitly directs the course to assume the Sun forms a planetary nebula. The proposal is not a settled universal rule. PDF pages labeled animations preserve only static or blank frames, not a recoverable movie.",
          "Worked example: Two views of the same bipolar structure can appear ringlike or elongated. Shape alone is not a unique measurement of the companion or the ejection history.",
          "Common mistake: A planetary nebula is not a planet-forming disk, and a bipolar image alone does not prove a binary central system."
        ],
        "keyPoints": [
          "The white dwarf is the remnant; the planetary nebula is ejected gas.",
          "Hot central-star ultraviolet radiation powers nebular emission.",
          "The spectrum depends on the sampled region."
        ],
        "source": "Lecture 22 pages 18–34"
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
      }
    ]
  },
  {
    "id": "exam-two-module-17",
    "examId": "exam-two",
    "number": 17,
    "kicker": "Lectures 22–23",
    "title": "Massive stars and winds",
    "description": "Explain short lifetimes, surrounding ejecta and the exposure of deeper layers.",
    "source": "Lecture 23 pages 6–14, 17",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-massive-demographics",
        "label": "Rare stars with fast nuclear clocks",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-wind-environment",
        "label": "Winds prepare the surrounding gas",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-envelope-stripping",
        "label": "Strip the envelope and expose helium",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-17-lesson",
        "type": "lesson",
        "title": "Massive stars and winds",
        "body": [
          "The lecture uses initial mass above about 8 solar masses to define massive stars. This is an approximate evolutionary division, not the mass of a collapsing iron core. Most stars have lower masses; the initial mass distribution has far fewer high-mass members. Massive stars have greater core pressure and temperature, faster reactions, greater luminosity and shorter lifetimes despite more fuel. Their interiors can reach later burning stages unavailable to a Sun-like star.",
          "Worked example: At 12 solar masses and 24,000 solar luminosities, the approximate main-sequence lifetime relative to the Sun is 12/24,000 = 1/2,000.",
          "Common mistake: Do not replace the initial-mass division near 8 with the electron-supported core limit near 1.4, or count luminous stars as if they were the most common.",
          "A massive star’s high luminosity can transfer momentum to its outer gas and drive a wind. Winds and episodes of stronger mass loss accumulate circumstellar material before the terminal event. Expanding supernova ejecta may then interact with that material. The graded screenshot credits the lifetime-wind explanation for a “dirty” explosion environment; the PDF omits that credited D option and the question permits more than one answer. Preserve that evidence without declaring every other possible mass-loss mechanism impossible. Eta Carinae and its Homunculus are examples of dramatic mass loss; the deck’s precise age, extent, companion speculation and future-outcome statements are dated context.",
          "Worked example: A shell already present before the explosion records earlier mass loss. It need not have been produced by the explosion that later overtakes it.",
          "Common mistake: The wind shell and later fast ejecta are different populations of material; not every surrounding nebula is simply leftover birth-cloud gas.",
          "Strong mass loss can remove hydrogen-rich outer material and expose hotter helium-rich layers. The lecture associates this stripped state with Wolf–Rayet stars. This changes the observable surface without requiring the outer envelope to be converted wholesale into helium by fusion at that surface. Lost material remains outside as part of the circumstellar environment. Massive-star mass-loss nebulae can resemble planetary nebulae, but the progenitor and physical history distinguish them.",
          "Worked example: Removing a hydrogen-rich cover reveals a helium-rich layer that was already deeper inside; the visible composition changes through exposure.",
          "Common mistake: A hot helium-rich surface is not evidence that all surface hydrogen fused in place, and the label planetary nebula should not be assigned from a ringlike shape alone."
        ],
        "keyPoints": [
          "About 8 solar masses is the lecture’s initial-mass division.",
          "High luminosity can drive strong winds and create surrounding gas.",
          "Stripping an envelope can expose helium-rich layers."
        ],
        "source": "Lecture 23 pages 6–14, 17"
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
      }
    ]
  },
  {
    "id": "exam-two-module-18",
    "examId": "exam-two",
    "number": 18,
    "kicker": "Lectures 22–23",
    "title": "Layered nuclear burning",
    "description": "Build an onion-like interior and distinguish the fusion endpoint from a choice-set comparison.",
    "source": "Lecture 23 pages 15–17, 22–28",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-successive-fuels",
        "label": "New fuels need hotter, denser conditions",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-onion-order",
        "label": "Read selected layers in the right direction",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-iron-endpoint",
        "label": "The energy endpoint and the answer choices",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-18-lesson",
        "type": "lesson",
        "title": "Layered nuclear burning",
        "body": [
          "When a core fuel is exhausted, the core contracts and heats. If temperature and density become high enough, the next fuel ignites while earlier fuels may remain active in surrounding shells. The envelope can expand as the core contracts, and the track can move back and forth across the H–R diagram. Late in evolution the envelope may lag behind rapid core changes, so there is no universal one-to-one surface color for every reaction. Later fuel stages shorten sharply: the lecture’s 25-solar-mass example ranges from millions of years of hydrogen burning to days of silicon burning. These are model values, not clocks for every mass. MESA is a stellar-modeling code cited as context, not a required installation.",
          "Worked example: A core can contract while its outer envelope expands. The two regions have coupled but different responses.",
          "Common mistake: Do not treat a blue-to-red track as a physical sideways trip across space, or apply one fuel-stage table to every star.",
          "A massive evolved star contains several burning shells and processed layers around an iron-rich core. In the supplied five-element ordering, the order from outermost to innermost is hydrogen → helium → carbon → silicon → iron. A detailed model includes additional products and layers; this five-element task is a selected sequence, not a complete universal radial composition profile. The supplied teaching figure uses simplified shell labels whose detailed arrangement should not be overinterpreted. New practice uses only the unambiguous selected order.",
          "Worked example: If asked from the center outward, reverse the selected sequence: iron, silicon, carbon, helium, hydrogen.",
          "Common mistake: The arrows’ direction matters. “Heaviest of these choices” and “outermost of these layers” are different operations.",
          "The iron group lies near the maximum nuclear binding energy per nucleon. Further fusion does not provide the energy release needed to sustain another normal core-burning stage; the statement is about an energy source, not an inability ever to make heavier nuclei. In the supplied comparison among silicon, carbon, uranium and helium, silicon is the heaviest element normally synthesized during the described hydrostatic sequence among those choices. If iron is offered in a different comparison, the answer can change. The slide’s “everything heavier than iron” from supernovae is an oversimplification: neutron-capture processes in other settings, including AGB stars and neutron-star mergers, also contribute. These qualifications do not change the credited silicon answer to the supplied choice set.",
          "Worked example: Among helium, carbon and silicon, choose silicon; among helium, silicon and iron, choose iron for the heaviest product reached in the modeled sequence.",
          "Common mistake: Do not memorize “silicon” as a universal endpoint, or interpret the iron fusion limit as a ban on all heavier-element production."
        ],
        "keyPoints": [
          "Fuel exhaustion → contraction/heating → a new burning stage if conditions permit.",
          "Selected layers run H, He, C, Si, Fe from outside inward.",
          "The iron group ends the normal energy-producing fusion sequence."
        ],
        "source": "Lecture 23 pages 15–17, 22–28"
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
      }
    ]
  },
  {
    "id": "exam-two-module-19",
    "examId": "exam-two",
    "number": 19,
    "kicker": "Lectures 22–23",
    "title": "Core collapse and supernovae",
    "description": "Trace loss of electron support, rapid collapse, shock formation and possible compact remnants.",
    "source": "Lecture 23 pages 18–21, 26",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-core-support-limit",
        "label": "A core mass is not an initial stellar mass",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-collapse-feedback",
        "label": "Electron capture and photodisintegration",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-bounce-remnants",
        "label": "Bounce, shock and conditional outcomes",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-19-lesson",
        "type": "lesson",
        "title": "Core collapse and supernovae",
        "body": [
          "As the iron core grows toward the roughly 1.4-solar-mass Chandrasekhar scale for electron degeneracy support, that support cannot indefinitely balance gravity. This is a different quantity from the initial stellar mass above about 8 solar masses used to identify massive progenitors. The collapsing core does not regain support through ordinary iron fusion. The precise structure and collapse threshold depend on physical conditions; the lecture values are teaching approximations.",
          "Worked example: A 15-solar-mass progenitor can contain a much smaller iron core approaching its support limit after losing and redistributing material.",
          "Common mistake: Never compare the 8 and 1.4 numbers as if they were two contradictory measurements of the same whole star.",
          "During collapse, electrons and protons combine to form neutrons and neutrinos: p + e⁻ → n + ν. This reduces the electron population available for degeneracy support. Neutrino escape can remove energy, though dense matter later becomes less transparent. Energetic photons also break heavy nuclei apart, consuming energy through photodisintegration. Loss of support and energy accelerates contraction, raising density and temperature further. The lecture describes an Earth-sized core reaching a tens-of-kilometers scale in roughly a fraction of a second; exact radius and duration are model-dependent.",
          "Worked example: Electron capture changes the pressure-bearing electron population; photodisintegration spends energy breaking nuclei. They reinforce collapse by different routes.",
          "Common mistake: Do not call photodisintegration an energy-releasing fusion reaction, or treat all neutrinos as permanently free to escape any density.",
          "At nuclear density, neutron-rich matter becomes very resistant to compression; neutron degeneracy and nuclear forces contribute to a compact remnant’s support. Inner-core bounce can launch a shock on millisecond scales, while shock travel through the star takes much longer. A realistic shock can stall and require energy deposition, including neutrino heating, to revive. The lecture’s bounce-and-explosion picture is therefore a simplified pathway, not a guarantee that every massive core ejects the envelope. Successful explosions can leave neutron stars; continued collapse can produce black holes. The neutron-star maximum mass is distinct from the electron-supported limit, and the lecture’s roughly 2–3 solar masses is an approximate scale rather than an exact universal measured threshold. Real explosions are turbulent and asymmetric, as the simulation slide emphasizes.",
          "Worked example: A shock forms shortly after bounce but reaches the surface much later. Observing the surface event does not time the inner bounce directly.",
          "Common mistake: Do not equate a millisecond bounce with the full event, or conclude that any neutron core is indefinitely stable at any mass."
        ],
        "keyPoints": [
          "The roughly 1.4-solar-mass scale belongs to an electron-supported core.",
          "Electron capture reduces electron support; photodisintegration consumes energy.",
          "A bounce does not guarantee a successful explosion."
        ],
        "source": "Lecture 23 pages 18–21, 26"
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
      }
    ]
  },
  {
    "id": "exam-two-module-20",
    "examId": "exam-two",
    "number": 20,
    "kicker": "Lectures 24–25",
    "title": "Supernova energy and fading light",
    "description": "Separate the collapse energy budget, the source of the late light, and what a scientific simulation can establish.",
    "source": "Lecture 24 pages 5–15",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-sn-energy-budget",
        "label": "Follow the collapse energy",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-sn-radioactive-tail",
        "label": "Why the light lasts",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-animation-simulation",
        "label": "Illustration versus numerical evidence",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-20-lesson",
        "type": "lesson",
        "title": "Supernova energy and fading light",
        "body": [
          "The lecture’s approximate core-collapse budget puts about 99% of the released energy into escaping neutrinos, leaving about 1% available for other channels, including explosion energy. Neutrinos carry energy while interacting weakly with matter; a small absorbed fraction can help heat material behind a stalled shock. Do not equate that remainder with all visible light or assume every collapse successfully ejects the envelope. Near the densest core, neutrinos can temporarily be trapped; “weakly interacting” does not mean zero interaction at every density.",
          "Worked example: On a schematic budget of 100 units, 99 leave in neutrinos and one remains. Only part of the non-neutrino energy emerges as optical radiation.",
          "Common mistake: A small percentage of an enormous energy reservoir can drive a major event; it is not evidence that neutrinos are photons.",
          "An expanding supernova initially shines through shock-heated ejecta. Later, energy deposited by radioactive decay can sustain its light rather than letting it fade only by expansion and cooling. The familiar chain is nickel-56 to cobalt-56 to stable iron-56. These are radioactive transformations, not the “nuclear fission” wording on the slide. The deposited energy and escape of radiation depend on ejecta structure and time, so the chain does not prescribe a universal year-long brightness curve.",
          "Worked example: If the hot expanding gas should cool quickly but luminosity persists, radioactive energy deposition supplies a continuing source. This differs from the shock that launched the ejecta.",
          "Common mistake: Do not confuse making unstable nuclei during the explosion with their later decay, or call every nuclear transformation fission.",
          "A teaching animation is an authored visual explanation of a selected physical story. A scientific simulation numerically evolves a model using specified equations, initial conditions, approximations and resolution. Both can be useful and both can mislead if their assumptions are hidden. A visually convincing movie does not itself validate a mechanism. Compare simulated predictions with observations and check numerical/model limitations. The supplied PDF provides static frames of embedded movies; their full motion was not supplied in the PDF.",
          "Worked example: A smooth shock-and-bounce film can teach event order. A computed shock radius from a stated hydrodynamic model can test model consequences, but it still needs validation.",
          "Common mistake: Our original films are teaching reconstructions, not supercomputer predictions or new evidence for an explosion."
        ],
        "keyPoints": [
          "Most collapse energy leaves in neutrinos; the small remainder is not the visible-light fraction.",
          "Radioactive decay helps power the fading supernova.",
          "A teaching animation and a numerical simulation have different evidential roles."
        ],
        "source": "Lecture 24 pages 5–15"
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
        "mockEligible": true
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
      }
    ]
  },
  {
    "id": "exam-two-module-21",
    "examId": "exam-two",
    "number": 21,
    "kicker": "Lectures 24–25",
    "title": "Remnants, spectra and nearby effects",
    "description": "Connect expanding ejecta to shock heating, spectral classifications and atmospheric consequences.",
    "source": "Lecture 24 pages 17–30, 37",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-remnant-shock-heating",
        "label": "An expanding shell can heat new gas",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-supernova-spectral-types",
        "label": "Classify the spectrum before inferring the engine",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-supernova-atmosphere",
        "label": "Brightness is not the whole hazard",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-21-lesson",
        "type": "lesson",
        "title": "Remnants, spectra and nearby effects",
        "body": [
          "Fast ejecta collide with older circumstellar material or the interstellar medium. Shocks convert bulk motion into thermal energy, producing very hot plasma and X-rays; cooler ionized regions can also emit optical lines. A supernova remnant is the extended affected material, whereas a neutron star or black hole is a possible central compact remnant. Different wavelength images sample different components, so a bright ring is not the compact core. Historical identifications and non-detections in the example gallery are not universal remnant diagnostics.",
          "Worked example: The Crab’s extended nebula and central pulsar belong to the same aftermath but are not the same object. A hot collision front can brighten while expanding.",
          "Common mistake: Expansion does not mean every parcel must cool monotonically: a moving shock can heat material it newly encounters.",
          "The Type I/Type II division asks whether hydrogen lines appear in the supernova spectrum: Type I lacks them; Type II shows them. Type I contains subclasses, so “Type I” alone does not mean every event has the same physical cause. In the course’s core-collapse grouping, Ib, Ic and II arise from massive-star core collapse; stripped progenitors can lack surface hydrogen. Type Ia belongs to a different thermonuclear pathway. Massive stars are short-lived, so core-collapse events tend to trace young stellar populations rather than old isolated populations alone.",
          "Worked example: A hydrogen-poor supernova can still be a core-collapse event if its progenitor lost its hydrogen envelope; absence of hydrogen does not alone prove Type Ia.",
          "Common mistake: A spectral label describes an observed feature. Do not replace that observation with a universal engine or exact progenitor mass.",
          "The lecture separates direct heating, ejecta impact and atmospheric chemistry. High-energy radiation from a sufficiently nearby event can damage ozone, increasing exposure to solar ultraviolet radiation. This mechanism differs from the supernova simply heating Earth or ejecta mechanically striking it. Direct radiative flux obeys inverse-square dilution for a stated luminosity and geometry. The slide’s danger distances and Betelgeuse/Gum timing are rough or dated examples, not exact current safety boundaries or predictions.",
          "Worked example: With luminosity fixed, moving ten times farther away reduces received flux to one hundredth. That calculation alone does not predict atmospheric damage, which depends on spectrum and other conditions.",
          "Common mistake: A visually bright event need not deliver the Sun’s heating, and an approximate distance scale is not a sharp universal survival boundary."
        ],
        "keyPoints": [
          "Remnant gas and the central compact object are different structures.",
          "Type I versus II is a spectral hydrogen distinction.",
          "Atmospheric damage differs from direct heating or an ejecta impact."
        ],
        "source": "Lecture 24 pages 17–30, 37"
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
      }
    ]
  },
  {
    "id": "exam-two-module-22",
    "examId": "exam-two",
    "number": 22,
    "kicker": "Lectures 24–25",
    "title": "SN 1987A and stellar endpoints",
    "description": "Use the neutrino burst, brightening ring and compact remnants to distinguish evidence from a diagram label.",
    "source": "Lecture 24 pages 16, 31–38; Lecture 25 pages 4, 6",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-sn1987a-neutrinos",
        "label": "A different messenger from the collapse",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-sn1987a-ring",
        "label": "An older ring meets a later shock",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-stellar-endpoint-paths",
        "label": "Trace the pathway before naming the remnant",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-22-lesson",
        "type": "lesson",
        "title": "SN 1987A and stellar endpoints",
        "body": [
          "SN 1987A was a nearby, well-observed core-collapse event in the Large Magellanic Cloud, from a compact blue-supergiant progenitor. The neutrino burst was decisive evidence linking the event to core-collapse physics, rather than merely showing that a star became bright. The lecture gives about 19 detected events in roughly 10 seconds as its teaching scale; detector selection and counting conventions matter, so do not turn that number into a universal total. Its “closest ever” wording is too broad: many historical Galactic supernovae were closer. A dated slide saying the central neutron star cannot be seen also does not summarize all later evidence; Webb reported evidence for neutron-star-powered emission in 2024.",
          "Worked example: Optical light shows ejecta radiation; neutrinos directly probe the collapse energy channel. Their scientific roles differ even when they come from the same event.",
          "Common mistake: A handful of detections samples an enormous emitted population. Do not identify the emitted count with the detected count or demand a visible stellar point source to support a compact remnant.",
          "The ring around SN 1987A contains circumstellar material lost before the supernova. Expanding ejecta and the outward shock later reach dense structures in that material. Collision heats gas and can make ring knots brighten. The ring is not a light-speed expanding neutron-star surface, and a bright knot need not be a newly formed star. The supplied movie page is a static PDF frame; the explanation is supported by the surrounding lecture and observed shock interaction, not a claim to have watched an unavailable embedded film.",
          "Worked example: A dense knot stays relatively faint until the shock reaches it, then brightens as mechanical energy is deposited. Different knots can brighten at different times because geometry and density differ.",
          "Common mistake: Do not create the pre-existing ring at the instant of core collapse or confuse its apparent size with the compact remnant’s radius.",
          "For the course’s Sun-like pathway, an AGB star loses envelope gas as a planetary nebula and leaves a white dwarf. A successful massive-star core-collapse supernova can leave a neutron star, while continued collapse can lead to a black hole. A thermonuclear supernova is a different route and need not leave either of those compact objects. Thus the supplied broad question “what is left after a supernova?” does not have one universal answer without specifying the pathway. The blank endpoint diagram is a teaching prompt, not a displayed graded key.",
          "Worked example: An expanded gas cloud identifies expelled material; it does not alone tell you whether the compact center is a white dwarf, neutron star or black hole. Follow progenitor and mechanism.",
          "Common mistake: A planetary nebula and a supernova remnant are not interchangeable names for the same stellar end stage."
        ],
        "keyPoints": [
          "The detected neutrino burst tested core-collapse physics.",
          "The ring existed before the shock reached it.",
          "A supernova does not have one universal compact-remnant answer."
        ],
        "source": "Lecture 24 pages 16, 31–38; Lecture 25 pages 4, 6"
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
          "The presence of a named calendar year",
          "Its location somewhere inside a galaxy",
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
          "The knot starts ordinary core hydrogen fusion immediately",
          "Shock interaction deposits energy in the knot",
          "The shock removes every particle from the knot before it shines",
          "The knot becomes the central neutron star"
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
      }
    ]
  },
  {
    "id": "exam-two-module-23",
    "examId": "exam-two",
    "number": 23,
    "kicker": "Lectures 24–25",
    "title": "White dwarfs and degeneracy",
    "description": "Explain why a cooling, Earth-sized remnant can resist gravity without continuing ordinary core fusion.",
    "source": "Lecture 25 pages 8–11",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-wd-electron-support",
        "label": "Quantum support is not ordinary thermal support",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-wd-mass-limit",
        "label": "The Chandrasekhar scale belongs to the white dwarf",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-wd-hot-small",
        "label": "High temperature, small area",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-23-lesson",
        "type": "lesson",
        "title": "White dwarfs and degeneracy",
        "body": [
          "After a Sun-like star loses its envelope, its carbon–oxygen remnant cannot sustain the next normal core-burning stage. As ordinary thermal support declines, contraction brings electrons into a degenerate state. The Pauli exclusion principle restricts identical electrons from occupying the same quantum state; increased crowding requires occupation of higher-momentum states and supplies pressure. This support does not require ongoing hydrogen fusion. The slide’s “all levels full” and “incompressible” are teaching shorthand: degenerate matter can be compressed, and not every possible quantum state is occupied.",
          "Worked example: A white dwarf can cool while retaining substantial electron-degeneracy support. Its resistance to compression is not evidence that it still burns hydrogen like a main-sequence star.",
          "Common mistake: Do not transfer atomic orbital pictures literally to a compact star or claim zero possible compression at all masses.",
          "The maximum mass for a cold, nonrotating electron-supported white dwarf is approximately 1.4 solar masses in the course model. It is the white dwarf’s mass, not the total mass its progenitor once had. Increasing white-dwarf mass generally reduces radius; degeneracy support is not a fixed Earth-size container that can hold unlimited added mass. Reaching the support limit does not mean every system follows one identical fate: composition and nuclear reactions matter, including thermonuclear disruption in relevant white-dwarf systems. Do not substitute this electron-support limit for the separate maximum mass of a neutron star.",
          "Worked example: A progenitor can lose much of its mass before leaving a white dwarf below the limit. A several-solar-mass birth mass alone therefore does not rule out a white-dwarf endpoint.",
          "Common mistake: The 1.4-solar-mass number is an approximate support scale, not a universal limit on all stars or all stellar remnants.",
          "A white dwarf can be hotter than an ordinary star yet have much lower luminosity because its radiating area is small. For a blackbody comparison, L = 4πR²σT⁴: temperature and radius jointly matter. The course’s Sirius example contrasts a hotter, much smaller Sirius B with Sirius A. On an H–R diagram, white dwarfs occupy the hot but dim region, with temperature conventionally decreasing to the right. They cool and fade over time; “white dwarf,” “red dwarf” and “brown dwarf” name different physical histories, not simply three positions along a universal color-changing sequence.",
          "Worked example: At equal temperature, a star with one tenth the radius has one hundredth the luminosity. That is an area comparison, not a prediction that every white dwarf has that radius ratio.",
          "Common mistake: Temperature alone does not rank total luminosity, and an H–R diagram’s temperature axis runs opposite to a standard increasing-right temperature graph."
        ],
        "keyPoints": [
          "Electron degeneracy pressure supports the white dwarf.",
          "The roughly 1.4-solar-mass scale concerns remnant mass, not every progenitor.",
          "Hot does not imply luminous when radius is small."
        ],
        "source": "Lecture 25 pages 8–11"
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
          "A white dwarf",
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
        "prompt": "A white dwarf has a hotter surface than a main-sequence star but lower luminosity. Which property can explain this?",
        "choices": [
          "Its greater distance reduces intrinsic luminosity",
          "Its emitting surface area is much smaller",
          "Its small mass requires a much larger photosphere",
          "Its higher surface temperature reduces surface flux"
        ],
        "answer": 1,
        "hint": "Use both radius and temperature in the luminosity relation.",
        "explanation": "A small enough radius reduces surface area enough to outweigh the higher surface temperature in total luminosity.",
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
      }
    ]
  },
  {
    "id": "exam-two-module-24",
    "examId": "exam-two",
    "number": 24,
    "kicker": "Lectures 24–25",
    "title": "Pulsars and compact-star evidence",
    "description": "Read pulse periods, connect the Crab source to its remnant, and test alternatives using physical scale.",
    "source": "Lecture 25 pages 12–20, 23–25",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-pulsar-discovery-evidence",
        "label": "A regular signal needs a physical explanation",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-pulse-period-compactness",
        "label": "Short periods constrain the object",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-neutron-density-evidence",
        "label": "City-sized, stellar mass",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-24-lesson",
        "type": "lesson",
        "title": "Pulsars and compact-star evidence",
        "body": [
          "Jocelyn Bell identified a repeating radio signal in 1967 while working in Antony Hewish’s group. LGM-1 was the informal “Little Green Men” label, not evidence for extraterrestrial communication. Discovering additional similar sources supported a new astrophysical population. Explanations had to account for both the short periods and the source properties: ordinary stellar pulsation and tightly orbiting ordinary stars could not explain the fastest observed signals in the supplied examples. Theory and observation constrained the neutron-star interpretation together.",
          "Worked example: One regular pulse train invites hypotheses; multiple similar natural sources and incompatible ordinary-star timescales change which explanations remain viable.",
          "Common mistake: A nickname is a historical response to an unexplained signal, not the final scientific cause or a claim that periodicity alone proves technology.",
          "A rotating object’s material must remain gravitationally bound. Very short rotation periods are incompatible with an ordinary large star and, for the Crab’s approximately 33-millisecond period, with a white-dwarf-sized star in this interpretation. A neutron star’s much smaller size makes such rapid rotation possible. The pulse period is a time per cycle; frequency is cycles per second, f = 1/P. Keep seconds and milliseconds distinct. The supplied periodic sources span different rates, not one universal pulsar clock.",
          "Worked example: A 0.033-second period corresponds to about 30 cycles each second. A 0.0058-second period is shorter and therefore gives a higher frequency.",
          "Common mistake: A shorter period means faster repetition, not a smaller frequency; a rapid signal constrains a model but is not a photograph of the star’s surface.",
          "A neutron star packs a mass comparable to the Sun into a roughly city-sized object. Small radius does not imply low mass: mean density depends on mass divided by volume. The lecture’s teaspoon/Empire State Building comparison conveys extreme density; it is an approximate analogy, not a literal container of isolated stable neutron-star material. The Crab’s central pulsar links the compact source to a supernova remnant, supporting the connection between massive-star death and neutron-star formation. The entire extended nebula is not the neutron star.",
          "Worked example: For the same mass, halving radius makes volume one eighth as large and mean density eight times greater. This illustrates why collapse changes density so strongly.",
          "Common mistake: A nearby city drawn behind a compact-star model supplies scale, not a claim that the full stellar mass has disappeared or that the nebula fits in that city."
        ],
        "keyPoints": [
          "A pulsar is a rotating neutron-star source seen through periodic emission.",
          "Very short periods constrain size and rule out ordinary large-star rotation.",
          "A dense compact star is not a tiny mass or an expanding nebular shell."
        ],
        "source": "Lecture 25 pages 12–20, 23–25"
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
      }
    ]
  },
  {
    "id": "exam-two-module-25",
    "examId": "exam-two",
    "number": 25,
    "kicker": "Lectures 24–25",
    "title": "Spin, beams and magnetars",
    "description": "Connect contraction to rotation, rotating magnetic geometry to pulses, and intense fields to magnetar activity.",
    "source": "Lecture 25 pages 19, 21–26",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-compact-spin-up",
        "label": "Contraction changes the rotation rate",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-pulsar-beam-geometry",
        "label": "A rotating lighthouse, not a breathing star",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-magnetar-fields",
        "label": "A powerful magnetic field is the defining distinction",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-25-lesson",
        "type": "lesson",
        "title": "Spin, beams and magnetars",
        "body": [
          "An isolated contracting object approximately conserves angular momentum when external torque and mass loss are negligible. For the same mass distribution shape, moment of inertia scales as MR². Smaller radius then means faster angular rotation and a shorter period, like the lecture’s ice-skater analogy. Real stellar collapse can lose mass and angular momentum, so a literal Sun-to-neutron-star extrapolation is only an idealized illustration. It does not mean the Sun will form a neutron star or that contraction is the only way to change spin.",
          "Worked example: In an idealized constant-mass, constant-shape model with no external torque, reducing radius by two reduces moment of inertia by four, increases spin frequency by four, and reduces period to one quarter.",
          "Common mistake: Do not assert angular momentum conservation while silently adding a torque or losing a substantial amount of spinning material.",
          "In the lecture’s lighthouse model, emission is associated with the magnetic-pole regions and directed into beams. The magnetic axis is tilted relative to the rotation axis. As the star rotates, a beam can sweep across our line of sight and produce repeated pulses even though the star itself is not expanding and contracting once per pulse. Not every neutron star appears as a pulsar to us: orientation, beam geometry and emission activity matter. Aligned axes do not guarantee a sweep past an arbitrary observer.",
          "Worked example: Two observers at different directions can see different pulse visibility from the same rotating object. Moving the observer outside the swept beam can remove pulses without changing the star’s rotation.",
          "Common mistake: Do not animate the entire star flashing on and off as the only cause, or label a spin pole as the magnetic pole when the axes are misaligned.",
          "Magnetars are neutron stars with exceptionally strong magnetic fields and energetic magnetic activity, including high-energy bursts associated with soft gamma repeaters and anomalous X-ray pulsars. Rapid rotation of a newly born magnetar is one proposed energy source for some very luminous supernovae. The slide’s millisecond rotation describes that rapid-birth model, not a universal present-day magnetar period: observed magnetars can rotate on second-long periods. A strong field does not make the object a black hole. Distinguish a proposed powering mechanism from a guarantee that every magnetar makes the same explosion.",
          "Worked example: A second-period neutron star with an extremely strong field and magnetic outbursts can fit the magnetar category. A millisecond period alone does not establish that category.",
          "Common mistake: Do not rank every magnetar as faster than every ordinary pulsar or treat a large magnetic field as proof of an event horizon."
        ],
        "keyPoints": [
          "Contraction can spin an object up when angular momentum is retained.",
          "A beam must sweep our sightline for us to observe pulses.",
          "Magnetars are defined by strong fields; observed periods are not universally milliseconds."
        ],
        "source": "Lecture 25 pages 19, 21–26"
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
    "id": "exam-two-module-26",
    "examId": "exam-two",
    "number": 26,
    "kicker": "Lectures 26–29",
    "title": "Curved spacetime and black-hole evidence",
    "description": "Follow light past a gravitating object, then separate lensing images from merger signals.",
    "source": "Lecture 26 pages 6–13; Lecture 30 page 29",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-spacetime-gravity",
        "label": "What curvature explains",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-lensing-images",
        "label": "One source can make several images",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-black-hole-messengers",
        "label": "Images and waves test different features",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-26-lesson",
        "type": "lesson",
        "title": "Curved spacetime and black-hole evidence",
        "body": [
          "General relativity describes gravity through the curvature of spacetime. Matter and energy affect geometry; freely moving matter and light follow paths determined by that geometry. The rubber-sheet picture is an analogy, not a literal fabric pulled downward by another external gravity. Near a star or black hole, an escaping light ray can change direction. It need not cross an event horizon merely because its path bends. Locally, a freely falling observer still describes light moving at the speed of light.",
          "Worked example: A background star appears displaced when its light passes near the Sun. Deflection concerns the ray’s direction, not a claim that the star moved or the photon acquired ordinary rest mass.",
          "Common mistake: Do not confuse gravitational lensing with the claim that every nearby ray is swallowed.",
          "Gravitational lensing redirects light from a background source around an intervening mass. Different paths can make distorted arcs or multiple apparent images of one galaxy; favorable alignment can make a ring. The lens does not manufacture extra galaxies. To interpret a cluster image, separate foreground lenses from distorted background sources. Similar-looking arcs are suggestive, but a unique source count requires evidence beyond an unlabeled classroom image.",
          "Worked example: Several arcs around a cluster can be images of one more distant galaxy. Counting bright patches as separate physical galaxies can therefore overcount sources.",
          "Common mistake: An apparent ring is not necessarily a circular galaxy surrounding the lens.",
          "A black-hole shadow image shows a dark central region against emission from nearby plasma, shaped by light propagation and capture. The bright ring is not a photograph of a solid surface or light emitted from inside the horizon. Gravitational waves from compact-object mergers are changes in spacetime detected through their effects on instruments. They are not an electromagnetic band. Together with orbital and radiation evidence, these observations test different consequences of black-hole models; no single cartoon supplies all of that evidence.",
          "Worked example: An image of emission near a supermassive black hole and a gravitational-wave signal from a stellar-mass merger probe different systems and messengers. Neither requires light to escape from within an event horizon.",
          "Common mistake: Do not label a gravitational-wave detection a gamma-ray photograph."
        ],
        "keyPoints": [
          "Gravity changes light paths as well as material motion.",
          "Lensing redirects background light and can make multiple images.",
          "An emission ring, a shadow and gravitational waves are different evidence."
        ],
        "source": "Lecture 26 pages 6–13; Lecture 30 page 29"
      },
      {
        "id": "exam-two-item-l26-light-path",
        "rootId": "exam-two-item-l26-light-path",
        "moduleId": "exam-two-module-26",
        "conceptId": "exam-two-concept-spacetime-gravity",
        "concept": "exam-two-concept-spacetime-gravity",
        "type": "single",
        "responseType": "single",
        "prompt": "A light ray passes outside a black hole’s capture region and reaches a distant observer along a bent path. What explains the deflection?",
        "choices": [
          "Spacetime curvature changes the ray’s path",
          "Reflection by orbiting plasma changes the ray’s path",
          "Scattering by intervening dust changes the ray’s path",
          "Refraction through a stellar atmosphere changes the ray’s path"
        ],
        "answer": 0,
        "hint": "The stipulated ray escapes; identify the gravitational effect.",
        "explanation": "General relativity allows an escaping light ray to be deflected by curved spacetime. Accretion, scattering by dust and surface reflection are different processes.",
        "source": "Lecture 26 pages 6–8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 6–8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-spacetime-gravity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-solar-deflection",
        "rootId": "exam-two-item-l26-solar-deflection",
        "moduleId": "exam-two-module-26",
        "conceptId": "exam-two-concept-spacetime-gravity",
        "concept": "exam-two-concept-spacetime-gravity",
        "type": "single",
        "responseType": "single",
        "prompt": "During an eclipse, a background star’s apparent position shifts when its light passes close to the solar limb. Which change is required by the lensing explanation?",
        "choices": [
          "The light’s path changes near the Sun",
          "The star’s motion changes its true sky position",
          "Solar wind bends the star’s own orbit",
          "The Sun changes the star’s intrinsic luminosity"
        ],
        "answer": 0,
        "hint": "Distinguish apparent direction from the source’s position.",
        "explanation": "A bent light path changes the apparent direction from which the star is seen. The source need not move or change its luminosity.",
        "source": "Lecture 26 pages 6–8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 6–8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-spacetime-gravity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-bending-capture-tf",
        "rootId": "exam-two-item-l26-bending-capture-tf",
        "moduleId": "exam-two-module-26",
        "conceptId": "exam-two-concept-spacetime-gravity",
        "concept": "exam-two-concept-spacetime-gravity",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: Any light ray deflected near a black hole must have crossed the event horizon.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Can a deflected ray still escape?",
        "explanation": "False. Rays passing outside the capture region can be deflected and reach an observer. Crossing the horizon is a separate condition.",
        "source": "Lecture 26 pages 6–8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 6–8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-spacetime-gravity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-multiple-images",
        "rootId": "exam-two-item-l26-multiple-images",
        "moduleId": "exam-two-module-26",
        "conceptId": "exam-two-concept-lensing-images",
        "concept": "exam-two-concept-lensing-images",
        "type": "single",
        "responseType": "single",
        "prompt": "Three distorted images around a foreground cluster share the same detailed spectrum. Which interpretation is consistent with gravitational lensing?",
        "choices": [
          "The arcs must trace a circular stellar orbit around the lens",
          "Three separate galaxies must occupy the same distance",
          "One background galaxy reaches us along several paths",
          "Each arc must be a separate foreground cluster member"
        ],
        "answer": 2,
        "hint": "The number of apparent images need not equal the number of sources.",
        "explanation": "A lens can direct several paths from one background galaxy toward us. Matching spectra support that interpretation, although they are not sufficient alone to prove a unique association.",
        "source": "Lecture 26 pages 8–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 8–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-lensing-images"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-lens-order",
        "rootId": "exam-two-item-l26-lens-order",
        "moduleId": "exam-two-module-26",
        "conceptId": "exam-two-concept-lensing-images",
        "concept": "exam-two-concept-lensing-images",
        "type": "single",
        "responseType": "single",
        "prompt": "In the schematic, light travels from the distant galaxy at A, past the massive cluster at B, to Earth at C. Which object acts as the lens?",
        "choices": [
          "C, the receiving observer",
          "A, the background emitter",
          "B, the intervening cluster",
          "A and C, the endpoints together"
        ],
        "answer": 2,
        "hint": "Locate the mass that redirects light between source and observer.",
        "explanation": "The intervening cluster B deflects background light. A supplies it and C receives it.",
        "source": "Lecture 26 pages 8–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 8–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-lensing-images"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/lens-paths.svg",
          "alt": "Original diagram: source A at left, cluster B in the middle, observer C at right. Two paths curve around B.",
          "caption": "Original lens geometry; distances and deflections are schematic."
        }
      },
      {
        "id": "exam-two-item-l26-lensing-inference",
        "rootId": "exam-two-item-l26-lensing-inference",
        "moduleId": "exam-two-module-26",
        "conceptId": "exam-two-concept-lensing-images",
        "concept": "exam-two-concept-lensing-images",
        "type": "single",
        "responseType": "single",
        "prompt": "A cluster photograph contains several blue arcs but no measured redshifts or image associations. What remains unresolved from the photograph alone?",
        "choices": [
          "The exact number of distinct background galaxies",
          "The directions of the arcs relative to the cluster",
          "The apparent colors of the detected arcs",
          "The angular separation between visible arc segments"
        ],
        "answer": 0,
        "hint": "Distinguish a visual clue from a unique reconstruction.",
        "explanation": "Several arcs may correspond to multiple images of fewer sources. The photograph alone does not uniquely establish the number of distinct background galaxies.",
        "source": "Lecture 26 pages 8–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 8–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-lensing-images"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-shadow-ring",
        "rootId": "exam-two-item-l26-shadow-ring",
        "moduleId": "exam-two-module-26",
        "conceptId": "exam-two-concept-black-hole-messengers",
        "concept": "exam-two-concept-black-hole-messengers",
        "type": "single",
        "responseType": "single",
        "prompt": "What produces the bright emission surrounding a black-hole shadow in the lecture’s image interpretation?",
        "choices": [
          "Scattered optical light from a cool dust shell",
          "Radiation arriving from inside the event horizon",
          "Radiation from nearby plasma",
          "Reflection from an opaque stellar surface"
        ],
        "answer": 2,
        "hint": "Separate emitting material from the central capture region.",
        "explanation": "Nearby plasma radiates; gravity redirects and captures some of that radiation. The emission is not from a solid surface or within the horizon.",
        "source": "Lecture 26 pages 10–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 10–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-black-hole-messengers"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-messenger-boundary",
        "rootId": "exam-two-item-l26-messenger-boundary",
        "moduleId": "exam-two-module-26",
        "conceptId": "exam-two-concept-black-hole-messengers",
        "concept": "exam-two-concept-black-hole-messengers",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation uses a messenger outside the electromagnetic spectrum?",
        "choices": [
          "An X-ray measurement of hot accreting gas",
          "An optical spectrum of a companion star",
          "A gravitational-wave merger signal",
          "A radio image of nearby accretion plasma"
        ],
        "answer": 2,
        "hint": "Classify the messenger, not the source’s energy scale.",
        "explanation": "Gravitational waves are spacetime perturbations. Radio, optical and X-ray observations all use electromagnetic radiation.",
        "source": "Lecture 26 pages 10–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 10–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-black-hole-messengers"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-evidence-match",
        "rootId": "exam-two-item-l26-evidence-match",
        "moduleId": "exam-two-module-26",
        "conceptId": "exam-two-concept-black-hole-messengers",
        "concept": "exam-two-concept-black-hole-messengers",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each observation to the feature it most directly probes.",
        "choices": [
          "Near-horizon plasma emission and light capture",
          "Light deflection by intervening mass",
          "Dynamical changes of the merging system"
        ],
        "answer": [
          1,
          0,
          2
        ],
        "hint": "Match every row by its physical mechanism.",
        "explanation": "Arcs trace deflected background light; a shadow/ring involves nearby emission and capture; merger waves trace changing spacetime.",
        "source": "Lecture 26 pages 10–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 10–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-black-hole-messengers"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Distorted background-galaxy arcs",
            "answer": "Light deflection by intervening mass"
          },
          {
            "label": "A bright ring around a dark central region",
            "answer": "Near-horizon plasma emission and light capture"
          },
          {
            "label": "A compact-binary gravitational-wave signal",
            "answer": "Dynamical changes of the merging system"
          }
        ],
        "options": [
          "Near-horizon plasma emission and light capture",
          "Light deflection by intervening mass",
          "Dynamical changes of the merging system"
        ]
      }
    ]
  },
  {
    "id": "exam-two-module-27",
    "examId": "exam-two",
    "number": 27,
    "kicker": "Lectures 26–29",
    "title": "Gamma-ray bursts: engines and viewing angle",
    "description": "Use afterglows to find sources, distinguish the main progenitor models, and test jet visibility.",
    "source": "Lecture 26 pages 14–24; Lecture 30 page 30",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-grb-distance",
        "label": "From a flash to a distant host",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-grb-progenitors",
        "label": "Long and short are useful, imperfect groups",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-grb-beaming",
        "label": "Visibility depends on where the jet points",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-27-lesson",
        "type": "lesson",
        "title": "Gamma-ray bursts: engines and viewing angle",
        "body": [
          "A gamma-ray burst is a short flash followed, in many cases, by a fading afterglow at X-ray, optical and other wavelengths. Rapid localization lets telescopes identify a counterpart and obtain a spectrum or host-galaxy association. Redshift evidence then places many bursts at cosmological distances. An approximately isotropic sky distribution means the bursts are spread across directions; that pattern alone does not measure how far away they are.",
          "Worked example: Two equally bright bursts can have different intrinsic powers and distances. A localized afterglow and a securely associated redshift constrain distance more directly than apparent brightness alone.",
          "Common mistake: Do not turn an all-sky map into a distance measurement or equate a projected host-center offset with no host association.",
          "The lecture separates long bursts, roughly seconds to minutes, from short bursts below about two seconds. Its main long-burst model is a rapidly rotating massive star whose collapse feeds a central engine and launches jets. The compact-merger model explains many short bursts; the neutron-star merger GW170817 and its gamma-ray counterpart provide a key example. Duration is a useful classification clue, not a unique engine diagnosis for every event. The lecture also discusses a magnetar or black-hole engine for one long-burst supernova association.",
          "Worked example: A short gamma-ray event coincident with a neutron-star merger signal supports the compact-merger explanation. It should not be relabeled massive-star collapse solely because both events can launch jets.",
          "Common mistake: Keep the course’s long/short associations while avoiding an absolute rule that every long burst must leave a black hole.",
          "Relativistic jets concentrate prompt gamma-ray emission into a limited range of directions. An observer near a jet axis can see a bright burst, while another observer can miss the prompt signal from the same event. This selection effect means the detected burst count is not the complete event count. Off-axis material can still have later observable emission; missing the prompt burst does not establish that no explosion occurred.",
          "Worked example: Rotate an otherwise identical jet away from Earth: the observed prompt burst can disappear while the source still releases energy. A wider beam would illuminate more viewing directions if all other conditions were held fixed.",
          "Common mistake: Do not attribute every missed burst to dust or conclude that an undetected prompt flash proves no central engine."
        ],
        "keyPoints": [
          "Afterglow localization connects a burst to a host and distance.",
          "The course associates long bursts with massive-star collapse and short bursts with compact mergers.",
          "A jet must point sufficiently toward us for a bright prompt burst."
        ],
        "source": "Lecture 26 pages 14–24; Lecture 30 page 30"
      },
      {
        "id": "exam-two-item-l26-grb-distance-evidence",
        "rootId": "exam-two-item-l26-grb-distance-evidence",
        "moduleId": "exam-two-module-27",
        "conceptId": "exam-two-concept-grb-distance",
        "concept": "exam-two-concept-grb-distance",
        "type": "single",
        "responseType": "single",
        "prompt": "Which added observation most directly advances a burst from a sky position to a cosmological distance estimate?",
        "choices": [
          "A measured gamma-ray burst duration",
          "A secure afterglow or host redshift",
          "A precisely measured sky position alone",
          "An approximately isotropic distribution of burst positions"
        ],
        "answer": 1,
        "hint": "A direction is not a distance.",
        "explanation": "A secure counterpart/host association and redshift supply distance evidence under the cosmological model. The other choices only change directional display or sampling.",
        "source": "Lecture 26 pages 15–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 15–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-grb-distance"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-grb-isotropy-tf",
        "rootId": "exam-two-item-l26-grb-isotropy-tf",
        "moduleId": "exam-two-module-27",
        "conceptId": "exam-two-concept-grb-distance",
        "concept": "exam-two-concept-grb-distance",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: A nearly uniform distribution of burst directions alone proves that every burst is at the same distance.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Direction and radial distance are independent coordinates.",
        "explanation": "False. Isotropy describes directions. Spectra and counterpart associations supply additional distance evidence.",
        "source": "Lecture 26 pages 15–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 15–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-grb-distance"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-afterglow-purpose",
        "rootId": "exam-two-item-l26-afterglow-purpose",
        "moduleId": "exam-two-module-27",
        "conceptId": "exam-two-concept-grb-distance",
        "concept": "exam-two-concept-grb-distance",
        "type": "single",
        "responseType": "single",
        "prompt": "Why does rapid telescope follow-up improve the chance of identifying a burst’s host?",
        "choices": [
          "A host redshift can be read from sky position alone",
          "The prompt light curve directly resolves the host’s stars",
          "The flash duration identifies the host’s distance",
          "The fading counterpart gives a more precise position"
        ],
        "answer": 3,
        "hint": "Track what changes after the short prompt flash.",
        "explanation": "Rapid follow-up can locate and measure a fading counterpart before it becomes too faint, enabling a host association and spectrum.",
        "source": "Lecture 26 pages 15–19 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 15–19",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-grb-distance"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-grb-merger",
        "rootId": "exam-two-item-l26-grb-merger",
        "moduleId": "exam-two-module-27",
        "conceptId": "exam-two-concept-grb-progenitors",
        "concept": "exam-two-concept-grb-progenitors",
        "type": "single",
        "responseType": "single",
        "prompt": "A short gamma-ray flash accompanies a gravitational-wave signal identified as a neutron-star merger. Which progenitor best fits the combined evidence?",
        "choices": [
          "A pair of merging compact stars",
          "A rapidly rotating massive star undergoing collapse",
          "A pair of white dwarfs undergoing a Type Ia disruption",
          "A white dwarf undergoing a surface nova"
        ],
        "answer": 0,
        "hint": "Use both the time profile and the independently identified merger.",
        "explanation": "The merger signal directly supports a compact-binary origin for this short burst. The other processes do not account for that signal.",
        "source": "Lecture 26 pages 16, 20–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 16, 20–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-grb-progenitors"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-collapsar-rotation",
        "rootId": "exam-two-item-l26-collapsar-rotation",
        "moduleId": "exam-two-module-27",
        "conceptId": "exam-two-concept-grb-progenitors",
        "concept": "exam-two-concept-grb-progenitors",
        "type": "single",
        "responseType": "single",
        "prompt": "In the lecture’s collapsar model, why does rapid rotation matter?",
        "choices": [
          "It supports the core against every further contraction",
          "It helps form an accretion disk feeding jets",
          "It directs the explosion equally into all viewing angles",
          "It replaces accretion with surface hydrogen burning"
        ],
        "answer": 1,
        "hint": "Connect rotation to the flow geometry around the central object.",
        "explanation": "Rotating infall can form a disk that feeds the central engine and supports jet production. Viewing angle remains a separate condition.",
        "source": "Lecture 26 pages 16, 20–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 16, 20–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-grb-progenitors"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-grb-classes",
        "rootId": "exam-two-item-l26-grb-classes",
        "moduleId": "exam-two-module-27",
        "conceptId": "exam-two-concept-grb-progenitors",
        "concept": "exam-two-concept-grb-progenitors",
        "type": "match",
        "responseType": "match",
        "prompt": "Match the evidence or model to its best-supported interpretation.",
        "choices": [
          "Compact-merger evidence",
          "Useful classification clue, incomplete engine evidence",
          "Long-burst collapsar model"
        ],
        "answer": [
          2,
          0,
          1
        ],
        "hint": "Match every row by its physical mechanism.",
        "explanation": "The collapsar and merger cases have distinct physical evidence. Duration alone does not uniquely identify an engine.",
        "source": "Lecture 26 pages 16, 20–23 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 16, 20–23",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-grb-progenitors"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Massive rotating star feeding a disk and jets",
            "answer": "Long-burst collapsar model"
          },
          {
            "label": "Short burst with neutron-star merger waves",
            "answer": "Compact-merger evidence"
          },
          {
            "label": "Burst duration measured without a counterpart",
            "answer": "Useful classification clue, incomplete engine evidence"
          }
        ],
        "options": [
          "Compact-merger evidence",
          "Useful classification clue, incomplete engine evidence",
          "Long-burst collapsar model"
        ]
      },
      {
        "id": "exam-two-item-l26-grb-offaxis",
        "rootId": "exam-two-item-l26-grb-offaxis",
        "moduleId": "exam-two-module-27",
        "conceptId": "exam-two-concept-grb-beaming",
        "concept": "exam-two-concept-grb-beaming",
        "type": "single",
        "responseType": "single",
        "prompt": "Two observers are equally far from a burst. One looks nearly down its jet; the other lies well outside the beam. Why can only the first see a bright prompt burst?",
        "choices": [
          "The jet sends equal prompt power in every direction",
          "The prompt radiation is concentrated toward the jet axis",
          "The off-axis direction always has more interstellar dust",
          "The two directions require different intrinsic progenitors"
        ],
        "answer": 1,
        "hint": "Hold distance fixed and change the viewing direction.",
        "explanation": "Relativistic beaming concentrates prompt emission toward the jet axis. Equal distances do not ensure equal received brightness from an anisotropic source.",
        "source": "Lecture 26 pages 22–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 22–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-grb-beaming"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-grb-widebeam",
        "rootId": "exam-two-item-l26-grb-widebeam",
        "moduleId": "exam-two-module-27",
        "conceptId": "exam-two-concept-grb-beaming",
        "concept": "exam-two-concept-grb-beaming",
        "type": "single",
        "responseType": "single",
        "prompt": "In an idealized survey with identical events and sensitivity, each event’s jet becomes wider. What changes in the geometric selection effect?",
        "choices": [
          "The detectable fraction stays fixed by the event count",
          "The same fraction is visible, but over shorter times",
          "More viewing directions can receive the prompt beam",
          "Fewer viewing directions can receive the prompt beam"
        ],
        "answer": 2,
        "hint": "Change only the solid angle illuminated.",
        "explanation": "A wider beam covers more directions, so a larger fraction of randomly oriented events can point toward us. This does not itself change event rate or distance.",
        "source": "Lecture 26 pages 22–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 22–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-grb-beaming"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l26-jet-target",
        "rootId": "exam-two-item-l26-jet-target",
        "moduleId": "exam-two-module-27",
        "conceptId": "exam-two-concept-grb-beaming",
        "concept": "exam-two-concept-grb-beaming",
        "type": "target",
        "responseType": "target",
        "prompt": "Select the observer inside the upper jet cone in this schematic.",
        "choices": [
          "A",
          "B",
          "C",
          "D"
        ],
        "answer": 0,
        "hint": "Locate a point within the filled emission cone.",
        "explanation": "A is inside the upper jet cone. B is off-axis, C marks the engine, and D is outside both cones.",
        "source": "Lecture 26 pages 22–24 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l26",
            "locator": "pages 22–24",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-grb-beaming"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/grb-jet.svg",
          "alt": "Two cones extend above and below a central engine. Observer markers are labeled A, B, C and D.",
          "caption": "Original teaching model; not to scale."
        },
        "targets": [
          {
            "label": "A",
            "x": 50,
            "y": 18
          },
          {
            "label": "B",
            "x": 82,
            "y": 50
          },
          {
            "label": "C",
            "x": 50,
            "y": 55
          },
          {
            "label": "D",
            "x": 18,
            "y": 82
          }
        ]
      }
    ]
  },
  {
    "id": "exam-two-module-28",
    "examId": "exam-two",
    "number": 28,
    "kicker": "Lectures 26–29",
    "title": "Interacting binaries and accretion",
    "description": "Track the donor, the gas stream and the changing identities of the two stars.",
    "source": "Lecture 27 pages 8–9; Lecture 28 pages 7–9; Lecture 30 page 31",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-roche-overflow",
        "label": "A boundary for mass transfer",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-accretion-disk-stream",
        "label": "Why the stream curves into a disk",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-binary-evolution-timing",
        "label": "The companion evolves on its own clock",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-28-lesson",
        "type": "lesson",
        "title": "Interacting binaries and accretion",
        "body": [
          "A Roche lobe is the region around a star bounded by the critical gravitational-plus-rotational potential surface in a binary. When a star expands to fill that region, gas can flow through the inner Lagrange-point region toward its companion. The donor loses the transferred gas; the accretor receives it. The slide’s equal-gravity description of the inner point is simplified: the rotating-frame effective force balance includes orbital rotation. Detached stars can evolve before any overflow begins.",
          "Worked example: A donor can initiate transfer by expanding even if the separation has not suddenly changed. A star well inside its lobe does not undergo Roche-lobe overflow merely because it has a companion.",
          "Common mistake: Do not identify the Roche lobe with the stellar surface at every evolutionary stage.",
          "Transferred gas retains orbital angular momentum. In the illustrated disk-fed white-dwarf binary, the stream does not fall straight to the center: it curves around the accretor, joins an accretion disk and gradually moves inward as angular momentum is transported outward. The stream’s impact on the disk can make a bright spot. Disk light is powered largely by released gravitational energy, not proof that the white dwarf has restarted steady core fusion. Strongly magnetic systems can channel flow differently; the diagram is the disk-fed case.",
          "Worked example: Trace donor → curved stream → outer disk/bright spot → inward accretion. The bright impact region and central white dwarf are distinct places.",
          "Common mistake: Do not draw a straight radial plunge and call it an angular-momentum-supported disk.",
          "In a binary, the initially more massive star normally evolves sooner. A low-mass primary can leave a white dwarf; a massive primary can leave a neutron star or black hole. If the binary remains bound, the lower-mass companion may still be on the main sequence immediately after the primary’s death. Much later, that companion can expand and transfer gas onto the compact remnant. A supernova can disrupt a binary, so continued interaction is conditional on survival.",
          "Worked example: A 15-solar-mass primary can die while its solar-mass companion remains unevolved. The later red-giant donor plus compact-remnant picture describes a later stage, assuming the system survived.",
          "Common mistake: Do not compress the primary’s death and the secondary’s giant stage into the same instant."
        ],
        "keyPoints": [
          "Overflow begins when a donor reaches its Roche lobe.",
          "Orbital angular momentum can make an accretion disk.",
          "The primary’s death and the secondary’s later giant stage are separate times."
        ],
        "source": "Lecture 27 pages 8–9; Lecture 28 pages 7–9; Lecture 30 page 31"
      },
      {
        "id": "exam-two-item-l27-overflow-trigger",
        "rootId": "exam-two-item-l27-overflow-trigger",
        "moduleId": "exam-two-module-28",
        "conceptId": "exam-two-concept-roche-overflow",
        "concept": "exam-two-concept-roche-overflow",
        "type": "single",
        "responseType": "single",
        "prompt": "A binary star expands until its surface reaches the critical Roche-lobe boundary. What can happen next?",
        "choices": [
          "Gas flows toward the companion through the inner-point region",
          "Gas remains confined until the donor’s core collapses",
          "The companion becomes the donor solely because it is smaller",
          "The overflowing gas immediately loses all orbital angular momentum"
        ],
        "answer": 0,
        "hint": "The boundary concerns how matter remains associated with each star.",
        "explanation": "A lobe-filling donor can transfer gas toward its companion. The process does not require immediate collapse, extinguished fusion or an unbound orbit.",
        "source": "Lecture 27 pages 8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-roche-overflow"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-donor-accretor",
        "rootId": "exam-two-item-l27-donor-accretor",
        "moduleId": "exam-two-module-28",
        "conceptId": "exam-two-concept-roche-overflow",
        "concept": "exam-two-concept-roche-overflow",
        "type": "single",
        "responseType": "single",
        "prompt": "A red giant loses gas through the inner-point region to a white dwarf. Which object is the donor?",
        "choices": [
          "The white dwarf",
          "The accretion disk alone",
          "The red giant",
          "The center of mass"
        ],
        "answer": 2,
        "hint": "Follow the direction of transferred mass.",
        "explanation": "The red giant supplies the gas and is the donor; the white dwarf is the accretor.",
        "source": "Lecture 27 pages 8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-roche-overflow"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-detached-tf",
        "rootId": "exam-two-item-l27-detached-tf",
        "moduleId": "exam-two-module-28",
        "conceptId": "exam-two-concept-roche-overflow",
        "concept": "exam-two-concept-roche-overflow",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: Every star in a detached binary already fills its Roche lobe.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Detached and lobe-filling describe different geometries.",
        "explanation": "False. Detached stars lie inside their Roche lobes; expansion can later start overflow.",
        "source": "Lecture 27 pages 8 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 8",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-roche-overflow"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-disk-cause",
        "rootId": "exam-two-item-l28-disk-cause",
        "moduleId": "exam-two-module-28",
        "conceptId": "exam-two-concept-accretion-disk-stream",
        "concept": "exam-two-concept-accretion-disk-stream",
        "type": "single",
        "responseType": "single",
        "prompt": "Why does the transferred stream in a disk-fed white-dwarf binary tend to orbit the accretor before reaching it?",
        "choices": [
          "It has lost its tangential motion before transfer",
          "Its outward radiation force exceeds gravity everywhere",
          "It retains orbital angular momentum",
          "Its pressure eliminates the companion’s gravitational attraction"
        ],
        "answer": 2,
        "hint": "The gas begins with sideways motion in the binary.",
        "explanation": "Orbital angular momentum prevents an immediate straight plunge. Redistribution of that angular momentum permits inward accretion.",
        "source": "Lecture 28 pages 8–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 8–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-accretion-disk-stream"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-hotspot",
        "rootId": "exam-two-item-l28-hotspot",
        "moduleId": "exam-two-module-28",
        "conceptId": "exam-two-concept-accretion-disk-stream",
        "concept": "exam-two-concept-accretion-disk-stream",
        "type": "single",
        "responseType": "single",
        "prompt": "A bright spot appears where the incoming stream strikes the disk’s outer edge. What distinguishes it from the white dwarf?",
        "choices": [
          "It is the inner transfer point between the two stars",
          "It is an impact region in the flow, away from the stellar center",
          "It is the central accretor viewed through the disk",
          "It is a surface-burning patch on the donor star"
        ],
        "answer": 1,
        "hint": "Use the point where gas collides with the disk.",
        "explanation": "The hot spot marks energy dissipation at the stream–disk impact. It is not the white-dwarf center or the inner point where overflow starts.",
        "source": "Lecture 28 pages 8–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 8–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-accretion-disk-stream"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "media": {
          "src": "assets/visuals/exam-two/roche-disk.svg",
          "alt": "Donor on the left feeds a curved stream toward a disk on the right; bright spot is on the disk rim; white dwarf is at its center.",
          "caption": "Original disk-fed binary schematic."
        }
      },
      {
        "id": "exam-two-item-l28-disk-energy",
        "rootId": "exam-two-item-l28-disk-energy",
        "moduleId": "exam-two-module-28",
        "conceptId": "exam-two-concept-accretion-disk-stream",
        "concept": "exam-two-concept-accretion-disk-stream",
        "type": "single",
        "responseType": "single",
        "prompt": "An accretion disk brightens as more gas spirals inward. Which energy source explains this without assuming a new stellar-core fusion stage?",
        "choices": [
          "Radioactive decay of newly synthesized nickel",
          "Released gravitational energy",
          "Steady hydrogen fusion in the white-dwarf core",
          "Thermal energy left only from the white dwarf’s formation"
        ],
        "answer": 1,
        "hint": "Falling matter moves to a more tightly bound state.",
        "explanation": "Gas falling inward releases gravitational energy that heats the disk. A disk brightening with accretion does not require restarted core fusion, newly produced nickel or only residual cooling.",
        "source": "Lecture 28 pages 8–9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 8–9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-accretion-disk-stream"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-secondary-clock",
        "rootId": "exam-two-item-l27-secondary-clock",
        "moduleId": "exam-two-module-28",
        "conceptId": "exam-two-concept-binary-evolution-timing",
        "concept": "exam-two-concept-binary-evolution-timing",
        "type": "single",
        "responseType": "single",
        "prompt": "Immediately after a massive primary dies, its much lower-mass companion is still young relative to its own main-sequence lifetime. What state is plausible for that companion?",
        "choices": [
          "A red giant sharing the primary’s evolutionary clock",
          "A helium-burning giant exposed by the primary’s winds",
          "A cooling white dwarf formed at the primary’s death",
          "Still a main-sequence star"
        ],
        "answer": 3,
        "hint": "The two stars have different evolutionary timescales.",
        "explanation": "The lower-mass companion can remain on the main sequence. Shared birth time does not imply equal evolutionary lifetime or the same remnant.",
        "source": "Lecture 27 pages 9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-binary-evolution-timing"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-surviving-binary",
        "rootId": "exam-two-item-l27-surviving-binary",
        "moduleId": "exam-two-module-28",
        "conceptId": "exam-two-concept-binary-evolution-timing",
        "concept": "exam-two-concept-binary-evolution-timing",
        "type": "single",
        "responseType": "single",
        "prompt": "A neutron star remains bound to a low-mass companion after a supernova. Later the companion becomes a giant and fills its lobe. Which future system is consistent?",
        "choices": [
          "A compact star receiving gas from an evolved donor",
          "A detached pair with no transfer despite lobe overflow",
          "A giant with an accretor that must now be a white dwarf",
          "A giant receiving all transferred gas from the neutron star"
        ],
        "answer": 0,
        "hint": "Follow the surviving compact object and the later donor expansion.",
        "explanation": "The later giant supplies gas to the surviving neutron star. The stated direction and compact-object identity determine the roles.",
        "source": "Lecture 27 pages 9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-binary-evolution-timing"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-survival-condition",
        "rootId": "exam-two-item-l27-survival-condition",
        "moduleId": "exam-two-module-28",
        "conceptId": "exam-two-concept-binary-evolution-timing",
        "concept": "exam-two-concept-binary-evolution-timing",
        "type": "single",
        "responseType": "single",
        "prompt": "What assumption is needed before predicting a future interacting binary after a primary’s core-collapse supernova?",
        "choices": [
          "The companion loses most of its hydrogen envelope",
          "The stars had equal main-sequence lifetimes",
          "The system remains gravitationally bound",
          "The compact remnant receives no recoil at the explosion"
        ],
        "answer": 2,
        "hint": "Mass loss and a remnant kick can change the orbit.",
        "explanation": "The surviving companion and compact remnant must remain bound for later Roche-lobe interaction in the proposed pathway.",
        "source": "Lecture 27 pages 9 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 9",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-binary-evolution-timing"
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
    "id": "exam-two-module-29",
    "examId": "exam-two",
    "number": 29,
    "kicker": "Lectures 26–29",
    "title": "Surface explosions: X-ray bursts and novae",
    "description": "Distinguish the accretor, the fuel and what survives a surface eruption.",
    "source": "Lecture 27 pages 10–12",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-xray-burst-fuel",
        "label": "Helium ignition on a neutron star",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-nova-hydrogen",
        "label": "A hydrogen eruption on a surviving white dwarf",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-surface-event-comparison",
        "label": "Use fuel, object and aftermath together",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-29-lesson",
        "type": "lesson",
        "title": "Surface explosions: X-ray bursts and novae",
        "body": [
          "In the lecture’s thermonuclear X-ray-burst model, a neutron star accretes hydrogen-rich material from a companion. Hydrogen burning builds a helium layer. When that layer ignites rapidly, it produces a brief, intense burst, often lasting seconds to about a minute in the illustrated class. The neutron star survives the surface event and can accumulate more fuel. This is not the rotating-beam explanation of ordinary pulsar pulses or a claim that all variable X-ray sources share one mechanism.",
          "Worked example: Fuel is supplied as hydrogen, but the explosive layer in this model is helium. Distinguish what arrives from what ignites during the burst.",
          "Common mistake: Do not call the neutron-star surface a white-dwarf surface or equate a thermonuclear burst with a spin pulse.",
          "A classical nova occurs when hydrogen-rich material accumulates on a white dwarf and undergoes a thermonuclear runaway in the surface layer. The system can brighten for days or longer while ejecting accreted material. The underlying white dwarf survives; renewed accretion can eventually permit another eruption. A classical nova is therefore different from the course’s Type Ia model, in which runaway burning disrupts the carbon–oxygen white dwarf itself.",
          "Worked example: After a nova fades, the binary can still contain its white dwarf. If the event instead destroys the whole white dwarf, the classical-nova interpretation fails.",
          "Common mistake: The word nova does not mean a newly born star, and a nova is not simply a small Type Ia with the same surviving object.",
          "The useful comparison has three parts: the accretor, the explosive fuel and the outcome. In these lecture models, a thermonuclear X-ray burst involves helium on a neutron star; a classical nova involves hydrogen on a white dwarf; a Type Ia involves runaway burning of a carbon–oxygen white dwarf and full disruption. Duration and wavelength help, but brightness alone is not a complete classifier. “No compact remnant” in the full-disruption model still allows expanding ejecta and an extended supernova remnant.",
          "Worked example: A statement that a bright event leaves no material is stronger than the source supports. A disrupted star leaves ejecta even when it leaves no surviving compact star.",
          "Common mistake: Do not replace a three-part physical comparison with the vague claim that one event is merely brighter."
        ],
        "keyPoints": [
          "The course’s thermonuclear X-ray burst burns accumulated helium on a neutron star.",
          "A classical nova ignites accreted hydrogen on a white dwarf.",
          "Surface eruptions differ from full thermonuclear disruption."
        ],
        "source": "Lecture 27 pages 10–12"
      },
      {
        "id": "exam-two-item-l27-xray-fuel",
        "rootId": "exam-two-item-l27-xray-fuel",
        "moduleId": "exam-two-module-29",
        "conceptId": "exam-two-concept-xray-burst-fuel",
        "concept": "exam-two-concept-xray-burst-fuel",
        "type": "single",
        "responseType": "single",
        "prompt": "Hydrogen-rich gas accretes onto a neutron star and steadily builds a helium layer. In the lecture’s burst sequence, which fuel then ignites explosively?",
        "choices": [
          "Hydrogen in a red-giant shell",
          "Iron in a collapsing massive core",
          "Carbon in a white-dwarf core",
          "Helium in the accumulated surface layer"
        ],
        "answer": 3,
        "hint": "Separate incoming material from the accumulated burst fuel.",
        "explanation": "The specified hydrogen burning leaves helium, which ignites in the surface burst. The other choices locate burning in different systems or stages.",
        "source": "Lecture 27 pages 10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-xray-burst-fuel"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-xray-sequence",
        "rootId": "exam-two-item-l27-xray-sequence",
        "moduleId": "exam-two-module-29",
        "conceptId": "exam-two-concept-xray-burst-fuel",
        "concept": "exam-two-concept-xray-burst-fuel",
        "type": "order",
        "responseType": "order",
        "prompt": "Order the stages of the lecture’s thermonuclear X-ray-burst cycle.",
        "choices": [
          "Hydrogen-rich gas accretes",
          "Hydrogen burning builds helium",
          "The helium layer ignites rapidly",
          "The surviving star can accumulate new fuel"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "hint": "Follow fuel arrival, conversion, ignition and replenishment.",
        "explanation": "Accretion supplies hydrogen; burning builds helium; helium ignition causes a burst; the neutron star survives and can accumulate more fuel.",
        "source": "Lecture 27 pages 10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-xray-burst-fuel"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-burst-versus-pulse",
        "rootId": "exam-two-item-l27-burst-versus-pulse",
        "moduleId": "exam-two-module-29",
        "conceptId": "exam-two-concept-xray-burst-fuel",
        "concept": "exam-two-concept-xray-burst-fuel",
        "type": "single",
        "responseType": "single",
        "prompt": "A neutron star produces one rapid thermonuclear flare after fuel accumulates. Which explanation fits that event rather than ordinary lighthouse pulses?",
        "choices": [
          "A fixed hot spot moving into view every spin",
          "Rapid burning of an accumulated surface layer",
          "A companion periodically covering a steady source",
          "A beam crossing the observer on each rotation"
        ],
        "answer": 1,
        "hint": "The stem specifies fuel accumulation and a thermonuclear event.",
        "explanation": "Rapid surface burning explains the flare. The beam and hot-spot choices are periodic visibility mechanisms; an eclipse obscures rather than ignites the source.",
        "source": "Lecture 27 pages 10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-xray-burst-fuel"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-nova-object",
        "rootId": "exam-two-item-l27-nova-object",
        "moduleId": "exam-two-module-29",
        "conceptId": "exam-two-concept-nova-hydrogen",
        "concept": "exam-two-concept-nova-hydrogen",
        "type": "single",
        "responseType": "single",
        "prompt": "A binary brightens as accreted hydrogen erupts, then still contains the same white dwarf. Which event fits?",
        "choices": [
          "An iron-core-collapse supernova",
          "A full Type Ia disruption",
          "A neutron-star helium burst",
          "A classical nova"
        ],
        "answer": 3,
        "hint": "Use both the fuel and the surviving accretor.",
        "explanation": "A classical nova is a hydrogen surface eruption on a surviving white dwarf. Full disruption and the other accretor/core types do not fit.",
        "source": "Lecture 27 pages 11–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 11–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nova-hydrogen"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-nova-recurrence",
        "rootId": "exam-two-item-l27-nova-recurrence",
        "moduleId": "exam-two-module-29",
        "conceptId": "exam-two-concept-nova-hydrogen",
        "concept": "exam-two-concept-nova-hydrogen",
        "type": "single",
        "responseType": "single",
        "prompt": "What makes recurrence possible in a classical-nova system?",
        "choices": [
          "The white dwarf survives and can receive more fuel",
          "The disruption ejecta reconstruct the carbon–oxygen core",
          "The original hydrogen layer burns again without replenishment",
          "The donor restarts steady core fusion in the white dwarf"
        ],
        "answer": 0,
        "hint": "Identify what remains after the surface eruption.",
        "explanation": "A classical nova leaves a surviving white dwarf that can accrete a fresh hydrogen layer. The system need not rebuild a destroyed core or restart ordinary core hydrogen fusion.",
        "source": "Lecture 27 pages 11–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 11–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nova-hydrogen"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-nova-location",
        "rootId": "exam-two-item-l27-nova-location",
        "moduleId": "exam-two-module-29",
        "conceptId": "exam-two-concept-nova-hydrogen",
        "concept": "exam-two-concept-nova-hydrogen",
        "type": "single",
        "responseType": "single",
        "prompt": "In a classical nova, which region undergoes the explosive burning described here?",
        "choices": [
          "The binary’s interstellar gas far from both stars",
          "An accreted hydrogen layer on the white dwarf",
          "The white dwarf’s entire carbon–oxygen interior",
          "The donor’s inert helium core"
        ],
        "answer": 1,
        "hint": "Locate the newly accumulated fuel.",
        "explanation": "The classical-nova runaway is in an accreted hydrogen layer. Full carbon–oxygen disruption belongs to a different thermonuclear pathway.",
        "source": "Lecture 27 pages 11–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 11–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-nova-hydrogen"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-eruption-match",
        "rootId": "exam-two-item-l27-eruption-match",
        "moduleId": "exam-two-module-29",
        "conceptId": "exam-two-concept-surface-event-comparison",
        "concept": "exam-two-concept-surface-event-comparison",
        "type": "match",
        "responseType": "match",
        "prompt": "Match each event in the lecture models to its explosive fuel and site.",
        "choices": [
          "Carbon–oxygen white-dwarf disruption",
          "Helium layer on a neutron star",
          "Hydrogen layer on a white dwarf"
        ],
        "answer": [
          1,
          2,
          0
        ],
        "hint": "Match every row by its physical mechanism.",
        "explanation": "The object and fuel must both match: helium/NS, hydrogen/WD, carbon–oxygen WD disruption.",
        "source": "Lecture 27 pages 10–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 10–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-surface-event-comparison"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Thermonuclear X-ray burst",
            "answer": "Helium layer on a neutron star"
          },
          {
            "label": "Classical nova",
            "answer": "Hydrogen layer on a white dwarf"
          },
          {
            "label": "Type Ia supernova",
            "answer": "Carbon–oxygen white-dwarf disruption"
          }
        ],
        "options": [
          "Carbon–oxygen white-dwarf disruption",
          "Helium layer on a neutron star",
          "Hydrogen layer on a white dwarf"
        ]
      },
      {
        "id": "exam-two-item-l27-no-remnant",
        "rootId": "exam-two-item-l27-no-remnant",
        "moduleId": "exam-two-module-29",
        "conceptId": "exam-two-concept-surface-event-comparison",
        "concept": "exam-two-concept-surface-event-comparison",
        "type": "single",
        "responseType": "single",
        "prompt": "A full Type Ia disruption leaves no compact stellar remnant in the course model. Which material can still be present?",
        "choices": [
          "A required central black hole",
          "Expanding supernova ejecta",
          "The original intact white dwarf",
          "A required central neutron star"
        ],
        "answer": 1,
        "hint": "Compact stellar remnant is narrower than all remaining matter.",
        "explanation": "The star’s disrupted material becomes ejecta. No surviving compact object does not mean no gas or heavy elements remain.",
        "source": "Lecture 27 pages 10–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 10–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-surface-event-comparison"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-classify-evidence",
        "rootId": "exam-two-item-l27-classify-evidence",
        "moduleId": "exam-two-module-29",
        "conceptId": "exam-two-concept-surface-event-comparison",
        "concept": "exam-two-concept-surface-event-comparison",
        "type": "single",
        "responseType": "single",
        "prompt": "Two transients have similar peak apparent brightness. What additional evidence would best distinguish a classical nova from a neutron-star thermonuclear burst?",
        "choices": [
          "Orbital period and the donor’s sky position",
          "Accretor identity and the igniting surface fuel",
          "The presence of accretion without identifying the accretor",
          "Peak apparent brightness without a distance estimate"
        ],
        "answer": 1,
        "hint": "Choose evidence tied to their different mechanisms.",
        "explanation": "The specified models differ in accretor and explosive fuel: hydrogen/white dwarf versus helium/neutron star. Binarity, variability and apparent brightness can be shared.",
        "source": "Lecture 27 pages 10–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 10–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-surface-event-comparison"
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
    "id": "exam-two-module-30",
    "examId": "exam-two",
    "number": 30,
    "kicker": "Lectures 26–29",
    "title": "Type Ia explosions and distance measurements",
    "description": "Connect runaway burning, radioactive heating and calibrated luminosity.",
    "source": "Lecture 27 pages 12–16; Lecture 28 pages 4–10; Lecture 30 page 32",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-ia-runaway",
        "label": "Thermonuclear disruption of a white dwarf",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-ia-radioactivity",
        "label": "The decay chain powers later light",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-ia-standard-candle",
        "label": "Calibrate the lamp before measuring distance",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-30-lesson",
        "type": "lesson",
        "title": "Type Ia explosions and distance measurements",
        "body": [
          "In the lecture’s near-Chandrasekhar accretion model, a carbon–oxygen white dwarf gains mass, contracts and heats until carbon burning runs away. Degeneracy pressure responds weakly to temperature, so the usual expansion-and-cooling thermostat initially fails. The explosion disrupts the white dwarf instead of forming an iron core that collapses to a neutron star. About 1.4 solar masses is the course’s approximate white-dwarf mass scale, not the original progenitor’s mass. Accretion from a nondegenerate companion and mergers of two white dwarfs are different progenitor channels discussed in the packet; this one threshold is not a universal description of every Type Ia channel.",
          "Worked example: Identify the quantity before using 1.4 solar masses: it describes the white dwarf in the stated model. A more massive birth star may lose its envelope before becoming a smaller remnant.",
          "Common mistake: Do not use “Type I” as a synonym for Type Ia or treat all hydrogen-poor supernovae as this pathway.",
          "The explosion synthesizes radioactive nickel-56 along with other products. Nickel-56 decays to cobalt-56, which decays to stable iron-56. Energy deposited from the decay products heats the expanding ejecta and sustains the light after the initial explosion. The lecture gives approximate half-lives of six days and seventy-seven days; these are decay timescales, not a rule that all observed light curves have identical shapes. Near maximum light, characteristic silicon features help identify Type Ia spectra, which lack hydrogen lines in the classification used here.",
          "Worked example: After one nickel-56 half-life, half of the initial nickel-56 nuclei remain undecayed. That does not mean the observed brightness must halve at exactly the same instant, because transport and energy deposition also matter.",
          "Common mistake: Radioactive decay after the event differs from the thermonuclear burning that made the unstable nuclei.",
          "Type Ia supernovae can be used as standardizable candles: their luminosities are calibrated using observed light-curve properties rather than assumed perfectly identical. Compare the calibrated intrinsic luminosity with the received brightness to infer distance. For equal calibrated luminosities and negligible extinction, brightness varies inversely with distance squared. Dust, calibration and event differences must be accounted for in a real measurement. The packet connects these distances to cosmology without making a universal brightness ratio between every Type Ia and every core-collapse event.",
          "Worked example: If one calibrated event appears nine times fainter than another and extinction is negligible, it is three times farther away. The luminosity assumption is essential.",
          "Common mistake: A fainter event is not necessarily farther if its intrinsic luminosity or extinction differs."
        ],
        "keyPoints": [
          "The course model disrupts a carbon–oxygen white dwarf.",
          "Nickel–cobalt decay deposits energy in expanding ejecta.",
          "Calibrated luminosity plus apparent brightness constrains distance."
        ],
        "source": "Lecture 27 pages 12–16; Lecture 28 pages 4–10; Lecture 30 page 32"
      },
      {
        "id": "exam-two-item-l27-ia-feedback",
        "rootId": "exam-two-item-l27-ia-feedback",
        "moduleId": "exam-two-module-30",
        "conceptId": "exam-two-concept-ia-runaway",
        "concept": "exam-two-concept-ia-runaway",
        "type": "single",
        "responseType": "single",
        "prompt": "Why can heating run away during carbon ignition in the degenerate white-dwarf model?",
        "choices": [
          "Heating produces prompt expansion that fully suppresses burning",
          "The surface hydrogen layer alone supplies the core’s runaway",
          "Degeneracy pressure rises exactly in proportion to temperature",
          "Pressure initially responds too weakly for prompt expansion cooling"
        ],
        "answer": 3,
        "hint": "Compare the response to heat with an ordinary expansion thermostat.",
        "explanation": "Weak temperature sensitivity of degeneracy pressure initially limits the stabilizing expansion response while burning accelerates. The thermonuclear runaway is in the white-dwarf interior, not just a nova layer.",
        "source": "Lecture 27 pages 12–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 12–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ia-runaway"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-ia-mass",
        "rootId": "exam-two-item-l27-ia-mass",
        "moduleId": "exam-two-module-30",
        "conceptId": "exam-two-concept-ia-runaway",
        "concept": "exam-two-concept-ia-runaway",
        "type": "single",
        "responseType": "single",
        "prompt": "In the near-Chandrasekhar Type Ia pathway taught here, the approximate 1.4-solar-mass scale applies to which quantity?",
        "choices": [
          "The accreting white dwarf’s mass",
          "The donor’s initial main-sequence mass",
          "The two stars’ combined current mass",
          "The gas already expelled by earlier novae"
        ],
        "answer": 0,
        "hint": "Identify the object supported by electron degeneracy.",
        "explanation": "The approximate Chandrasekhar scale concerns the electron-supported white dwarf in the stated pathway, not the combined binary, donor or cumulative ejecta.",
        "source": "Lecture 27 pages 12–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 12–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ia-runaway"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-ia-engine",
        "rootId": "exam-two-item-l27-ia-engine",
        "moduleId": "exam-two-module-30",
        "conceptId": "exam-two-concept-ia-runaway",
        "concept": "exam-two-concept-ia-runaway",
        "type": "single",
        "responseType": "single",
        "prompt": "Which contrast correctly separates the two explosion models?",
        "choices": [
          "Both: hydrogen surface ignition on an intact white dwarf",
          "Type Ia: white-dwarf runaway; core collapse: massive-core implosion",
          "Both: helium surface ignition on an intact neutron star",
          "Type Ia: massive-core implosion; core collapse: white-dwarf runaway"
        ],
        "answer": 1,
        "hint": "Compare the exploding interior, not just spectral brightness.",
        "explanation": "Type Ia is a thermonuclear white-dwarf pathway; massive-star core collapse is initiated by core implosion. Surface nova and X-ray-burst models are different.",
        "source": "Lecture 27 pages 12–14 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 12–14",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ia-runaway"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-nickel-half",
        "rootId": "exam-two-item-l28-nickel-half",
        "moduleId": "exam-two-module-30",
        "conceptId": "exam-two-concept-ia-radioactivity",
        "concept": "exam-two-concept-ia-radioactivity",
        "type": "single",
        "responseType": "single",
        "prompt": "A sample initially contains 800 nickel-56 nuclei. After one six-day half-life, how many nickel-56 nuclei remain on average?",
        "choices": [
          "600",
          "400",
          "800",
          "200"
        ],
        "answer": 1,
        "hint": "One half-life leaves half the parent nuclei.",
        "explanation": "800 × 1/2 = 400 parent nuclei on average. This counts nickel-56, not all nuclei and not a directly specified brightness.",
        "source": "Lecture 28 pages 10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ia-radioactivity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-ia-late-light",
        "rootId": "exam-two-item-l28-ia-late-light",
        "moduleId": "exam-two-module-30",
        "conceptId": "exam-two-concept-ia-radioactivity",
        "concept": "exam-two-concept-ia-radioactivity",
        "type": "single",
        "responseType": "single",
        "prompt": "What supplies continuing heat to Type Ia ejecta after explosive burning has finished?",
        "choices": [
          "Continuous accretion onto the surviving white dwarf",
          "Gravitational contraction of a new neutron star",
          "Energy deposited by radioactive decay",
          "Steady hydrogen fusion in a surviving stellar core"
        ],
        "answer": 2,
        "hint": "The heating source must remain after the original burning episode.",
        "explanation": "Nickel–cobalt decay deposits energy in the ejecta. The other choices assume an intact ordinary core or no energy source.",
        "source": "Lecture 28 pages 10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ia-radioactivity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-ia-spectrum",
        "rootId": "exam-two-item-l28-ia-spectrum",
        "moduleId": "exam-two-module-30",
        "conceptId": "exam-two-concept-ia-radioactivity",
        "concept": "exam-two-concept-ia-radioactivity",
        "type": "single",
        "responseType": "single",
        "prompt": "A supernova near peak light lacks hydrogen lines and shows the characteristic silicon feature described in the lecture. Which classification is supported?",
        "choices": [
          "Type II",
          "Type Ib",
          "Type Ia",
          "Type Ic"
        ],
        "answer": 2,
        "hint": "Use the spectral feature in addition to the absence of hydrogen.",
        "explanation": "The characteristic silicon feature with no hydrogen supports Type Ia in this classification. No hydrogen alone would not uniquely establish Ia.",
        "source": "Lecture 28 pages 10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ia-radioactivity"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-ia-distance-ratio",
        "rootId": "exam-two-item-l27-ia-distance-ratio",
        "moduleId": "exam-two-module-30",
        "conceptId": "exam-two-concept-ia-standard-candle",
        "concept": "exam-two-concept-ia-standard-candle",
        "type": "single",
        "responseType": "single",
        "prompt": "Two Type Ia events have equal calibrated luminosity and negligible extinction. Event B is sixteen times fainter than A. How does its distance compare?",
        "choices": [
          "B is the same distance",
          "B is four times nearer",
          "B is sixteen times farther",
          "B is four times farther"
        ],
        "answer": 3,
        "hint": "Use brightness ∝ 1/distance².",
        "explanation": "A brightness factor of 1/16 requires a distance factor of √16 = 4 under the stated assumptions.",
        "source": "Lecture 27 pages 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ia-standard-candle"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-ia-distance-inputs",
        "rootId": "exam-two-item-l27-ia-distance-inputs",
        "moduleId": "exam-two-module-30",
        "conceptId": "exam-two-concept-ia-standard-candle",
        "concept": "exam-two-concept-ia-standard-candle",
        "type": "single",
        "responseType": "single",
        "prompt": "Which pair of quantities is needed for the standard-candle distance comparison?",
        "choices": [
          "Burst duration and peak apparent brightness alone",
          "White-dwarf mass and sky direction alone",
          "Calibrated luminosity and received brightness",
          "Received brightness and sky direction alone"
        ],
        "answer": 2,
        "hint": "One quantity belongs to the source; the other is measured here.",
        "explanation": "The standard-candle comparison requires intrinsic luminosity and received brightness. A direction, mass estimate or duration alone does not supply the calibrated luminosity.",
        "source": "Lecture 27 pages 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ia-standard-candle"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l27-ia-dust-bias",
        "rootId": "exam-two-item-l27-ia-dust-bias",
        "moduleId": "exam-two-module-30",
        "conceptId": "exam-two-concept-ia-standard-candle",
        "concept": "exam-two-concept-ia-standard-candle",
        "type": "single",
        "responseType": "single",
        "prompt": "An event is dimmed by dust, but its distance is inferred assuming no extinction and the correct intrinsic luminosity. How is the inferred distance biased?",
        "choices": [
          "Too large",
          "Unchanged if the wavelength band stays fixed",
          "Too small",
          "Unchanged if the classification is Type Ia"
        ],
        "answer": 0,
        "hint": "Unmodeled dimming is mistaken for extra geometric dilution.",
        "explanation": "At fixed calibrated luminosity, unmodeled dust dimming is mistaken for greater distance, so distance is overestimated. Classification or using one band does not remove extinction.",
        "source": "Lecture 27 pages 15–16 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l27",
            "locator": "pages 15–16",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-ia-standard-candle"
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
    "id": "exam-two-module-31",
    "examId": "exam-two",
    "number": 31,
    "kicker": "Lectures 26–29",
    "title": "Common envelopes, mergers and rejuvenation",
    "description": "Follow orbital energy into an envelope and understand stars above an old cluster’s turnoff.",
    "source": "Lecture 28 pages 11–13",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-common-envelope",
        "label": "Two cores inside one envelope",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-merger-transient",
        "label": "Orbital energy can power a red transient",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-blue-straggler",
        "label": "Mass gain changes apparent age",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-31-lesson",
        "type": "lesson",
        "title": "Common envelopes, mergers and rejuvenation",
        "body": [
          "Unstable mass transfer can engulf both stellar cores in a shared gaseous envelope. Drag transfers orbital energy and angular momentum into the envelope, so the cores spiral closer. If enough energy helps eject the envelope, a tighter binary can survive. If the envelope is not expelled soon enough, inspiral can end in a merger. The presence of a common envelope alone does not guarantee which outcome occurs.",
          "Worked example: As the orbit contracts, the envelope can gain energy. An expanding envelope and a shrinking core separation can therefore occur together.",
          "Common mistake: Do not infer that outward-moving envelope gas requires the cores to move farther apart.",
          "A stellar merger can release orbital energy and produce a luminous red nova, a transient that lasts weeks to months in the lecture examples. This merger event differs from a classical nova’s hydrogen surface burning on a white dwarf. V1309 Scorpii was observed as an eclipsing binary with a decreasing orbital period before its 2008 outburst; that pre-outburst record supports the merger interpretation. The word nova in these two names does not establish the same engine.",
          "Worked example: A progressively shorter orbital period before an outburst supports a tightening binary. The subsequent transient is interpreted together with that history, not solely from its red color.",
          "Common mistake: Do not call every red transient a merger from color alone or transfer the classical-nova fuel mechanism to a luminous red nova.",
          "Blue stragglers lie above and to the blue side of an old population’s main-sequence turnoff. A merger or mass transfer can increase a star’s mass, and mixing can make additional hydrogen available to its core. It can then occupy a position resembling a younger star even though its components formed with the old population. This is rejuvenation of its evolutionary state, not a reversal of chronological time. Not every blue straggler must come from the same channel, and the packet’s proposed links to magnetic fields or particular supernovae remain model possibilities.",
          "Worked example: An old cluster can contain an unusually hot, luminous main-sequence star if binary interaction changes its mass and fuel supply. That one star need not reset the age inferred from the population’s ordinary turnoff.",
          "Common mistake: Do not infer a recent second burst of star formation from one blue straggler alone."
        ],
        "keyPoints": [
          "Drag inside a common envelope shrinks the orbit.",
          "Envelope ejection can leave a close binary; continued inspiral can merge the cores.",
          "Mergers or mass gain can make stars appear younger than their surroundings."
        ],
        "source": "Lecture 28 pages 11–13"
      },
      {
        "id": "exam-two-item-l28-inspiral",
        "rootId": "exam-two-item-l28-inspiral",
        "moduleId": "exam-two-module-31",
        "conceptId": "exam-two-concept-common-envelope",
        "concept": "exam-two-concept-common-envelope",
        "type": "single",
        "responseType": "single",
        "prompt": "Two stellar cores orbit inside a shared envelope and experience drag. Which paired change follows in the lecture’s picture?",
        "choices": [
          "Core separation stays fixed; only surface rotation can change",
          "Core separation decreases; the envelope gains orbital energy",
          "Core separation increases; the envelope gains orbital energy",
          "Core separation decreases; the envelope must lose the transferred energy"
        ],
        "answer": 1,
        "hint": "Track energy transfer from orbit to gas.",
        "explanation": "Drag removes orbital energy and angular momentum from the cores and deposits energy in the envelope, shrinking the separation. Envelope expansion and core inspiral can coexist.",
        "source": "Lecture 28 pages 11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-common-envelope"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-common-envelope-outcomes",
        "rootId": "exam-two-item-l28-common-envelope-outcomes",
        "moduleId": "exam-two-module-31",
        "conceptId": "exam-two-concept-common-envelope",
        "concept": "exam-two-concept-common-envelope",
        "type": "single",
        "responseType": "single",
        "prompt": "Which event can prevent two cores in a common envelope from merging in this model?",
        "choices": [
          "Continued drag until the two cores touch",
          "Removing all orbital angular momentum from the cores",
          "Keeping the entire envelope bound indefinitely",
          "Ejection of the envelope before inspiral reaches merger"
        ],
        "answer": 3,
        "hint": "What removes the gas responsible for the continuing drag?",
        "explanation": "Timely envelope ejection can end the common-envelope phase and leave a close binary. Continued drag can instead lead to merger.",
        "source": "Lecture 28 pages 11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-common-envelope"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-envelope-tf",
        "rootId": "exam-two-item-l28-envelope-tf",
        "moduleId": "exam-two-module-31",
        "conceptId": "exam-two-concept-common-envelope",
        "concept": "exam-two-concept-common-envelope",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: Finding two cores inside a common envelope uniquely proves they will merge rather than survive as a close binary.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "The pathway has more than one possible endpoint.",
        "explanation": "False. The outcome depends on whether the envelope is ejected before merger.",
        "source": "Lecture 28 pages 11 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 11",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-common-envelope"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-v1309-evidence",
        "rootId": "exam-two-item-l28-v1309-evidence",
        "moduleId": "exam-two-module-31",
        "conceptId": "exam-two-concept-merger-transient",
        "concept": "exam-two-concept-merger-transient",
        "type": "single",
        "responseType": "single",
        "prompt": "Which observation most strongly supports the binary-merger interpretation of the V1309 Sco example?",
        "choices": [
          "A decreasing eclipsing-binary period before the outburst",
          "A red spectrum measured after the outburst alone",
          "A light curve measured only after all eclipses disappeared",
          "A high peak apparent brightness without a distance"
        ],
        "answer": 0,
        "hint": "Choose evidence of the precursor system and its changing orbit.",
        "explanation": "A shrinking precursor binary period supports an inspiral/merger explanation. Redness, apparent peak brightness or a post-event curve alone provide less direct evidence of the changing binary.",
        "source": "Lecture 28 pages 11–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 11–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-merger-transient"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-rednova-engine",
        "rootId": "exam-two-item-l28-rednova-engine",
        "moduleId": "exam-two-module-31",
        "conceptId": "exam-two-concept-merger-transient",
        "concept": "exam-two-concept-merger-transient",
        "type": "single",
        "responseType": "single",
        "prompt": "What energy reservoir is central to the luminous-red-nova merger model in this lesson?",
        "choices": [
          "Orbital energy released during inspiral",
          "Radioactive nickel alone in every event",
          "Steady hydrogen fusion restarted in two new cores",
          "Hydrogen ignition on a surviving white dwarf"
        ],
        "answer": 0,
        "hint": "Keep the merger engine separate from the classical-nova name.",
        "explanation": "Inspiral releases orbital energy as the stars approach and merge. Classical-nova surface burning is a different mechanism.",
        "source": "Lecture 28 pages 11–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 11–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-merger-transient"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-transient-mechanisms",
        "rootId": "exam-two-item-l28-transient-mechanisms",
        "moduleId": "exam-two-module-31",
        "conceptId": "exam-two-concept-merger-transient",
        "concept": "exam-two-concept-merger-transient",
        "type": "match",
        "responseType": "match",
        "prompt": "Match the event to the mechanism used in these lessons.",
        "choices": [
          "White-dwarf thermonuclear disruption",
          "Stellar merger with orbital-energy release",
          "Hydrogen surface runaway on a white dwarf"
        ],
        "answer": [
          2,
          1,
          0
        ],
        "hint": "Match every row by its physical mechanism.",
        "explanation": "The shared word nova does not imply a shared engine: surface eruption, merger and full thermonuclear disruption differ.",
        "source": "Lecture 28 pages 11–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 11–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-merger-transient"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true,
        "rows": [
          {
            "label": "Classical nova",
            "answer": "Hydrogen surface runaway on a white dwarf"
          },
          {
            "label": "Luminous red nova",
            "answer": "Stellar merger with orbital-energy release"
          },
          {
            "label": "Type Ia supernova",
            "answer": "White-dwarf thermonuclear disruption"
          }
        ],
        "options": [
          "White-dwarf thermonuclear disruption",
          "Stellar merger with orbital-energy release",
          "Hydrogen surface runaway on a white dwarf"
        ]
      },
      {
        "id": "exam-two-item-l28-blue-straggler",
        "rootId": "exam-two-item-l28-blue-straggler",
        "moduleId": "exam-two-module-31",
        "conceptId": "exam-two-concept-blue-straggler",
        "concept": "exam-two-concept-blue-straggler",
        "type": "single",
        "responseType": "single",
        "prompt": "An old cluster contains one main-sequence star hotter and more luminous than its ordinary turnoff. Which process can explain it without new star formation?",
        "choices": [
          "Ordinary single-star cooling after core hydrogen exhaustion",
          "White-dwarf cooling with no new nuclear fuel",
          "Mass gain or merger with fresh core fuel mixing",
          "Dust extinction increasing the measured temperature"
        ],
        "answer": 2,
        "hint": "Ask how binary interaction changes mass and available fuel.",
        "explanation": "Binary mass gain or a merger can increase mass and available core fuel, producing an apparent main-sequence age exception. Ordinary cooling or dust does not supply that physical change.",
        "source": "Lecture 28 pages 13 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 13",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-blue-straggler"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-rejuvenation-meaning",
        "rootId": "exam-two-item-l28-rejuvenation-meaning",
        "moduleId": "exam-two-module-31",
        "conceptId": "exam-two-concept-blue-straggler",
        "concept": "exam-two-concept-blue-straggler",
        "type": "single",
        "responseType": "single",
        "prompt": "What does rejuvenation mean in the merger discussion?",
        "choices": [
          "The evolutionary state can resemble that of a younger star",
          "The star’s inferred mass becomes that of an older turnoff star",
          "The star must have formed after the other cluster members",
          "The entire cluster’s turnoff shifts to a younger age"
        ],
        "answer": 0,
        "hint": "Separate the object’s current fuel state from elapsed time.",
        "explanation": "Mass gain and mixing can change the evolutionary state without changing chronological formation history or the age of unrelated cluster stars.",
        "source": "Lecture 28 pages 13 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 13",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-blue-straggler"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l28-turnoff-boundary",
        "rootId": "exam-two-item-l28-turnoff-boundary",
        "moduleId": "exam-two-module-31",
        "conceptId": "exam-two-concept-blue-straggler",
        "concept": "exam-two-concept-blue-straggler",
        "type": "single",
        "responseType": "single",
        "prompt": "An old cluster’s ordinary turnoff indicates a great age, but it contains a blue straggler. Which inference is best supported?",
        "choices": [
          "The cluster age should match the straggler’s single-star age",
          "Binary evolution may explain an exception to the ordinary turnoff",
          "The ordinary turnoff must belong to a separate younger population",
          "A single-star track should describe the straggler without mass exchange"
        ],
        "answer": 1,
        "hint": "A special evolutionary pathway can violate a single-star assumption.",
        "explanation": "A blue straggler can have a modified mass/fuel history. It does not by itself overturn the population’s turnoff age or prove universal mergers.",
        "source": "Lecture 28 pages 13 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l28",
            "locator": "pages 13",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-blue-straggler"
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
    "id": "exam-two-module-32",
    "examId": "exam-two",
    "number": 32,
    "kicker": "Lectures 26–29",
    "title": "Superluminous and pair-instability supernovae",
    "description": "Separate unusually bright observations from the physical models that might explain them.",
    "source": "Lecture 29 pages 4–13",
    "continuation": false,
    "concepts": [
      {
        "id": "exam-two-concept-superluminous-observations",
        "label": "Very bright is an observational category",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-pair-instability-chain",
        "label": "Loss of pressure support can ignite an explosion",
        "masteryEligible": true
      },
      {
        "id": "exam-two-concept-pair-model-boundaries",
        "label": "Which mass, and which outcome?",
        "masteryEligible": true
      }
    ],
    "activities": [
      {
        "id": "exam-two-module-32-lesson",
        "type": "lesson",
        "title": "Superluminous and pair-instability supernovae",
        "body": [
          "Superluminous supernovae reach unusually high intrinsic luminosities compared with ordinary supernovae. The lecture illustrates a magnitude boundary near minus twenty-one; on the magnitude scale, more negative values mean brighter. The precise threshold depends on the band and convention, so it should not be equated uncritically with one bolometric luminosity conversion. Observed light curves and spectra vary, and many examples occur in metal-poor dwarf hosts. These trends help constrain models but do not identify one universal explosion engine. Historical survey discovery rates are not current rate predictions.",
          "Worked example: In the same photometric band, absolute magnitude minus twenty-two is brighter than minus twenty, regardless of which event is closer. Apparent brightness alone cannot establish the intrinsic category.",
          "Common mistake: The brightest-looking object in a telescope is not necessarily the most luminous source.",
          "In a sufficiently hot, massive core, energetic photons can produce electron–positron pairs. This converts some radiation energy into particle rest mass and softens the pressure response, weakening support against gravity. Contraction raises the temperature, which can ignite explosive oxygen burning and other advanced burning. In the full pair-instability disruption regime, the thermonuclear release can unbind the star and synthesize radioactive material. The sequence starts with a pressure-support problem, not with electrons simply supplying extra outward pressure.",
          "Worked example: Pair creation → weaker support → contraction and heating → explosive burning. Follow the sign of the pressure change before predicting the motion.",
          "Common mistake: Do not equate pair instability with the ordinary iron-core-collapse mechanism or say pair creation immediately blows the star apart before contraction.",
          "The lecture gives rough scales above about one hundred thirty solar masses initially or about sixty solar masses in the carbon–oxygen core for entry into pair-instability conditions. These are different mass quantities and model-dependent guideposts. Mass loss, composition and the final core structure matter; even higher masses need not all end in the same full disruption. Distinguish the full-disruption model from pulsational mass ejection or collapse in neighboring regimes. A bright light curve by itself does not establish a measured carbon–oxygen core mass.",
          "Worked example: A star can lose a large envelope and leave a core far lighter than its initial mass. Comparing its initial mass directly with a core-mass threshold mixes unlike quantities.",
          "Common mistake: Do not infer a guaranteed fate for every star above one approximate initial-mass threshold."
        ],
        "keyPoints": [
          "Superluminous describes extreme luminosity, not one unique engine.",
          "Pair creation can reduce pressure support and trigger contraction.",
          "Initial stellar mass, core mass and model outcome are different quantities."
        ],
        "source": "Lecture 29 pages 4–13"
      },
      {
        "id": "exam-two-item-l29-magnitude-direction",
        "rootId": "exam-two-item-l29-magnitude-direction",
        "moduleId": "exam-two-module-32",
        "conceptId": "exam-two-concept-superluminous-observations",
        "concept": "exam-two-concept-superluminous-observations",
        "type": "single",
        "responseType": "single",
        "prompt": "In the same band, event A peaks at absolute magnitude −22 and B at −20. Which is intrinsically brighter in that band?",
        "choices": [
          "B",
          "A",
          "Distance is required to compare these absolute magnitudes",
          "They have equal luminosity"
        ],
        "answer": 1,
        "hint": "Absolute magnitude already uses a common reference distance.",
        "explanation": "More negative absolute magnitude means greater intrinsic band luminosity. Distance is not needed for this specified absolute-magnitude comparison.",
        "source": "Lecture 29 pages 4–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l29",
            "locator": "pages 4–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-superluminous-observations"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l29-brightness-category",
        "rootId": "exam-two-item-l29-brightness-category",
        "moduleId": "exam-two-module-32",
        "conceptId": "exam-two-concept-superluminous-observations",
        "concept": "exam-two-concept-superluminous-observations",
        "type": "single",
        "responseType": "single",
        "prompt": "A nearby ordinary supernova appears brighter than a very distant superluminous event. What follows?",
        "choices": [
          "The distant event cannot be intrinsically superluminous",
          "The nearby event must have the larger radioactive nickel mass",
          "Both events must have the same distance after calibration",
          "Apparent brightness alone does not rank intrinsic luminosity"
        ],
        "answer": 3,
        "hint": "Received light depends on distance as well as luminosity.",
        "explanation": "A nearby less luminous object can appear brighter. The observed flux comparison alone cannot rank intrinsic luminosities or diagnose nickel mass.",
        "source": "Lecture 29 pages 4–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l29",
            "locator": "pages 4–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-superluminous-observations"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l29-engine-evidence",
        "rootId": "exam-two-item-l29-engine-evidence",
        "moduleId": "exam-two-module-32",
        "conceptId": "exam-two-concept-superluminous-observations",
        "concept": "exam-two-concept-superluminous-observations",
        "type": "single",
        "responseType": "single",
        "prompt": "Several superluminous events have different light-curve shapes and spectra. Which conclusion is warranted from the high luminosity alone?",
        "choices": [
          "It identifies pair instability as the common engine",
          "It selects an extreme observational class, not a unique engine",
          "It identifies circumstellar interaction as the common engine",
          "It identifies magnetar spin-down as the common engine"
        ],
        "answer": 1,
        "hint": "A class defined by luminosity is not automatically a causal diagnosis.",
        "explanation": "Extreme luminosity is an observational property. Additional spectral, temporal and environmental evidence is needed to distinguish engines.",
        "source": "Lecture 29 pages 4–10 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l29",
            "locator": "pages 4–10",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-superluminous-observations"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l29-pair-sequence",
        "rootId": "exam-two-item-l29-pair-sequence",
        "moduleId": "exam-two-module-32",
        "conceptId": "exam-two-concept-pair-instability-chain",
        "concept": "exam-two-concept-pair-instability-chain",
        "type": "order",
        "responseType": "order",
        "prompt": "Order the steps in the full pair-instability explosion model described here.",
        "choices": [
          "Energetic photons produce electron–positron pairs",
          "Pressure support weakens",
          "The core contracts and heats",
          "Explosive burning can unbind the star"
        ],
        "answer": [
          0,
          1,
          2,
          3
        ],
        "hint": "Track support, motion and ignition in causal order.",
        "explanation": "Pair creation softens support; gravity drives contraction and heating; explosive burning can then disrupt the star in the appropriate regime.",
        "source": "Lecture 29 pages 12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l29",
            "locator": "pages 12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pair-instability-chain"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l29-pair-pressure",
        "rootId": "exam-two-item-l29-pair-pressure",
        "moduleId": "exam-two-module-32",
        "conceptId": "exam-two-concept-pair-instability-chain",
        "concept": "exam-two-concept-pair-instability-chain",
        "type": "single",
        "responseType": "single",
        "prompt": "What immediate change initiates contraction in the pair-instability model?",
        "choices": [
          "Completion of stable iron-core burning before collapse",
          "A loss of core mass before any heating occurs",
          "A reduction in effective pressure support",
          "An increase in radiation support that starts expansion"
        ],
        "answer": 2,
        "hint": "Creating particles changes how radiation energy supports the core.",
        "explanation": "Pair creation softens the pressure response. Gravity can then contract and heat the core, unlike an immediate increase in stable radiation support.",
        "source": "Lecture 29 pages 12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l29",
            "locator": "pages 12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pair-instability-chain"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l29-pair-contraction-heat",
        "rootId": "exam-two-item-l29-pair-contraction-heat",
        "moduleId": "exam-two-module-32",
        "conceptId": "exam-two-concept-pair-instability-chain",
        "concept": "exam-two-concept-pair-instability-chain",
        "type": "single",
        "responseType": "single",
        "prompt": "After pair creation weakens support, why can nuclear burning become explosive?",
        "choices": [
          "Contraction heats the core and accelerates advanced burning",
          "Surface hydrogen ignition alone triggers a classical nova",
          "Expansion cools the core while maintaining the same burning rate",
          "Iron photodisintegration supplies net heat for the explosion"
        ],
        "answer": 0,
        "hint": "Connect gravitational contraction to temperature-sensitive burning.",
        "explanation": "Contraction raises the temperature and accelerates advanced burning. Explosive nuclear energy can unbind the star in the full-disruption regime.",
        "source": "Lecture 29 pages 12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l29",
            "locator": "pages 12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pair-instability-chain"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l29-mass-quantity",
        "rootId": "exam-two-item-l29-mass-quantity",
        "moduleId": "exam-two-module-32",
        "conceptId": "exam-two-concept-pair-model-boundaries",
        "concept": "exam-two-concept-pair-model-boundaries",
        "type": "single",
        "responseType": "single",
        "prompt": "A model lists one threshold for initial stellar mass and another for carbon–oxygen core mass. Why are those numbers different?",
        "choices": [
          "The two thresholds count the same matter at every stage",
          "Initial mass refers only to the hydrogen-free core",
          "The core is only part of the star, and mass loss alters the final structure",
          "Core mass always includes all previously ejected material"
        ],
        "answer": 2,
        "hint": "Track what matter remains in the evolved core.",
        "explanation": "Initial stellar mass and final carbon–oxygen core mass count different material. Envelope evolution and mass loss connect them in a model-dependent way.",
        "source": "Lecture 29 pages 9–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l29",
            "locator": "pages 9–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pair-model-boundaries"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l29-threshold-limit",
        "rootId": "exam-two-item-l29-threshold-limit",
        "moduleId": "exam-two-module-32",
        "conceptId": "exam-two-concept-pair-model-boundaries",
        "concept": "exam-two-concept-pair-model-boundaries",
        "type": "single",
        "responseType": "single",
        "prompt": "A star’s initial mass exceeds the lecture’s rough pair-instability scale. Which additional information is most relevant before predicting its final fate?",
        "choices": [
          "Its mass expressed in kilograms instead of solar masses",
          "Its mass-loss history and final core structure",
          "Its spectral color alone before core evolution",
          "Its apparent brightness without a distance"
        ],
        "answer": 1,
        "hint": "The model outcome depends on the evolved physical object.",
        "explanation": "Mass loss and final core structure determine the relevant instability regime. Apparent brightness, color alone or changing units cannot settle that outcome.",
        "source": "Lecture 29 pages 9–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l29",
            "locator": "pages 9–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pair-model-boundaries"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      },
      {
        "id": "exam-two-item-l29-all-slsn-pairs-tf",
        "rootId": "exam-two-item-l29-all-slsn-pairs-tf",
        "moduleId": "exam-two-module-32",
        "conceptId": "exam-two-concept-pair-model-boundaries",
        "concept": "exam-two-concept-pair-model-boundaries",
        "type": "true-false",
        "responseType": "true-false",
        "prompt": "True or false: Every event classified as superluminous is thereby proven to be a full pair-instability disruption.",
        "choices": [
          "True",
          "False"
        ],
        "answer": 1,
        "hint": "Observational classification and engine inference are separate.",
        "explanation": "False. Superluminous describes extreme luminosity; pair instability is a possible model requiring further evidence.",
        "source": "Lecture 29 pages 9–12 · original practice",
        "sourceRefs": [
          {
            "id": "exam-two-source-l29",
            "locator": "pages 9–12",
            "boundary": "verified"
          }
        ],
        "claimIds": [
          "exam-two-claim-pair-model-boundaries"
        ],
        "provenance": "original",
        "original": true,
        "status": "verified",
        "topic": "Original Exam 2 practice",
        "mockEligible": true
      }
    ]
  }
];
