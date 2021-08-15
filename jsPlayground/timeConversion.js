// This algorithm takes in a string input of a time in 12hr format and then returns a 24hr time format
"use strict";

let hhPM = {"12":"12", "01":"13", "02":"14", "03":"15", "04":"16", "05":"17", "06":"18", "07":"19", "08":"20", "09":"21", "10":"22", "11":"23"};
let hhAM = {"12":"00", "01":"01", "02":"02", "03":"03", "04":"04", "05":"05", "06":"06", "07":"07", "08":"08", "09":"09", "10":"10", "11":"11"};

const timeConversion = (timeString) => {
    // Split the given time at the " : " symbol so as to break the time up into 3 elements (hh, mm, ss) within an array
    let timeSplit = timeString.split(":");
    // Split the "ss" into individual elements returned as an array to access either PM or AM
    let timeOfDay = timeSplit[2].split("");
    // Check if timeOfDay includes "P", as PM has the letter "P"
    if(timeOfDay.includes("P")) {
        // Iterate over key:value pairs of given object
        for(let [key, value] of Object.entries(hhPM)) {
            // Check if any of the keys in the dictionary match the hh of given time
            if(key == timeSplit[0]) {
                // Remove the "ss" from the given time 
                let pmCuttoff = timeSplit.splice(2, 1)
                // Parse, or "search" for a number value. Returns number value without 0 if number is under 10. "03" will now be just 3
                let seconds = parseInt(pmCuttoff);
                // Convert seconds back into a string - outputs "3" --> Remember, no zero
                let secondsString = seconds.toString();
                // Add the removed "ss" back into the timeSplit at the [2] index with pmCuttoff;
                timeSplit.splice(2, 0, pmCuttoff);
                return `12hr - ${timeSplit.join(":")}\nConvert\n24hr - ${value}:${timeSplit[1]}:${seconds < 10 ? "0" + secondsString : secondsString}`;
            }
        }
    } else if(timeOfDay.includes("A")) {
        for(let [key, value] of Object.entries(hhAM)) {
            if(key == timeSplit[0]) {
                let amCuttoff = timeSplit.splice(2, 1)
                let seconds = parseInt(amCuttoff);
                let secondsString = seconds.toString();
                timeSplit.splice(2, 0, amCuttoff);
                return `12hr - ${timeSplit.join(":")}\nConvert\n24hr - ${value}:${timeSplit[1]}:${seconds < 10 ? "0" + secondsString : secondsString}`;
            }
        }
    }
    return "Please enter a valid time format: (hh:mm:ssAM) or (hh:mm:ssPM";
}

console.log(timeConversion("06:40:03AM"));
