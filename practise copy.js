// Ques 1 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

const isPalindrome1 = (x) =>
  x <= 0 || !x
    ? false
    : x.toString() == x.toString().split("").reverse().join("");

console.log(isPalindrome1("aba"));

const fib1 = (x) => {
  const arr = [0, 1];
  if (x <= 1) return x;

  for (let i = 2; i <= x; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[x];
};

console.log(fib1(10));

const isAnagram1 = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < s1.length; i++) {
    obj1[s1[i]] = (obj1[s1[i]] || 0) + 1;
    obj2[s2[i]] = (obj2[s2[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] != obj2[key]) return false;
  }
  return true;
};

console.log(isAnagram1("anagram", "nagaram"));

// const twoSum2 = (nums, target) => {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };

const twoSum2 = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] >= 0) {
      return [obj[target - nums[i]], i];
    } else {
      obj[nums[i]] = i;
    }
  }
};
console.log(twoSum2([2, 7, 11, 15], 9));

// const maxProfit2 = (prices) => {
//   let globalProfit = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let currentProfit = prices[j] - prices[i];
//       if (currentProfit > globalProfit) globalProfit = currentProfit;
//     }
//   }
//   return globalProfit;
// };

const maxProfit2 = (prices) => {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};

console.log(maxProfit2([7, 1, 5, 3, 6, 4]));

const secondLargestNumber = (arr) => {
  let largest = 0;
  let secondLargest = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

console.log(secondLargestNumber([12, 35, 1, 10, 34, 1]));

const rotateArr = (arr, k) => {
  let size = arr.length;

  if (k > size) {
    k = k % size;
  }

  const removedArr = arr.splice(size - k, k);
  arr.unshift(...removedArr);

  return arr;
};

console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 3));

const removeUnique = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.length;
};
console.log(removeUnique([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

function maxSubArray(nums) {
  let sum = 0;
  let max = nums[0];
  let start = 0;
  let end = 0;
  let tempStart = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > max) {
      max = sum;
      start = tempStart;
      end = i;
    }
    if (sum < 0) {
      sum = 0;
      tempStart = i + 1;
    }
  }

  return max;
  // return {
  //   sum: maxSum,
  //   subArray: nums.slice(start, end + 1),
  // };
}
console.log(maxSubArray([5, 4, -1, 7, 8]));
