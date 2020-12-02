'use strict'

let steps = 0;

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

//const signs = ['+', '-', '*', '/'];


//számgombra rákattintanak, tartalmának kinyerése
const contentExtraction = () => {  
    numberDivs.map(item => {
        item.addEventListener('click', () => {
            let currentValue = displayDiv.textContent;
            displayDiv.textContent = currentValue + item.textContent;
            return steps += 1  

        } )
     } )
};
contentExtraction();


//jelgombra rákattintanak, tartalmának kinyerése
 const operationSignAdder = (btn) => {
    btn.addEventListener('click', () => {
        if(steps >= 1) {
            let currentValue = displayDiv.textContent;
            displayDiv.textContent = `${currentValue} ${btn.dataset.value} `;
        }
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

        //kiolvasom, szétválogatom:
        let resultStrToArray = (displayDiv.textContent).split(' ');
        console.log(resultStrToArray);
        
        //szétszedem számokra és jelekre:
        resultStrToArray.filter( (item, index) => 
            index % 2 === 0 ? numbers.push(item) : signs.push(item) );
        console.log(numbers);
        console.log(signs);
        
        //ERROR: ha a számok tömbben van üres string, akkor írja ki, hogy ERROR:
        if(numbers.some(item => item === "")) {
            displayDiv.textContent = "ERROR";
        }
        
        //számokat átalakítom számmá:
        let parsedArr = numbers.map(item => parseFloat(item));
        console.log(parsedArr);

        steps = 0;
    } )
}
result();
