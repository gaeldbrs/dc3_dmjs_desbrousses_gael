function removeDuplicates(arr) {
  let values = {};
  let uniqueValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (!values[arr[i]]) {
      uniqueValues.push(arr[i]);
      values[arr[i]] = true;
    }
  }
  return uniqueValues;
}

const numbers = [3, 5, 2, 8, 10, 6, 5, 2];
console.log(removeDuplicates(numbers)); // Output: [3, 5, 2, 8, 10, 6]