// tenemos tres tipos de variables

var lastName = 'david';
lastName = 'oscar';
console.log(lastName);

let fruit = 'apple';
fruit = 'banana';
console.log(fruit);

//no se puede reasignar const
const animal = 'dog';
animal = 'cat'
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'apple';
        // let y const tienen block scope, significa que no es accesible de forma global sino solo en su bloque donde se declaran
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits()
