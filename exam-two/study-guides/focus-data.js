/* Original review teaching; source question text remains private. */
window.ASTR1102_FOCUS = {
  "version": 1,
  "title": "Exam focus",
  "authority": "Lecture 30, pages 3–32",
  "units": [
    {
      "id": "review-03",
      "number": 1,
      "page": 3,
      "title": "Distance and parallax",
      "conceptIds": [
        "exam-two-concept-parallax-geometry",
        "exam-two-concept-parsec",
        "exam-two-concept-parallax-ratio"
      ],
      "points": [
        {
          "term": "Annual parallax",
          "meaning": "is the apparent shift against distant background stars as Earth changes position in its orbit."
        },
        {
          "term": "d = 1/p",
          "meaning": "gives distance in parsecs when parallax is in arcseconds. A smaller angle means a greater distance; 1 pc is about 3.26 light-years."
        }
      ],
      "checkpoint": "Reverse the ratio before doing arithmetic: doubling the parallax halves the distance.",
      "transfer": "Practice both angle → distance and distance → angle. The same relation survives a changed star, number, or direction.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-parsecs",
          "strength": "direct",
          "label": "Parsec unit",
          "relationship": "Tests the distance unit named on the review page."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-parallax",
          "strength": "direct",
          "label": "Parallax comparison",
          "relationship": "Tests the same inverse angle–distance relation with two stars."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-04",
      "number": 2,
      "page": 4,
      "title": "Surface flux, luminosity and received brightness",
      "conceptIds": [
        "exam-two-concept-flux-luminosity",
        "exam-two-concept-inverse-square",
        "exam-two-concept-combined-ratio"
      ],
      "points": [
        {
          "term": "Surface flux F",
          "meaning": "is power emitted per unit stellar surface area; for the thermal model, F = σT⁴."
        },
        {
          "term": "Luminosity L",
          "meaning": "is total emitted power: L = 4πR²F. Moving the observer does not change it."
        },
        {
          "term": "Received brightness b",
          "meaning": "is power per unit area at the observer: b = L/(4πd²), neglecting extinction."
        }
      ],
      "checkpoint": "Specify what is held fixed. A distance change affects received brightness, not the star’s luminosity or surface flux.",
      "transfer": "A forward dimming question can become an inverse distance or luminosity question. Identify the measured quantity first.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-mars-venus",
          "strength": "direct",
          "label": "Received-light ratio",
          "relationship": "Uses inverse-square dimming for the same emitting source."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-weekly-brightness",
          "strength": "direct",
          "label": "Equal-luminosity stars",
          "relationship": "Changes distance while intrinsic luminosity is held fixed."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-luminosity-ambiguity",
          "strength": "related",
          "label": "Inferring luminosity",
          "relationship": "Related inference, but the supplied stem leaves extinction and measurement band unspecified."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-05",
      "number": 3,
      "page": 5,
      "title": "The magnitude scale",
      "conceptIds": [
        "exam-two-concept-magnitude-ratio"
      ],
      "points": [
        {
          "term": "Lower magnitude",
          "meaning": "means brighter, not fainter."
        },
        {
          "term": "Magnitude steps",
          "meaning": "multiply brightness ratios: about 2.5 per step in the lecture approximation; exactly five steps correspond to a factor of 100."
        }
      ],
      "checkpoint": "Count the difference in magnitudes. Do not use the larger magnitude itself as the number of steps.",
      "transfer": "Reverse brighter/fainter, or change the magnitude difference, while retaining the same logarithmic relationship.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-magnitude",
          "strength": "direct",
          "label": "Magnitude-step ratio",
          "relationship": "Direct calculation of brightness from a difference in magnitudes."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-dust-magnitude",
          "strength": "related",
          "label": "Magnitude direction after extinction",
          "relationship": "Checks the sign of the scale in a dust scenario."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-06",
      "number": 4,
      "page": 6,
      "title": "Apparent and absolute magnitude",
      "conceptIds": [
        "exam-two-concept-absolute-magnitude",
        "exam-two-concept-extinction-distance"
      ],
      "points": [
        {
          "term": "Apparent magnitude m",
          "meaning": "describes the brightness received here and changes with distance and extinction."
        },
        {
          "term": "Absolute magnitude M",
          "meaning": "is the apparent magnitude the star would have at 10 pc without intervening extinction; it compares intrinsic output in a specified band."
        }
      ],
      "checkpoint": "The fixed 10 pc reference defines absolute magnitude. Ignoring dust can make a photometric distance too large.",
      "transfer": "Separate the definition, the distance effect, and the extinction effect before applying a distance modulus.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-dust-distance",
          "strength": "related",
          "label": "Extinction and inferred distance",
          "relationship": "Exercises distance modulus with dust, not the 10 pc definition directly."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-luminosity-ambiguity",
          "strength": "related",
          "label": "Apparent measurement versus intrinsic output",
          "relationship": "Related distinction with an explicitly qualified source key."
        }
      ],
      "gap": "No saved Top Hat or HW 6–11 item directly asks the 10 pc definition. Prepare that definition from the review and lesson."
    },
    {
      "id": "review-07",
      "number": 5,
      "page": 7,
      "title": "Radius, temperature and luminosity",
      "conceptIds": [
        "exam-two-concept-radius-temperature"
      ],
      "points": [
        {
          "term": "L = 4πR²σT⁴",
          "meaning": "combines emitting area and surface flux; temperature must be absolute temperature."
        },
        {
          "term": "A luminosity ratio",
          "meaning": "is the squared radius ratio times the fourth power of the temperature ratio."
        }
      ],
      "checkpoint": "A hotter star need not be more luminous if its radius is smaller. Track both factors.",
      "transfer": "Rehearse the supplied comparison, then solve for the radius or temperature that would keep luminosity unchanged.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-radius-temperature",
          "strength": "direct",
          "label": "Two-star luminosity ratio",
          "relationship": "Uses the same radius-squared and temperature-fourth-power relationship."
        },
        {
          "kind": "topHat",
          "id": "exam-two-source-question-l18-radius-lines",
          "strength": "direct",
          "label": "Radius lines on an H–R diagram",
          "relationship": "Asks which law produces the radius lines. The supported answer is separate from a displayed graded key."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-08",
      "number": 6,
      "page": 8,
      "title": "Spectral classes and temperature",
      "conceptIds": [
        "exam-two-concept-spectral-temperature",
        "exam-two-concept-color-temperature"
      ],
      "points": [
        {
          "term": "O B A F G K M",
          "meaning": "runs from hotter to cooler; the lecture continues to cooler L and T classes."
        },
        {
          "term": "Spectral subclasses",
          "meaning": "refine each class. The Sun is G2; a color at peak wavelength is not necessarily the color the eye perceives."
        }
      ],
      "checkpoint": "Choose the hottest or coolest among the options actually offered. Missing O and B stars change the correct comparison.",
      "transfer": "Practice order and offered-set comparisons rather than memorizing one answer letter or one class.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-coolest",
          "strength": "direct",
          "label": "Coolest offered spectral class",
          "relationship": "Direct offered-set temperature ranking."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-hottest",
          "strength": "direct",
          "label": "Hottest offered spectral class",
          "relationship": "Reverses the comparison while keeping the same offered classes."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-09",
      "number": 7,
      "page": 9,
      "title": "Reading the H–R diagram",
      "conceptIds": [
        "exam-two-concept-hr-axes",
        "exam-two-concept-hr-regions",
        "exam-two-concept-main-sequence-mass"
      ],
      "points": [
        {
          "term": "H–R axes",
          "meaning": "place higher luminosity upward and hotter temperature toward the left."
        },
        {
          "term": "Main-sequence stars",
          "meaning": "run from hot, luminous stars at upper left to cool, faint stars at lower right."
        },
        {
          "term": "Giants and white dwarfs",
          "meaning": "separate temperature from size: cool luminous giants are large; hot faint white dwarfs are small."
        }
      ],
      "checkpoint": "Read the axes before identifying the region. Position gives temperature and luminosity, not distance by itself.",
      "transfer": "Move between a position, a named population, and a physical property; practice actual diagram targets as well as words.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-mass-location",
          "strength": "direct",
          "label": "Main-sequence position and mass",
          "relationship": "Connects a particular part of the main sequence to mass."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-white-dwarf-location",
          "strength": "direct",
          "label": "White-dwarf position",
          "relationship": "Direct location task for hot, faint remnants."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-06-02",
          "strength": "direct",
          "label": "HW 6 · axes",
          "relationship": "Tests which property does not belong on the horizontal axis."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-06-03",
          "strength": "direct",
          "label": "HW 6 · position to properties",
          "relationship": "Tests the hot, luminous upper-left region."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-06-01",
          "strength": "related",
          "label": "HW 6 · distance limitation",
          "relationship": "Adds the boundary that an H–R diagram alone does not supply distance."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-10",
      "number": 8,
      "page": 10,
      "title": "What the H–R populations are doing",
      "conceptIds": [
        "exam-two-concept-hr-regions",
        "exam-two-concept-main-sequence-mass",
        "exam-two-concept-white-dwarf-remnant"
      ],
      "points": [
        {
          "term": "Main sequence",
          "meaning": "means sustained hydrogen fusion in the core; it occupies most of an ordinary star’s lifetime."
        },
        {
          "term": "Giants and supergiants",
          "meaning": "are evolved states whose active fuel and burning location depend on the stage."
        },
        {
          "term": "White dwarfs",
          "meaning": "have no sustained fusion and shine by losing stored thermal energy."
        }
      ],
      "checkpoint": "The review’s rough 90% statement is a course approximation, not an exact probability for every observing sample.",
      "transfer": "Connect a region or stage to its energy source. A matching task can combine several stages into one scored question.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-not-main-sequence",
          "strength": "direct",
          "label": "Main-sequence population fraction",
          "relationship": "Direct use of the review’s approximate population model."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-09-01",
          "strength": "direct",
          "label": "HW 9 · stage and energy-source matching",
          "relationship": "Tests the core-hydrogen and cooling-remnant distinctions alongside other stages."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-11",
      "number": 9,
      "page": 11,
      "title": "Gas, dust and interstellar extinction",
      "conceptIds": [
        "exam-two-concept-ism-density",
        "exam-two-concept-dust-scattering",
        "exam-two-concept-reddening",
        "exam-two-concept-extinction-distance"
      ],
      "points": [
        {
          "term": "Interstellar gas",
          "meaning": "can absorb or emit spectral lines depending on the physical setup."
        },
        {
          "term": "Interstellar dust",
          "meaning": "dims and reddens transmitted starlight, preferentially scatters shorter visible wavelengths, and reradiates absorbed energy in infrared."
        }
      ],
      "checkpoint": "Red appearance alone does not distinguish a cool star from a hotter star seen through dust.",
      "transfer": "Follow the light path: transmitted, scattered toward you, or thermally emitted. Then predict brightness and color.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-dust-magnitude",
          "strength": "direct",
          "label": "Dust and apparent brightness",
          "relationship": "Tests the dimming effect through the magnitude scale."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-dust-distance",
          "strength": "related",
          "label": "Dust and distance bias",
          "relationship": "Applies extinction to a distance inference."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-07-01",
          "strength": "related",
          "label": "HW 7 · nebular density",
          "relationship": "Related comparison of interstellar environments, not the extinction mechanism."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-12",
      "number": 10,
      "page": 12,
      "title": "Emission nebulae and ionization",
      "conceptIds": [
        "exam-two-concept-nebula-mechanism"
      ],
      "points": [
        {
          "term": "H II regions",
          "meaning": "contain ionized hydrogen maintained by energetic ultraviolet photons from hot O and B stars."
        },
        {
          "term": "Recombination and line emission",
          "meaning": "produce characteristic light from the gas; the gas is not simply reflecting a star’s whole spectrum."
        }
      ],
      "checkpoint": "H II means ionized hydrogen, not a hydrogen molecule. Keep the ionizing source separate from the glowing gas.",
      "transfer": "Identify the star capable of ionization, then explain how that leads to emission lines.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-hii-ionizers",
          "strength": "direct",
          "label": "Stars that ionize H II regions",
          "relationship": "Directly tests the hot-star ionization link."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l22-q2",
          "strength": "related",
          "label": "Spectrum of a planetary-nebula region",
          "relationship": "Transfers line-emission reasoning to another nebula; the sampled region matters."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-13",
      "number": 11,
      "page": 13,
      "title": "Emission, reflection and dark nebulae",
      "conceptIds": [
        "exam-two-concept-nebula-mechanism",
        "exam-two-concept-dust-scattering"
      ],
      "points": [
        {
          "term": "Emission nebulae",
          "meaning": "shine through line emission from excited gas."
        },
        {
          "term": "Reflection nebulae",
          "meaning": "are visible through scattered starlight, often blue in the visible-light comparison."
        },
        {
          "term": "Dark nebulae",
          "meaning": "obscure background sources along the line of sight through extinction by dust."
        }
      ],
      "checkpoint": "The saved homework key says ultraviolet scattering, while this review says blue light. Retain that wording conflict; do not memorize it as a uniquely resolved wavelength claim.",
      "transfer": "Classify by the physical source of the observed light, not only by the color in a photograph.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-hii-ionizers",
          "strength": "related",
          "label": "Emission-nebula prerequisite",
          "relationship": "Supports the emission case but does not compare all three nebula types."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-07-02",
          "strength": "direct",
          "label": "HW 7 · reflection-nebula mechanism",
          "relationship": "Directly tests the reflection mechanism, with a preserved ultraviolet-versus-blue wording conflict."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-07-01",
          "strength": "related",
          "label": "HW 7 · dark-nebula density",
          "relationship": "Adds a density comparison; it is not a complete mechanism classification."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-14",
      "number": 12,
      "page": 14,
      "title": "Gravity, pressure and stellar change",
      "conceptIds": [
        "exam-two-concept-collapse-conditions",
        "exam-two-concept-collapse-pressure",
        "exam-two-concept-protostar-support",
        "exam-two-concept-red-giant-shell"
      ],
      "points": [
        {
          "term": "Hydrostatic balance",
          "meaning": "means inward gravity and the outward pressure force approximately balance."
        },
        {
          "term": "Collapse and expansion",
          "meaning": "follow a change in support: a contracting core and an expanding envelope can coexist in the same evolved star."
        }
      ],
      "checkpoint": "Force imbalance describes acceleration. Outward motion alone is not proof that pressure currently exceeds gravity.",
      "transfer": "Explain which region is contracting or expanding and why; do not treat the whole star as one uniformly changing sphere.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l22-q1",
          "strength": "direct",
          "label": "Pressure and expansion",
          "relationship": "Tests the course’s force-imbalance model; its motion-versus-acceleration qualification remains visible."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l18-collapse",
          "strength": "direct",
          "label": "Gravity overcoming cloud pressure",
          "relationship": "Tests the collapse side of the same balance."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-08-01",
          "strength": "related",
          "label": "HW 8 · red-giant burning location",
          "relationship": "Supports the core/envelope distinction in a later evolutionary setting."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-15",
      "number": 13,
      "page": 15,
      "title": "Cold clouds and triggered star formation",
      "conceptIds": [
        "exam-two-concept-collapse-conditions",
        "exam-two-concept-triggered-birth",
        "exam-two-concept-formation-regions"
      ],
      "points": [
        {
          "term": "Cold, dense gas",
          "meaning": "favors collapse when self-gravity can overcome pressure support."
        },
        {
          "term": "Compression triggers",
          "meaning": "include spiral-arm density waves, cloud collisions and shocks that compress suitable gas."
        }
      ],
      "checkpoint": "A trigger compresses a cloud; gravitational collapse is the resulting process. Neither implies every compressed cloud must form a star.",
      "transfer": "Distinguish the favorable initial conditions from the event that changes them.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l18-collapse",
          "strength": "direct",
          "label": "Conditions favoring collapse",
          "relationship": "Direct cold/dense comparison."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l19-q2",
          "strength": "direct",
          "label": "Compression and triggers",
          "relationship": "Tests the same trigger family; the broad source category mixes collapse and external triggers."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-07-03",
          "strength": "related",
          "label": "HW 7 · formation environments",
          "relationship": "Supports the setting for multiple-star formation, not a specific compression mechanism."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-16",
      "number": 14,
      "page": 16,
      "title": "Main-sequence lifetimes",
      "conceptIds": [
        "exam-two-concept-ms-lifetime-ratio",
        "exam-two-concept-main-sequence-mass"
      ],
      "points": [
        {
          "term": "Lifetime ∝ M/L",
          "meaning": "compares available fuel with the rate of fuel use in the lecture scaling."
        },
        {
          "term": "Massive main-sequence stars",
          "meaning": "have more fuel but consume it much faster, so their main-sequence lives are shorter."
        }
      ],
      "checkpoint": "Use mass divided by luminosity. A larger fuel supply does not by itself imply a longer life.",
      "transfer": "Change the numerical pair, reverse the lifetime comparison, or explain the result without calculation.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l19-q3",
          "strength": "direct",
          "label": "Lifetime from mass and luminosity",
          "relationship": "Direct use of the fuel-over-rate relation."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l20-q1",
          "strength": "direct",
          "label": "A second lifetime comparison",
          "relationship": "Same relation with another supplied numerical pair."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-08-03",
          "strength": "direct",
          "label": "HW 8 · lifetime calculation",
          "relationship": "Changes both supplied values while retaining the same M/L decision."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-17",
      "number": 15,
      "page": 17,
      "title": "Hydrogen fusion and temperature sensitivity",
      "conceptIds": [
        "exam-two-concept-hydrogen-pathways",
        "exam-two-concept-rate-temperature",
        "exam-two-concept-triple-alpha"
      ],
      "points": [
        {
          "term": "The pp chain and CNO cycle",
          "meaning": "both convert hydrogen into helium; carbon, nitrogen and oxygen act as catalysts in the CNO cycle."
        },
        {
          "term": "Temperature sensitivity",
          "meaning": "is stronger for CNO than pp in the lecture’s approximate T¹⁶ versus T⁴ comparison. Triple-alpha burns helium into carbon and is more temperature sensitive still in the taught regime."
        }
      ],
      "checkpoint": "Do not confuse a catalyst with the net fuel or product, or confuse helium burning with either hydrogen-burning route.",
      "transfer": "Match each process to its fuel/product and compare reactions under the same fractional temperature increase.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l20-q4",
          "strength": "direct",
          "label": "Hydrogen-to-helium pathways",
          "relationship": "Tests the reaction pair directly; the correct answer is source-supported, not displayed as a graded key."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l20-q3",
          "strength": "related",
          "label": "Comparing reaction sensitivities",
          "relationship": "Extends the review’s pp/CNO comparison to include triple-alpha."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-18",
      "number": 16,
      "page": 18,
      "title": "Leaving the main sequence",
      "conceptIds": [
        "exam-two-concept-solar-brightening",
        "exam-two-concept-red-giant-shell",
        "exam-two-concept-helium-hr"
      ],
      "points": [
        {
          "term": "Main-sequence brightening",
          "meaning": "comes from slow core readjustment as hydrogen becomes helium; hydrogen is still burning in the core."
        },
        {
          "term": "The first red-giant phase",
          "meaning": "has an inert helium core and hydrogen-burning shell; the expanding surface cools while the core heats."
        },
        {
          "term": "Helium ignition",
          "meaning": "changes the internal support and the subsequent H–R path."
        }
      ],
      "checkpoint": "A cooler surface does not imply a cooler core. Shell burning belongs to a different stage from ordinary core-hydrogen burning.",
      "transfer": "Translate the track into its burning locations, or infer the next broad direction from the internal change.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-sun-direction",
          "strength": "direct",
          "label": "H–R direction after core hydrogen",
          "relationship": "Tests the first broad move toward the giant region."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l20-q2",
          "strength": "direct",
          "label": "Slow solar brightening",
          "relationship": "Tests the core mechanism before the main sequence ends."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-08-01",
          "strength": "direct",
          "label": "HW 8 · red-giant fuel location",
          "relationship": "Tests shell hydrogen versus core helium at the first giant stage."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-08-02",
          "strength": "related",
          "label": "HW 8 · helium-flash visibility",
          "relationship": "Distinguishes a core event from an obvious surface flash."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-09-01",
          "strength": "direct",
          "label": "HW 9 · stage–fuel matching",
          "relationship": "Connects several reviewed stages to their active energy sources."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-19",
      "number": 17,
      "page": 19,
      "title": "Cluster ages and turnoff",
      "conceptIds": [
        "exam-two-concept-cluster-controls",
        "exam-two-concept-cluster-turnoff"
      ],
      "points": [
        {
          "term": "A cluster comparison",
          "meaning": "uses stars formed at roughly the same time to compare different evolutionary speeds."
        },
        {
          "term": "The main-sequence turnoff",
          "meaning": "marks the most massive stars still on the main sequence. An older cluster has a cooler, less luminous turnoff."
        }
      ],
      "checkpoint": "Age comes from which stars have left the main sequence, not merely from counting all red stars in a picture.",
      "transfer": "Read two H–R diagrams and rank their ages; connect the turnoff to the short lifetimes of high-mass stars.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l21-q2",
          "strength": "related",
          "label": "Cluster color and age",
          "relationship": "Uses the survival of hot massive stars, but does not directly ask for the turnoff position."
        }
      ],
      "gap": "No saved question directly locates the turnoff. The review figure and existing turnoff-target practice cover that representation."
    },
    {
      "id": "review-20",
      "number": 18,
      "page": 20,
      "title": "Variable stars as distance indicators",
      "conceptIds": [
        "exam-two-concept-variable-periods",
        "exam-two-concept-standard-candle"
      ],
      "points": [
        {
          "term": "Cepheid period–luminosity calibration",
          "meaning": "turns a measured pulsation period into an estimate of intrinsic luminosity. Use the calibration for the correct variable-star class."
        },
        {
          "term": "A calibrated luminosity plus received brightness",
          "meaning": "gives a distance through inverse-square reasoning, with extinction accounted for."
        }
      ],
      "checkpoint": "The period does not directly measure distance. The chain is period → calibrated luminosity → brightness comparison → distance.",
      "transfer": "Reconstruct the chain and identify which missing observation or calibration prevents a distance estimate.",
      "sources": [],
      "gap": "No dedicated Cepheid or RR Lyrae question appears in the saved Top Hat or HW 6–11 set. Lecture 30 explicitly includes this topic; keep its original practice in the mock pool."
    },
    {
      "id": "review-21",
      "number": 19,
      "page": 21,
      "title": "The Sun’s full evolutionary path",
      "conceptIds": [
        "exam-two-concept-sun-path",
        "exam-two-concept-red-giant-shell",
        "exam-two-concept-helium-hr",
        "exam-two-concept-agb-shells",
        "exam-two-concept-thermal-pulses",
        "exam-two-concept-white-dwarf-remnant"
      ],
      "points": [
        {
          "term": "The low-mass sequence",
          "meaning": "runs through core-hydrogen burning, the first giant branch, core-helium burning, the asymptotic giant branch, envelope loss and a cooling white dwarf."
        },
        {
          "term": "The AGB interior",
          "meaning": "has a carbon–oxygen core with helium- and hydrogen-burning shells; it is not a helium core simply because helium burns in a shell."
        }
      ],
      "checkpoint": "Match each stage to the active region. A white dwarf’s lack of ongoing fusion does not mean zero emitted light.",
      "transfer": "Practice the complete sequence, the changing H–R direction, and stage–energy-source matching rather than only the first move off the main sequence.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-sun-direction",
          "strength": "direct",
          "label": "First leg of the Sun’s track",
          "relationship": "Directly tests one leg only; it does not cover the full reviewed sequence."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l22-q3",
          "strength": "related",
          "label": "AGB products",
          "relationship": "Connects a later stage to carbon enrichment, beyond merely naming the track."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-09-01",
          "strength": "direct",
          "label": "HW 9 · six-stage matching",
          "relationship": "Supplies broader stage-to-energy coverage than the first-leg Top Hat question."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-09-02",
          "strength": "direct",
          "label": "HW 9 · AGB core",
          "relationship": "Separates the core’s composition from its surrounding burning shell."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-22",
      "number": 20,
      "page": 22,
      "title": "Planetary nebulae and the surviving core",
      "conceptIds": [
        "exam-two-concept-nebula-shapes",
        "exam-two-concept-nebula-spectrum",
        "exam-two-concept-white-dwarf-remnant"
      ],
      "points": [
        {
          "term": "A planetary nebula",
          "meaning": "is an expelled stellar envelope illuminated by its hot central remnant; it is unrelated to planets or a planet-forming disk."
        },
        {
          "term": "Expansion and dispersal",
          "meaning": "make it a short-lived visible phase. The review gives illustrative speeds of 10–30 km/s and fading on a tens-of-thousands-of-years scale."
        }
      ],
      "checkpoint": "Distinguish the glowing gas from the central star. They need not produce the same type of spectrum.",
      "transfer": "Identify what remains, what expands away, and why the nebula eventually disappears.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l22-q2",
          "strength": "related",
          "label": "Nebular spectrum by sampled region",
          "relationship": "Tests a useful distinction, but not the expansion timescale or the name’s meaning."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-09-03",
          "strength": "related",
          "label": "HW 9 · bipolar shapes",
          "relationship": "Adds physical explanations for shapes; the complete displayed multiple-answer key remains private."
        }
      ],
      "gap": "The expansion scales and planet/protoplanetary-disk distinction are review-slide targets without a direct saved question."
    },
    {
      "id": "review-23",
      "number": 21,
      "page": 23,
      "title": "Massive-star layers and mass loss",
      "conceptIds": [
        "exam-two-concept-envelope-stripping",
        "exam-two-concept-wind-environment",
        "exam-two-concept-successive-fuels",
        "exam-two-concept-onion-order",
        "exam-two-concept-iron-endpoint"
      ],
      "points": [
        {
          "term": "Successive nuclear fuels",
          "meaning": "require progressively hotter conditions and produce layered burning around an evolved massive core."
        },
        {
          "term": "Envelope stripping",
          "meaning": "can expose hotter helium-rich layers; winds also alter the surrounding medium."
        },
        {
          "term": "The iron-group endpoint",
          "meaning": "marks the end of ordinary energy-yielding fusion. A question restricted to offered elements may have an earlier element as its answer."
        }
      ],
      "checkpoint": "State whether you are ordering inward or outward. Do not treat a shortened list of layers as every layer that exists.",
      "transfer": "Reverse a complete layer order, identify the heaviest eligible offered product, and connect lost surface mass to the exposed star and its environment.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l23-q1",
          "strength": "direct",
          "label": "Mass loss and surroundings",
          "relationship": "Direct mass-loss connection; the saved response received participation credit, not a complete multiple-answer key."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l23-q2",
          "strength": "direct",
          "label": "Heaviest eligible offered element",
          "relationship": "Tests an answer-set-dependent boundary, not a universal endpoint."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l23-q3",
          "strength": "direct",
          "label": "Complete selected-layer order",
          "relationship": "Direct ordering task for the reviewed layered structure."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-24",
      "number": 22,
      "page": 24,
      "title": "Core collapse, bounce and shock",
      "conceptIds": [
        "exam-two-concept-core-support-limit",
        "exam-two-concept-collapse-feedback",
        "exam-two-concept-bounce-remnants",
        "exam-two-concept-sn-energy-budget"
      ],
      "points": [
        {
          "term": "Loss of core support",
          "meaning": "allows rapid collapse; electron capture and photodisintegration can deepen the collapse in the taught model."
        },
        {
          "term": "Bounce and the outgoing shock",
          "meaning": "are parts of the core-collapse sequence. Most released energy escapes in neutrinos; the explosion mechanism is not simply an effortless bounce."
        },
        {
          "term": "Heavy-element production",
          "meaning": "has more than one astrophysical site. The review’s claim that every element heavier than iron is made in supernovae is an overstatement."
        }
      ],
      "checkpoint": "Separate the collapsing core, the expelled envelope, and the possible compact remnant. Do not infer a unique nucleosynthesis answer from the heaviest option.",
      "transfer": "Explain the causal sequence, then distinguish energy transport, ejecta, and remnant outcomes.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l24-q1",
          "strength": "related",
          "label": "Collapse-energy partition",
          "relationship": "Tests a consequence relevant to envelope ejection, not the full collapse/bounce mechanism."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l24-q2",
          "strength": "related",
          "label": "Remnant after an explosion",
          "relationship": "Related outcome question with an incomplete multiple-answer interpretation."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-10-01",
          "strength": "related",
          "label": "HW 10 · evidence for collapse",
          "relationship": "Connects observed neutrinos to the mechanism rather than rehearsing the sequence itself."
        }
      ],
      "gap": "The collapse/bounce causal sequence must also be learned from the slides and original practice; these neighboring source questions do not replace it."
    },
    {
      "id": "review-25",
      "number": 23,
      "page": 25,
      "title": "Supernova classification by spectra",
      "conceptIds": [
        "exam-two-concept-supernova-spectral-types"
      ],
      "points": [
        {
          "term": "Type I versus Type II",
          "meaning": "is first an observed spectral distinction: no hydrogen lines versus hydrogen lines."
        },
        {
          "term": "Ia, Ib and Ic",
          "meaning": "separate Type I spectra further using silicon and helium features. Similar names do not imply the same explosion engine."
        }
      ],
      "checkpoint": "Type I does not automatically mean a thermonuclear white-dwarf explosion; Ib and Ic are core-collapse classes.",
      "transfer": "Classify the spectrum from its features before inferring a physical pathway.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l27-weekly",
          "strength": "related",
          "label": "Thermonuclear versus core-collapse outcome",
          "relationship": "Tests the engine/remnant distinction, not hydrogen/helium/silicon classification."
        }
      ],
      "gap": "No saved item directly asks the full spectral classification. Keep the review’s diagnostic-feature task in practice."
    },
    {
      "id": "review-26",
      "number": 24,
      "page": 26,
      "title": "SN 1987A and neutrino evidence",
      "conceptIds": [
        "exam-two-concept-sn1987a-neutrinos"
      ],
      "points": [
        {
          "term": "The detected neutrino burst",
          "meaning": "is the review’s central reason SN 1987A matters: it supplied direct evidence consistent with core collapse."
        },
        {
          "term": "The review’s count",
          "meaning": "is about 19 detections in roughly 10 seconds, an extremely small sample of the emitted neutrinos."
        },
        {
          "term": "Weak interaction",
          "meaning": "explains why most emitted neutrinos were not detected even though the total emitted number was enormous."
        }
      ],
      "checkpoint": "Do not substitute “it was bright” or “it made heavy elements” for the particular observational evidence emphasized in the review.",
      "transfer": "Switch from why the event mattered to which observation supports the collapse mechanism.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l24-q4",
          "strength": "direct",
          "label": "Significance of SN 1987A",
          "relationship": "Directly tests the emphasized neutrino observation."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-10-01",
          "strength": "direct",
          "label": "HW 10 · evidence for the mechanism",
          "relationship": "Uses the same observation with the target changed to support for core collapse."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-27",
      "number": 25,
      "page": 27,
      "title": "White-dwarf support and limits",
      "conceptIds": [
        "exam-two-concept-wd-electron-support",
        "exam-two-concept-wd-mass-limit",
        "exam-two-concept-wd-hot-small"
      ],
      "points": [
        {
          "term": "Electron degeneracy pressure",
          "meaning": "supports a white dwarf without requiring ongoing fusion."
        },
        {
          "term": "The Chandrasekhar scale",
          "meaning": "is about 1.4 solar masses for the white dwarf in the course model; it is not the initial mass of its parent star."
        },
        {
          "term": "A small emitting area",
          "meaning": "allows a hot white dwarf to have low total luminosity."
        }
      ],
      "checkpoint": "Keep the support mechanism, remnant mass, progenitor mass and temperature separate.",
      "transfer": "Identify the support, interpret the mass limit, and explain the hot-but-faint combination.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-white-dwarf-location",
          "strength": "related",
          "label": "White-dwarf H–R position",
          "relationship": "Tests the hot/faint location, not electron support or the mass limit."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-09-01",
          "strength": "related",
          "label": "HW 9 · no ongoing nuclear source",
          "relationship": "Supports the cooling-remnant distinction, not the support mechanism."
        }
      ],
      "gap": "Electron degeneracy and the 1.4-solar-mass scale are explicit review targets without a direct saved Top Hat/HW 6–11 question."
    },
    {
      "id": "review-28",
      "number": 26,
      "page": 28,
      "title": "Pulsars as rotating neutron stars",
      "conceptIds": [
        "exam-two-concept-pulse-period-compactness",
        "exam-two-concept-neutron-density-evidence",
        "exam-two-concept-pulsar-beam-geometry",
        "exam-two-concept-compact-spin-up"
      ],
      "points": [
        {
          "term": "Very short pulse periods",
          "meaning": "favor a compact neutron-star explanation over a large star rotating at the same rate."
        },
        {
          "term": "The lighthouse model",
          "meaning": "uses a rotating beam associated with magnetic poles that are tilted relative to the spin axis; a pulse occurs when the beam sweeps across us."
        }
      ],
      "checkpoint": "The pulse does not require the whole star to expand and contract, and not every beam geometry crosses Earth.",
      "transfer": "Use the period as evidence for compactness, then read the beam and spin axes in a diagram.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l25-q1",
          "strength": "direct",
          "label": "Shortest feasible rotation",
          "relationship": "Direct compactness comparison among stellar types."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l25-q2",
          "strength": "related",
          "label": "Early pulsar nickname",
          "relationship": "Historical recognition associated with discovery, not the physical lighthouse mechanism."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-29",
      "number": 27,
      "page": 29,
      "title": "Curved spacetime and black holes",
      "conceptIds": [
        "exam-two-concept-spacetime-gravity",
        "exam-two-concept-lensing-images"
      ],
      "points": [
        {
          "term": "General relativity",
          "meaning": "describes matter and energy shaping spacetime geometry and that geometry governing motion."
        },
        {
          "term": "Gravitational lensing",
          "meaning": "bends light paths and can produce several images of one background source. Passing near a black hole is different from crossing its event horizon."
        }
      ],
      "checkpoint": "Count physical sources separately from their lensed images. A static image alone may not determine a unique count.",
      "transfer": "Connect the description of gravity to the observed light path rather than treating “light has no mass” as a reason it cannot bend.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l26-lensing-discussion",
          "strength": "related",
          "label": "Lensed-image discussion",
          "relationship": "Asks for an interpretation of an image, without a displayed unique count or graded key."
        },
        {
          "kind": "topHat",
          "id": "exam-two-th-l26-interstellar-discussion",
          "strength": "related",
          "label": "Black-hole visualization discussion",
          "relationship": "Related depiction question with no supplied complete key."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-11-01",
          "strength": "direct",
          "label": "HW 11 · gravity and geometry",
          "relationship": "Directly tests the general-relativity description repeated in the review."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-11-03",
          "strength": "direct",
          "label": "HW 11 · light near a black hole",
          "relationship": "Direct application of curvature to a light path."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-30",
      "number": 28,
      "page": 30,
      "title": "Gamma-ray bursts and viewing direction",
      "conceptIds": [
        "exam-two-concept-grb-progenitors",
        "exam-two-concept-grb-beaming"
      ],
      "points": [
        {
          "term": "The long-burst collapsar model",
          "meaning": "links a massive rapidly rotating star, a newly formed compact central engine, an accretion flow and jets."
        },
        {
          "term": "Beaming toward the observer",
          "meaning": "makes the burst easier to detect; jets pointing elsewhere explain why many events are missed."
        },
        {
          "term": "Short bursts",
          "meaning": "are commonly associated with compact-object mergers in the supplied course material; duration groups are useful but not exception-free."
        }
      ],
      "checkpoint": "The particular massive-star picture on this review page is not the mechanism of every GRB.",
      "transfer": "Change the viewing angle or compare long and short progenitors while preserving the underlying physical cause.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l26-grb",
          "strength": "direct",
          "label": "Missed bursts and beaming",
          "relationship": "Directly tests the orientation relationship."
        },
        {
          "kind": "homework",
          "id": "exam-two-hw-11-02",
          "strength": "direct",
          "label": "HW 11 · long/short progenitor distinction",
          "relationship": "Complements the review’s long-burst example with the short-burst boundary."
        }
      ],
      "gap": ""
    },
    {
      "id": "review-31",
      "number": 29,
      "page": 31,
      "title": "Roche overflow and accretion",
      "conceptIds": [
        "exam-two-concept-roche-overflow",
        "exam-two-concept-accretion-disk-stream",
        "exam-two-concept-binary-evolution-timing"
      ],
      "points": [
        {
          "term": "A Roche lobe",
          "meaning": "bounds the region around a star in the effective potential of the rotating binary model. Filling it can allow gas to flow through the inner Lagrange region."
        },
        {
          "term": "Angular momentum",
          "meaning": "makes transferred material curve into an accretion flow rather than fall radially straight onto the companion."
        }
      ],
      "checkpoint": "The inner Lagrange point is an effective-force balance in the rotating system, not generally a point of equal gravitational pulls alone.",
      "transfer": "Follow donor expansion → overflow → curved stream/disk → accretion. Distinguish the immediate remnant from the companion’s later evolution.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l27-q1",
          "strength": "related",
          "label": "Unequal-mass binary evolution",
          "relationship": "Tests a later interacting endpoint, not Roche geometry or disk formation directly. The low-mass companion is not immediately a giant."
        }
      ],
      "gap": "The Roche boundary and angular-momentum explanation are slide targets beyond the saved binary-outcome question."
    },
    {
      "id": "review-32",
      "number": 30,
      "page": 32,
      "title": "Type Ia thermonuclear disruption",
      "conceptIds": [
        "exam-two-concept-ia-runaway",
        "exam-two-concept-wd-mass-limit"
      ],
      "points": [
        {
          "term": "The taught Type Ia pathway",
          "meaning": "starts with a white dwarf gaining mass, heating and igniting runaway carbon burning under degenerate conditions."
        },
        {
          "term": "Full thermonuclear disruption",
          "meaning": "leaves expanding ejecta but no compact stellar remnant in the course model; this differs from the usual core-collapse remnant pathway."
        }
      ],
      "checkpoint": "“No remnant” here means no surviving compact star, not no material. The near-limit accreting model is not the only possible Type Ia progenitor channel.",
      "transfer": "Compare fuel, compact object, trigger and aftermath. Do not equate all explosions involving a white dwarf with a Type Ia.",
      "sources": [
        {
          "kind": "topHat",
          "id": "exam-two-th-l27-weekly",
          "strength": "direct",
          "label": "Type Ia versus core-collapse aftermath",
          "relationship": "Direct outcome comparison with a published key and a preserved compact-remnant qualification."
        }
      ],
      "gap": ""
    }
  ],
  "definitions": {
    "direct": "A saved question explicitly tests at least one relationship on this review page; it does not necessarily cover the whole page.",
    "related": "The saved question tests a prerequisite, neighboring mechanism, different stage, or different target. It is not a direct substitute.",
    "missing": "No dedicated saved question was found in the retained Top Hat and HW 6–11 evidence. The review itself still establishes a study target."
  },
  "supplements": [
    {
      "title": "X-ray bursts and novae",
      "moduleIds": [
        "exam-two-module-29"
      ],
      "sourceIds": [
        "exam-two-th-l27-q2"
      ],
      "note": "A directly asked Lecture 27 comparison that Lecture 30 does not repeat."
    },
    {
      "title": "Type Ia light and distance",
      "moduleIds": [
        "exam-two-module-30"
      ],
      "sourceIds": [],
      "note": "Radioactive fading and calibrated distances continue in Lectures 27–28."
    },
    {
      "title": "Mergers and rejuvenation",
      "moduleIds": [
        "exam-two-module-31"
      ],
      "sourceIds": [],
      "note": "Lecture 28 remains in the supplied material even though the review’s references stop at Lecture 27."
    },
    {
      "title": "Superluminous and pair-instability events",
      "moduleIds": [
        "exam-two-module-32"
      ],
      "sourceIds": [
        "exam-two-th-l29-elements"
      ],
      "note": "Lecture 29 remains available. Its element question has no unique displayed key."
    }
  ]
};
