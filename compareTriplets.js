// Compare triplets
const compareTriplets = (a, b) => {
    let aCount = 0
    let bCount = 0
    let finalScore = []
    // Each for loop of var i runs 3 for loops of var j - Use ONE for loop
    for(let i = 0; i < a.length; i++) {
        if(a[i] == b[i]) {
            continue;
        } else if(a[i] > b[i]) {
            aCount++;
        } else {
            bCount++;
        }
    }
    finalScore.push(aCount, bCount);
    console.log(finalScore);
}

compareTriplets([17, 28, 30], [99, 28, 8]);