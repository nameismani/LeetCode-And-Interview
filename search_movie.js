const data = [
  {
    name: "Vikram Vedha",
    movie: {
      name: "Natpe Thunai",
      movie: {
        name: "PT Sir",
        movie: {
          name: "Meesaya Muruku",
          movie: {
            name: "Appspamtestmovie 3",
          },
        },
      },
    },
  },
];

// Function to flatten and search for movie names
const searchMovies = (data, searchQuery) => {
  const matchingMovies = [];

  // Loop through each item in the data array
  data.forEach((val) => {
    // If the movie name matches the search query, add it to the matchingMovies array
    if (val.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      matchingMovies.push(val.name);
    }

    // If the "movie" property is an object (nested structure), recurse into it
    if (val.movie && typeof val.movie === "object") {
      matchingMovies.push(...searchMovies([val.movie], searchQuery)); // Recursively call with the nested movie array
    }
  });

  return matchingMovies;
};

// Example usage: Search for movies containing 'thunai'
const searchQuery = "sir";
const result = searchMovies(data, searchQuery);

console.log(result); // Output will include movies containing 'thunai'

// Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

// Input: nums = [1, 1, 1], k = 2
// Output: 2
// Explanation: [1,1] (twice)

// Input: nums = [1, 2, 3], k = 3
// Output: 2
// Explanation: [1,2], [3]

const subArray = (arr, k) => {
  const temp = [];
  const subArrayResult = [];
  let count = 0;

  function recursiveSubArr(n) {
    if (arr.length === n) {
      return subArrayResult.push([...temp]);
    }

    temp.push(arr.at(n));
    recursiveSubArr(n + 1);
    temp.pop();
    recursiveSubArr(n + 1);
  }

  recursiveSubArr(0);
  // console.log(subArrayResult)
  console.log(subArrayResult);
  for (val of subArrayResult) {
    let sumVal = val.reduce((acc, curr) => acc + curr, 0);
    //   console.log(sumVal)
    if (sumVal === k) {
      count++;
    }
  }

  return count;
};

console.log(subArray([1, 2, 3], 3));

const subArray = (nums, k) => {
  let count = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1); // Initialize with 0 sum

  for (let num of nums) {
    sum += num;
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return count;
};

console.log(subArray([1, 2, 3], 3)); // Output: 2

console.log(subArray([1, 1, 1], 2)); // Output: 2
