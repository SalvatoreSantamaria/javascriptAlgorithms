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
    console.log(true);
  } else {
    console.log(false);
  }
}

// isPalindrome("Madam I'm Adam"); 
// isPalindrome("Race car");
// isPalindrome('test words');
isPalindrome();