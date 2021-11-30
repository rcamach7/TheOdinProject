const palindromes = function (word) {
    // First remove any characters that arent letters inluding whitespace AND lowercases it for accuracy
    word = word.replaceAll(/[^a-zA-Z]/g, "").toLowerCase();

    // Reverse Order Of String
    let reversed = "";
    for (let i = word.length - 1; i > -1 ; i--) {
        reversed = reversed + word.charAt(i);
    }
    // Send back result
    if (reversed === word) {
        return true;
    } else {
        return false;
    }

};

palindromes("I !!am a taco.");

// Do not edit below this line
module.exports = palindromes;
