// Code your solution in this file!

function returnFirstTwoDrivers(arr){
  return arr.slice(0, 2)
}

function returnLastTwoDrivers(arr){
  return arr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(i){
  return function(fare){
    return fare * i
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, fn){
  return fn(arr)
}
