const returnFirstTwoDrivers = function(driverArray) {
    return driverArray.slice(0, 2);
}

const returnLastTwoDrivers = function(driverArray) {
    return driverArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function (fare){
        return fare * int
    }
} 

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayofDrivers, f) {
    return f(arrayofDrivers);
}