"use strict"

// Helper Function for creating range(s)
function range(start, count) {
  return Array.apply(0, Array(count))
    .map((element, index) => index + start)
}

// binary search as a helper function
function binarySearch(array, item, start, end) {
  let midPoint;

  if (start === end) {
    if (array[start] > item) return start
    return start + 1
  }
  if (start > end) return start

  midPoint = Math.floor((start + end) / 2)

  if (array[midPoint] < item) return binarySearch(array, item, midPoint + 1, end)
  else if (array[midPoint] > item) return binarySearch(array, item, start, midPoint - 1)
  return midPoint

}

// insertion sort for smaller sorting jobs (e.g., <64 elements)
// if (array > 64 elements), then timSort makes use of RUNS, which can be
// found in the timSort portion of the code, below
function insertionSort(array) {
  let l, index, value, pos, arrayPos, arrayPosInd, arrayIndPlus;
  l = array.length-1
  for (index of range(1, l)) {
    value = array[index]
    pos = binarySearch(array, value, 0, index - 1)
    array = array.slice(0,pos)
              .concat(value,
                      array.slice(pos, index),
                      array.slice(index+1))
  }
  return array
}

function merge(left, right) {
  let result = []

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
        result.push(left.shift())
    } else {
        result.push(right.shift())
    }
  }

  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())

  return result
}

// (additional function for using or calling Merge Sort, if necessary)
function mergeSort(arr) {
  if (arr.length < 2) return arr
  let middle = parseInt(arr.length / 2)
  let left   = arr.slice(0, middle)
  let right  = arr.slice(middle, arr.length)

  return merge(
    mergeSort(left),
    mergeSort(right)
    )
}

function timSort(array) {
  let index;
  let runs = [],
      sortedRuns = [],
      sortedArray = []
  let length = array.length
  let newRun = [array[0]]

  for (index of range(1, length)) {
    // if index is at the end of the array
    if (index === length-1) {
      newRun.push([array[index]])
      runs.push(newRun)
      break
    }
    // if the index-th element of the array is less than the one before it
    if (array[index] < array[index-1]) {
      // if newRun is set to None (NULL)...
      if (!newRun.length) {
        runs.push([array[index]])
        newRun.push(array[index])
      } else {
        runs.push(newRun)
        newRun = [array[index]]
      }
    // ...or if its equal to or more than
    } else {
      newRun.push(array[index])
    }
  }
  // for every item in runs, add it to sortedRuns using insertion sort
  for (let item of runs) {
    sortedRuns.push(insertionSort(item))
  }
  // for every run in sortedRuns, merge them
  for (let run of sortedRuns) {
    sortedArray = merge(sortedArray, run)
  }

  return sortedArray
}

module.exports = timSort
