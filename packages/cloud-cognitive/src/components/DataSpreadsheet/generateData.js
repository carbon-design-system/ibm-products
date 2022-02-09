// cspell:disable
const pets = [
  'dog',
  'cat',
  'bird',
  'lizard',
  'frog',
  'hamster',
  'fish',
  'rabbit',
  'snake',
];
const petNames = [
  'Bruno',
  'Willow',
  'Kona',
  'Heidi',
  'Rusty',
  'Bonnie',
  'Cash',
  'Gucci',
  'Brody',
  'Emma',
  'Loki',
  'Angel',
  'Astro',
  'Sherman',
  'Layla',
  'Peanut',
  'Grace',
  'Mickey',
  'Sasha',
  'Finn',
  'Tucker',
  'Bear',
  'Mocha',
  'Roscoe',
];
// cspell:enable

const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPet = () => {
  return {
    petType: pets[Math.floor(Math.random() * pets.length)],
    firstName: petNames[Math.floor(Math.random() * petNames.length)],
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 40),
    health: Math.floor(Math.random() * 100),
  };
};

export const generateData = (...lens) => {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map(() => {
      return {
        ...newPet(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      };
    });
  };

  return makeDataLevel();
};
