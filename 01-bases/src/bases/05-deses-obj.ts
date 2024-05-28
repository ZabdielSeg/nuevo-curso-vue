interface Heroe {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

export const person: Heroe = {
    name: 'Zabdiel',
    age: 28,
    codeName: 'Zab'
};

// const { name, age, codeName, power = 'No tiene poder' } = person;

// console.log({ name, age, codeName, power });

const createHeroe = ({name, age, codeName, power}: Heroe) => ({
    id: 123412,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})

// console.log(createHeroe(person))
