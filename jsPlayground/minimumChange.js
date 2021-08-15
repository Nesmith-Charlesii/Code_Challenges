// Find the optimal amount of cash back for a give amount of money. For example, 42 dollars would be most optimal if received in four $10 dollar bills and a $2
let change = {
    10: 0,
    5: 0,
    1: 0
}
const minimumChange = (cash) => {
    if(cash == 0) {
        console.log(change);
    } else {
        // Be careful the order of operations! Add change first and THEN call function
        cash > 10 ? (change[10]++, minimumChange(cash - 10)) :
        cash > 5 ? (change[5]++, minimumChange(cash - 5)) :
        (change[1]++, minimumChange(cash - 1));
    }
}
minimumChange(42); 
