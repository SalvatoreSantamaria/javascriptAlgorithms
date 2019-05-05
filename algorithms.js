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

//Caesar Cipher

//Notes: To Do

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

let x = reverseArrayInPlace(['a', 'b', 'c', 'd', 'e', 'f'])
console.log(x)
/******************************************************************************/

//mean Median Mode

//Notes:

/******************************************************************************/

//Two Sum

//Notes:

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

