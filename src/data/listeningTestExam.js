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

const summarizeSpokenText = 
`486 Railway Stones
485 Bear Market
484 Useful Appendix
483 Money Changers
482 Dandelion
481 Refrigerator
479 Flow
480 Quiet Leadership
478 Feeling Unproductive
477 Leader Demonstration
476 Right Job
475 Heat Waves
474 Water
473 Just in Time
472 Sun
471 Collective Illusion
470 How Dogs Eat
469 Voice Change
468 Bike Lane
467 Silence
464 Underestimate & Why
463 Increasing Rents
462 Why Body Float
461 Ignored Inventions
460 Happiness & Antifragility
459 Neoliberalism
457 Oil Price
456 Flexibility
455 Vaccine
454 Child Care
453 Cheaper Rail Tickets
452 Dog Ages
449 Symptoms and Strategies
448 China and Electric Vehicles
447 Information Freedom
446 News and Social Media
444 Biking Boom
443 Great Retirement
442 Golden Gate Bridge
440 Caffeine`

export const listSummarizeSpoken = splitText(summarizeSpokenText, "l1", "summarize_spoken")

const multipleChoice = 
`120 Self-rescue
119 Weight Gain
118 Attraction
117 Language Skills
116 Accent
115 Cashless Experiment
114 Galapagos Islands
113 1. Plastic Pollution
112 Nice Guys
111 Thermostats
110 Plastic
109 Babies Expecting Fairness
108 Facial Expression
107 Recycled Water
106 Hair
105 Domesticated Creatures
104 Dogs
103 Music
102 Time Famine
101 Negotiation
64 Deep Sleep
63 Urbanization Trend
47 Improvisation
46 Hearing Loss
45 Photosynthesis
44 Salmon
43 Avalanche
42 Forest
41 Bear
40 American Metropolis
39 Field Trip
38 Biology
37 Bank
36 Conversation
35 Clinical Psychology
34 Perspective
33 Pigment
32 Freshman
31 Classic Music
30 Space War`

export const listMultipleChoiceLis = splitText(multipleChoice, "l2", "multiple_choice_lis")

const fillBlanks = 
`213 Tax Reform Plan
212 Most-wanted Man
211 Emergency Condition
210 Fuel Tanker Explosion
209 Prison Riot
208 Well-being
206 Vaping Products
205 Edible Insects
204 Energy Price
203 Hormone
202 Minimum Tax
201 Peaceful Power Transition
200 Climate Change
199 Robot Software
198 European Market
197 Lyrics
196 Food Rules
195 Political Violence
194 Women's Occupations
193 Business
192 Man from Future
191 Congressional Bill
190 Climate Agreement
189 Terrorist Attack
188 U.S. Investment
187 Election Commission
186 Jobs Report
185 Gasoline
184 Stabilization Efforts
183 Congested Ports
182 Chiefs of Staff
181 Advisory Panels
180 Van Attack
179 Attacks in Catalonia`

export const listFillBlanks = splitText(fillBlanks, "l3", "highlight_correct")

const highlightCorrect = 
`100 Romance
99 Communication between Couples
98 Friendship
97 Mountains
95 Saving Money
94 Overwork In Japan
93 Alzheimer’s Disease
92 Malaria
91 Expectation
90 Palliative Care
89 20 Hours
88 Nonviolent Communication
87 HCS
86 Less Expectation of Love
85 Reversible Diseases
84 Health Insurance
83 Welfare Programs
81 What Democracy Breeds
80 Mental Health
79 Procrastination
61 Ugly Building
60 Pancake Ice
39 Hurricane
38 Chemistry
37 Winter
36 Harder Objects
35 Green Light
34 Advertising
33 Laws
32 The Mayans
31 Hieroglyphics
30 Washington
29 Read
28 Pathogens
27 Mosquitoes
26 Extinct Animals
25 Anti-brain
24 Cook
23 Petersburg
22 Social Media`

export const listHighlightCorrect = splitText(highlightCorrect, "l4", "highlight_correct")

