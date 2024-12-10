//Create a function that returns the first n elements of an  array
function getFirstNElements(array, n) {
    return array.slice(0, n);
  }
  
  const numbers = [10, 20, 30, 40, 50, 60, 70];
  const n = 3;
  
  console.log(getFirstNElements(numbers, n))