// Reverse an Array

// Write a function to reverse an array.
const reverse = (arr) => arr.reverse();
// Examples
console.log(reverse([ 1, 2, 3, 4 ])); // [4, 3, 2, 1]

console.log(reverse([ 9, 9, 2, 3, 4 ])); // [4, 3, 2, 9, 9]

console.log(reverse([])); // []
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Word Endings

// Create a function that adds a string ending to each member in an array.

const addEnding = (wordsArr, suffix) => wordsArr.map((word) => word + suffix);

//   Examples
console.log(addEnding([ 'clever', 'meek', 'hurried', 'nice' ], 'ly')); //["cleverly", "meekly", "hurriedly", "nicely"]
console.log(addEnding([ 'new', 'pander', 'scoop' ], 'er')); //["newer", "panderer", "scooper"]
console.log(addEnding([ 'bend', 'sharpen', 'mean' ], 'ing')); //["bending", "sharpening", "meaning"]
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Secret Society

// A group of friends have decided to start a secret society.The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.
// Notes

// The secret society's name should be entirely uppercased.

const societyName = (friends) => friends.map((friend) => friend[0]).sort().join('');
// 	Examples

console.log(societyName([ 'Adam', 'Sarah', 'Malcolm' ])); // "AMS"

console.log(societyName([ 'Harry', 'Newt', 'Luna', 'Cho' ])); // "CHLN"

console.log(societyName([ 'Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey' ])); // "CJMPRR"
// Sort Words by a String

// Create a function that sorts words by a given string.
// Notes

// The string may have excess letters(see examples #1 and #2).
// There will be unique starting letters in each array.
const sortByString = (arr, str) => arr.sort(([ a ], [ b ]) => str.indexOf(a) - str.indexOf(b));

// 	Examples

console.log(sortByString([ 'apple', 'banana', 'cherry', 'date' ], 'dbca'));
//["date", "banana", "cherry", "apple"]

console.log(sortByString([ 'small', 'big', 'medium' ], 'sazymtb'));
//["small", "medium", "big"]

console.log(sortByString([ 'poof', 'floof', 'loop' ], 'flatp'));
//["floof", "loop", "poof"]

// Hitting the Jackpot

// Create a function that takes in an array(slot machine outcome) and returns true if all elements in the array are identical, and false otherwise.The array will contain 4 elements.
// Notes

// The elements must be exactly identical for there to be a jackpot.
const testJackpot = (result) => !result.map((wheel) => wheel === result[0]).includes(false);
// 	Examples

console.log(testJackpot([ '@', '@', '@', '@' ])); // true

console.log(testJackpot([ 'abc', 'abc', 'abc', 'abc' ])); // true

console.log(testJackpot([ 'SS', 'SS', 'SS', 'SS' ])); // true

console.log(testJackpot([ '&&', '&', '&&&', '&&&&' ])); // false

console.log(testJackpot([ 'SS', 'SS', 'SS', 'Ss' ])); // false

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Add up the Numbers from a Single Number

// Create a function that takes a number as an argument.Add up all the numbers from 1 to the number you passed to the function.For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
const addUp = (num) => num * (num + 1) / 2;

// Examples
console.log(addUp(4)); // 10

console.log(addUp(13)); // 91

console.log(addUp(600)); // 180300
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Check if an Integer is Divisible By Five

// Create a function that returns true if an integer is divisible by 5, and false otherwise.

// Notes

// Don't forget to return the result.

const divisibleByFive = (n) => n % 5 === 0;

//     Examples
console.log(divisibleByFive(5)); // true
console.log(divisibleByFive(-55)); // true
console.log(divisibleByFive(27)); // false

// Is the Number Less than or Equal to Zero ?

//     Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Notes

// Don't forget to return the result.
// You can expect a valid number for every test case.
const lessThanOrEqualToZero = (n) => n <= 0;

