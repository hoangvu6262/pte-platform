const splitText = (text, key, part) => {
  const data = text.split("\n");
  const list = [];

  for (let i = 0; i < data.length; i++) {
    const item = {
      id: i,
      key: key,
      part: part,
      code: data[i].split(" ")[0],
      name: data[i],
    };

    list.push(item);
  }
  return list;
};

const readingAndWritingList = 
`140 DIT
143 Oats
139 Soda v.s. Powder
142 Foodborne Risk
150 Stress Levels
144 Gene Sequencing
146 Pesticides’ Effect
147 Anxious Dog
152 New Program
151 Pima Cotton
149 Less Water
141 Fermentation
137 Advertising
363 Plants and Animals
361 Idea of Beauty
351 Electric Vehicles
358 Naming Storms
345 Gender in Books
350 Competitive Advantage
356 Ryukyu Islands
352 Omicron
344 Telescope
346 Socrates' Defense
349 Decision Science
355 Atomic Nuclei
357 Rationing
359 Role of Cash
360 Social Ties
353 Coral's Genetic Diversity
348 Collective Behavior
354 Robot Fish
342 Solid Waste
341 Cognitive Health`

export const listReadingAndWriting = splitText(readingAndWritingList, "r1", "read_and_writing")

const muiltipleChoiceList = 
`116 Wound Healing
115 Smartphone-based Treatments
117 Ancient DNA
118 Taste Sensitivity
119 Television
111 Forgiveness
112 Hydropower
110 Skin Cancer
113 Amazon Protection
107 Regent Honeyeater
108 Traffic Lights
109 Creativity
114 Persistent Back Pain
106 Bone Protection
53 X-ray
52 History of Sleep
51 Andalucia
50 Decision
49 Avalanche
48 Dennett
47 MCM-R
46 MCM-R
45 MCM-R
44 MCM-R
43 Fuller
42 MCM-R
41 MCM-R
40 MCM-R
39 MCM-R
38 MCM-R
37 MCM-R
36 MCM-R
35 MCM-R
34 MCM-R
33 Prehistoric Paintings
32 Oak Longevity
31 Himalayas
30 MCM-R
29 MCM-R
28 MCM-R`

export const listMultipleChoice = splitText(muiltipleChoiceList, "r2", "multiple_choice");

const reorderList = 
`379 English Agricultural Revolution
378 Big Five
376 First Publication
374 Photogrammetry
372 Hottest Earth
371 Arctic Environment
370 History
365 Joint Venture
368 Dinosaurs
366 Mosquito
367 Quantum Behavior
369 Mutations
361 Research Report
358 Valley Fever
357 Phantom Rivers
360 Pig Kidney Transplantation
356 Muga Dhamb
359 Falkland Islands
354 Simard
355 Matter Particles
351 Biology
350 New Ideas
346 Early Stage Earth
336 Audrey Hepburn
340 Sensitization
342 Stress
335 Focus
337 Steven Witherly
344 Roofing
348 Super-Earths
341 Delay Discounting
343 Diabetes
339 Bogotá
345 Tropical Cyclones
338 Disneyland Boy
347 Sunbirds
331 Plastics
329 E-skin`

export const listReorder = splitText(reorderList, "r3", "reorder")

const fillInBlankList = 
`570 Studying Law
569 World Shakespeare Congress
564 Nature Conservation Amendment Act
559 Endurance
562 Humans Locomotion
557 Common Good
554 Vegetative Propagation
555 Push-pull Factors
553 Lie Detectors
560 Breakfast Option
561 India
556 Tiger Sharks
552 Color Preference
548 DNA and Crime
551 Social Norms
550 Web Security
547 Poisonous Animals
549 Marriage
546 Selfies
545 Walking
543 Atmospheric Rivers
544 Barred Owls
542 CT Scan
541 Frog Cells
540 Shrimp Farms
539 GM Corn
532 Children and Books
536 Art and Life
533 Gender Bias in Africa
529 Plastic Waste
534 Nigerian Libraries
535 Politeness in Communication
537 Subculture
538 Press Freedom
531 Astronomy
530 Data Analysis
521 Inequalities
525 Cargo Ship Munchen
523 Mathematics
526 AI Research Goal`

export const listFillInBlank = splitText(fillInBlankList, "r4", "read_fill_blanks")

const singleChoiceList = 
`162 Social Distancing
160 Walking Stamina
154 Lost Antiquities
157 Flies and Mosquitos
159 Be healthy
153 Hegra
155 Tree of Life
158 Mafia
161 Healthy Lifestyle
156 Dual-Mode Vehicle
145 WiFi
148 Packet
138 Global Warming
140 DIT
143 Oats
139 Soda v.s. Powder
142 Foodborne Risk
150 Stress Levels
144 Gene Sequencing
146 Pesticides’ Effect
147 Anxious Dog
152 New Program
151 Pima Cotton
149 Less Water
141 Fermentation
137 Advertising
136 Mass Transportation
135 Traffic Law
134 Norwegian Oil Industry
133 Healthy Eating
132 Death of Salesman
131 Farewell to Arms
130 Explicatory Essay
129 Television
128 Pomo Basket Maker
127 Melatonin
126 Money
125 New Way against Cancer
118 Writing in College`

export const listSingleChoice = splitText(singleChoiceList, "r5", "single_choice")

export const listReading = [
  ...listReadingAndWriting,
  ...listMultipleChoice,
  ...listReorder,
  ...listFillInBlank,
  ...listSingleChoice
]
