//Create an array of 5 numbers and find their average.
const numbers=[1,2,3,4,5,6];
const sum=numbers.reduce((num,total)=>num+total,0);
const average=sum/numbers.length;
console.log("Average is:",average);