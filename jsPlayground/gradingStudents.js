"use strict";

// Round up to the next mulitple of 5 if the difference between the multiple and grade is less than 5
const gradingStudents = (grades) => {
    // Hold final grades for return statement
    let finalGrades = [];
    let checkGrade = (grade) => {
        if(grade < 38) {
            finalGrades.push(grade);
        } else {
            for(let i = 40; i <= 100; i+= 5) {
                let multipleOf5 = i;
                if(multipleOf5 > grade) {
                    if((multipleOf5 - grade) < 3) {
                        grade = multipleOf5;
                        finalGrades.push(grade);
                        break;
                    }
                    finalGrades.push(grade);
                    break;
                    // (multipleOf5 - grade) < 3 ? (grade = multipleOf5, finalGrades.push(grade)) : (finalGrades.push(grade)); 
                } else {
                    continue;
                }
            }
        }
    }
    grades.forEach(checkGrade);
    return finalGrades;
}
console.log(gradingStudents([73, 67, 38, 33]));