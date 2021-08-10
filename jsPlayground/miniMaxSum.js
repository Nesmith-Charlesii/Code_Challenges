"use strict";

const miniMaxSum = (arrayOfNumbers) => {
    let minimum = null;
    let maximum = null;
    let arrayTotals = [];
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        let removeItem = arrayOfNumbers.splice([i], 1);
        removeItem.join("");
        let itemToInt = parseInt(removeItem);
        let total = 0;
        for(let j = 0; j < arrayOfNumbers.length; j++) {
            total += arrayOfNumbers[j];
        }
        arrayTotals.push(total);
        arrayOfNumbers.splice([i], 0, itemToInt);
    }
    minimum = Math.min(...arrayTotals); 
    maximum = Math.max(...arrayTotals);
    console.log(minimum, maximum);
};

console.log(miniMaxSum([7, 69, 2, 221, 8974]));

