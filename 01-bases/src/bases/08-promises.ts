
// console.log('Inicio');

import { type Heroe } from "../data/heroes";
import { getHeroById } from "./07-imp-exp";

// new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // resolve('Mi amigo cumplió');
//         reject('Mi amigo no cumplió')
//     }, 1000)
    
// }).then(console.log)
// .catch(console.error)

// console.log('Final');

const getHeroeByIdAsync = (id: number):Promise<Heroe> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero1 = getHeroById(id)
            
            hero1 ? 
            resolve(hero1) : 
            reject('No se encontró el héroe')

        }, 2000);
    })
}

getHeroeByIdAsync(2)
    .then(hero => console.log(hero.name))
    .catch(console.error)