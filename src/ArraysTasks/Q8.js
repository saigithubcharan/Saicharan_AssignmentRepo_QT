//Write a program to add a new element to the end of an array  without using push().

const arr1=[1,2,3,4]
const arr2=[...arr1,5]
console.log("New Element added at the last position:",arr2)

const arr3=[3,...arr1]
console.log(arr3);