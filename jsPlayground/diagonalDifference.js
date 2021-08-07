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