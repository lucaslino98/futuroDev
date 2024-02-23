const numeros = [11, 12, 32, 22, 10]
const numerosOrdenados = numeros.slice()
numerosOrdenados.sort((a, b) => a - b);
console.log(numerosOrdenados);


// se no caso fosse decrescente pares.sort((a, b) => a + b);