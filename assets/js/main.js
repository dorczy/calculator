'use strict'

const addition = (a, b) => a + b;
const additionBtn = document.querySelector('.btn--addition');

const subtraction = (a, b) => a - b;
const subtractionBtn = document.querySelector('.btn--subtraction');

const multiplication = (a, b) => a * b;
const multiplicationBtn = document.querySelector('.btn--multiplication');

const division = (a, b) => a / b;
const divisionBtn = document.querySelector('.btn--division');

const point = a => a + '.';

let calculatorArr = [];
let steps = 0;

const displayDiv = document.querySelector('.calculator__display');
const numberDivs = Array.from(document.querySelectorAll('.btn--number'));



//jelgombra rákattintanak, tartalmának kinyerése
const operationSignAdder = (btn) => {
    btn.addEventListener('click', () => {
        let currentValue = displayDiv.textContent;
        displayDiv.textContent = currentValue + btn.textContent;
        calculatorArr.push(btn.textContent);
     return calculatorArr }) 
}
operationSignAdder(additionBtn);
operationSignAdder(subtractionBtn);
operationSignAdder(multiplicationBtn);
operationSignAdder(divisionBtn);


//számgombra rákattintanak, tartalmának kinyerése
const contentExtraction = () => {  
    numberDivs.map(item => {
        item.addEventListener('click', () => {
            let currentValue = displayDiv.textContent;
            displayDiv.textContent = currentValue + item.textContent;
            calculatorArr.push(item.textContent);
        return calculatorArr
        } )
    } ) 
};
contentExtraction();





//C gombbal törlés
const deleteBtn = document.querySelector('.btn--delete');

const deleteDisplayContent = () => {
    deleteBtn.addEventListener('click', () => {
        displayDiv.textContent = '';
        calculatorArr = [];
    })
}
deleteDisplayContent();





//egyenlőségjel
const equalBtn = document.querySelector('.btn--sum');

const result = () => {
    equalBtn.addEventListener('click', () => {
        console.log(calculatorArr);
        for (let i = 0; i < calculatorArr.length; i += 1) {
            if (calculatorArr[i] == calculatorArr[i+1]) {
                calculatorArr[i] = calculatorArr[i].concat(calculatorArr[i+1]);
                calculatorArr[i+1] = '';
            }
        }

        const szammaAlakitas = calculatorArr.map( item => parseFloat(item));
        console.log(szammaAlakitas);
        

       /*  calculatorArr.map(item => {
            parseInt(item);
            if (typeof item === "string") {
                signs.push(item)
            } else {
                numbers.push(item)
            }
        return signs, numbers
        } )  */
    } )
}
result();

//a tömb elemeire: ha a tömb i-edik eleme number, és a tömb i+1-edik eleme number, akkor fűzze össze azt a 2-t
//mivel emiatt a tömb elemeinek száma csökkenni fog, térjen vissza egy új tömmbel













let arr1 = ['1', '1', '+', '5'];
/* arr1.map((item, index) => {
    if(item[index] === item[index + 1]) {
        item[index] = item[index] + item[index + 1]
    } return item[index] }); */

for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] === arr1[i+1]) {
        arr1[i] = arr1[i].concat(arr1[i+1]);
        arr1[i+1] = '';
    }
}