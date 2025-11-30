

// https://chatgpt.com/share/692be4d0-e974-8005-bd40-88688d0ad483

let otpGen = (limit)=>{
    let digits = '0123456789';
    let result = "";
    
    for(let i=0 ; i<limit; i++){
        result  += digits[Math.floor(Math.random()*10)]
    }
    return result
}

console.log(otpGen(20))

countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
let countTrue = (arr)=>{
  let val= arr.filter(val => val)
  console.log(val.length)
}
// let countTrue = (array)=>{
//     let count = 0;
//     if(array.length > 0){
//         for(let i=0; i<array.length;i++){
//             if(array[i]== true){
//                 count++
//             }
//         }
//     }else{
//             count = 0
//         }
        
//         return count
// }

console.log(countTrue([false, false, false, false]))

let cubes = (number)=>{
 
    if(typeof number == "number"){
        return number*number*number
    }else{
        return "it is not a number"
    }
}

console.log(cubes(8))

console.log([1,2,3].pop()) // will return the popped element

// toCamelCase("A-B-C") ➞ "ABC"

// toCamelCase("the-stealth-warrior") ➞ "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") ➞ "TheStealthWarrior"

function toCamelCase(str) {
    return str
        .split(/[-_]/) // Split by hyphen (-) or underscore (_)
        .map((word, index) => 
            index === 0 
                ? word 
                : word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join('');
}

// Examples
console.log(toCamelCase("A-B-C")); // "ABC"
console.log(toCamelCase("the-stealth-warrior")); // "theStealthWarrior"
console.log(toCamelCase("The_Stealth_Warrior")); // "TheStealthWarrior"


goldDistribution([4, 2, 9, 5, 2, 7]) ➞ [14, 15]
// Mubashir will choose 7, Remaining piles = [4, 2, 9, 5, 2]
// Matt will choose 4, Remaining piles = [2, 9, 5, 2]
// Mubashir will choose 2, Remaining piles = [9, 5, 2]
// Matt will choose 9, Remaining piles = [5, 2]
// Mubashir will choose 5, Remaining piles = [2]
// Matt will choose 2
// Mubashir = 7+2+5 = 14, Matt = 4+9+2 = 15

goldDistribution([10, 1000, 2, 1]) ➞ [12, 1001]

goldDistribution([10, 9, 1, 2, 8, 4]) ➞ [16, 18]


const goldDistribution = (arr) => {
  let mubashir = 0;
  let matt = 0;
  let mubashirTurn = true;

  while (arr.length) {
    let pick;
    if (arr[0] >= arr[arr.length - 1]) {
      pick = arr.shift(); // remove first
    } else {
      pick = arr.pop();   // remove last
    }

    if (mubashirTurn) {
      mubashir += pick;
    } else {
      matt += pick;
    }

    mubashirTurn = !mubashirTurn; // switch turns
  }

  return [mubashir, matt];
};

console.log(goldDistribution([7, 4, 2, 9, 5, 2])); // ➞ [14, 15]


console.log(goldDistribution([4, 2, 9, 5, 2, 7])  )

// causes O(n²) time complexity, because indexOf and lastIndexOf each scan the whole string inside a loop.
// let unRepeatedString = (string)=>{
//      let result =""
//     for(let i=0;i<string.length;i++){
//         let char = string.charAt(i)
//         // console.log(char)
       
//         if(string.indexOf(char) === string.lastIndexOf(char)){
//             result += char
//         }
//     }
//   return result
// }

const unRepeatedString = (str) => {
  const map = {};
  let result = "";

  for (const char of str) {
    map[char] = (map[char] || 0) + 1;
  }

  for (const char of str) {
    if (map[char] === 1) result += char;
  }

  return result;
};


console.log(unRepeatedString("cabcddeabe"))

let fibonacci = (n)=>{
    if (n===0) return 0
    
    let prev1=0;
    let prev2=1;
    let curr;
    
    for(let i=2;i<=n;i++){
         curr = prev1+prev2
         prev1 = prev2
         prev2 = curr
    }
    return prev2
}

console.log(fibonacci(8))

// let doubleLetters = (string)=>{
//      let result =false;
//     for(let i=0;i<string.length;i++){
//         let char = string.charAt(i)
//         // console.log(char)
//       let lastIndex =string.lastIndexOf(char)
//         if(lastIndex == Number(string.indexOf(char))+1 ){
//             result = true
//         }
//     }
//   return result
// }

const doubleLetters = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return true;
  }
  return false;
};

