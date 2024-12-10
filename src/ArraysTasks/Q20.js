// Given an array of numbers, write a function to check if it is 
// sorted in ascending order

function checking(array){

    const sortedArray=[...array].sort((a,b)=>a-b);
    if(JSON.stringify(array) === JSON.stringify(sortedArray)){
        console.log("It is sorted in Ascending order")
    }
    else{
        console.log("Not Sorted in Ascending order");
    }
    return 0;
}
    const arr1=[1,2,3,44,5,6];
    console.log(checking(arr1))
   