// Examples
console.log(lessThanOrEqualToZero(5)); // false
console.log(lessThanOrEqualToZero(0)); // true
console.log(lessThanOrEqualToZero(-2)); // true
console.log(lessThanOrEqualToZero(1)); // false
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Find the Index

// Create a function that takes an array and a string as arguments and return the index of the string.
// Notes

// Don't forget to return the result.
// All tests contain valid numbers.
const find_index = (arr, str) => arr.indexOf(str);

//     Examples
console.log(find_index([ 'hi', 'edabit', 'fgh', 'abc' ], 'fgh')); // 2

console.log(find_index([ 'Red', 'blue', 'Blue', 'Green' ], 'blue')); // 1

console.log(find_index([ 'a', 'g', 'y', 'd' ], 'd')); // 3

console.log(find_index([ 'Pineapple', 'Orange', 'Grape', 'Apple' ], 'Pineapple')); // 0

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Amplify the Multiples of 4

// Create a function that takes an integer and returns an array from 1 to the given number, where:

// If the number can be divided evenly by 4, amplify it by 10(i.e.return 10 times the number).
// If the number cannot be divided evenly by 4, simply return the number.

// Notes

// The given integer will always be equal to or greater than 1.
// Include the number(see example above).
const amplify = (num) => {
	const result = [];
	for (i = 1; i <= num; i++) {
		result.push(i % 4 === 0 ? i * 10 : i);
	}
	return result;
};

//     Examples
console.log(amplify(4)); // [1, 2, 3, 40]
console.log(amplify(3)); // [1, 2, 3]
console.log(amplify(25)); // [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// H4ck3r Sp34k

// Create a function that takes a string as an argument and returns a coded(h4ck3r 5p34k) version of the string.

// Notes

// In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
const hackerSpeak = (str) => {
	const chars = { a: '4', e: '3', i: '1', o: '0', s: '5' };
	return (str = str.replace(/[aeios]/gi, (letter) => chars[letter]));
};

//     Examples
console.log(hackerSpeak('javascript is cool')); //  "j4v45cr1pt 15 c00l"
console.log(hackerSpeak('programming is fun')); //  "pr0gr4mm1ng 15 fun"
console.log(hackerSpeak('become a coder')); //  "b3c0m3 4 c0d3r"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Flatten an Array

// Create a function that takes an array.This array can have all kinds of items, even other arrays.The function should return a single, flat, one - dimensional, array with all elements.Here are the conditions:

// If the item is an Array, include each item in it and the following still apply:
// If the item is a Function, include the function's output, not the function itself.
// If the item is a plain Object or a Primitive, include it as is.
// Notes

function flattenArray(arr) {
	let results = [];
	if (arr === undefined) {
		return results;
	}
	arr.forEach(function(e) {
		if (Array.isArray(e)) {
			results = results.concat(flattenArray(e));
		} else {
			if (typeof e === 'function') {
				results.push(e());
			} else {
				results.push(e);
			}
		}
	});
	return results;
}
// If no input is given it should return an empty array: [].

//     Examples
console.log(
	flattenArray([
		1,
		'2',
		[
			3,
			function() {
				return 4;
			},
			[ 'five' ],
			'six',
			true,
			{ prop: 'val' }
		]
	])
); // [1, "2", 3, 4, "five", "six", true, { prop: "val" }]
console.log(flattenArray([ 1, 2, [ 3, [ 4, 5 ], 6 ], 7, 8 ])); // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(flattenArray()); // []

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Reverse the Case

// Given a string, create a function to reverse the case.All lower - cased letters should be upper - cased, and vice versa.
// 	Examples
const reverseCase = (str) =>
	str.replace(/[^\.]/g, (letter) => (letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()));
// str
// 	.split('')
// 	.map((letter) => (letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()))
// 	.join('');

console.log(reverseCase('Happy Birthday')); //  "hAPPY bIRTHDAY"

