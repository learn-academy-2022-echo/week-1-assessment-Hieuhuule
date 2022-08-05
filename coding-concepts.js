// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
 console.log(cohort.length)

// a) Your answer: it will log 10
// b) Verify and explain: the .length built in method returns the number of characters in a string, to include spaces.


// --------------------2) What will this log?

const greeting = "Hello World!"
 console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: the console logged whatever element was at the 4th index of the greeting variable and since indexes start at 0, it was the element "o"


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
 console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: Arrays are indexed at zero and the value of the index variable is 1, so the element at the index of 1 in the languages array is "Ruby"


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: it will upcase every string character in the array weekendDays
// b) Verify and explain: TypeError. .toUpperCase is a function that works on strings and weekendDays is an array


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
 console.log(typeof dataTypes.length)

// a) Your answer: i think it will output number
// b) Verify and explain: the return of dataTypes.length is a number, so the type of would be a number
