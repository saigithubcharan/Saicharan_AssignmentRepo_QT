//Write a function to find the length of an array without using the  length property.
function getArrayLength(array) {
    let count = 0;
    for (let i = 0; i in array; i++) {
      count++;
    }
    return count;
  }

  const sampleArray = [10, 20, 30, 40, 50];
  console.log("The length of the array is:", getArrayLength(sampleArray));