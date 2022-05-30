let sumar = require("./sumar.js")
let restar = require("./restar.js")
let multiplicar = require("./multiplicar.js")
let dividir = require("./dividir.js")

let a = 2
let b = 7


console.log(`Sumar ${a} + ${b} = ${sumar(a, b)}`);
console.log(`Restar ${a} - ${b} = ${restar(a, b)}`);
console.log(`Multiplicar ${a} * ${b} = ${multiplicar(a, b)}`);
console.log(`Dividir ${a} / ${b} = ${dividir(a, b)}`);