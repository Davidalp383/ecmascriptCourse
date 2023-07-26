// normal
function newUser(name, age, country) {
  var name = name || 'oscar';
  var age = age   || 14;
  var country = country || 'MX';   
  console.log(name, age, country);
}

// defaultTemapltes
function User (name = 'oscar', age = 15, country = 'MX') {
    console.log(name, age, country);
}
User();

// with arrow funcion
const User  = (name = 'oscar', age = 15, country = 'MX') =>     console.log(name, age, country);
User()