console.log(doubleLetters("loop")); // true
console.log(doubleLetters("orange")); // false
console.log(doubleLetters("committee")); // true


console.log(doubleLetters("loop"))

// let sharedLetters = (string1,string2)=>{
//     let count =0;
//     for (let i=0;i<string1.length;i++){
//         let char = string1.charAt(i);
        
//         if(string2.includes(char)){
//             count++
//         }
//     }
//     return count
// }

const sharedLetters = (str1, str2) => {
  const set = new Set(str2);
  let count = 0;

  for (const ch of str1) {
    if (set.has(ch)) count++;
  }
  return count;
};


console.log(Object.entries({
  D: 1,
  B: 2,
  C: 3
}))

objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

function objectToArray(obj){
    return Object.entries(obj)
}

objectToArray({
  D: 1,
  B: 2,
  C: 3
})

const addUp = (n) => {
  if (n < 0 || typeof(n) !== "number") {
    return "Enter any positive number between 1 and 1000."
  } else {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    a += b;
    b += 1;
  }
  return a;
  }
  
};

function binary(decimal) {
	return decimal.toString(2)
}

// Write a JavaScript function binary that converts a decimal number to its binary representation.

function binary(decimal) {
	let result = "";
	if (decimal == 0) {
		result = "0";
	}
	while (decimal > 0) {
			result += decimal % 2;
			decimal = Math.floor(decimal/2);
		};
	return result.split("").reverse().join("");
}

let arr = ["a","b","c","a","b","c","a","e"];

arr.forEach((val,index)=>{
if(arr.indexOf(val) !== index && (index+1)%2 !==0){
console.log(val,index)
}
})

// Write a JavaScript function findSecondLargest that finds and returns the second largest element in an array of integers.

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;
  for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] < largest && arr[i] > secondLargest) {
        secondLargest = arr[i];
      }
    }
    return secondLargest;
  }
 
  const array = [5, 2, 10, 8, 3,9];
  const secondLargest = findSecondLargest(array);
  console.log("Second largest element:", secondLargest);

  let removeDuplicate = (arr)=>{
    let unRepeate=[];
    for(let i =0; i<arr.length; i++){
        if(unRepeate.indexOf(arr[i])==-1){
            unRepeate.push(arr[i])
        }
    }
    return unRepeate
}

console.log(removeDuplicate([1,2,4,2,6,12,6,7,2,9]))

let factorial = (n)=>{
    
  if(n==0){
      return 1
  }
  
  else{
      return n* factorial(n-1)
  }
}

console.log(factorial(7))

let findLongestWord = (sentence)=>{
  let wordsArr = sentence.split(" ");
  let longestWord = ""
  
  for(let i=0;i<wordsArr.length;i++){
      if(wordsArr[i].length>longestWord.length){
          longestWord = wordsArr[i]
      }
  }
  return longestWord
}

console.log(findLongestWord("This is a Sentence sdfsewcxvcxgsr"))

function checkLeapYear(year) {
  console.log(year%4,year%100,year%400)
      //three conditions to find out the leap year
      if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
          console.log(year + ' is a leap year');
      } else {
          console.log(year + ' is not a leap year');
      }
  }
  
  checkLeapYear(2000);
let checkPalindrom = (string)=>{
  if(string.split("").reverse().join("")===string){
      return "It is palindrom"
  }else{
      return "It is not a palindrom"
  }
}

let isPalindrome = (str)=>{
    let len = str.length;
    
    for(let i=0;i<len/2;i++){
        if(str.at(i) !== str.at(len-i-1)) return false
    }
    return true
}

  console.log(isPalindrome("madam"))

console.log(checkPalindrom("madam"))

let addData = (data)=>{
  let convertArray = `${data}`.split('').map(data=> parseInt(data))
  
  let final = convertArray.reduce((a,b)=>a+b)
  
  if(final >10) addData(final)
  else console.log(final)
}

addData(5431)

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Usage
const number = 17;
console.log(`${number} is prime:`, isPrime(number));

Array.prototype.MyMap = function(callback){
  let newArr = [];
  let arr = this
  
  for(let i=0; i,arr.length;i++){
      arr[i] = callback(arr[i],i)
  }
  return newArr
}

