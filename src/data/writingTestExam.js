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

const summarizeText =
`314 Archaeological Dig
313 Telepsychiatry
312 PTSD
311 NASA Astronaut Requirement
310 Moon’s Oxygen
309 Neurons of Singing
308 Content Marketing
307 Stars
306 Global Business
305 Heat
304 Travellng Solo
303 Eastern Europe
299 Demise of the Universe
298 Digital Marketing
297 Locust Management
296 Famine
295 Strategic Management
294 Global Leadership
293 Forensic Anthropology
292 Manatees
291 Plantation
290 Mars Geology
289 Hippocampus
288 Near Infra-red
286 Audiovisuals’ Impact
285 Heat Disease
284 Flora and Fauna
283 Scent Marketing
282 Chinese Architecture
281 Rosling‘s Discoveries
276 Atmospheric Rivers
275 Hearing Ability
274 Benefits Of Wetlands
273 Ambulances
272 Angel Investors
271 Muscle’s Benefits
270 Dementia
269 Coordination Changes`

export const listSummarizeText = splitText(summarizeText, "w1", "summarize_written_text");

const writeEssay = 
`293 Traditional Cultures
292 Exercise and Study
291 Tuition
290 Alternative Energy
289 Experimental Animals
288 Bottled Water
286 Food Demand
287 Gap Year
285 Tree-planting Day
284 Causes for Climate Change
283 Rural to Urban
282 Agriculture
281 Performance Drug
280 Economic Globalization
279 Remote Learning
278 Famous Athletes
277 Read and Write
276 Movies
275 Pets
274 Free Health Services
273 Teachers
272 Escaping stress
271 Automobiles
270 Parents
269 Arts or environment
268 External appearances
267 Privatization
266 Improving living standards
265 Living in nursing homes
264 The way to punish prisoners
263 Correct Information
262 Child Abuse
261 Travel for Education
260 Game's Importance
259 Hurry or Slow-paced
258 Serious or Entertaining
257 Important Decision
256 Comfort Zone
255 Communication Type`

export const listWriteEssayText = splitText(writeEssay, "w2", "write_essay");

export const listWriting = [
  ...listSummarizeText,
  ...listWriteEssayText
]

