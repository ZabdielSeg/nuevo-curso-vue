// function greetPerson(name: string){
//     return `Hola, ${name}`;
// }

const greetPerson = (name: string) => `Hola, ${name}`;

export const getUser = (uid: string) => ({
  uid,
  username: "Zabdiel",
});

const heroes = [{ id: 1, name: 'Batman',}, { id: 2, name: 'Superman', power: 'Super fuerza',},];

const heroe = heroes.find(h => h.id === 1)

// console.log(heroe?.power?.toLocaleUpperCase());
