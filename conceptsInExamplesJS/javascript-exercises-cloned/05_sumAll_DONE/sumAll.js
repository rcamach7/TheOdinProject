const sumAll = function(intOne, intTwo) {
    // Makes sure we set correct order and check for bad inputs 
    if (Array.isArray(intOne) || Array.isArray(intTwo)) {
        return "ERROR";
    }
    if (!Number.isInteger(intOne) || !Number.isInteger(intTwo)) {
        return "ERROR"
    }
    if ( intOne < 0 || intTwo < 0) {
        return "ERROR";
    }
    if (intOne > intTwo) {
        let holdMe = intOne;
        intOne = intTwo;
        intTwo = holdMe;
    }
    // Starts the sum as the first numner
    let sumAll = intOne;
    for (let i = intOne + 1; i <= intTwo; i++) {
        sumAll += i;
    }
    return sumAll;
};


// Do not edit below this line
module.exports = sumAll;
