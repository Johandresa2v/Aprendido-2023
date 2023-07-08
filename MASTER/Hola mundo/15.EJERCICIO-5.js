'use strict'

//muestra todos loa números divisores de un numero introduce en prompt

var numero = parseInt(prompt("Mete un número", 1));

for (var i = 1; i <= numero; i++){
    if(numero%i == 0){
        console.log(i)
    }
}




//Chat gpt
let num = prompt("Introdusca un numero:");
let divisors = [];
 for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    divisors.push(i);
  }
}
 console.log(`El divisor de ${num} son: ${divisors.join(", ")}`);