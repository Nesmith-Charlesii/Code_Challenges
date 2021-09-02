const adjacentProduct = (inputArray) => {
    let currentInt = null, lastInt = null, lastProduct = null, maxProduct = null, productArray = []; 
    for(let int of inputArray) {
        currentInt = int;
        if(lastInt == null) {
            lastInt = currentInt; 
            continue;
        }
        let product = (currentInt * lastInt);
        productArray.push(product);
        lastInt = currentInt;
    }
    maxProduct = Math.max(...productArray);
    return maxProduct;
}

console.log(adjacentProduct([5, 1, 2, 3, 1, 4]));