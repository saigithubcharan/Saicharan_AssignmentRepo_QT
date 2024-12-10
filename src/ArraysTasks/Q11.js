//\Write a program to find the difference between the largest and smallest numbers in an array.
function difference(array){
    var largest=Math.max(...array);
    var smallest=Math.min(...array);
    var diff=largest-smallest
    return diff;

}
var arr1=[1,2,3,4,5,6,7,8];

console.log("Difference between them is :",difference(arr1))

