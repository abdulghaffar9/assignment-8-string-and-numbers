// JavaScript String Problems

// 1. Lowercase Name
// Write a function that takes a name as input and returns it all in lowercase.
//Solution
// function makeItLowerCase(){
//     let input = prompt("enter your name");
//     input = input.toLowerCase();
//     console.log(input);
//     return
// }

// makeItLowerCase();


// 2. Uppercase Shouting
// Convert a given string into uppercase to simulate shouting. Example: "hello" →
// "HELLO".
//Solution
// let str = "hello";
// str = str.toUpperCase();
// console.log(str);

// 3. Count Characters
// Given a string, return the number of characters in it.
//Solution
// let str = "Hello, my name is Abdul";
// strLength = str.length;
// console.log(strLength);



// 4. First Character
// Write a function that returns the first character of a string using charAt()
// Solution
// function firstChar(){
//     let str = "Hello Javascript";
//     console.log(str.charAt(0));
// }

// firstChar();



// 5. Last Character
// Return the last character of any string using .charAt() and .length.
//Solution
// let str = "hello world";

// let lastChar = str.charAt(str.length-1);
// console.log(lastChar);




// 6. Find Position of Word
// Given a sentence, find the position (index) of the word "apple" using indexOf.
// Solution
// let senctence = "an apple a day, keep the doctor away";

// let appleIndex = senctence.indexOf("apple");

// console.log(appleIndex);


// 7. Extract First Word
// Use slice() and indexOf() to extract the first word from a sentence.
//Solution
// let sentence = "hello, i love javascript";
// let indexofi = sentence.indexOf("i");
// console.log(indexofi);

// let extractedWord = sentence.slice(0,indexofi);
// console.log(extractedWord);

// 8. Replace a Word
// Replace the word "bad" with "good" in a given sentence using replace().
//Solution
// let str = "a bad company will make you bad";
// console.log(str);
// let replacedWord = str.replace("bad","good");
// console.log(replacedWord);

// 9. Replace All Vowels
// Replace all occurrences of vowels in a string with "*" using replaceAll().
// let str = "a bad company will make you bad";
// console.log(str);
// let replacedA = str.replaceAll("a","*");
// let replacedE = str.replaceAll("e","*");
// let replacedI = str.replaceAll("i","*");
// let replacedO = str.replaceAll("o","*");
// let replacedU = str.replaceAll("o","*");
// console.log(replacedA);
// console.log(replacedE)


// 10. Split Sentence into Words
// Convert a sentence into an array of words using split(" ").
//Solution
// let sentence = "hello, i am abdul";
// console.log(sentence);
// let wordArr = sentence.split(" ");
// console.log(wordArr);


// 11. Capitalize First Letter
// Capitalize only the first letter of a given word.
//Solution
// let str = "hello";
// console.log(str.charAt(0).toUpperCase());


// 12. Find Second Word
// Write a function that returns the second word of a sentence using split().
//Solution 
let senctence = "hello people";
let 


// 13. Censor a Word
// Replace all instances of a bad word like "dumb" in a string with "****".
// 14. Count Words in Sentence
// Use .split() and .length to count how many words are in a sentence.
// 15. Check if Word Exists
// Return true if a specific word (e.g., "cat") exists in a string using indexOf.
// 16. Extract Domain from Email
// Given an email address, extract and return the domain name (everything after @).
// 17. Reverse Words in Sentence
// Given a sentence, split it into words, reverse the array, and join it back into a string.
// 18. Check Palindrome (Basic)
// Write a function that checks if a word is the same when reversed (ignore case).
// 19. Count Vowels
// Count how many vowels are in a given string using a loop and charAt.
// 20. Alternate Case Converter
// Convert a string to alternating case (e.g., "hello" → "HeLlO").
// a.
// 21. Title Casing a Sentence
// Convert a full sentence so that the first letter of each word is capitalized.
// 22. Remove Duplicate Words
// Given a sentence, remove any repeated words (case-insensitive).
// 23. Mask Email Address
// Convert an email like john.doe@example.com to j***@example.com.
// 24. Find Most Frequent Word
// Return the word that appears most frequently in a paragraph.
// 25. Abbreviate a Full Name
// Given John Ronald Reuel Tolkien, return J.R.R.T. using split, charAt, and
// toUpperCase.
// 26. Check if Anagram
// Write a function that checks whether two strings are anagrams (same letters, different

// order).
// 27. Find All Word Positions
// Return all indices where a specific word occurs in a string (case-insensitive).
// 28. Reverse Each Word
// Given a sentence, reverse each word individually but keep them in the same order.
// 29. Smart Word Wrap
// Break a sentence into lines of a given character limit, wrapping on spaces (not in the
// middle of a word).
// 30. Find Longest Word
// Find and return the longest word in a sentence.
// 31. Censor Multiple Bad Words
// Given a list of bad words, replace each with "***" in a paragraph using replaceAll
// and a loop.
// 32. Detect Repeated Characters
// Return all characters that appear more than once in a string.
// 33. Compress Repeating Characters
// Convert "aaabbbcc" to "a3b3c2".
// 34. Check Password Strength
// Create a function that checks if a password string meets criteria (min 8 chars, contains
// number, uppercase, lowercase).
// 35. Extract Hashtags
// From a social media post, extract all words starting with #.
// 36. CamelCase Converter
// Convert a sentence like "make this camel case" to "makeThisCamelCase".
// 37. Parse CSV Line
// Given a CSV string like "name,age,email", return an array of values.
// 38. Custom Split Without Using split()
// Write a function that splits a string by a space character without using .split().

// 39. Format Phone Number
// Given a 10-digit string like "1234567890", return it in the format (123) 456-7890.
// 40. Detect Palindromes in Sentence
// Return all palindromic words in a sentence (e.g., "madam is at civic center" →
// ["madam", "civic"]).