console.log(reverseCase('MANY THANKS')); //  "many thanks"

console.log(reverseCase('sPoNtAnEoUs')); //  "SpOnTaNeOuS"

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Find the Shortest Word(s) in a Sentence

// Create a function that accepts a string as an argument.Find its shortest word(s) and return them as an array sorted alphabetically(if there are multiple shortest words).
// Rules

// Periods, commas and other special characters don't count as part of a word's length.
// Return words in lowercase only.
// Sort words alphabetically.

// Notes

// Remember to sort the array of words alphabetically before returning your result.
const findShortestWords = (str) => {
	let arr = str.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/);
	let lowest = Math.min(...arr.map((x) => x.length));
	return arr.filter((x) => x.length === lowest).sort();
};
// 	Examples

console.log(findShortestWords('The quick brown fox jumped over the lazy dogs back.')); // ["fox", "the", "the"]

console.log(findShortestWords('I think the solution is fairly obvious.')); // ["i"]

console.log(findShortestWords('Chase two rabbits, catch none.')); // ["two"]

console.log(findShortestWords('We become what we think about.')); // ["we", "we"]
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Is Johnny Making Progress ?

// 	To train for an upcoming marathon, Johnny goes on one long - distance run each Saturday.He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday.This is called a progress day.

// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
// Notes

// Running the same number of miles as last week does not count as a progress day.
// Examples
const progressDays = (runs) => runs.filter((e, i, a) => e < a[i + 1]).length;

console.log(progressDays([ 3, 4, 1, 2 ])); // 2
// There are two progress days, (3->4) and (1->2)

console.log(progressDays([ 10, 11, 12, 9, 10 ])); // 3

console.log(progressDays([ 6, 5, 4, 3, 2, 9 ])); // 1

console.log(progressDays([ 9, 9 ])); // 0

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Count Instances of a Character in a String

// Create a function that takes two strings as arguments and returns the number of times the first string is found in the second string.
// Notes

// Your output must be case -sensitive(see second example).
const charCount = (myChar, str) => [ ...str ].filter((x) => x === myChar).length;
// 	Examples

console.log(charCount('a', 'Omar')); // 1
console.log(charCount('c', 'Chamber of secrets')); // 2
console.log(charCount('b', 'big fat bubble')); // 4

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Vowel Replacer

// Create a function replaces all the vowels in a string with a specified character.
// Notes
// All characters will be in lower case.
const replaceVowels = (str, v) => str.replace(/[aeiou]/gi, v);

// 	Examples
console.log(replaceVowels('the aardvark', '#')); // "th# ##rdv#rk"
console.log(replaceVowels('minnie mouse', '?')); // "m?nn?? m??s?"
console.log(replaceVowels('shakespeare', '*')); // "sh*k*sp**r*"
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // First and Last Index

// // Given a word, write a function that returns the first index and the last index of a character.
// // Notes

// // If the character does not exist in the word, return undefined.
// // If only one instance of the character exists, the first and last index will be the same.

// // 	Examples

// charIndex("hello", "l") ➞[2, 3]
// // The first "l" has index 2, the last "l" has index 3.

// charIndex("circumlocution", "c") ➞[0, 8]
// // The first "c" has index 0, the last "c" has index 8.

// charIndex("happy", "h") ➞[0, 0]
// // Only one "h" exists, so the first and last index is 0.

// charIndex("happy", "e") ➞ undefined
// // "e" does not exist in "happy", so we return undefined.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Is the Number Even or Odd ?

// 	Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.
// Notes

// Dont forget to return the result.
// Input will always be a valid integer.
// Expect negative integers(whole numbers).
// Tests are case sensitive(return "even" or "odd" in lowercase).
// 		Examples
const isEvenOrOdd = (n) => (n % 2 == 0 ? 'even' : 'odd');

console.log(isEvenOrOdd(3)); // "odd"

console.log(isEvenOrOdd(146)); // "even"

