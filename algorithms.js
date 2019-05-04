//Press F5 to save and view console.log in Debug Console. (Node.js is installed)

//FizzBuzz logs 3 if num is divisible by Fizz, logs 5 if num is divisible by Buzz, and FizzBuzz if divisible by both.


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

fb(30);