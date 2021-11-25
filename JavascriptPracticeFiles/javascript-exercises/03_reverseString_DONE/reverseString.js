const reverseString = function(str) {
    let answerBuilder = "";
    for (let i = str.length - 1; i > -1; i--) {
        answerBuilder += str[i];
    }
    return answerBuilder;
};


// Do not edit below this line
module.exports = reverseString;
