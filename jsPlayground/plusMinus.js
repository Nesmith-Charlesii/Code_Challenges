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