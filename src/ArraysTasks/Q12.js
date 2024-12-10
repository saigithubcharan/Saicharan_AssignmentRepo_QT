// Create a function to count how many times a specific 
// number appears in an array.
function countOccurrences(array, value) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === value) {
        count++;
      }
    }
    return count;
  }
  
  const numbers = [10, 20, 10, 5, 10, 30, 20, 10];
  const valueToCount = 10;
  
  console.log(`The number ${valueToCount} appears ${countOccurrences(numbers, valueToCount)} times in the array.`); // 4
  