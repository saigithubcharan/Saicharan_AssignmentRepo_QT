// Create a function to insert an element at a specific index in 
// an array.
function insertElementAt(array, element, index) {
    array.splice(index, 0, element);
    return array;
  }
  
  // Test the function with an array, an element, and an index
  const numbers = [10, 20, 30, 40, 50];
  const elementToInsert = 25;
  const indexToInsert = 2;
  
  console.log("Array after insertion:", insertElementAt(numbers, elementToInsert, indexToInsert));
  // Output: [10, 20, 25, 30, 40, 50]
  