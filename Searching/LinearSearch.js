// Driver Code

function LinearSearch(arr, target) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === target) {
      return index
    }
  }
  return -1
}

let arr = [2, 3, 4, 10, 40];
let x = 10;

let result = LinearSearch(arr, x);
(result == -1)
  ? console.log("Element is not present in array")
  : console.log("Element is present at index " + result);

  