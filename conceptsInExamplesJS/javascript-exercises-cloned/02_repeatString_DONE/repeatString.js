const repeatString = function(word, times) {
    let answer = "";
    if(times < 0) {
        return "ERROR";
    }
    for (let i = 0; i < times; i++) {
        answer += word;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
