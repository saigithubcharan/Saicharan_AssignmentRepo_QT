//Write a function to split an array into chunks of a specific size.
function chunkArray(array, size) {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  
  // Test the function with an array and a chunk size
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const chunkSize = 3;
  
  console.log("Array split into chunks:", chunkArray(numbers, chunkSize));
  // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  