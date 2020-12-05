'use strict'

const displayDiv = document.querySelector('.calculator__display');

const calcs = {
    '+': function (a, b) { return a + b },
    '-': function (a, b) { return a - b },
    '/': function (a, b) { return a / b },
    '*': function (a, b) { return a * b }
}
const signs = ['+', '-', '*', '/'];

const numberDivs = Array.from(document.querySelectorAll('.btn--number'));

let steps = 0;
let resultOnScreen = false;

const contentExtraction = () => {
    if (resultOnScreen === false ) {
        numberDivs.map(item => {
            item.addEventListener('click', () => {
                displayDiv.textContent += item.textContent;
                return steps += 1  
            } )
        } )
    }
};
contentExtraction();

const signsDivs = Array.from(document.querySelectorAll('.btn--sign'));

const operationSignAdder = () => {
    signsDivs.map(item => {
        item.addEventListener('click', () => {
            if(steps >= 1) {
                displayDiv.textContent = `${displayDiv.textContent} ${item.dataset.value} `;
            }
        }) 
    })
};
operationSignAdder();


const deleteDisplayContent = () => {
    document
        .querySelector('.btn--delete')
        .addEventListener('click', () => {
            displayDiv.textContent = '';
            myNumbers = [];
            mySigns = [];
            steps = 0;
            return resultOnScreen = false;
        })
};
deleteDisplayContent();

const point = () => {
    document
        .querySelector('.btn--dot')
        .addEventListener('click', () => {
            return displayDiv.textContent = `${displayDiv.textContent}.`
    } )
};
point();

let myNumbers = [];
let mySigns = [];

const resultStrToArray = () => {
    (displayDiv.textContent)
        .split(' ')
        .filter( (item, index) => 
                index % 2 === 0 ? myNumbers.push(item) : mySigns.push(item) )
};

const errorSearch = (arr) => {
    if(arr.some(item => item === "")) {
        displayDiv.textContent = "ERROR";
        return
    }
};

const resultNaN = () => {
    if(displayDiv.textContent === "NaN") {
        displayDiv.textContent = "ERROR"
    }
}

const parsedNumbersArr = (arr) => {
    return arr.map(item => parseFloat(item));
}

const calculation = (arr1, arr2) => {
    let counter = 0;
    let resultValue;
    for( let keys in calcs ) {
        if(calcs.hasOwnProperty(keys)) {
            for (let i = 0; i < arr1.length; i += 1) {
                if(counter == 0) {
                    resultValue = calcs[arr2[0]](arr1[0], arr1[1]);
                    arr1.splice(0, 2);
                    arr2.splice(0, 1);
                    counter += 1;
                }
                if(arr1.length > 0) {
                    resultValue = calcs[arr2[0]](resultValue, arr1[0]);
                    arr1.splice(0, 1);
                    arr2.splice(0, 1);
                }
            }
        }
    }
    return displayDiv.textContent = resultValue;
}

const equalBtn = document.querySelector('.btn--sum');

const result = () => {
    equalBtn.addEventListener('click', () => {
        resultStrToArray();
        errorSearch(myNumbers);
        parsedNumbersArr(myNumbers);
        steps = 0;
        calculation(parsedNumbersArr(myNumbers), mySigns);
        resultNaN();
        myNumbers = [];
        mySigns = [];
        return resultOnScreen = true;
    } )
}
result();