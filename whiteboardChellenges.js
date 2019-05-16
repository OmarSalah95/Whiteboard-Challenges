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
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
