// validar que la informacion se encuentre y no romper el flujo de acciones
const users = {
    gndx: {
        country: 'MX'
    },
    ana: {
        country: 'CO'
    }
}
console.log(users.gndx.country);
console.log(users?.bebeloper?.country);