function binaryInterativeSearch(arr, target) {
  let left = 0
  let right = arr.length - 1
  console.log(arr[right])
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (arr[mid] === target) {
      return mid
    }
    else if (arr[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

function binarySearch(arr, target, left, right) {
  let mid = left + Math.floor((right - left) / 2)
  if (left > right) {
    return -1
  }
  if (arr[mid] === target) {
    return mid
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, right)
  } else {
    return binarySearch(arr, target, left, mid - 1)
  }
}

arr = new Array(2, 3, 4, 10, 40);
x = 2;
result = binarySearch(arr, x, 0, 4);
if (result == -1)
  console.log("Element is not present in array")
else
  console.log("Element is present at index "
    + result);