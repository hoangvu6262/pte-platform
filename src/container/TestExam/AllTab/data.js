const text = `#782 Information Office
#781 Distance Learning
#780 Eagles
#779 Sociological Thought
#778 Graduate Admission School
#777 Central Aim
#776 Regular Exercise
#775 Medical Digitalization
#774 Walking Tour
#773 Infant Brain
#772 Primitive Men
#771 Venture Capitals
#770 Smart Cities
#769 Belt and Road Initiative
#768 Two-pronged Policy
#765 Hong Kong Development
#767 Consultants
#766 Standardization
#764 Satellite Imagery`;

export const data = text.split("\n");

const listReadAloud = [];

for (let i = 0; i < data.length; i++) {
  const item = {
    id: data[i].split(" ")[0],
    name: data[i],
  };

  listReadAloud.unshift(item);
}

export default listReadAloud;
