const returnFirstTwoDrivers = function(array) {
    // let newArray = [];
    // for (let i = 0; i < 2; i++) {
    //     newArray.push(array[i])
    // }
    // return newArray
    return array.slice(0, 2)
};

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(fare) {
        return fare * int
    }
};

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(array, func) {
    return func(array)
}