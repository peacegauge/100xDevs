/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function reverseString(str) {
  let strArr = Array.from(str.toLowerCase().replaceAll(/[^\w?]/g, ''));

  let count = strArr.length - 1;

  for (let i = 0; i < (strArr.length / 2); i++) {
    let temp = strArr[i];
    strArr[i] = strArr[count];
    strArr[count] = temp;
    count--;
  }

  return strArr.join("")
}


function isPalindrome(str) {
  str = str.toLowerCase().replaceAll(/[^\w?]/g, '');
  if(str !== reverseString(str)){
    return false;
  }
  return true;

}


module.exports = isPalindrome;
