const applesAndOranges = (houseStart, houseEnd, appleTreePos, orangeTreePos, appleArray, orangeArray) => {
    let countApples = 0;
    let countOranges = 0;
    for(let apple of appleArray) {
        let applePos = apple + appleTreePos;
        applePos >= houseStart && applePos <= houseEnd ? countApples++ : null;
    }
    for(let orange of orangeArray) {
        let orangePos = orange + orangeTreePos;
        orangePos >= houseStart && orangePos <= houseEnd ? countOranges++ : null;
    }
    console.log(countApples);
    console.log(countOranges);
}

applesAndOranges(7, 11, 5, 15, [-2,2,1], [5, -6]);