const luckyNumbers = (l, h) => {
    let count = 0;
    for(let i = l; i <= h; i++) {
        let currentValue = i;
        let currentString = currentValue.toString();
        let splitString = currentString.split("");
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
