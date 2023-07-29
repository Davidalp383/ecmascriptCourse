function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['oscar', 'juan','felipe', 'jennifer']);
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
// recuerda su estado por eso apesar de ser el mismo codigo pasa al siguientes