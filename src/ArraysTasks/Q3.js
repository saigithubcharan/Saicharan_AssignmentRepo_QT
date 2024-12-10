//Write a program to check if an array is empty or not.
function isArrayEmpty(array){
    return array.length===0;
}
const arr1=[];
const arr2=[1,,2,3,4,5];
console.log("is Array Empty:",isArrayEmpty(arr1));
console.log("is Array Empty:",isArrayEmpty(arr2));
