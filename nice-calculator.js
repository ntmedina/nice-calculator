var a = Number(process.argv[2]);
var operator = process.argv[3];
var b = Number(process.argv[4]);
var resultado;

if (operator === '+') {
  resultado = a+b;
} else if (operator === '-') {
  resultado = a-b;
} else if (operator === '/') {
  resultado = a/b;
} else if (operator === '*') {
  resultado = a*b;
}


console.log(resultado); 