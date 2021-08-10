// jumbled numbers takes in a jumbled string and returns integers corresponding to numerals found within the jumbled string
const jumbleNumber = (str) => {
    let numerals = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let numberText = [];
    let numbersFound = [];
    let usedLetters = [];
    for(let i = 0; i < numerals.length; i++) {
        for(let j = 0; j < numerals[i].length; j++) {
            if(str.includes(numerals[i][j])) {
                // Splits every letter of input 'str' into individual elements within an array
                let splitString = str.split("");
                // Find the index of the included letter within the input 'str'
                let stringIndex = splitString.indexOf(numerals[i][j]);
                // Remove the included letter from the input 'str' so that it is only used once
                let letter = splitString.splice(stringIndex, 1);
                usedLetters.push(letter);
            }
        }
    }
    let joinLetters = usedLetters.join("");
    for(let k = 0; k < numerals.length; k++) {
        if(joinLetters.includes(numerals[k])) {
            numberText.push(numerals[k]);
            switch(numerals[k]) {
                case "zero":
                    numbersFound.push(0)
                    break;
                case "one":
                    numbersFound.push(1)
                    break;
                case "two":
                    numbersFound.push(2)
                    break;
                case "three":
                    numbersFound.push(3)
                    break;
                case "four":
                    numbersFound.push(4)
                    break;
                case "five":
                    numbersFound.push(5)
                    break;
                case "six":
                    numbersFound.push(6)
                    break;
                case "seven":
                    numbersFound.push(7)
                    break;
                case "eight":
                    numbersFound.push(8)
                    break;
                case "nine":
                    numbersFound.push(9)
                    break;
            }
        }
    }
    console.log(`Number Text Found: ${numberText.join(" ")}\nNumber Found: ${numbersFound.join("")}`);
}

jumbleNumber("reuonnoinfe")
