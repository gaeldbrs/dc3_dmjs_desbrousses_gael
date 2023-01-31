function findTwoLargestValues(numbers) {
  let largestValue = -Infinity;
  let secondLargestValue = -Infinity;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestValue) {
      secondLargestValue = largestValue;
      largestValue = numbers[i];
    } else if (numbers[i] > secondLargestValue) {
      secondLargestValue = numbers[i];
    }
  }
  return [largestValue, secondLargestValue];
}

const numbers = [3, 5, 2, 8, 10, 6];
console.log(findTwoLargestValues(numbers)); // Output: [10, 8]