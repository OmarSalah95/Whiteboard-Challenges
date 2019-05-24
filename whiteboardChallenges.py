# Reverse an List

# Write a function to reverse an list.


def reverse(lst): return lst[::-1]


# Examples
print("exercise 1")
print(reverse([1, 2, 3, 4]))  # [4, 3, 2, 1]
print(reverse([9, 9, 2, 3, 4]))  # [4, 3, 2, 9, 9]
print(reverse([]))  # []
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Word Endings

# Create a function that adds a string ending to each member in an array.


def addEnding(lst, ending): return [word + ending for word in lst]


# Examples
print("exercise 2")

print(addEnding(['clever', 'meek', 'hurried', 'nice'], 'ly'))# ["cleverly", "meekly", "hurriedly", "nicely"]"]
print(addEnding(['new', 'pander', 'scoop'], 'er'))# ["newer", "panderer", "scooper"]
print(addEnding(['bend', 'sharpen', 'mean'], 'ing'))# ["bending", "sharpening", "meaning"]
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# A group of friends have decided to start a secret society.The name will be the first letter of each of their names, sorted in alphabetical order.

# Create a function that takes in an array of names and returns the name of the secret society.
# Notes

# The secret society's name should be entirely uppercased.

def societyName(friends):
    ssName = ""
    for friend in friends:
        ssName += friend[0]
    return "".join(sorted(ssName))

# Examples
print("exercise 3")
print(societyName(['Adam', 'Sarah', 'Malcolm']))  # "AMS"

print(societyName(['Harry', 'Newt', 'Luna', 'Cho']))  # "CHLN"

print(societyName(['Phoebe', 'Chandler', 'Rachel',
                   'Ross', 'Monica', 'Joey']))  # "CJMPRR"
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Sort Words by a String

# Create a function that sorts words by a given string.
# Notes

# The string may have excess letters(see examples #1 and #2).
# There will be unique starting letters in each array.


# def sortByString(arr, str) = > arr.sort(([a], [b])= > str.indexOf(a) - str.indexOf(b))

# 	Examples
print("exercise 4")

# print(sortByString(['apple', 'banana', 'cherry', 'date'], 'dbca'))# ["date", "banana", "cherry", "apple"]

# print(sortByString(['small', 'big', 'medium'], 'sazymtb'))# ["small", "medium", "big"]

# print(sortByString(['poof', 'floof', 'loop'], 'flatp'))# ["floof", "loop", "poof"]
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Hitting the Jackpot

# Create a function that takes in an array(slot machine outcome) and returns true if all elements in the array are identical,
# and false otherwise.The array will contain 4 elements.
# Notes

# The elements must be exactly identical for there to be a jackpot.


# def testJackpot(result): return list(map(lambda wheel: wheel=True if wheel == result[0] else wheel=False, result))


print("exercise 5")
# 	Examples


# print(testJackpot(['@', '@', '@', '@']))  # true

# print(testJackpot(['abc', 'abc', 'abc', 'abc']))  # true

# print(testJackpot(['SS', 'SS', 'SS', 'SS']))  # true

# print(testJackpot(['&&', '&', '&&&', '&&&&']))  # false

# print(testJackpot(['SS', 'SS', 'SS', 'Ss']))  # false

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Add up the Numbers from a Single Number

# Create a function that takes a number as an argument.Add up all the numbers from 1 to the number you passed to the function.For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 410.


# def addUp(num): return [for i in range(1, num)]


# Examples
print("exercise 6")
# print(addUp(4))  # 10

# print(addUp(13))  # 91

# print(addUp(600))  # 180300
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Check if an Integer is Divisible By Five

# Create a function that returns true if an integer is divisible by 5, and false otherwise.

# Notes

# Don't forget to return the result.


def divisibleByFive(n): return n % 5 == 0


#     Examples
print("exercise 7")
print(divisibleByFive(5))  # true
print(divisibleByFive(-55))  # true
print(divisibleByFive(27))  # false

# Is the Number Less than or Equal to Zero ?

#     Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

# Notes

# Don't forget to return the result.
# You can expect a valid number for every test case.


def lessThanOrEqualToZero(n): return n <= 0


# Examples
print("exercise 8")
print(lessThanOrEqualToZero(5))  # false
print(lessThanOrEqualToZero(0))  # true
print(lessThanOrEqualToZero(-2))  # true
print(lessThanOrEqualToZero(1))  # false
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Find the Index

# Create a function that takes an array and a string as arguments and return the index of the string.
# Notes

# Don't forget to return the result.
# All tests contain valid numbers.


# def find_index(arr, str):

#     Examples
print("exercise 9")
# print(find_index([ 'hi', 'edabit', 'fgh', 'abc' ], 'fgh')); # 2
# print(find_index([ 'Red', 'blue', 'Blue', 'Green' ], 'blue')); # 1
# print(find_index([ 'a', 'g', 'y', 'd' ], 'd')); # 3
# print(find_index([ 'Pineapple', 'Orange', 'Grape', 'Apple' ], 'Pineapple')); # 0

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# Amplify the Multiples of 4

