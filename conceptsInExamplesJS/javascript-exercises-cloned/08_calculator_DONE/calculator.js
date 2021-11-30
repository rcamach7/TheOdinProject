const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(nums) {
  // We are given an array of numbers, and we need to add each element inside and spit out a total
  if (nums.length == 0) {
    return 0;
  } else {
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total;
  }
	
};

const multiply = function(nums) {
  // Given an array, multiply each of it's elements together
  if (nums.length == 0) {
    return 0;
  } else {
    let total = 1;
    for (let i = 0; i < nums.length; i++) {
      total = total * nums[i];
    }
    return total;
  }

};

const power = function(num, power) {
  let total = 1;
  for (let i = 0; i < power; i++) {
    total = total * num;
  }
  return total;
};

const factorial = function(num) {
  // the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
  // 4! = 4 * 3 * 2 * 1
  if (num == 0 || num == 1) {
    return 1;
  } else {
    let total = num;
    for (let i = num - 1; i > 0 ;i--) {
      total = total * i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
