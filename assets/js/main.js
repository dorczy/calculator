'use strict'

//let steps = 0;

//kijelző div:
const displayDiv = document.querySelector('.calculator__display');
//számgombok:
const numberDivs = Array.from(document.querySelectorAll('.btn--number'));
//összeadás gomb:
const additionBtn = document.querySelector('.btn--addition');
//kivonás gomb:
const subtractionBtn = document.querySelector('.btn--subtraction');
//szorzás gomb:
const multiplicationBtn = document.querySelector('.btn--multiplication');
//osztás gomb:
const divisionBtn = document.querySelector('.btn--division');


const calcs = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '/': function (a, b) { return a / b },
    '*': function (a, b) { return a * b }
}

const signs = ['+', '-', '*', '/'];

let calculatorStr = '';

//számgombra rákattintanak, tartalmának kinyerése
const contentExtraction = () => {  
    numberDivs.map(item => {
        item.addEventListener('click', () => {
/*             if(steps < 1) {
                let currentValue = displayDiv.textContent;
                displayDiv.textContent = currentValue + item.textContent;
                calculatorStr.concat(item.dataset.value);
                return steps += 1  
            } */
            let currentValue = displayDiv.textContent;
            displayDiv.textContent = currentValue + item.textContent;
            calculatorStr.concat(item.dataset.value);
            return calculatorStr;
        } )
     } )
};
contentExtraction();


//jelgombra rákattintanak, tartalmának kinyerése
 const operationSignAdder = (btn) => {
    btn.addEventListener('click', () => {
/*         if(steps >= 1) {
            let currentValue = displayDiv.textContent;
            displayDiv.textContent = currentValue + btn.textContent;
            calculatorStr.concat(btn.dataset.value);
            return calculatorStr;
        }  */
        let currentValue = displayDiv.textContent;
        displayDiv.textContent = `${currentValue} ${btn.dataset.value} `;
        calculatorStr.concat(btn.dataset.value);
        return calculatorStr;
    }) 
}

operationSignAdder(additionBtn);
operationSignAdder(subtractionBtn);
operationSignAdder(multiplicationBtn);
operationSignAdder(divisionBtn);


//C gombbal törlés
const deleteBtn = document.querySelector('.btn--delete');

const deleteDisplayContent = () => {
    deleteBtn.addEventListener('click', () => {
        displayDiv.textContent = '';
    })
}
deleteDisplayContent();


//tizedespont
const pointBtn = document.querySelector('.btn--dot');
const point = () => {
    pointBtn.addEventListener('click', () => {
        const currentValue = displayDiv.textContent;
        return displayDiv.textContent = `${currentValue}.`
    } )
};
point();


//egyenlőségjel
const equalBtn = document.querySelector('.btn--sum');

const result = () => {
    equalBtn.addEventListener('click', () => {
        let numbers = [];
        let signs = [];
        let resultStr = (displayDiv.textContent).split(' ');
        console.log(resultStr);
        let parsedArr = resultStr.map(item => parseFloat(item));
        parsedArr.map(item => typeof item !== 'NaN' ? numbers.push(item) : '');
        console.log(numbers);
        console.log(signs);
    } )
}
result();


