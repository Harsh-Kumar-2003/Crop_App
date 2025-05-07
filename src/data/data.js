export const data = [
  {
    id: 1,
    crop_name: "Paddy",
    pest: [
      {
        name: "Thrips: Stenchaetothrips biformis",
        symptoms: [
          "Laceration of  the tender leaves and suck the plant sap",
          "Yellow (or) silvery streaks on the leaves of young seedlings",
          "Terminal rolling and drying of leaves from tip to base",
          "It causes damage both in nursery and main field",
        ],
        identification: ["Adults - are dark brown in colour"],
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
        image: "/image/paddy/Thrips.jpeg",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms: [
          "Yellowing of leaves from tip to downwards.",
          "Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        ],
        identification: [
          "Adults are green with black spot and black patch on wings.",
        ],
        management: [
          "Use resistant varieties like IR 50, CR 1009, Co 46.",
          "Apply neem cake @ 12.5 kg/20 cent nursery as basal dose.",
          "Spray bund vegetation. Set up light traps.",
        ],
        image: "/image/paddy/green_leafhopper.jpeg",
      },
      {
        name: "Brown plant leafhopper : Nilaparvata lugens",
        symptoms: [
          "Nymphs and adults congregate at the base of the plant above the water level",
          "Affected plant dries up and gives a scorched appearance called “hopper burn”.",
          "Circular patches of drying and lodging of matured plant",
          "It is vector of grassy stunt, ragged stunt ( Fig 12)and wilted stunt diseases",
        ],
        identification: [
          "Adult: Brown body and chestnut brown eyes. It has two forms viz.,",
          "(Macropterous (long winged) and brachypterous (short winged)).",
        ],
        management: [
          "Use resistant/tolerant varieties like Aruna, ADT 36, Co 42, Co 46 IR 36, IR 72.",
          "Avoid close planting",
          "To provide 30 cm rogue spacing at every 2.5 m to reduce the pest incidence.",
          "Avoid use of excessive nitrogenous fertilizers",
          "Control irrigation by intermittent draining",
          "Set up light traps during night",
          "Yellow pan traps during day time",
          "Conserve natural enemies like Lycosa pseudoannulata, Cyrtorhinus lividipennis",
          "Avoid synthetic pyrethroids, methyl parathion, fenthion and quinalphos causing resurgence",
          "Drain the water before the use of insecticides",
        ],
        image: "/image/paddy/brown_planthopper.jpg",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms: [
          "Presence of brown coloured egg mass near leaf tip.",
          "Caterpillar bore into central shoot of paddy seedling and tiller",
          "Causes drying of the central shoot known as “dead heart”",
          "Grown up plant whole panicle becomes dried “white ear”.",
        ],
        identification: [
          "Egg - Laid in a mass and covered with buff coloured hairs.",
          "Larva - Pale yellow with dark brown head.",
          "Pupa - White silken cocoon.",
          "Adult -  Female moth - bright yellowish brown fore wings with a black spot possess a tuft of yellow hairs.",
          "Male moth - Smaller with pale yellow forewings without black spot.",
        ],
        management: [
          "Resistant varieties: Ratna, Jaya, TKM 6.",
          "Avoid close planting and continuous water stagnation",
          "Pull out and destroy the affected tillers",
          "Set up light traps to attract and kill the moths",
          "Harvest the crop upto the ground level and disturb the stubbles",
          "Release the egg parasitoid, Trichogramma japonicum on twice @ 5 cc/ha/(followed by monocrotophos 36 SL spray thrice @ 1000 ml/ha on 58, 65 and 72  DAT)",
          "Apply Bacillus thuringiensis var kurstaki and neem seed kernel extract.",
        ],
        image: "/image/paddy/paddy_stemborer.jpeg",
      },
      {
        name: "Leaf folder (or) leaf roller:  Cnaphalocrocis mainsails / Marasmia",
        symptoms: [
          "Leaves fold longitudinally and a larva remains inside.",
          "Larvae scrapes the green tissues of the leaves and becomes white and dry.",
          "During severe infestation the whole field exhibits scorched appearance.",
        ],
        identification: [
          "Egg - Flat, oval in shape and yellowish white in colour.",
          "Larva - Greenish translucent.",
          "Adult - Moth is brownish with many dark wavy lines in centre and dark band on margin of wings.",
        ],
        management: [
          "Resistant varieties: TNAU LFR 831311, Cauveri, Akash, TKM 6",
          "Clipping of the affected leaves",
          "Keep the bunds clean",
          "Avoid excessive nitrogenous fertilizers",
          "Light traps to attract and kill moths",
          "Release Trichogramma chilonis @ 1, 25,000/ha thrice",
          "Spray NSKE 5 % or  chlorpyriphos 20 EC 1250 ml/ ha.",
        ],
        image: "/image/paddy/leaf_folder.jpeg",
      },
      {
        name: "Rice case worm:  Nymphula depunctalis  ",
        symptoms: [
          "Caterpillars feed on green tissues of the leaves and leave become whitish papery",
          "Tubular cases around the tillers by cutting the apical portion of leaves",
          "Floating of tubular cases on the water",
        ],
        identification: [
          "Larva - Pale translucent green with orange head. It has filamentous gills on the sides of the body",
          "Adult: Moth is delicate white moth with pale brown wavy markings",
        ],
        management: [],
        image: "/image/paddy/rice_case_worm.jpg",
      },
      {
        name: "Gall midge:  Orseolia oryzae",
        symptoms: [
          "Maggot feeds at the base of the growing shoot",
          "Causing formation of a tube like gall that is similar to “onion leaf” or “Silver-shoot”.",
          "Infested tillers produce no panicles.",
        ],
        identification: [
          "Egg: Reddish, elongate, tubular eggs just near the ligule of the leaf blade",
          "Larva: Maggot is pale to red colour feeds inside the gall.",
          "Pupa: pupates at the base of the gall and moves to tip of the gall",
          "Adult: Adult is orange coloured mosquito like fly.",
        ],
        management: [
          "Early ploughing",
          "Resistant varieties: MDU 3, Shakthi, Vikram and Sureka",
          "Harvest the crop and plough immediately",
          "Remove the alternate hosts and adjust the time of planting (early)",
          "Use early maturing  varieties",
          "Optimum recommendation of potash fertilizer",
          "Setup light trap and monitor the adult flies",
        ],
        image: "/image/paddy/gall_midge.jpg",
      },
      {
        name: "Swarming caterpillar:  Spodoptera mauritia ",
        symptoms: [
          "Larvae cut the seedlings in large scale",
          "Severe infestation - cattle grazing appearance to the field.",
          "They feed gregariously and march from field to field.",
        ],
        identification: [
          "Egg - Laid in masses on leaves and covered with grey hairs",
          "Larva - Caterpillar is cylindrical dark to pale green with lateral lines along the body",
          "Pupa - Pupates in an earthen cocoon in soil",
          "Adult - Moth is medium sized stoutly build.",
          "Dark brown with a conspicuous triangular spot on fore wings.",
        ],
        management: [
          "Kerosenate the water while irrigation – suffocation",
          "Allow ducks into the field",
        ],
        image: "/image/paddy/swarming_caterpillar.jpg",
      },
      {
        name: "Rice skipper:  Pelopidas Mathias",
        symptoms: [
          "Edges of the leaves are fastened with webbing.",
          "Backward rolling of leaves,",
          "Caterpillar feeds from margin to inwards",
        ],
        identification: [
          "Larva: Pale green with constructed neck.",
          "Adult: Butterfly with brown coloured wings and curved antenna",
        ],
        management: [],
        image: "/image/paddy/rice_skipper.png",
      },
      {
        name: "Rice horned caterpillar:  Melanitis ismene ",
        symptoms: [
          "Larva feeds on leaf blades of rice.",
          "Leaves are defoliated from the margin or tip irregularly",
        ],
        management: [],
        image: "/image/paddy/rice_horned_caterpillar.jpeg",
      },
      {
        name: [
          "Grasshopper:  Hieroglyphus banian",
          "Short horned grasshopper: Oxya nitidula",
        ],
        symptoms: [
          "Irregular feeding on seedlings and leaf blade",
          "Cutting of stem at panicle stage",
          "Completely defoliate the plants leaving only the mid ribs",
        ],
        management: [],
        image: "/image/paddy/Grasshopper.jpeg",
      },
      {
        name: "Spiny beetle / Rice hispa:  Dicladispa armigera",
        symptoms: [
          "Adults feed on chlorophyll by scraping and causing white parallel streaks",
          "White patches along with long axis of leaf.",
          "Grubs mine into the leaves and make blister near leaf tips.",
        ],
        management: [],
        image: "/image/paddy/spiny_beetle.jpeg",
      },
      {
        name: "White backed plant hopper:  Sogatella furcifera ",
        symptoms: [
          "Suck the sap and cause stunted growth.",
          "“Hopper burn” is caused in irregular patches.",
        ],
        management: [],
        image: "/image/paddy/white_backed_plant_hopper.jpeg",
      },
      {
        name: "Mealybug:  Brevennia rehi ",
        symptoms: [
          "Large number of insects remains in leaf sheath and suck the sap.",
          "Plants become weak, yellowish and very much stunted in circular patches.",
          "Presence of white waxy fluff in leaf sheaths",
        ],
        management: [],
        image: "/image/paddy/mealybug.png",
      },
      {
        name: "Rice earhead bug:  Leptocorisa acuta ",
        symptoms: [
          "Sucking the sap from individual grains, which are in milky stage.",
          "Individual grains become chaffy",
          "Black spots on the grains at the site of feeding puncture.",
          "Buggy odour in rice field during milky stage",
        ],
        management: [],
        image: "/image/paddy/rice_earhead_bug.png",
      },
    ],
  },
  {
    id: 2,
    crop_name: "Sorghum",
    pest: [
      {
        name: "Shootfly:  Atherigona varia soccata ",
        symptoms: [
          "The maggot bores inside the stem and cuts the growing point.",
          "Central shoots dried and produce “dead heart” symptom.",
          "The infested plant produces side tillers.",
        ],
        identification: [
          "Egg - white, cylindrical, distal somewhat flattened",
          "Adult - Whitish grey fly  ",
        ],
        management: [
          "Use resistant varieties like Co-1, CSH 15R, Maldandi and Hagari.",
          "Take up early sowing of sorghum( South West or North East monsoon)",
          "Use seeds pelleted with insecticides",
          "Seed treatment with imidacloprid 70 WS @ 10 g/kg of seeds",
          "In case of direct seeding, use increased seed rate upto 12.5 kg/per hectare",
          "Plough soon after harvest, remove and destroy the stubbles.",
          "Set up the TNAU low cost fish meal traps @   12/ha till the crop is 30 days old.",
        ],
      },
      {
        name: "Stem borer:  Chilo partellus ",
        symptoms: [
          "Withering and drying of central shoot -“dead heart”",
          "Red mining in the midrib",
          "Bore holes visible on the stem near the nodes.",
          "Tender folded leaves have parallel “shot hole”",
          "Affected parts of stem may show internally tunneling of caterpillars",
        ],
        identification: [
          "Egg - Scale-like flat oval eggs in batches on the under surface of leaves near the midribs.",
          "Larva - Yellowish brown with a brown head and prothoracic shield.",
          "Adult - Moth is medium size, straw coloured.",
        ],
        management: [
          "Dead hearts should be pulled out and used as fodder (or) burried in manure pits.",
          "Stubbles should be ploughed up during winter and burnt to destroy the hibernating larvae.",
          "Sow the lab lab or cowpea as an intercrop (Sorghum: Lab lab 4:1)",
          "Set up light trap",
          "Bio-control agents viz.,Trichogramma minutum, Bracon chinensis and Apanteles flavipes",
          "Mix any one of the following insecticides with sand (total quantity of 50 kg)",
          "Phorate - 10G@ 8 kg",
          "Carbofuran 3G@ 17 kg;",
        ],
      },
      {
        name: "Pink stem borer:  Sesamia inferens",
        symptoms: ["Central shoots dried and produce the dead hearts."],
        identification: [
          "Egg - Bead like laid in rows within the leaf sheath",
          "Larva - Pinkish brown with dark head",
          "Adult - Straw coloured moth with white wings",
        ],
        management: [],
      },
      {
        name: "Ear Head caterpillar:  Helicoverpa armigera",
        symptoms: [
          "Earheads are partially eaten with chalky appearance.",
          "Feacal pellets are visible within the ear heads.",
        ],
        identification: [],
        management: [],
      },
      {
        name: "Shoot bug:  Peregrinus maidis ",
        symptoms: [
          "Plants become unhealthy stunted and yellow.",
          "The leaves wither from top downwards.",
          "Panicle formation is inhibited and the plants die if attack is severe.",
          "Honeydew secreted by the bug causes growth of sooty mould on leaves.",
          "The midribs of the leaves turn red due to egg-laying and may dry up subsequently.",
        ],
      },
      {
        name: "Earhead bug:  Calocoris angustatus",
        symptoms: [
          "Nymphs and adult suck the juice from within the grains when they are in the milky stage.",
          "Grains shrink and turn black in colour and ill filled (or) chaffy.",
          "Presence of large number of nymphs and adults are seen on the ear head.",
        ],
      },
      {
        name: "Sorghum midge:  Contarinia sorghicola",
        symptoms: [
          "Pollen shedding due to egg laying",
          "White pupal cases protruding out from the grains",
          "Chaffy grains with holes",
        ],
      },
    ],
  },
  {
    id: 3,
    crop_name: "Maize",
    pest: [
      {
        name: "Stem fly:  Atherigona orientalis",
        symptoms: [
          "The maggot feeds on the young growing shoots results in “dead hearts”.",
        ],
        identification: ["Adult - Small grey coloured fly."],
        management: [
          "Use seeds pelleted with insecticides (see sorghum)",
          "Seed treatment with imidacloprid 70 WS 10 g/kg of seeds",
          "Plough soon after harvest, remove and destroy the stubbles.",
          "Set up the TNAU low cost fish meal trap 12/ha till the crop is 30 days old.",
          "Spray any one of the following : Methyl demeton 25 EC 500 ml/ha, Dimethoate 30 EC 500 ml/ha, Neem seed kernel extract 5%, Neem azal 1% ",
        ],
      },
      {
        name: "Stem borer:  Chilo partellus ",
        symptoms: [
          "Central shoot withers and leading to “dead heart”.",
          "Larvae mines the midrib enter the stem and feeds on the internal tissues.",
          "Bore holes visible on the stem near the nodes.",
          "Young larva crawls and feeds on tender folded leaves causing typical “shot hole” symptom.",
          "Affected parts of stem may show internally tunnelling caterpillars",
        ],
        identification: [
          "Larva - Yellowish brown with a brown head",
          "Adult - Moth is medium size, straw coloured",
        ],
        management: [
          "Sow the lab or cowpea as an intercrop (Maize Lablab 4:1).",
          "Set up light trap till midnight to attract and kill the stem borer moths.",
          "Collect the stubbles after harvest and burn to destroy diapausing borers.",
          "Mix any one of the following insecticides with sand ( total quantity of 50 kg)  Phorate 10G 8 kg, carbofuran 3G @17 kg (500 lit. spray fluid/ha)",
        ],
      },
      {
        name: "Pink stem borer:  Sesamia inferens ",
        symptoms: [
          "Pink larva enters into the stem causing dead heart symptom.",
        ],
        identification: [
          "Egg - Bead like laid in rows within the leaf sheath",
          "Larva - Pinkish brown with dark head",
          "Adult - Straw coloured moth with white wings",
        ],
        management: [""],
      },
      {
        name: "Corn worm/Earworm:  Helicoverpa armigera ",
        symptoms: ["Larva feeds on silk and developing grains. "],
        identification: [
          "Eggs - Spherical in shape and creamy white in colour, laid singly",
          "Larva - Shows colour variation from greenish to brown.",
          "It has dark brown grey lines on the body with lateral white lines",
          "Pupa - Brown in colour, occurs in soil, leaf, pod and crop debris Adult",
          "Light pale brownish yellow stout moth.",
          "Forewings are olive green to pale brown with a dark brown circular spot in the centre. Hind wings are pale smoky white with a broad blackish outer margin.",
        ],
        management: [],
      },
      {
        name: "Web worm:  Cryptoblabes gnidiella ",
        symptoms: [
          "larva first feeds on the lemma of the flowers scraping the chlorphyll",
          "Later on the milky grains.",
          "Webbing of maize cobs and feeding on the flowers and the grains.  ",
        ],
        identification: [],
        management: [],
      },
      {
        name: "Ash weevil:  Myllocerus sp.",
        symptoms: ["Larva feeds on the secondary roots and adults on leaves."],
        identification: [],
        management: [],
      },
      {
        name: "Leafhopper:  Pyrilla perpusilla",
        symptoms: [
          "Leaves become yellow",
          "Covered with black sooty mould ",
          "Top leaves get dried up and lateral buds germinate",
        ],
        identification: [
          "Nymph - Soft, pale brown dorsally and pale orange ventrally ",
          "Adult - Straw coloured, head pointing forward as a snout ",
        ],
        management: [],
      },
      {
        name: "Shoot bug:  Peregrinus maidis",
        symptoms: [
          "Plants become unhealthy stunted and yellow.",
          "The leaves wither from top downwards.",
          "Panicle formation is inhibited and the plants die if attack is severe.",
          "Honeydew secreted by the bug causes growth of sooty mould on leaves.",
          "The midribs of the leaves turn red due to egg-laying and may dry up subsequently.",
        ],
        identification: [],
        management: [],
      },
      {
        name: "Shoot bug:  Peregrinus maidis",
        symptoms: [
          "Plants become unhealthy stunted and yellow.",
          "The leaves wither from top downwards.",
          "Panicle formation is inhibited and the plants die if attack is severe.",
          "Honeydew secreted by the bug causes growth of sooty mould on leaves.",
          "The midribs of the leaves turn red due to egg-laying and may dry up subsequently.",
        ],
        identification: [],
        management: [],
      },
      {
        name: "Ear head bug:  Calocoris angustatus",
        symptoms: [
          "Nymphs and adult suck the juice from within the grains when they are in the milky stage. ",
          "Grains shrink and turn black in colour and ill filled (or) chaffy.",
          "Orange and pale green nymphs and adults are seen on the ear head.",
        ],
        identification: [],
        management: [],
      },
    ],
  },
  {
    id: 4,
    crop_name: "Cumbu",
    pest: [
      {
        name: "Shoot fly:  Atherigona approximate",
        symptoms:
          "Laceration of the tender leaves and suck the plant sap. Yellow or silvery streaks on the leaves of young seedlings. Terminal rolling and drying of leaves from tip to base.",
        identification: "Adults - are dark brown in colour",
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms:
          "Yellowing of leaves from tip to downwards. Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        identification:
          "Adults are green with black spot and black patch on wings.",
        management:
          "Use resistant varieties like IR 50, CR 1009, Co 46. Apply neem cake @ 12.5 kg/20 cent nursery as basal dose. Spray bund vegetation. Set up light traps.",
      },
      {
        name: "Brown plant leafhopper: Nilaparvata lugens",
        symptoms:
          "Nymphs and adults congregate at plant base above water level. Causes 'hopper burn'. Circular patches of drying and lodging. Vector of grassy stunt, ragged stunt, wilted stunt.",
        identification:
          "Adult: Brown body and chestnut brown eyes. Two forms: Macropterous and brachypterous.",
        management:
          "Use tolerant varieties. Avoid close planting. Provide rogue spacing. Avoid excess nitrogen. Drain water before applying insecticides. Use light/yellow traps. Conserve natural enemies.",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms:
          "Egg mass near leaf tip. Caterpillars bore into shoots/tillers causing 'dead heart'. Dried panicle: 'white ear'.",
        identification:
          "Egg: Brown mass with hairs. Larva: Pale yellow. Pupa: White cocoon. Adults: Yellow-brown moths, males smaller and paler.",
        management:
          "Use resistant varieties. Avoid close planting. Remove affected tillers. Use traps. Release Trichogramma. Spray Bt and neem seed extract.",
      },
    ],
  },
  {
    id: 5,
    crop_name: "Finger millet",
    pest: [
      {
        name: "Thrips: Stenchaetothrips biformis",
        symptoms:
          "Laceration of the tender leaves and suck the plant sap. Yellow or silvery streaks on the leaves of young seedlings. Terminal rolling and drying of leaves from tip to base.",
        identification: "Adults - are dark brown in colour",
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms:
          "Yellowing of leaves from tip to downwards. Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        identification:
          "Adults are green with black spot and black patch on wings.",
        management:
          "Use resistant varieties like IR 50, CR 1009, Co 46. Apply neem cake @ 12.5 kg/20 cent nursery as basal dose. Spray bund vegetation. Set up light traps.",
      },
      {
        name: "Brown plant leafhopper: Nilaparvata lugens",
        symptoms:
          "Nymphs and adults congregate at plant base above water level. Causes 'hopper burn'. Circular patches of drying and lodging. Vector of grassy stunt, ragged stunt, wilted stunt.",
        identification:
          "Adult: Brown body and chestnut brown eyes. Two forms: Macropterous and brachypterous.",
        management:
          "Use tolerant varieties. Avoid close planting. Provide rogue spacing. Avoid excess nitrogen. Drain water before applying insecticides. Use light/yellow traps. Conserve natural enemies.",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms:
          "Egg mass near leaf tip. Caterpillars bore into shoots/tillers causing 'dead heart'. Dried panicle: 'white ear'.",
        identification:
          "Egg: Brown mass with hairs. Larva: Pale yellow. Pupa: White cocoon. Adults: Yellow-brown moths, males smaller and paler.",
        management:
          "Use resistant varieties. Avoid close planting. Remove affected tillers. Use traps. Release Trichogramma. Spray Bt and neem seed extract.",
      },
    ],
  },
  {
    id: 6,
    crop_name: "Castor",
    pest: [
      {
        name: "Thrips: Stenchaetothrips biformis",
        symptoms:
          "Laceration of the tender leaves and suck the plant sap. Yellow or silvery streaks on the leaves of young seedlings. Terminal rolling and drying of leaves from tip to base.",
        identification: "Adults - are dark brown in colour",
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms:
          "Yellowing of leaves from tip to downwards. Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        identification:
          "Adults are green with black spot and black patch on wings.",
        management:
          "Use resistant varieties like IR 50, CR 1009, Co 46. Apply neem cake @ 12.5 kg/20 cent nursery as basal dose. Spray bund vegetation. Set up light traps.",
      },
      {
        name: "Brown plant leafhopper: Nilaparvata lugens",
        symptoms:
          "Nymphs and adults congregate at plant base above water level. Causes 'hopper burn'. Circular patches of drying and lodging. Vector of grassy stunt, ragged stunt, wilted stunt.",
        identification:
          "Adult: Brown body and chestnut brown eyes. Two forms: Macropterous and brachypterous.",
        management:
          "Use tolerant varieties. Avoid close planting. Provide rogue spacing. Avoid excess nitrogen. Drain water before applying insecticides. Use light/yellow traps. Conserve natural enemies.",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms:
          "Egg mass near leaf tip. Caterpillars bore into shoots/tillers causing 'dead heart'. Dried panicle: 'white ear'.",
        identification:
          "Egg: Brown mass with hairs. Larva: Pale yellow. Pupa: White cocoon. Adults: Yellow-brown moths, males smaller and paler.",
        management:
          "Use resistant varieties. Avoid close planting. Remove affected tillers. Use traps. Release Trichogramma. Spray Bt and neem seed extract.",
      },
    ],
  },
  {
    id: 7,
    crop_name: "Ground nut",
    pest: [
      {
        name: "Thrips: Stenchaetothrips biformis",
        symptoms:
          "Laceration of the tender leaves and suck the plant sap. Yellow or silvery streaks on the leaves of young seedlings. Terminal rolling and drying of leaves from tip to base.",
        identification: "Adults - are dark brown in colour",
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms:
          "Yellowing of leaves from tip to downwards. Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        identification:
          "Adults are green with black spot and black patch on wings.",
        management:
          "Use resistant varieties like IR 50, CR 1009, Co 46. Apply neem cake @ 12.5 kg/20 cent nursery as basal dose. Spray bund vegetation. Set up light traps.",
      },
      {
        name: "Brown plant leafhopper: Nilaparvata lugens",
        symptoms:
          "Nymphs and adults congregate at plant base above water level. Causes 'hopper burn'. Circular patches of drying and lodging. Vector of grassy stunt, ragged stunt, wilted stunt.",
        identification:
          "Adult: Brown body and chestnut brown eyes. Two forms: Macropterous and brachypterous.",
        management:
          "Use tolerant varieties. Avoid close planting. Provide rogue spacing. Avoid excess nitrogen. Drain water before applying insecticides. Use light/yellow traps. Conserve natural enemies.",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms:
          "Egg mass near leaf tip. Caterpillars bore into shoots/tillers causing 'dead heart'. Dried panicle: 'white ear'.",
        identification:
          "Egg: Brown mass with hairs. Larva: Pale yellow. Pupa: White cocoon. Adults: Yellow-brown moths, males smaller and paler.",
        management:
          "Use resistant varieties. Avoid close planting. Remove affected tillers. Use traps. Release Trichogramma. Spray Bt and neem seed extract.",
      },
    ],
  },
  {
    id: 8,
    crop_name: "Mustard",
    pest: [
      {
        name: "Thrips: Stenchaetothrips biformis",
        symptoms:
          "Laceration of the tender leaves and suck the plant sap. Yellow or silvery streaks on the leaves of young seedlings. Terminal rolling and drying of leaves from tip to base.",
        identification: "Adults - are dark brown in colour",
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms:
          "Yellowing of leaves from tip to downwards. Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        identification:
          "Adults are green with black spot and black patch on wings.",
        management:
          "Use resistant varieties like IR 50, CR 1009, Co 46. Apply neem cake @ 12.5 kg/20 cent nursery as basal dose. Spray bund vegetation. Set up light traps.",
      },
      {
        name: "Brown plant leafhopper: Nilaparvata lugens",
        symptoms:
          "Nymphs and adults congregate at plant base above water level. Causes 'hopper burn'. Circular patches of drying and lodging. Vector of grassy stunt, ragged stunt, wilted stunt.",
        identification:
          "Adult: Brown body and chestnut brown eyes. Two forms: Macropterous and brachypterous.",
        management:
          "Use tolerant varieties. Avoid close planting. Provide rogue spacing. Avoid excess nitrogen. Drain water before applying insecticides. Use light/yellow traps. Conserve natural enemies.",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms:
          "Egg mass near leaf tip. Caterpillars bore into shoots/tillers causing 'dead heart'. Dried panicle: 'white ear'.",
        identification:
          "Egg: Brown mass with hairs. Larva: Pale yellow. Pupa: White cocoon. Adults: Yellow-brown moths, males smaller and paler.",
        management:
          "Use resistant varieties. Avoid close planting. Remove affected tillers. Use traps. Release Trichogramma. Spray Bt and neem seed extract.",
      },
    ],
  },
  {
    id: 9,
    crop_name: "Sesamum",
    pest: [
      {
        name: "Thrips: Stenchaetothrips biformis",
        symptoms:
          "Laceration of the tender leaves and suck the plant sap. Yellow or silvery streaks on the leaves of young seedlings. Terminal rolling and drying of leaves from tip to base.",
        identification: "Adults - are dark brown in colour",
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms:
          "Yellowing of leaves from tip to downwards. Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        identification:
          "Adults are green with black spot and black patch on wings.",
        management:
          "Use resistant varieties like IR 50, CR 1009, Co 46. Apply neem cake @ 12.5 kg/20 cent nursery as basal dose. Spray bund vegetation. Set up light traps.",
      },
      {
        name: "Brown plant leafhopper: Nilaparvata lugens",
        symptoms:
          "Nymphs and adults congregate at plant base above water level. Causes 'hopper burn'. Circular patches of drying and lodging. Vector of grassy stunt, ragged stunt, wilted stunt.",
        identification:
          "Adult: Brown body and chestnut brown eyes. Two forms: Macropterous and brachypterous.",
        management:
          "Use tolerant varieties. Avoid close planting. Provide rogue spacing. Avoid excess nitrogen. Drain water before applying insecticides. Use light/yellow traps. Conserve natural enemies.",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms:
          "Egg mass near leaf tip. Caterpillars bore into shoots/tillers causing 'dead heart'. Dried panicle: 'white ear'.",
        identification:
          "Egg: Brown mass with hairs. Larva: Pale yellow. Pupa: White cocoon. Adults: Yellow-brown moths, males smaller and paler.",
        management:
          "Use resistant varieties. Avoid close planting. Remove affected tillers. Use traps. Release Trichogramma. Spray Bt and neem seed extract.",
      },
    ],
  },
  {
    id: 10,
    crop_name: "Sunflower",
    pest: [
      {
        name: "Thrips: Stenchaetothrips biformis",
        symptoms:
          "Laceration of the tender leaves and suck the plant sap. Yellow or silvery streaks on the leaves of young seedlings. Terminal rolling and drying of leaves from tip to base.",
        identification: "Adults - are dark brown in colour",
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms:
          "Yellowing of leaves from tip to downwards. Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        identification:
          "Adults are green with black spot and black patch on wings.",
        management:
          "Use resistant varieties like IR 50, CR 1009, Co 46. Apply neem cake @ 12.5 kg/20 cent nursery as basal dose. Spray bund vegetation. Set up light traps.",
      },
      {
        name: "Brown plant leafhopper: Nilaparvata lugens",
        symptoms:
          "Nymphs and adults congregate at plant base above water level. Causes 'hopper burn'. Circular patches of drying and lodging. Vector of grassy stunt, ragged stunt, wilted stunt.",
        identification:
          "Adult: Brown body and chestnut brown eyes. Two forms: Macropterous and brachypterous.",
        management:
          "Use tolerant varieties. Avoid close planting. Provide rogue spacing. Avoid excess nitrogen. Drain water before applying insecticides. Use light/yellow traps. Conserve natural enemies.",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms:
          "Egg mass near leaf tip. Caterpillars bore into shoots/tillers causing 'dead heart'. Dried panicle: 'white ear'.",
        identification:
          "Egg: Brown mass with hairs. Larva: Pale yellow. Pupa: White cocoon. Adults: Yellow-brown moths, males smaller and paler.",
        management:
          "Use resistant varieties. Avoid close planting. Remove affected tillers. Use traps. Release Trichogramma. Spray Bt and neem seed extract.",
      },
    ],
  },
  {
    id: 11,
    crop_name: "Safflower",
    pest: [
      {
        name: "Thrips: Stenchaetothrips biformis",
        symptoms:
          "Laceration of the tender leaves and suck the plant sap. Yellow or silvery streaks on the leaves of young seedlings. Terminal rolling and drying of leaves from tip to base.",
        identification: "Adults - are dark brown in colour",
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms:
          "Yellowing of leaves from tip to downwards. Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        identification:
          "Adults are green with black spot and black patch on wings.",
        management:
          "Use resistant varieties like IR 50, CR 1009, Co 46. Apply neem cake @ 12.5 kg/20 cent nursery as basal dose. Spray bund vegetation. Set up light traps.",
      },
      {
        name: "Brown plant leafhopper: Nilaparvata lugens",
        symptoms:
          "Nymphs and adults congregate at plant base above water level. Causes 'hopper burn'. Circular patches of drying and lodging. Vector of grassy stunt, ragged stunt, wilted stunt.",
        identification:
          "Adult: Brown body and chestnut brown eyes. Two forms: Macropterous and brachypterous.",
        management:
          "Use tolerant varieties. Avoid close planting. Provide rogue spacing. Avoid excess nitrogen. Drain water before applying insecticides. Use light/yellow traps. Conserve natural enemies.",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms:
          "Egg mass near leaf tip. Caterpillars bore into shoots/tillers causing 'dead heart'. Dried panicle: 'white ear'.",
        identification:
          "Egg: Brown mass with hairs. Larva: Pale yellow. Pupa: White cocoon. Adults: Yellow-brown moths, males smaller and paler.",
        management:
          "Use resistant varieties. Avoid close planting. Remove affected tillers. Use traps. Release Trichogramma. Spray Bt and neem seed extract.",
      },
    ],
  },
  {
    id: 12,
    crop_name: "Pulses",
    pest: [
      {
        name: "Thrips: Stenchaetothrips biformis",
        symptoms:
          "Laceration of the tender leaves and suck the plant sap. Yellow or silvery streaks on the leaves of young seedlings. Terminal rolling and drying of leaves from tip to base.",
        identification: "Adults - are dark brown in colour",
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms:
          "Yellowing of leaves from tip to downwards. Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        identification:
          "Adults are green with black spot and black patch on wings.",
        management:
          "Use resistant varieties like IR 50, CR 1009, Co 46. Apply neem cake @ 12.5 kg/20 cent nursery as basal dose. Spray bund vegetation. Set up light traps.",
      },
      {
        name: "Brown plant leafhopper: Nilaparvata lugens",
        symptoms:
          "Nymphs and adults congregate at plant base above water level. Causes 'hopper burn'. Circular patches of drying and lodging. Vector of grassy stunt, ragged stunt, wilted stunt.",
        identification:
          "Adult: Brown body and chestnut brown eyes. Two forms: Macropterous and brachypterous.",
        management:
          "Use tolerant varieties. Avoid close planting. Provide rogue spacing. Avoid excess nitrogen. Drain water before applying insecticides. Use light/yellow traps. Conserve natural enemies.",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms:
          "Egg mass near leaf tip. Caterpillars bore into shoots/tillers causing 'dead heart'. Dried panicle: 'white ear'.",
        identification:
          "Egg: Brown mass with hairs. Larva: Pale yellow. Pupa: White cocoon. Adults: Yellow-brown moths, males smaller and paler.",
        management:
          "Use resistant varieties. Avoid close planting. Remove affected tillers. Use traps. Release Trichogramma. Spray Bt and neem seed extract.",
      },
    ],
  },
  {
    id: 13,
    crop_name: "Sugercane",
    pest: [
      {
        name: "Thrips: Stenchaetothrips biformis",
        symptoms:
          "Laceration of the tender leaves and suck the plant sap. Yellow or silvery streaks on the leaves of young seedlings. Terminal rolling and drying of leaves from tip to base.",
        identification: "Adults - are dark brown in colour",
        management:
          "Use resistant varieties, apply neem cake, spray bund vegetation, set up light traps.",
      },
      {
        name: "Green leafhopper: Nephotettix virescens",
        symptoms:
          "Yellowing of leaves from tip to downwards. Vector for diseases like Rice tungro virus, rice yellow & transitory yellowing.",
        identification:
          "Adults are green with black spot and black patch on wings.",
        management:
          "Use resistant varieties like IR 50, CR 1009, Co 46. Apply neem cake @ 12.5 kg/20 cent nursery as basal dose. Spray bund vegetation. Set up light traps.",
      },
      {
        name: "Brown plant leafhopper: Nilaparvata lugens",
        symptoms:
          "Nymphs and adults congregate at plant base above water level. Causes 'hopper burn'. Circular patches of drying and lodging. Vector of grassy stunt, ragged stunt, wilted stunt.",
        identification:
          "Adult: Brown body and chestnut brown eyes. Two forms: Macropterous and brachypterous.",
        management:
          "Use tolerant varieties. Avoid close planting. Provide rogue spacing. Avoid excess nitrogen. Drain water before applying insecticides. Use light/yellow traps. Conserve natural enemies.",
      },
      {
        name: "Paddy stemborer: Scirpophaga incertulas",
        symptoms:
          "Egg mass near leaf tip. Caterpillars bore into shoots/tillers causing 'dead heart'. Dried panicle: 'white ear'.",
        identification:
          "Egg: Brown mass with hairs. Larva: Pale yellow. Pupa: White cocoon. Adults: Yellow-brown moths, males smaller and paler.",
        management:
          "Use resistant varieties. Avoid close planting. Remove affected tillers. Use traps. Release Trichogramma. Spray Bt and neem seed extract.",
      },
    ],
  },
];
