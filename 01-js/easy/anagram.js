/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/


// sort letters in descending order


function sortString(str) {
  str = str.toLowerCase()
  newStr = Array.from(str);

  for (let i = 0; i < newStr.length; i++) {

    for (let j = newStr.length - 1; j > 0; j--) {
      if (newStr[i].charCodeAt(0) > newStr[j].charCodeAt(0)) {
        temp = newStr[i];
        newStr[i] = newStr[j];
        newStr[j] = temp;
      }

      if (j == newStr.length) {
        break;
      }

    }
  }
  return newStr.toString();
}

function isAnagram(str1, str2) {
  
  if (sortString(str1) === sortString(str2)) {
    return true
  } else {
    return false
  }
}

module.exports = isAnagram;