# Create a function that takes an integer and returns an array from 1 to the given number, where:

# If the number can be divided evenly by 4, amplify it by 10(i.e.return 10 times the number).
# If the number cannot be divided evenly by 4, simply return the number.

# Notes

# The given integer will always be equal to or greater than 1.
# Include the number(see example above).


def amplify(num): return [x*10 if x % 4 == 0 else x for x in range(1, num+1)]


#     Examples
print("exercise 10")
print(amplify(4))  # [1, 2, 3, 40]
print(amplify(3))  # [1, 2, 3]
# [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
print(amplify(25))
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# H4ck3r Sp34k

# Create a function that takes a string as an argument and returns a coded(h4ck3r 5p34k) version of the string.

# Notes

# In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.


def hackerSpeak(txt): return txt.translate(str.maketrans('aeios', '43105'))


#     Examples
print("exercise 11")
print(hackerSpeak('javascript is cool'))  # "j4v45cr1pt 15 c00l"
print(hackerSpeak('programming is fun'))  # "pr0gr4mm1ng 15 fun"
print(hackerSpeak('become a coder'))  # "b3c0m3 4 c0d3r"

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Flatten an Array

# Create a function that takes an array.This array can have all kinds of items, even other arrays.The function should return a single, flat, one - dimensional, array with all elements.Here are the conditions:

# If the item is an Array, include each item in it and the following still apply:
# If the item is a Function, include the function's output, not the function itself.
# If the item is a plain Object or a Primitive, include it as is.
# Notes

# function flattenArray(arr) {
# 	let results[];
# 	if (arr === undefined) {
# 		return results;
# 	}
# 	arr.forEach(function(e) {
# 		if (Array.isArray(e)) {
# 			resultsresults.concat(flattenArray(e));
# 		} else {
# 			if (typeof e === 'function') {
# 				results.push(e());
# 			} else {
# 				results.push(e);
# 			}
# 		}
# 	});
# 	return results;
# }
# If no input is given it should return an empty array: [].

#     Examples
print("exercise 12")
# print(
# 	flattenArray([
# 		1,
# 		'2',
# 		[
# 			3,
# 			function() {
# 				return 4;
# 			},
# 			[ 'five' ],
# 			'six',
# 			true,
# 			{ prop: 'val' }
# 		]
# 	])
# ); # [1, "2", 3, 4, "five", "six", true, { prop: "val" }]
# print(flattenArray([ 1, 2, [ 3, [ 4, 5 ], 6 ], 7, 8 ])); # [1, 2, 3, 4, 5, 6, 7, 8]
# print(flattenArray()); # []

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# Reverse the Case

# Given a string, create a function to reverse the case.All lower - cased letters should be upper - cased, and vice versa.
# 	Examples
# def reverseCase(str) =>
# 	str.replace(/[^\.]/g, (letter) => (letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()));
# str
# 	.split('')
# 	.map((letter) => (letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()))
# 	.join('');
print("exercise 13")
# print(reverseCase('Happy Birthday')); #  "hAPPY bIRTHDAY"

# print(reverseCase('MANY THANKS')); #  "many thanks"

# print(reverseCase('sPoNtAnEoUs')); #  "SpOnTaNeOuS"

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Find the Shortest Word(s) in a Sentence

# Create a function that accepts a string as an argument.Find its shortest word(s) and return them as an array sorted alphabetically(if there are multiple shortest words).
# Rules

# Periods, commas and other special characters don't count as part of a word's length.
# Return words in lowercase only.
# Sort words alphabetically.

# Notes

# Remember to sort the array of words alphabetically before returning your result.
# def findShortestWords(str) => {
# 	let arrstr.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/);
# 	let lowestMath.min(...arr.map((x) => x.length));
# 	return arr.filter((x) => x.length === lowest).sort();
# };
# 	Examples
print("exercise 14")
# print(findShortestWords('The quick brown fox jumped over the lazy dogs back.')); # ["fox", "the", "the"]

# print(findShortestWords('I think the solution is fairly obvious.')); # ["i"]

# print(findShortestWords('Chase two rabbits, catch none.')); # ["two"]

# print(findShortestWords('We become what we think about.')); # ["we", "we"]
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Is Johnny Making Progress ?

# 	To train for an upcoming marathon, Johnny goes on one long - distance run each Saturday.He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday.This is called a progress day.

# Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.
# Notes

# Running the same number of miles as last week does not count as a progress day.
# Examples
print("exercise 15")
# def progressDays(runs) => runs.filter((e, i, a) => e < a[i + 1]).length;

# print(progressDays([ 3, 4, 1, 2 ])); # 2
# There are two progress days, (3->4) and (1->2)

# print(progressDays([ 10, 11, 12, 9, 10 ])); # 3

# print(progressDays([ 6, 5, 4, 3, 2, 9 ])); # 1

# print(progressDays([ 9, 9 ])); # 0
