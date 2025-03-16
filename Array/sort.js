// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14] ----->>>>>  Output: [10,14,14,29,37]

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

console.log(bubbleSort([29, 10, 14, 37, 14]));

// Best Time Complexity = O(n)
// Worst Time Complexity = O(n^2)
// Average Time Complexity = O(n^2)

// Space Complexity = O(1)

// Ques 2: Implement Selection Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14]  ----->>>>>  Output: [10,14,14,29,37]

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // n
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      // n
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  return arr;
};

console.log(selectionSort([29, 10, 14, 37, 14]));

// Time Complexity = O(n^2)
// Space Complexity = O(1)

// Ques 3: Implement Insertion Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14,33,8,11] ----->>>>>  Output: [8,10,11,14,14,29,33,37]

function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    // n
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      // n
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}

console.log(insertionSort([29, 10, 14, 37, 14, 33, 8, 11]));

// Best Case Time Complexity = O(n)
// Worst Case Time Complexity = O(n^2)
// Average Case Time Complexity = O(n^2)
// Space Complexity = O(1)

// Sort() Method in Javascript

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];

console.log(fruits.sort());

const nums = [10, 5, 18, 1, 27];

const compareFunction = (a, b) => {
  // 1. <0 => a comes first
  // 2. 0  => nothing changes
  // 3. >0 => b comes first

  return b - a;
};

console.log(nums.sort(compareFunction));

const people = [
  { name: "Piyush", age: 25 },
  { name: "Suyash", age: 22 },
  { name: "Raj", age: 30 },
  { name: "Ishan", age: 27 },
];

const compareFunctionForObj = (a, b) => {
  // 1. <0 => a comes first
  // 2. 0  => nothing changes
  // 3. >0 => b comes first

  return a.age - b.age;
};

console.log(people.sort(compareFunctionForObj));

// Ques 5: Implement Merge Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

function mergeSort(arr) {
  // O(log n)
  // base case
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  // O(n)
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

// Time Complexity - O(nlog n)
// Space Complexity - O(n)
console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));

// Ques 6: Implement Quick Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2]  ----->>>>>  Output: [1,2,3,4,5,6,7,8]

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Time Complexity -
// Average Case - O(nlog n)
// Best Case - O(nlog n)
// Worst Case - O(n^2)

// Space Complexity -
// Average Case - O(log n)
// Worst Case - O(n)
console.log(quickSort([5, 2, 9, 3, 6, 1, 8, 7]));

// Approach 2 - Without using left and right Arrays
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const pivotIndex = pivot(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  swap(arr, start, swapIdx);
  return swapIdx;
}
