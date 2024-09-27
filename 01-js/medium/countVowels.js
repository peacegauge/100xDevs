/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowelCount = {
      "a" : 0,
      "e" : 0,
      "i" : 0,
      "o" : 0,
      "u" : 0,
    }

    let counter = 0;

    let strArr = Array.from(str.toLowerCase())

    
    for(let i = 0; i < strArr.length; i++){
      if(strArr[i] in vowelCount){
        counter += 1;
      }
    }

    return counter;
}

// console.log(countVowels("saturday morning is fun"))

module.exports = countVowels;