const anotherfunction = () => {
    return new Promise((resolve, reject) => {
        if(false) {
            resolve('good');
        } else {
            reject('bad');
        }
    })
}

anotherfunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));