// This algorithm finds all lucky numbers between a low number and a high number containing either a 6 or an 8, but not both

const luckyNumbers = (l, h) => {
    let count = 0;
    for(let i = l; i <= h; i++) {
        let currentValue = i;
        // Convert integer to a string to split into individual items
        let currentString = currentValue.toString();
        // Split string into individual items/ returns an array
        let splitString = currentString.split("");
        // Check if either a 6 or an 8 are included in the array
        if(splitString.includes("6") && splitString.includes("8")){
            continue;
        } else if(splitString.includes("6") || splitString.includes("8")){
            count++
        } else {
            continue;
        }
    }
    console.log(count);
}

luckyNumbers(223, 238);
