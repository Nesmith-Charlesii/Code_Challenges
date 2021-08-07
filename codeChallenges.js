

// Diagonal Difference (matrix algo)
const diagonalDifference = (arr) => {
    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let indexFromLeft = 0;
    let indexFromRight = arr.length - 1
    let absoluteValue;
    for(let i = 0; i < arr.length; i++) {
        leftDiagonal = leftDiagonal + arr[i][indexFromLeft];
        rightDiagonal = rightDiagonal + arr[i][indexFromRight];
        indexFromLeft++;
        indexFromRight--;
    }
    absoluteValue = leftDiagonal - rightDiagonal;
    if(absoluteValue < 0) {
        absoluteValue = absoluteValue * -1; 
    }
    console.log(absoluteValue);
}

let matrixArray = [
    [11,5,4],
    [2,5,2],
    [10,1,-12]
]

diagonalDifference(matrixArray);

// Plus Minus
const plusMinus = (arr) => {
    let positiveCounter = 0;
    let negativeCounter = 0;
    let zeroCounter = 0; 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positiveCounter = positiveCounter + 1;
        } else if(arr[i] < 0) {
            negativeCounter = negativeCounter + 1;
        } else {
            zeroCounter = zeroCounter + 1
        }
    }
    let positiveRatio = positiveCounter/arr.length;
    let negativeRatio = negativeCounter/arr.length;
    let zeroRatio = zeroCounter/arr.length;
    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6))
    console.log(zeroRatio.toFixed(6));
}

plusMinus([-3, 8, 0, -6, 7]);