let mapArr = [1,2,3,4].map((item)=> item+2)

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
  temp[i] = cb(this[i], i, this);
  }
  return temp;
  };
  const nums = [1, 2, 3, 4];
  const multiplyThree = nums.myMap((num, i, arr) => {
  return num * 3;
  });
  console.log(multiplyThree);

  Array.prototype.myFilter = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i])
    }
    return temp;
    };
    const nums = [1, 2, 3, 4];
    const more Than Two = nums.myFilter((num) => {
    return num > 2;
    });
    console.log(more ThanTwo);

    Array.prototype.myReduce = function (cb,initalValue){
      let acc = initalValue
       let arr = this
       for(let i=0;i<arr.length;i++){
        acc = acc ? cb(acc,arr[i],i,arr):this[i]
       }
       return acc
   }
   
   let arr = [2,3,4,5,6,3]
   
   let newArr = arr.myReduce((acc,item)=> acc+item)
   
   console.log(newArr)
  //  ALL IN ONE
Array.prototype.customFlatMap = function (cb) {
    let arr = this;
    let flattenedArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        const result = cb(arr.at(i), i, arr);
        
        // If the result is an array, flatten it into `flattenedArr`.
        if (Array.isArray(result)) {
            flattenedArr.push(...result);
        } else {
            flattenedArr.push(result);
        }
    }
    
    return flattenedArr;
};

        Array.prototype.customMap = function(cb){
            // let newArr = [];
            // let acc = initalValue
            let arr = this
            let flatArr = [];
            
            for(let i=0;i<arr.length;i++){
                let item = cb(arr.at(i),i,arr)
                // newArr[i] = cb(arr.at(i),i,arr)
                // if(cb(arr.at(i),i,arr))newArr.push(arr.at(i))
                // acc = acc ?cb(acc,arr.at(i),i,arr):arr.at(0)
                if(Array.isArray(item)){
                    flatArr.push(...item)
                }else{
                    flatArr.push(item)
                }
            }
            // return newArr
            return flatArr
        }
        let arr = [1,2,3,4,5]
        let modifiedArr = arr.customMap((val)=>[val,val*2])
        console.log(modifiedArr)

// Example Usage:
// let arr = [1, 2, 3, 4];

const flattenedArr = arr.customFlatMap(val => [val, val * 2]);

console.log(flattenedArr);

const deepFlatenArr = (arr)=>{
  flatenArr = [];
  
  arr.forEach(item => {
      if(Array.isArray(item)){
         
          flatenArr = flatenArr.concat(deepFlatenArr(item))
      }
    else{
           flatenArr.push(item)
    }
  })
  return flatenArr
}

console.log(deepFlatenArr([1,[2,3,[4,5,[6,7]]]]))

  function chuckleMaster(){
    return "I'm the stand-up"
}

function comedyShow(){
    console.log(laughterMeter)
    
    return chuckleMaster();
    
    var laughterMeter = "I'm a laughter";
    
    function chuckleMaster(){
        return "I'm the punchline engineer"
    }
}

console.log(comedyShow())

// output
// undefined
// I'm the punchline engineer

const sortedData = (arr1, arr2) => {
  let i = 1;
  let j = 1;
  let array1 = arr1[0];
  let array2 = arr2[0];
  let mergedArray = [];
  while (array1 || array2) {
    if (array2 === undefined || array1 < array2) {
      mergedArray.push(array1);
      array1 = arr1[i];
      i++;
    } else {
      mergedArray.push(array2);
      array2 = arr2[j];
      j++;
    }
  }
  console.log(mergedArray);
};

sortedData([1, 3, 4, 5], [2, 6, 8, 9]);



// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// function foo(){
//     return Bar();
//     function Bar(){
//         return "hello"
//     }
// }

// console.log(2+"3")     

// for(var i=0;i<3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }

console.log(0.1+0.2 == 0.3)//false

console.log("hello".split("l"));  //[ 'he', '', 'o' ]

let count=0;
(function immediate(){
    if(count==0){
        let count=1;
        console.log(count)
    }
    console.log(count)
})()//1  0

console.log("hello".slice(-2))//lo

console.log(+"")//0

console.log(Boolean(undefined))//false

console.log(typeof function(){})//function

fs.writeFileSync(, result);
            downloadPath=uploads/${req.file.originalname.replace(/\.[^/.]+$/, "")}/${req.file.originalname.replace(/\.[^/.]+$/, "") }.min${path.extname(req.file.originalname).toLowerCase()}

            uploads/${req.file.originalname.replace(/\.[^/.]+$/, "")}/${req.file.originalname.replace(/\.[^/.]+$/, "") }.min${path.extname(req.file.originalname).toLowerCase()}

            path.join(__dirname,"uploads",req.file.originalname.replace(/\.[^/.]+$/, ""),{req.file.originalname.replace(/\.[^/.]+$/, "") })