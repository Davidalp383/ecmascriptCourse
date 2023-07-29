// object literals

function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

// enahaced object literals

function User(user, age, country, identification) {
    return {
        user,
        age,
        country,
        id: identification
    }
}

console.log(User('juan', 14, 'MC', 12345));