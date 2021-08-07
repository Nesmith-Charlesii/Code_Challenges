// Sum of array elements
const aVeryBigSum = (ar) => {
    let arraySum = 0;
    for(let i = 0; i < ar.length; i++) {
        arraySum = arraySum + ar[i];
    }
    console.log(arraySum);
}

aVeryBigSum([2,4,6,8])