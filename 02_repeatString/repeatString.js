const repeatString = function(string, num) {
    let hey = '';
    for (let step = 0; step < num; step++) {
        // Runs 5 times, with values of step 0 through 4.
        hey += string;  
    }
    return hey;
};

// Do not edit below this line
module.exports = repeatString;