const singleChoice = 
`128 Insects and Streetlights
127 Autism Diagnoses
126 Gender Gap
125 Jobs
124 Glasses
123 Parties
122 Washington
121 Isolation
120 Carbon Emission
119 Birding
118 Financial Intimacy
117 Feedback
116 Fiction
115 Animal Laughing
114 Baby skills
113 Soybean Products
112 Cyber-bullying
111 Blood
110 Special Taxi
109 Online Education
108 Friendship & Money
107 Omicron
106 Meditation
105 Help
104 Labor Shortage
103 Aging Society
103 Aging Society
102 Plant-based Milk Products
101 James Webb Telescope
100 Migraine
99 Second Sun
98 American Obesity
97 Big Five
96 Special Birthday
76 Media
54 Conversation between Student and Teacher
53 Spy
52 Mitosis
51 Political Science
50 Moon
49 Martin Luther King`

export const listSingleChoiceLis = splitText(singleChoice, "l5", "single_choice_lis")

const selectMissing = 
`119 Forgiving
118 Calm and Pressure
117 Personality Tests
116 Filtering Tools
115 Marshmallow Test
114 Art Never Die
113 Great Conversation
112 Over Control
111 SMW
110 Lying to Ourselves
109 Wine's Price and Quality
108 Mistaking Repression
107 Bullet Journaling
106 Grow Your Empathy
105 Splitting
104 Triggers
103 Cognitive Therapy
102 Attention Economy
101 Wikipedia
100 Decision Fatigue
99 Chronic Loneliness
98 Introverts and Extroverts
97 Spending on Experiences
96 Communication Tip
95 What You Want
94 Meeting Impression
93 Personality
92 Learn and Sleep
91 Sleep Cycle
90 Goal-setting
72 Flowers
73 Depression
56 Food Preference
55 SMW
54 SMW
53 SMW
52 SMW
51 Migration
50 SMW
49 SMW`

export const listSelectMissing = splitText(selectMissing, "l6", "select_missing")

const highlightIncorrect = 
`73 Poverty Ending
72 Loan Guarantee
71 Probability
70 Diabetes
16 Article
322 HIW
321 HIW
320 HIW
319 HIW
318 HIW
317 Classified Advertisements
316 HIW
315 HIW
314 HIW
313 HIW
312 HIW
311 HIW
310 Female Ticks
309 HIW
308 HIW
307 HIW
306 Teeth
305 HIW
304 Polar Vortex
303 HIW
301 HIW
300 Pharmaceutical Companies
299 Iron
298 Jalapeno
297 HIW
296 HIW
295 HIW
294 Flock Warning
293 Native American Site
292 Elephants
291 HIW
290 HIW
289 HIW
288 HIW
286 HIW
`

export const listHighlightIncorrect = splitText(highlightIncorrect, "l7", "highlight_incorrect")

const writeFromDictation =
`1950 WFD
1949 WFD
1947 WFD
1946 WFD
1945 WFD
1944 WFD
1943 WFD
1942 WFD
1941 WFD
1940 WFD
1939 WFD
1938 WFD
1937 WFD
1936 WFD
1935 WFD
1934 WFD
1933 WFD
1928 WFD
1930 WFD
1932 WFD
1929 WFD
1931 WFD
1923 WFD
1924 WFD
1925 WFD
1927 WFD
1926 WFD
1921 WFD
1919 WFD
1922 WFD
1920 WFD
1917 WFD
1918 WFD
1915 WFD
1916 WFD
1910 WFD
1914 WFD
1911 WFD
1913 WFD
1912 WFD`

export const listWriteFromDictation = splitText(writeFromDictation, "l8", "write_from_dictation")

export const listListening = [
  ...listSummarizeSpoken,
  ...listMultipleChoiceLis,
  ...listFillBlanks,
  ...listHighlightCorrect,
  ...listSingleChoiceLis,
  ...listSelectMissing,
  ...listHighlightIncorrect,
  ...listWriteFromDictation
]