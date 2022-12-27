const reverseString = function(string) {
    // let splitString = string.split("");
    // let reverseArray = splitString.reverse();
    // let joinArray = reverseArray.join("");
    let joinArray = '';

    for (let i = string.length - 1; i >= 0; i--) {
        joinArray += string[i];
    }

    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
