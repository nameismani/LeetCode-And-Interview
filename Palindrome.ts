// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

const isPalindrome = (x: any): boolean =>
  x < 0 || !x
    ? false
    : x.toString().split("").reverse().join("") == x.toString();

console.log(isPalindrome(141));
// 121 => "121" => ["1","2","1"] => ["1","2","1"] => "121"

// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

// var fib = function (n) {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }

//   return arr[n];
// };

// // Recursive Solution
// const fib = function (n) {
//   if (n <= 1) return n;

//   return fib(n - 1) + fib(n - 2);
// };

// One Liner
const fib = (n: number): number => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
console.log(fib(2));

// n = 3 => 1 + 1 => 2

// const isAnagram = (s: string, t: string): boolean =>
//   s.length == t.length
//     ? s.split("").sort().join("") == t.split("").sort().join("")
//     : false;

const isAnagram = function (s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));

// Ques 4 - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Brute Force Solution
const twoSum1 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // logic
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
};
// [3,2,4] => 3+2, 3+4, 2+4 => 7, 7, 6

// Using JS Objects

const twoSum = function (nums, target) {
  var obj = {};

  for (let i = 0; i < nums.length; i++) {
    var n = nums[i];

    if (obj[target - n] >= 0) {
      return [obj[target - n], i];
    } else {
      obj[n] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 26));

// nums = [2,7,11,15], target = 26
// {
//     "2":0,  // 26 - 2 = 24
//     "7": 1,
//     "11": 2,  // 26-11 = 15
//     "15":     // 26 - 15 = 11 => [obj[11],3] => [2, 3]
// }

// Ques 5 - Best Time to Buy and Sell Stocks
// You are given an array prices where prices[i] is the price of a given stock
// on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock
// and choosing a different day in the future to sell that stock.
// Return the maximum profit, If you cannot achieve any profit, return 0.

// Input: prices = [7, 1, 5, 3, 6, 4];  ----->>>>>  Output: 5;
// Input: prices = [7, 6, 4, 3, 1];     ----->>>>>  Output: 0;

// Brute Force Solution
function maxProfit1(prices) {
  let globalProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];

      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }

  return globalProfit;
}

// console.log(maxProfit1([7, 6, 4, 3, 1]));

// Greedy Algorithm
const maxProfit = function (prices) {
  let minStockPurchasePrice = prices[0] || 0;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
    }

    profit = Math.max(profit, prices[i] - minStockPurchasePrice);
  }

  return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));

// [7, 1, 5, 3, 6, 4]
// min = 7 => 1
// profit = 0 => 5-1 = 4 => 6-1 = 5
