// Ques 2 : Create an array with range of numbers
// Input:  start=1, end=5  ----->>>>>  Output:

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

// rangeOfNumbers(1,5) => [1,2,3,4,5]
// rangeOfNumbers(1,4) => [1,2,3,4]
// rangeOfNumbers(1,3) => [1,2,3]
// rangeOfNumbers(1,2) => [1,2]
// rangeOfNumbers(1,1) => [1]
// rangeOfNumbers(1,0) => []

// console.log(rangeOfNumbers(0, 5));

// Ques 3 : Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;

function isPalindromes(str) {
  str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
  const len = str.length;

  if (len <= 1) return true;
  if (str[0] !== str[len - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("121"));

// Ques 5 - Reverse a String
// Input: "hello"  ----->>>>>  Output: "olleh"

function reverseString(str) {
  if (str === "") {
    return "";
  } else return reverseString(str.substr(1)) + str.charAt(0);
}

// console.log(reverseString("hello")); => olleh

// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

function subsets(nums) {
  let result = [];
  let temp = [];

  function recursiveSubsets(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }

    temp.push(nums[i]);
    recursiveSubsets(nums, i + 1);
    temp.pop();
    recursiveSubsets(nums, i + 1);
  }

  recursiveSubsets(nums, 0);
  return result;
}

console.log(subsets([1]));
