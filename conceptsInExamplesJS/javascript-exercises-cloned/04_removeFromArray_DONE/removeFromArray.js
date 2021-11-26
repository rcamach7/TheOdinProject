const removeFromArray = function(myArray) {
    for (let i = 1; i  < arguments.length; i++) {
        let indexOfCurArgument = myArray.indexOf(arguments[i]);
        // This will be triggered if index of current element is actually found
        if (indexOfCurArgument != -1) { 
            // Delete this element form given array
            myArray.splice(indexOfCurArgument, 1);
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
