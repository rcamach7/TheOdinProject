// Write a program that takes a user’s input and prints the numbers from
//  one to the number the user entered. However, for multiples of three print Fizz 
//  instead of the number and for the multiples of five print Buzz. For numbers which 
//  are multiples of both three and five print FizzBuzz.
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  let userInput;
readline.question("Give me a number: ", name => {
    userInput = parseInt(name);
    readline.close();

    for (let i =1; i <= userInput; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0 ) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
});







