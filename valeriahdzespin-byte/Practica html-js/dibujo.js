const inputNum1 = document.getElementById("num1");
const inputNum2 = document.getElementById("num2");
const inputOper = document.getElementById("oper");

const outputResult = document.getElementById("result");

const btnCalcular = document.getElementById("btnCalcular");

btnCalcular.addEventListener("click", e => {
    e.preventDefault();

    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);
    let oper = parseInt(inputOper.value);
    let serul = 0;
     
    if (oper === 1)
        resul = num1 + num2;
    else if (oper === 2)
        resul = num1 - num2;
    else if (oper === 3)
        resul = num1 * num2;
    else if (oper === 4)
        resul = num1 / num2;
    outputResult.value = resul;
});