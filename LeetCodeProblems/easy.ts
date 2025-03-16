// https://leetcode.com/problems/string-matching-in-an-array/description/?envType=daily-question&envId=2025-01-14

// 1408. String Matching in an Array

// Given an array of string words, return all strings in words that are a substring of another word. You can return the answer in any order.

// Example 1:

// Input: words = ["mass","as","hero","superhero"]
// Output: ["as","hero"]
// Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
// ["hero","as"] is also a valid answer.
// Example 2:

// Input: words = ["leetcode","et","code"]
// Output: ["et","code"]
// Explanation: "et", "code" are substring of "leetcode".
// Example 3:

// Input: words = ["blue","green","bu"]
// Output: []
// Explanation: No string of words is substring of another string.

// Constraints:

// 1 <= words.length <= 100
// 1 <= words[i].length <= 30
// words[i] contains only lowercase English letters.
// All the strings of words are unique.

// function stringMatching(words: string[]): string[] {
//     const subString: string[] = [];

//     for (let i = 0; i < words.length; i++) {
//         for (let j = 0; j < words.length; j++) {
//             if (i !== j && words[j].includes(words[i]) && !subString.includes(words[i])) {
//                 subString.push(words[i]);
//             }
//         }
//     }

//     return subString;
// }

function stringMatching(words: string[]): string[] {
  return words.filter((word) =>
    words.some((otherWord) => otherWord !== word && otherWord.includes(word))
  );
}

// 🚀 Time Complexity:
// O(n² * m), where:
// n = number of words in the array.
// m = average length of the words (for includes() check).
// 🚀 Space Complexity:
// O(n) — The result array could have at most n substrings.

// https://leetcode.com/problems/single-number/description/
// 136. Single Number
// Solved
// Easy
// Topics
// Companies
// Hint
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// Example 2:

// Input: nums = [4,1,2,1,2]

// Output: 4

// Example 3:

// Input: nums = [1]

// Output: 1

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

function singleNumber(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    let curNum: number = nums.at(i) ?? 0;

    if (nums.indexOf(curNum) == nums.lastIndexOf(curNum)) return curNum;
  }
  return 0;
}

// const singleNumber = (nums: number[]): number => {

//   const set = new Set();

//   nums.forEach((element) => {
//     if (set.has(element)) {
//       set.delete(element);
//     } else {
//       set.add(element);
//     }
//   });

//   return set.values().next().value;

// };

// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.

// Constraints:

// 1 <= nums.length <= 2000
// -2000 <= nums[i] <= 2000
// nums is sorted in a non-decreasing order.

function maximumCount(nums: number[]): number {
  //  let positiveCount:number = 0;
  // let negativeCount:number = 0;

  // for(let i:number=0;i<nums.length;i++){
  //     if(nums.at(i) <0){
  //         negativeCount++
  //     }else if(nums.at(i) >0){
  //         positiveCount++
  //     }
  // }

  // return positiveCount == negativeCount ?positiveCount: positiveCount > negativeCount ?positiveCount:negativeCount
  return Math.max(upperBound(nums), lowerBound(nums));
}

function upperBound(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.ceil((low + high) / 2);
    if (nums[mid] < 0) low = mid;
    else high = mid - 1;
  }

  return nums[0] >= 0 ? 0 : low + 1;
}

function lowerBound(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[mid] > 0) high = mid;
    else low = mid + 1;
  }

  return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}

// https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
// 1752. Check if Array Is Sorted and Rotated

// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].
// Example 2:

// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.
// Example 3:

// Input: nums = [1,2,3]
// Output: true
// Explanation: [1,2,3] is the original sorted array.
// You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function check(nums: number[]): boolean {
  let findDecreasing = false;
  const n = nums.length;

  if (n === 1) return true;

  for (let i = 1; i < n; i++) {
    if (nums.at(i) ?? 0 < nums.at(i - 1)) {
      if (findDecreasing) return false;

      findDecreasing = true;
    }
  }

  if (!findDecreasing) {
    return true;
  }

  return nums.at(0) >= nums.at(n - 1);
}

// https://leetcode.com/problems/special-array-i/description/
// 3151. Special Array I

// An array is considered special if the parity of every pair of adjacent elements is different. In other words, one element in each pair must be even, and the other must be odd.

// You are given an array of integers nums. Return true if nums is a special array, otherwise, return false.

// Example 1:

// Input: nums = [1]

// Output: true

// Explanation:

// There is only one element. So the answer is true.

// Example 2:

// Input: nums = [2,1,4]

// Output: true

// Explanation:

// There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.

// Example 3:

// Input: nums = [4,3,1,6]

// Output: false

// Explanation:

// nums[1] and nums[2] are both odd. So the answer is false.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

function isArraySpecial(nums: number[]): boolean {
  if (nums.length == 1) return true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (
      (nums.at(i) % 2 == 0 && nums.at(i + 1) % 2 == 0) ||
      (nums.at(i) % 2 != 0 && nums.at(i + 1) % 2 != 0)
    )
      return false;
  }
  return true;
}

// https://leetcode.com/problems/longest-common-prefix/
// 14. Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return "";
  strs.sort();
  let first: string = strs.at(0),
    last: string = strs.at(strs.length - 1),
    result: string = "";

  for (let i = 0; i < first.length; i++) {
    if (first.at(i).includes(last.at(i))) {
      result += first.at(i);
    } else {
      break;
    }
  }
  return result;
}
