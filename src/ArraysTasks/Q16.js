// Write a program to find the sum of the elements at odd 
// indices of an array.
function sumOfOddIndices(array) {
    let sum = 0;
    for (let i = 1; i < array.length; i += 2) {
      sum += array[i];
    }
    return sum;
  }
  
  // Test the function with an array
  const numbers = [10, 20, 30, 40, 50, 60, 70];
  
  console.log("Sum of elements at odd indices:", sumOfOddIndices(numbers)); // 20 + 40 + 60 = 120
  