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
// function findSeconWord(){
//     let senctence = "hello people";
// let secondWord = senctence.split(" ");

// console.log(secondWord[1]);
// }
// findSeconWord();



// 13. Censor a Word
// Replace all instances of a bad word like "dumb" in a string with "****".
//Solution
// let str = "There were a dumb fox and a dumb bunny";
// console.log(str);
// let formal = str.replaceAll("dumb","great");
// console.log(formal);

// 14. Count Words in Sentence
// Use .split() and .length to count how many words are in a sentence.
//Solution
// let sentence = "javascript is amazing language";
// let countWord = sentence.split(" ");

// console.log(`words in this sentence are: ${countWord.length}`);

// 15. Check if Word Exists
// Return true if a specific word (e.g., "cat") exists in a string using indexOf.
//Solution
// let animals = "dog cat wolf and fox";

// console.log(animals.includes("cat"));
// if(animals.includes("wolf")){
//     conosole.log("true");
// }else{
//     console.log("it does not include cat")
// }


// 16. Extract Domain from Email
// Given an email address, extract and return the domain name (everything after @).
//Solution
// let email = "abdul33333@gmail.com";
// let domain = email.slice(email.indexOf("@"), email.length);
// console.log(domain);


// 17. Reverse Words in Sentence
// Given a sentence, split it into words, reverse the array, and join it back into a string.
//Solution 
// let sentence = "i am the sentence";
// let splitedSetence = sentence.split(" ");
// console.log(splitedSetence);
// let reversedArr = splitedSetence.reverse();
// console.log(reversedArr);
// let joinedSentence = reversedArr.join(" ");
// console.log(joinedSentence);


// 18. Check Palindrome (Basic)
// Write a function that checks if a word is the same when reversed (ignore case).
//Solution
// function checkPalidrome(word){
//     const reversedWord = word.split("").reverse().join("");
//     return word === reversedWord;
// }
// console.log(checkPalidrome("her"));
// console.log(checkPalidrome("level"));


// 19. Count Vowels
// Count how many vowels are in a given string using a loop and charAt.
//Solution

//     let count = 0;
// let str = "vowels are here";
// let vowels  = "aeiouAEIOU";
// for(let i = 0; i < str.length; i++){
//     if(vowels.includes(str.charAt(i))){
//         count++
//     }
    
// }

// console.log(count)

// 20. Alternate Case Converter
// Convert a string to alternating case (e.g., "hello" → "HeLlO").
// a.
//Solution
// let str = "alternating case";
// let result = "";
// for(let i =0; i < str.length; i++){
//     if(i % 2 === 0){
//         result += str.charAt(i).toUpperCase();
//     }else{
//         result += str.charAt(i).toLowerCase();
//         }
// }

// console.log(result);


// 21. Title Casing a Sentence
// Convert a full sentence so that the first letter of each word is capitalized.
//Solution 
// let senctence = "i love javascript";
// let words = senctence.toLowerCase().split(" ");
// let result = [];
// for(let i = 0; i < words.length; i++){
//     let word = words[i];
//     result.push(word.charAt(0).toUpperCase() + word.slice(1));
  
// }
// result = result.join(" ")
// console.log(result)


// 22. Remove Duplicate Words
// Given a sentence, remove any repeated words (case-insensitive).
//Solution
// let senctence = "i love javascript love i";
// let words =  senctence.toLowerCase().split(" ");
// let unique = [];

// for(let i = 0; i< words.length; i++){
// if(!unique.includes(words[i])){
//     unique.push(words[i]);
// }
// }

// unique = unique.join(" ");
// console.log(unique);



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








// JavaScript Number Problems

// 1. Round a Number
// Round the number 4.7 using Math.round().
// 2. Ceil a Decimal
// Use Math.ceil() to round 5.3 up to the next whole number.
// 3. Floor a Decimal
// Use Math.floor() to round 8.9 down to the previous whole number.
// 4. Generate a Random Number (0–1)
// Create a function that returns a random number between 0 and 1 using
// Math.random().
// 5. Random Integer (0–9)
// Generate a random whole number between 0 and 9.
// 6. Random Integer (1–100)
// Generate a random integer between 1 and 100.
// 7. Convert String to Integer
// Use parseInt() to convert the string "42" into a number.
// 8. Convert String to Float
// Use parseFloat() to convert "3.14159" into a floating point number.
// 9. Round User Input
// Take a number from a form input, round it, and display the result on the page.
// 10. Dice Simulator
// Simulate a 6-sided dice roll (returns a number between 1 and 6).
// 11. Temperature Rounding
// Round a temperature value (e.g., 36.6) to the nearest integer using Math.round().

// 12. Ceil Shopping Price
// If the product price is $9.25, use Math.ceil() to charge the user $10.
// 13. Parse and Add
// Convert two string numbers like "10" and "5.5" using parseInt() and
// parseFloat() and add them.
// 14. Random Even Number (2–20)
// Generate a random even number between 2 and 20.
// 15. Check if Parsed Value is a Number
// Write a function that checks if parseInt(input) is a valid number (not NaN).
// 16. Round All Prices in Array
// Given an array of prices with decimals, return a new array with all prices rounded.
// 17. Simulate Coin Toss
// Use Math.random() to simulate a coin toss that returns "Heads" or "Tails".
// 18. Random Integer within Range (Min–Max)
// Create a function that returns a random integer between any two numbers (inclusive).
// 19. Extract Number from Text
// Use parseFloat() to extract the number from "Total: 45.90 USD".
// 20. Round to Nearest 0.5
// Given a decimal number, round it to the nearest 0.5 (e.g., 4.3 → 4.5, 4.1 → 4.0).