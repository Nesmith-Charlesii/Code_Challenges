// Find the optimal amount of cash back for a give amount of money. For example, 42 dollars would be most optimal if received in four $10 dollar bills and a $2
const minimumChange = (cash) => {
    if(cash < 2) {
        return null;
    } else {
        let count = 0;
        let ten = 0;
        let five = 0;
        let two = 0;
        for(let i = 1; i <= cash; i++) {
            count++
            if(count == 10) {
                cash -= 10
                ten += 1; 
                count = 0;
                i = 0;
                console.log(cash);
            } 
        }
        console.log(`Ten: ${ten}\nFive: ${five}\nTwo: ${two}`);
        // return {
        //     two: 0,
        //     five: 0,
        //     ten: 0
    }
}
    
console.log(minimumChange(42));
