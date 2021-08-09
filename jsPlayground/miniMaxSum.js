// mini-max sum
const miniMaxSum = (arr) => {
    let minimum = 0;
    let maximum = 0;
    for(let i = 0; i < arr.length - 1; i++) {
        minimum += arr[i];
        arr.shift();
        console.log(arr);
        // maximum += arr[i + 1];
    }
    // console.log(minimum);
}

let testArray = [7, 69, 2, 221, 8974];

miniMaxSum(testArray);