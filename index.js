const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(1).slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(num2) {
        return num * num2
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}