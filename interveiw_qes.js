function firstNonRepeatingChar(str) {
  const charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // No non-repeating character found
}

// Example usage:
const input = "swiss";
console.log(firstNonRepeatingChar(input)); // Output: "w"

function longestUniqueSubstring(s) {
  let start = 0;
  let maxLength = 0;
  let maxSubstring = "";
  const seen = new Map();

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    // If character is repeated, move start to the right of its last index
    if (seen.has(char) && seen.get(char) >= start) {
      start = seen.get(char) + 1;
    }

    seen.set(char, end); // Update the last index of the character

    // Update max length and substring
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      maxSubstring = s.slice(start, end + 1);
    }
  }

  return maxSubstring;
}

// Example usage:
const input = "abcabcbb";
console.log(longestUniqueSubstring(input)); // Output: "abc"

function mostFrequentChar(str) {
  const charCount = {};

  // Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the character with the maximum count
  let maxChar = null;
  let maxCount = 0;

  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxChar = char;
    }
  }

  return maxChar;
}

// Example usage:
console.log(mostFrequentChar("abracadabra")); // Output: "a"
console.log(mostFrequentChar("mississippi")); // Output: "i"
console.log(mostFrequentChar("hello world")); // Output: "l"

function getAllSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }

  return result;
}

console.log(getAllSubstrings("abc"));

function getAllSubstrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i++) {
    let current = "";
    for (let j = i; j < str.length; j++) {
      current += str[j];
      substrings.push(current);
    }
  }

  return substrings;
}

// Example
console.log(getAllSubstrings("abc"));

function isRotation(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  let combined = s1 + s1;
  return combined.includes(s2);
}

// Example usage
console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("hello", "llohe")); // true
console.log(isRotation("hello", "olelh")); // false

function removeWhiteSpaces(str) {
  let result = "";

  for (let char of str) {
    if (char !== " ") {
      result += char;
    }
  }

  return result;
}

console.log(removeWhiteSpaces("Hello World"));

function longestCommonPrefix(strs) {
  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

// Example
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));

// Take the first word as the prefix.

// Compare it with the other words.

// Remove the last character of the prefix until it matches.

// Time Complexity Growth (small → large)

// O(1)       ── constant
// O(log n)   ── logarithmic
// O(n)       ── linear
// O(n·m²)    ── linear to cubic depending on m:
//                - If m is small, ~ O(n)
//                - If m ~ sqrt(n), ~ O(n²)
//                - If m ~ n, ~ O(n³)
// O(n log n) ── linearithmic
// O(n²)      ── quadratic
// O(n³)      ── cubic
// O(2^n)     ── exponential
// O(n!)      ── factorial