console.log(isEvenOrOdd(19)); // "odd"
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Frequency Distribution

// // Create a function that returns the frequency distribution of an array.This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.
const getFrequencies = (arr) =>
	arr.reduce((ret, item) => Object.assign(ret, ret[item] ? ret[item]++ : (ret[item] = 1)), {});
// const getFrequencies = (arr) =>
// 	arr.reduce((map, item) => {
// 		map[item] = map[item] + 1 || 1;
// 		return map;
// 	}, {});

// 	Examples

console.log(getFrequencies([ 'A', 'B', 'A', 'A', 'A' ])); // { A: 4, B: 1 }

console.log(getFrequencies([ 1, 2, 3, 3, 2 ])); // { "1": 1, "2": 2, "3": 2 }

console.log(getFrequencies([ true, false, true, false, false ])); // { true: 2, false: 3 }
console.log(getFrequencies([])); // { }

// Notes

// If given an empty array, return an empty object(see example #4).
// The object should be in the same order as in the input array.
isSpecialArray = (arr) =>
	arr
		.map(
			(number, index) =>
				number % 2 == 0 && index % 2 == 0 ? true : number % 2 !== 0 && index % 2 !== 0 ? true : false
		)
		.includes(!false);

console.log(isSpecialArray([ 2, 7, 4, 9, 6, 1, 6, 3 ])); // true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

console.log(isSpecialArray([ 2, 7, 9, 1, 6, 1, 6, 3 ])); // false
// Index 2 has an odd number 9.

console.log(isSpecialArray([ 2, 7, 8, 8, 6, 1, 6, 3 ])); // false
// Index 3 has an even number 8.
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Is the Number Symmetrical ?

// 	Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not.A number is symmetrical when it is the same as its reverse.
// 		Examples
const isSymmetrical = (n) => n.toString() == n.toString().split('').reverse().join('');
console.log(isSymmetrical(7227)); // true

console.log(isSymmetrical(12567)); // false

console.log(isSymmetrical(44444444)); // true

console.log(isSymmetrical(9939)); // false

console.log(isSymmetrical(1112111)); // true
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Spelling it Out

// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.
const spelling = (str) => str.split('').map((c, i) => str.slice(0, i + 1));
// 	Examples

console.log(spelling('bee')); //["b", "be", "bee"]

console.log(spelling('happy')); //["h", "ha", "hap", "happ", "happy"]

console.log(spelling('eagerly')); //["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Find and Format the phone number.

// Create a function which takes in a string of characters, and returns a cleaned and formatted phone number.
// Notes:
// The input string can be include ASCII character.
// Proper Number Format: (123)456-7890
const formatPhone = (x) => x.replace(/[^\d]/g, '').replace(/(\d{3})(\d{3})(\d{4})/gi, '($1) $2-$3');

console.log(formatPhone('hello Jim, My number is 1234567890 it is so cool I can reach in here pull that out.')); // (123) 456-7890
console.log(formatPhone('hello Jim, My number is 321.654.4589 it is so cool I can reach in here pull that out.')); //(321) 654-4589
console.log(formatPhone('hello Jim, My number is 143 454 7160 it is so cool I can reach in here pull that out.')); //(143) 454-7160
console.log(formatPhone('hello Jim, My number is (1234(567890 it is so cool I can reach in here pull that out.')); // (123) 456-7890
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// How Many Vowels ?

// 	Create a function that takes a string and returns the number(count) of vowels contained within it.
// Notes

// a, e, i, o, u are considered vowles(not y).
// All test cases are one word and only contain letters.
const countVowels = (str) => str.match(/[aeiou]/gi).length;
// const countVowels = (str) => str.split('').filter((letter) => /[aeiou]/gi.test(letter)).length;
// 		Examples

console.log(countVowels('Celebration')); //5

console.log(countVowels('Palm')); //1

console.log(countVowels('Prediction')); //4
