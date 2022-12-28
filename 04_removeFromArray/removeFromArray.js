const removeFromArray = function(...args) {
    let array = args[0];
    
    array = array.filter(item => !args.includes(item));

    return array;

};

// Do not edit below this line
module.exports = removeFromArray;
