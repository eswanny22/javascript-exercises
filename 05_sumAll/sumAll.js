const sumAll = function(...args) {

    // convert args into array and take the highest number to use in a for loop
    let sortedArgs = args.sort(function(a, b){return a - b});
    let sumAll = 0;
    let first = sortedArgs[0];
    let last = sortedArgs.at(-1);
    var res = args.every(function(element) {return typeof element === 'number';});
    console.log(res);

    if (first < 0 || !res) {
        sumAll = "ERROR";
    } else {
        while (first <= last) {
            sumAll += first;
            first++;
        }
    }

    return sumAll;

};

// Do not edit below this line
module.exports = sumAll;
