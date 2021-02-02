// Code your solution in this file!

//Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the first two drivers in the array.

const returnFirstTwoDrivers = function(arr){
    return arr.slice(0, 2)
  
}
    
//clare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.

const returnLastTwoDrivers = function(arr){
    return arr.slice(-2)
  
}

//is is an array containing two elements: the two functions that we previously defined

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers]
  
//his is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly.

const createFareMultiplier = function(multi){
  return function(integer){
    return integer * multi}
}

//Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

//This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.

const selectDifferentDrivers = function (drivers, funcDrivers) {
  return funcDrivers(drivers);
};