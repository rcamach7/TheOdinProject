const findTheOldest = function(persons) {
    // Ordered from oldest (first) to youngest (last)
    const ordered = persons.sort(function(a, b) {
        // Check to see if they are still alive, if so, calculates age had they died today.
        if (a.yearOfDeath == null) {
            let curAge = 2021 - a.yearOfBirth;
            let bAge = b.yearOfDeath - b.yearOfBirth;
            if (curAge < bAge) {
                return 1;
            } else {
                return -1;
            }
        } else if (b.yearOfDeath == null) {
            let curAge = 2021 - b.yearOfBirth;
            let aAge = a.yearOfDeath - a.yearOfBirth;
            if (curAge > aAge) {
                return 1;
            } else {
                return -1;
            }
        }
        // This will get triggered if both persons are alive.
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        if (aAge < bAge) {
            return 1;
        } else {
            return -1;
        }
    });
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
