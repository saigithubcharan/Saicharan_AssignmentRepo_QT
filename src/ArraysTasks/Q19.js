// Implement a function that returns the cumulative sum of an 
// array (e.g., [1, 2, 3] → [1, 3, 6]).
function cumulativeSum(array) {
    let sum = 0;
    return array.map(element => {
      sum += element;
      return sum;
    });
  }
  
  // Test the function with an array
  const numbers = [1, 2, 3, 4, 5];
  
  console.log("Cumulative sum of the array:", cumulativeSum(numbers));
  // Output: [1, 3, 6, 10, 15]
  