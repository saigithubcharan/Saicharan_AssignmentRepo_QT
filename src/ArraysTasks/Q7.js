//Implement a program to check whether a specific value exists in  an array.
function isexists(array,value){
 return array.includes(value);
    
}
 var arr1=[10,20,30,40]
var Element=1000;
if(isexists(arr1,Element)){
    console.log("the value "+Element+" Exists");
}
else{
    console.log("the value "+Element+" Does not Exists");
    
}