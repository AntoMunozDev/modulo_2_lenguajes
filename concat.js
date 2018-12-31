// concat
const concat = (a, b) => [...a, ...b];

const a = ['rojo', 'azul'];
const b = ['verde', 'amarillo', 'naranja'];

console.log(concat(a, b));


// concat multiple

const concatMultiple = (...arrays) => arrays.reduce((acc, elem) => [...acc, ...elem]);

const c = ['blanco', 'negro'];
console.log(concatMultiple(a, b, c));
