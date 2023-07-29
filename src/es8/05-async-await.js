// constrolar el flujo de la informacion

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('AsynC!!'), 2000)
            : reject(new Error('error!'));
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('hello');
}

console.log('before');
anotherFn();
console.log('after')