// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnLastTwoDrivers = function (drivers){
return (drivers.slice(drivers.length-2,drivers.length))
}
const returnFirstTwoDrivers = function (drivers){
    let a =drivers.slice(0,2)
    return a
}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    // The returned function takes a fare as an argument and multiplies it by the specified multiplier
    return function (fare) {
      return fare * multiplier;
    };
  }

  const fareDoubler = createFareMultiplier(2);

// Example usage of fareDoubler
const originalFare = 10;
const doubledFare = fareDoubler(originalFare);

const fareTripler = createFareMultiplier(3);

// Example usage of fareDoubler
const originalFare2 = 10;
const doubledFare3 = fareDoubler(originalFare2);

function selectDifferentDrivers(drivers,n){
    if (n==returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers)
    }else{
        return returnLastTwoDrivers(drivers)
    }
}