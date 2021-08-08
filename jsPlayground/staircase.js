// Staircase - Prints an even number of '#' symbols for base and height
const Staircase = (n) => {
    let hashTag = "#";
    let counter = 1; 
    for(let i = n; i >= 1; i--) {
        console.log(hashTag.repeat(counter).padStart(n));
        counter++;
    }
}

Staircase(4);