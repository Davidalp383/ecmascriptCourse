const button = document.getElementById('btn');

button.addEvenListener('click', async function () {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});