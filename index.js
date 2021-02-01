const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareNumber){
   return function(fare){
        return fare * fareNumber;
   }
};

 const fareDoubler = createFareMultiplier(2);
 const fareTripler = createFareMultiplier(3);


 function selectDifferentDrivers(drivers, selectedDrivers){
    return selectedDrivers(drivers);
 }
//  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));
