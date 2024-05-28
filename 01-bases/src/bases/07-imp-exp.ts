import heroes, { type Owner, owners } from "../data/heroes";

export const getHeroById = (id: number) => heroes.find(hero => hero.id === id);

// console.log(getHeroById(10));

export const getHeroByOwner = (owner: Owner) => heroes.filter(hero => hero.owner === owner) ?? {};
// console.log(getHeroByOwner('Marvel'));

// console.log( heroes, owners);

