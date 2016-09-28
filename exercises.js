// Calculate the max of two numbers
//
// num1, num2:  numbers to compare
//
// Returns the larger
function max(num1, num2){
    "use strict";
    return num1 > num2 ? num1 : num2;
}
console.assert(max(15,2)==15);
console.assert(max(-10,0)==0);

// Calculate the max of three numbers
//
// num1, num2, num3:  numbers to compare
//
// Returns the largest
function maxOfThree(num1, num2, num3) {
   "use strict";
   return max(max(num1,num2),num3);
}
console.assert(maxOfThree(15,2,100)===100);
console.assert(maxOfThree(-10,0,10)===10);

// Determine if a character is a vowel
//
// char:  single character
//
// Returns true if it is a vowel, false otherwise
function isVowel(char){
    "use strict";
    return 'aeiouAEIOU'.includes(char);
}
console.assert(isVowel('c')==false);
console.assert(isVowel('a')==true);

// Translate a text into "rövarspråket"
// – double every consonant and place 'o' in between
//
// requires function isVowel(char)
//
// phrase:  a string to be translated
//
// Returns translated string
function rovarspraket(phrase){
    "use strict";
    var translatedString = new String();
    for(var i=0; i< phrase.length; i++) {
      var char = phrase[i];
      if(isVowel(char) || ' ' == char)  translatedString += char;
      else  translatedString = translatedString + (char + 'o' + char);
   }
    return translatedString;
}
console.assert(rovarspraket('x') == "xox");
console.assert(rovarspraket('e') == 'e');
console.assert(rovarspraket("testing") == "totesostotinongog");
console.assert(rovarspraket("this is fun") == "tothohisos isos fofunon");

// Sum all the numbers in an array
//
// numArray: an array of numbers
//
// Returns the sum of the numbers in numArray
function sum(numArray){
    "use strict";
    var i, sum;
    for(i=0, sum=0; i<numArray.length; i++)
      sum += numArray[i];
   return sum;
}
console.assert(sum([1,2,3,4]) == 10);
console.assert(sum([10,-5,0,1]) == 6);

// Multiply all the numbers in an array
//
// numArray: an array of numbers
//
// Returns the product of the numbers in numArray
function multiply(numArray){
    "use strict";
     var i, product;
    for( i=0, product=1; i<numArray.length; i++)
      product *= numArray[i];
   return product;
}
console.assert(multiply([1,2,3,4]) == 24);
console.assert(multiply([10,-5,0,1]) == 0);

// Compute the reversal of a string
//
// phrase: string to be reversed
//
// Returns the reversed string
function reverse(phrase){
    "use strict";
    // breaks string into array to use reverse()
    var newString = phrase + '';
    return newString.split('').reverse().join('');
}
console.assert(reverse("bear" == "raeb"));
console.assert(reverse("123 abc" == "cba 321"));

// Determine the length of the longest word;
//
// words:  an array of words
//
// Returns the length of the longest word
function findLongestWord(words){
    "use strict";
    var longest = 0;
    for(var i=0; i < words.length; i++)
      longest = max(longest, words[i].length);
    return longest;
}
console.assert(findLongestWord(['one','two','three','four']) == 5);
console.assert(findLongestWord(['a','ab','abcd','abcdefg']) == 7);

// Filter words of a set size from an array
//
// words:  an array of words
// i:  integer for max length of words to filter
//
// Returns array of words that are longer than i
function filterLongWords(words, i){
    "use strict";
    var longWords = new Array();
    for(var j=0; j<words.length; j++)
      if(words[j].length > i)
         longWords.push(words[j]);
   return longWords;
}
console.assert(filterLongWords(['a','abcdefg','ab','abcd'], 3).length == 2);
console.assert(filterLongWords(['a','abcdef','ab','abcd'], 3)[0] == 'abcdef');

// Count frequency of a character in a string
//
// string: a string
//
// Returns an object with a character count for each
// character appearing in the string
function charFreq(string){
    "use strict";
    var freqObj = {};
    for(var i=0; i<string.length; i++)
      if(!freqObj[string[i]])  freqObj[string[i]] = 1;
      else  ++freqObj[string[i]];
   return freqObj;
}
console.assert(charFreq("abbabcbdbabdbdbabababcbcbab").a == 7);
console.assert(charFreq("bear").r == 1);
