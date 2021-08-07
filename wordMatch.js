//Find matching words within an array of strings

let strArray = ["ball, tall, call, fall", "ball, mall, call, fall"]
const insideMatch = (strArray) => {
    let stringGroup1 = strArray[0].split(",");
    let stringGroup2 = strArray[1];
    console.log(stringGroup1);
    console.log(stringGroup2);
    for(let i = 0; i < stringGroup1.length; i++) {
        let word = stringGroup1[i]
        if(stringGroup2.includes(word)) {
            console.log(`Match : ${word}`);
        } else {
            console.log("no word match");
        }
    }
}
insideMatch(strArray)