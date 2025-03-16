// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// Brute Force Approach
function secondLargest(arr) {
  const uniqueArr = Array.from(new Set(arr)); // O(n)

  uniqueArr.sort((a, b) => {
    // O(nlogn)
    return b - a;
  });

  if (uniqueArr.length >= 2) {
    return uniqueArr[1];
  } else {
    return -1;
  }
}

// console.log(secondLargest([10, 5, 10]));
// Time Complexity -> O(nlogn);

// Optimised Approach
// [12, 35, 1, 10, 34, 1]
// secondLargest = 34
// largest = 35
function secondLargestOptimised(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] != largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

console.log(secondLargestOptimised([10, 5, 10]));
// Time Complexity -> O(n);
// Space Complexity -> O(1);

// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// Brute Force Approach
function rotateArray(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }

  const rotated = nums.splice(size - k, size); // [5, 6, 7]
  nums.unshift(...rotated);

  return nums;
}

// Time Complexity - O(n)
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Optimised Approach
function rotateArrayOptimised(nums, k) {
  let size = nums.length;

  if (size > k) {
    k = k % size;
  }

  reverse(nums, 0, nums.length - 1); // O(n)
  reverse(nums, 0, k - 1); // O(k)
  reverse(nums, k, nums.length - 1); // O(n-k)

  return nums;
}

// Time Complexity -> O(n)
// Space Complexity -> O(1)

function reverse(nums, left, right) {
  while (left < right) {
    const temp = nums[left];
    nums[left++] = nums[right];
    nums[right--] = temp;
  }
}

console.log(rotateArrayOptimised([-1, -100, 3, 99], 2));

// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

// With JS Methods
function removeDuplicates(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    // O(n)
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1); // O(1)
      i--;
    }
  }

  return nums.length;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
// console.log(removeDuplicates([1, 1, 2]));

// Without JS Methods - Two pointer Approach
function removeDuplicatesNew(nums) {
  if (nums.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;
}

// Time Complexity - O(n)
// Space Complexity - O(1)
console.log(removeDuplicatesNew([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

// Brute Force Approach
function maxSubArrayBruteForce(nums) {
  let maxSum = nums[0];
  let startIdx = 0;
  let endIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentSum = 0;
    for (let j = i; j < nums.length; j++) {
      currentSum = currentSum + nums[j];
      if (currentSum > maxSum) {
        maxSum = currentSum;
        startIdx = i;
        endIdx = j;
      }
    }
  }

  return {
    sum: maxSum,
    subArray: nums.slice(startIdx, endIdx + 1),
  };
}

// Time Complexity - O(n^2)
// Space Complexity - O(1)

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// Kadane's Algorithm

// [-2,1,-3,4,-1,2,1,-5,4]
function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return max;
}

// Time Complexity - O(n)
// Space Complexity - O(1)

console.log(maxSubArray([5, 4, -1, 7, 8]));
