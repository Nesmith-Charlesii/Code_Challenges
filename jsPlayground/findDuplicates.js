"use strict"; 
function countDuplicates(arrayOfNumbers) {
    let currentValue = null;
    let arrayValue;
    let holdNumber = [];
    let duplicates = [];
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        arrayValue = arrayOfNumbers[i];
        if(holdNumber.length == 0) {
            holdNumber.push(arrayValue);
            currentValue = arrayValue
        } else if(holdNumber.length > 0){
            if(holdNumber.includes(arrayValue)) {
                duplicates.push(arrayValue);
            } else {
                currentValue = arrayValue;
                holdNumber.push(arrayValue);
            }
        }
    }
    console.log(`Duplicates: ${duplicates}`);
    console.log(duplicates.length);
}

countDuplicates([452, 452, 9, 9, 0, 10, 5, 3, 3]);