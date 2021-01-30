const returnFirstTwoDrivers = function(d){
return d.slice(0, 2)
}

const returnLastTwoDrivers = function(d){
    return d.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multipliedValue){
    return function(value){
        return multipliedValue * value 
    }
}

function fareDoubler(fares) {
    return fares * 2 
}

function fareTripler(fares) {
    return fares * 3
}

const selectDifferentDrivers = function(drivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(drivers)
    }
