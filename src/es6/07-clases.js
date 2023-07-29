// declaramos una clase
class user {};

// creamos una instancia de una clase
class user {
    // metodos
    greeting() {
        return 'hello';
    }
};

// dos instancias distintas de la misma clase
const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user()
console.log(`david te mando un ` + bebeloper.greeting());

// constructor
class user {
    constructor() {
        console.log('nuevo usuario');
    }
    greeting() {
        return 'hello';
    }
}

const david = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return 'hello';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const name = new user('ana');
console.log(name.greeting());

class user {
    // constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // metodos
    speak() {
        return 'hello';
    }
    greeting() {
        return `${this.speak()} ${
        this.name} your age is ${this.age}`
    }
}

const juan = new user('juan', 14);
console.log(juan.greeting());