// This algorithm takes in a string input of a time in 12hr format and then returns a 24hr time format
"use strict";

let hhPM = {"12":"12", "01":"13", "02":"14", "03":"15", "04":"16", "05":"17", "06":"18", "07":"19", "08":"20", "09":"21", "10":"22", "11":"23"};
let hhAM = {"12":"00", "01":"01", "02":"02", "03":"03", "04":"04", "05":"05", "06":"06", "07":"07", "08":"08", "09":"09", "10":"10", "11":"11"};

const timeConversion = (timeString) => {
    let timeSplit = timeString.split(":");
    let timeOfDay = timeSplit[2].split("");
    if(timeOfDay.includes("P")) {
        for(let [key, value] of Object.entries(hhPM)) {
            if(key == timeSplit[0]) {
                let pmCuttoff = timeSplit.splice(2, 1)
                let seconds = parseInt(pmCuttoff);
                let secondsString = seconds.toString();
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
    } else {
        console.log("Enter a valid HH:MM:SS 12hr time format");
    }
}

console.log(timeConversion("06:40:03PM"));
