function hasDuplicates(arr) {
  let values = {};
  for (let i = 0; i < arr.length; i++) {
    if (values[arr[i]]) {
      return true;
    }
    values[arr[i]] = true;
  }
  return false;
}

const numbers = [3, 5, 2, 8, 10, 6];
console.log(hasDuplicates(numbers)); // Output: false

const numbersWithDuplicates = [3, 5, 2, 8, 10, 6, 5];
console.log(hasDuplicates(numbersWithDuplicates)); // Output: true