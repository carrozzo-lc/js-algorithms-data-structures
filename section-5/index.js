// =================================
// PROBLEM SOLVING --- link: https://cs.slides.com/colt_steele/problem-solving-patterns#/15/0/1
// =================================
// - Understand the problem
// - Explore Concrete Example
// - Break it down
// - Solve/Simplify
// - Look back and refactor




// - Understand the problem
// --------------------------
// .1 Can I restate the problem in my own words?
// .2 what are the inputs that go into the problem?
// .3 What are the outputs that should come from the solution to the problem?
// .4 Can the outputs  be determined from the inputs?
// .5 How should I label the important pieces of data that are a part of the problem?


// Write a function which takes two numbers and returns their sum.
// -----------------------------------------------------------------------------------å
// .1 Can I restate the problem in my own words?
// "implement addition"
// .2 what are the inputs that go into the problem?
//  - integers? - floats? - what about string for large numbers?
// .3 What are the outputs that should come from the solution to the problem?
//  - integers? - floats? - what about string for large numbers?
// .4 Can the outputs be determined from the inputs?
//  It depends
// .5 How should I label the important pieces of data that are a part of the problem?
//  




// - Explore Concrete Example
// --------------------------
// .1 Start with Simple Examples
// .2 Progress to more complex examples
// .3 Explore examples with empty inputs
// .4 Explore examples with invalid inputs

// Write a function which takes in a string and returns counts of each character in the string.

charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}

"my phone number is 182658"
"hello hi"

charCount("");




// - Break it down
// --------------------------
// .1 Explicitly write out the steps you need to take.

// Write a function which takes in a string and returns counts of each character in the string.

charCount("aaaa"); 
// {
//   a:4
// }

charCount("hello"); 
// {
//   h:1, 
//   e:1, 
//   l:2, 
//   o:1
// }

charCount("Your PIN number is 1234!"); 
// {
//   1:1, 
//   2:1, 
//   3:1, 
//   4:1,
//   b: 1,
//   e: 1,
//   i: 2,
//   m: 1,
//   n: 2,
//   o: 1,
//   p: 1,
//   r: 2,
//   s: 1,
//   u: 2,
//   y: 1
// }

function charCount(str) {
  // do something
  // return an object with keys that are lowercase alphanumeric characters in the string: values should be the counts for those characters. 
}

function charCount(str) {
  // make object to return at end
  // loop over string, for each character...
    // if the char is a number/letter AND is a key in object, add one to count
    // if the char is a number/letter AND not in object, add it to object and set value to 1
    // if character is something else (space, period, etc.) don't do anything
  // return object at end
}




// - Solve/Simplify
// --------------------------

function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase();
    // if the char is a number/letter AND is a key in object, add one to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      // if the char is a number/letter AND not in object, add it to object and set value to 1
      result[char] = 1;
    }
  }
    // if character is something else (space, period, etc.) don't do anything
  // return object at end
  return result;
}




// - Look back and refactor
// --------------------------

// function charCount(str) {
//   var obj = {};
//   for (var i = 0; i < str.length; i++) {
//     var char = str[i].toLowerCase();
//     if (/[a-<0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }

function charCount(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}
