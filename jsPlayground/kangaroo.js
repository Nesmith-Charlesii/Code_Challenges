"use strict";

const kangaroo = (x1, v1, x2, v2) => {
    let x1Pos = x1
    let x2Pos = x2;
    let jumpCount = 0;
    for(let i = 1; i <= Infinity; i++) {
        if(v2 > v1 && x2 > x1) {
            return "NO";
        }
        jumpCount = i;
        x1Pos += v1;
        x2Pos += v2; 
        if(x1Pos === x2Pos) {
            return `Yes @ ${jumpCount > 1 ? jumpCount += " jumps" : jumpCount += " jump"}`;
        } 
    }
}

console.log(kangaroo(0, 3, 4, 2));