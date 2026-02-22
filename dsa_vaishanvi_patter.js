// First and Last
// Using Linear Search (Simple Approach)
function firstAndLast(arr, target) {
  let first = -1;
  let last = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      if (first === -1) {
        first = i; // first occurrence
      }
      last = i; // update last occurrence
    }
  }

  return { first, last };
}

// Example
let arr = [1, 2, 3, 2, 4, 2, 5];
let target = 2;

console.log(firstAndLast(arr, target));
// Output: { first: 1, last: 5 }

// (Binary Search – For Sorted Array

function findFirst(arr, target) {
  let low = 0,
    high = arr.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      result = mid;
      high = mid - 1; // search left
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

function findLast(arr, target) {
  let low = 0,
    high = arr.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      result = mid;
      low = mid + 1; // search right
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

function firstAndLast(arr, target) {
  return {
    first: findFirst(arr, target),
    last: findLast(arr, target),
  };
}

// Example
let arr = [1, 2, 2, 2, 3, 4, 5];
let target = 2;

console.log(firstAndLast(arr, target));
// Output: { first: 1, last: 3 }

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => b - a);
  }
  pop() {
    return this.heap.shift();
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(val) {
    this.heap.push(val);
    this.heap.sort((a, b) => a - b);
  }
  pop() {
    return this.heap.shift();
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

function medianSlidingWindow(nums, k) {
  const result = [];

  for (let i = 0; i <= nums.length - k; i++) {
    let window = nums.slice(i, i + k).sort((a, b) => a - b);

    if (k % 2 === 0) {
      result.push((window[k / 2 - 1] + window[k / 2]) / 2);
    } else {
      result.push(window[Math.floor(k / 2)]);
    }
  }

  return result;
}

console.log(medianSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

function sortColors(nums) {
  let low = 0; // for 0
  let mid = 0; // current element
  let high = nums.length - 1; // for 2

  while (mid <= high) {
    if (nums[mid] === 0) {
      // swap low & mid
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // nums[mid] === 2
      // swap mid & high
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}

// Example
console.log(sortColors([2, 0, 2, 1, 1, 0]));
// Output: [0,0,1,1,2,2]

function sortColorsDescending(nums) {
  let low = 0; // for 2
  let mid = 0;
  let high = nums.length - 1; // for 0

  while (mid <= high) {
    if (nums[mid] === 2) {
      // place 2 at beginning
      [nums[low], nums[mid]] = [nums[mid], nums[low]];
      low++;
      mid++;
    } else if (nums[mid] === 1) {
      mid++;
    } else {
      // nums[mid] === 0
      // place 0 at end
      [nums[mid], nums[high]] = [nums[high], nums[mid]];
      high--;
    }
  }

  return nums;
}

// Example
console.log(sortColorsDescending([0, 2, 1, 2, 0, 1]));
// Output: [2,2,1,1,0,0]
