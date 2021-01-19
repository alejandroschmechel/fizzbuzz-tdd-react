import React from "react";

function FizzBuzz(){
}

function convert(number){
  if(number < 0) { throw new Error("Negative numbers are not allowed"); };

  return buildFizzBuzz(number);
}

function buildFizzBuzz(number){
  let retString = "";
  
  if(isMultipleOfThree(number)){
    retString += "fizz";
  }

  if(isMultipleOfFive((number))){
    retString += "buzz";
  }

  return retString.length > 0 ? retString : number;
}

function isMultipleOfThree(number){
  return number % 3 === 0;
}

function isMultipleOfFive(number){
  return number % 5 === 0;
}

export default { FizzBuzz, convert };
