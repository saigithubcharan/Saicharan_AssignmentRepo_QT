//Removing duplicates
function removeDuplicates(array) {
    return [...new Set(array)];
  }
  
  // Test the function with an array containing duplicates
  const numbers = [10, 20, 30, 10, 40, 20, 50];
  
  console.log("Array after removing duplicates:", removeDuplicates(numbers)); // [10, 20, 30, 40, 50]
  