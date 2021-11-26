// Is X a leap year?
// Condition One: if it's divisible by 4
// Condition Two: but cannot be divisible by 100 UNLESS divisible by 400
const leapYears = function(year) {
    if (year % 4 == 0) {
        // Check if year is divisible by 100, if can only be a leap year if it's also divisible by 400. If not, return false. 
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            return false;
        }
        // If the above condition is not met, then return true.
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
