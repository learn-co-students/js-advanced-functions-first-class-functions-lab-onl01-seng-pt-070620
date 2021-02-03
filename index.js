function returnFirstTwoDrivers(array) {
    return array.slice(0, 2)
}

function returnLastTwoDrivers(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
  
function createFareMultiplier(fareMultiplier) {
    return function(value) {
        return value * fareMultiplier
    }
}

function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2

}

function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3
}

function selectDifferentDrivers(arrayOfDrivers, chosenDriver) {
    return chosenDriver(arrayOfDrivers)
}
