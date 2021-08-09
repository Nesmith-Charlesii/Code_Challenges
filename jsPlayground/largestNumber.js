const findLargest = (numbers) => {
    let max = numbers[0];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i] > max) {
            max = numbers[i];
        } else {
            continue;
        }
    }
    console.log(max);
}

findLargest([1, -28, 88, 200, 7]);

