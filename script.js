let number1 = document.querySelector('#number1')
let opera = document.querySelector('#opera')
let number2 = document.querySelector('#number2')
let res = document.querySelector('#res')


let num1 = parseFloat(prompt("Birinchi sonni kiriting:"));
let operator = prompt("Amalni tanlang \n+ \n -\n *\n /");
let num2 = parseFloat(prompt("Ikkinchi sonni kiriting:"));

let result;

switch (operator) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 !== 0) {
      result = num1 / num2;
    } else {
      result = "0 ga bo‘lish mumkin emas!";
    }
    break;
  default:
    result = "Noto‘g‘ri amal tanlandi!";
}


number1.innerHTML = num1
opera.innerHTML = operator
number2.innerHTML = num2


function fk() { 
    res.innerHTML = `Natija: ${result}`
}

