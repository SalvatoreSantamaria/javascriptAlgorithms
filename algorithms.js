//Press F5 to save and view console.log in Debug Console. (Node.js is installed)
/******************************************************************************/

//FizzBuzz: logs 3 if num is divisible by Fizz, logs 5 if num is divisible by Buzz, and FizzBuzz if divisible by both.

//Notes: && must run at top of function
function fb(num) {
  for (var i = 1; i < num; i++) {
    if (i % 3 === 0 && i % 5 === 0) { 
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

//fb(30);
fb();

/******************************************************************************/

//Harmless Ransom Note

//Notes: To Do

/******************************************************************************/

//Palindrome: return true or false if the input string is Palindrome

function isPalindrome(str) {
  
  str = str.toLowerCase(); //lowercase all letters
  let charArr = str.split(''); //change into array
  let validChars = 'abcdefghijklmnopqrstuvwxyz'.split(); //make array of letters
  let lettersArr = [];
  charArr.forEach(i => {
    if (validChars.indexOf(i) > -1) { //-1 means the character is not present in the validChars array, ie, ' or - or , etc
      lettersArr.push(i);
    }
  });


  if (lettersArr.join('') === lettersArr.reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

//let x = isPalindrome("Madam I'm Adam"); 
//let x = isPalindrome("Race car");
//let x = isPalindrome('test words');
//console.log(x);

/******************************************************************************/

//Caesar Cipher: take in two parameters, shift every letter in string forward by the number paramater

function caesarCipher(str,num) {
  num = num % 26; // in case number is 300, -27, etc
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); //create array with every letter of the alphabet
  var newString = '';
  
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') { // if it's a space character, add it to the string
      newString += currentLetter;
      continue; // moves for loop onto new iteration, without doing anything else below
    }
    var currentIndex = alphabet.indexOf(currentLetter); // where the current letter is in the alphabet array
    var newIndex = currentIndex + num; //index of new letter in alphabet array
    if (newIndex > 25) newIndex = newIndex - 26; // // in case letter is y or z loop back at the front of the alphabet
    if (newIndex < 0) newIndex = 26 + newIndex; // if a negative number is passed into the algorithm
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase(); //add the uppercase elements back in
    }
    else newString += alphabet[newIndex]; // this is the shifted letter
  };
  
  return newString;
}

let x = caesarCipher('Zoo Keeper', 2)
console.log(x);

/******************************************************************************/

//Reverse Words: reverse every word in the string and return the new string

function reverseWords(str) {
  let wordsArr = str.split(' '); //split it to make it an array
  let reversedWordsArray = [];

  wordsArr.forEach(word => { //for each item in the array
    let reversedWord = '';
    for (var i = word.length - 1; i >= 0; i--) { //looping thru each array element backwards, and then adding each letter to the string reversedWord
      reversedWord += word[i];
    } 
    reversedWordsArray.push(reversedWord); //push reversedWord into the new array
  })
  return reversedWordsArray.join(" ")//join to make a string again
}

// let x = reverseWords("Here are some test words")
// console.log(x);

/******************************************************************************/

//Reverse Array In Place: Do not make a new array. Do not use array.reverse() method

function reverseArrayInPlace(arr) {
  for (var i = 0; i < arr.length/2; i++) { // only loop through the first half, otherwise func will switch everything back again
    var tempVar = arr[i]; //example: b
    arr[i] = arr[arr.length - 1 - i]; //example: 'b' = arr[arr.length- 1 - 1], i here is 1 // eg 'b' = 'e'
    arr[arr.length - 1 - i] = tempVar;  //example: arr[arr.length- 1 - 1] = 'b' // eg 'e' = 'b'
  }
  return arr;
}

// let x = reverseArrayInPlace(['a', 'b', 'c', 'd', 'e', 'f'])
// console.log(x)
/******************************************************************************/

//Mean Median Mode: Take in array and return mean, median, and mode as properties of an object

function meanMedianMode(array) {
  return {
    mean: getMean(array),
    median: getMedian(array),
    mode: getMode(array)
  }
}
 
function getMean(array) {
  var sum = 0;
  
  array.forEach(num => {
    sum += num;
  });
  
  var mean = sum / array.length;
  return mean;
}
 
function getMedian(array) {
  array.sort(function (a, b) { return a - b });
  var median;

  if (array.length % 2 !== 0) { //if array has odd number of elements
    median = array[Math.floor(array.length / 2)] //this is the element in the middle index
  }
  else { // grab two middle elements of the array
    var mid1 = array[(array.length / 2) - 1]
    var mid2 = array[(array.length / 2)]
    median = (mid1 + mid2) / 2; //average out the two middle array elements
  }
  return median;
}

function getMode(array) {//mode is the number that appears the most
  var modeObj = {};// hashtable
  
  // create modeObj
  array.forEach(num => {
    if (!modeObj[num])// if this number does not exist on modeObj as a property
      modeObj[num] = 0; 
    modeObj[num]++; // increment value by 1
  });
  
  // create array of mode/s 
  var maxFrequency = 0;
  var modes = [];
  for (var num in modeObj) { 
    if (modeObj[num] > maxFrequency) {    // check to see if freq of that number is greater than maxFrequency
      modes = [num];
      maxFrequency = modeObj[num];
    }
    else if (modeObj[num] === maxFrequency) modes.push(num);
  }
  // if every value appears same amount of times 
  if (modes.length === Object.keys(modeObj).length) //give us the the value of howmany properties are on the modeObj
    modes = [];
  return modes;
}


// let x = meanMedianMode([10,10,23,10,23,9]);
// console.log(x);

/******************************************************************************/

// Two Sum: return every pair of numbers from 'numArray' that adds up to the 'sum'
// this builds out in O(n) time complexity
// Rules:
// 1. Result should be an array of arrays
// 2. Any number in the 'numArray' can be used in multiple pairs

function twoSum(numArray, sum) {
  var pairs = [];
  var hashtable = []; //using array as a hashtable. we are pushing every element we iterate through into hastable

  for (var i = 0; i < numArray.length; i++) {
    var currNum = numArray[i]; //ie 3
    var counterpart = sum - currNum; // ie 10 - 3, so counterpart = 7;
    //check hashtable to see if counterpart exists 
    if (hashtable.indexOf(counterpart) != -1) { // if counterpart( ie, the missing value in the sum) exists in hashtable. if it does exist, then we already know that we iterated through that number in the array. We can therefore take these two numbers as a pair and push them into the array. ie, if hashtable.indexOf(7) != -1
      pairs.push([ currNum, counterpart]) //ie pairs.push(3, 7)
    }
    //push current number into hashtable no matter what
    hashtable.push(currNum)
  }
  return pairs;
}

// let x = twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)
// console.log(x);

/******************************************************************************/

//Bianry Search

//Notes:

/******************************************************************************/

//Memoized Fibonacci

//Notes:

/******************************************************************************/

//Sieve of Eratosthenes

//Notes:

/******************************************************************************/

//Bubble Sort

//Notes:

/******************************************************************************/

//Merge Sort

//Notes:

/******************************************************************************/

//Max Stock Profit

//Notes:

/******************************************************************************/

//

//Notes:

/******************************************************************************/

//

//Notes:

/******************************************************************************/

//

//Notes:

/******************************************************************************/

//

//Notes:

/******************************************************************************/