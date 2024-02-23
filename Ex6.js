
const numeros = [11, 12, 32, 22, 10]

let pares = numeros.filter(n => {
    return n % 2 == 0;
})

console.log(pares)