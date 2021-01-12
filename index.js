const returnFirstTwoDrivers = (a) => {
    return [a[0], a[1]]
}

const returnLastTwoDrivers = (a) => {
    return [a[a.length - 2], a[a.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (factor) => {
    return fare => factor * fare
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (a, f) => {
    return f(a)
}