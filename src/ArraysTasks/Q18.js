//Write a program to find the product of all elements in an array.

const arr1=[1,2,3,4,5,6];
const result =arr1.reduce((total,num)=>total*num,1)
console.log(result);