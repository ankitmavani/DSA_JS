function SentinelLinearSearch(arr, target) {
  let n = arr.length
  let last = arr[n - 1]

  arr[n - 1] = target
  let i = 0
  while (arr[i] !== target) i++

  arr[n - 1] = last

  if ((i < n - 1) || (arr[n - 1] === target)) {
    return i
  }

  return -1
}

var arr = [10, 20, 180, 30, 60, 50, 110, 100, 70];
var n = arr.length;
var key = 180;

console.log(SentinelLinearSearch(arr, 70));