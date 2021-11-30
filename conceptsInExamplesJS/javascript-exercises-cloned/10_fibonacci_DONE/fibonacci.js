const fibonacci = function(upTo) {
    // Input Check
    if (upTo < 0) {
        return "OOPS";
    }
    upTo = parseInt(upTo);

    // First set the initial fibonacci array
    let fibo = [1, 1];
    for (let howMany = 0; howMany < upTo - 2; howMany++) {
        nextNum = 0;
        for (let i = fibo.length - 2; i < fibo.length; i++) {
            nextNum += fibo[i];
        }
        fibo.push(nextNum);
    }
    return fibo[fibo.length - 1];
};
// fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
