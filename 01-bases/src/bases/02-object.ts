
export const person = {
    lastName: 'Segura',
    age: 28,
    address: {
        city: 'Cuernavaca',
        zip: 62190,
        lat: 18.092172,
        lng: 18.092172
    }
} // as const;

const person2 = structuredClone(person);

person2.lastName = 'Gómez';
person2.address.city = 'Morelos';

// console.log({person, person2});
