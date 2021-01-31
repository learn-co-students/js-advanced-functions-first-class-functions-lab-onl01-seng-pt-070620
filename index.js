// invoke functions stored in a data structure
const returnFirstTwoDrivers = function(drivers) {
    let firstTwoDrivers = drivers.slice(0, 2);
    return firstTwoDrivers
}

// testing code if I understand for statement fully
// function firstTwoDrivers(drivers) {
//     for (let i = 0; i < drivers.length; i++) {
//         return drivers[0]
//     }
// }

// invoke functions stored in a data structure
const returnLastTwoDrivers = function(drivers) {
    let lastTwoDrivers = drivers.slice(-2);
    return lastTwoDrivers
}

// write functions return other functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// pass function to another function // nested functions
function createFareMultiplier(int) {
    function fareQuintupler(fare) {
        return int * fare
        }
    return fareQuintupler
}

// pass function to another function // nested functions
const fareDoubler = createFareMultiplier(2)

// pass function to another function// nested functions
const fareTripler = createFareMultiplier(3)

// call a function returned by another function
function selectDifferentDrivers(drivers, func) {
   return func(drivers)
}