// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
    // create a function that takes an argument of a number
    // have a conditional that determines if number is one of three conditions
    // have the conditions output a statement if it matches the stated criteria
    // console log the three test outputs

const temp1 = 42
const temp2 = 350
const temp3 = 212

    const boilingPoint = (temperature) => {
        if (temperature === 212) {
            return `${temperature} is at boiling point`
        } else if (temperature < 212) {
            return `${temperature} is below boiling point`
        } else if (temperature > 212) {
            return `${temperature} is above boiling point`
        }
    }
    console.log(boilingPoint(temp1))
    console.log(boilingPoint(temp2))
    console.log(boilingPoint(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:

    // create a function that merges two arrays into a new array using .concat()
    // return the length of the new array using .length
    // console log the output to see if it matches the expected output

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

    const joinArrayLength = (first, second) => {
        let combinedArray = first.concat(second)
        return combinedArray.length
    }
    console.log(joinArrayLength(myNumbers1, myNumbers2))


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
    // create a function that accepts a variable containing a string as an argument
    // split the string into a new array in order to use the reverse built in method
    // rejoin the array items back into a string
    // console log the output

const currentCohort = "Echo 2022"

    const stringReverse = (str) => {
        let splitArray = str.split("")
        splitArray.reverse()
        let rejoinedString = splitArray.join("")
        return rejoinedString
        }
    console.log(stringReverse(currentCohort))

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:

        // create a function which accepts an argument of an array
        // create a for loop which iterates through the array
        // within the loop create a conditional that will determine even or odd
        // create an array to push the results to
        // output the array

const myArray = [13, 34, 5, 10, 27, 42]

        const oddEvenArrays = (array) => {
            let results = []
            for (let i = 0; i < array.length; i++) {
                if (array[i] % 2 === 0) {
                    results.push("even")
                } else if (array[i] % 2 === 1) {
                    results.push("odd")
                } else {
                    return "That is not a number"
                }
            } return results
        }
        console.log(oddEvenArrays(myArray)) 


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:

    // create a function that accepts two numbers as arguments
    // create a new variable with the result of first - second
    // return results
    // outputs the results


// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const subtractFromFirst = (first, second) => {
    let results = first - second
    return results
}
console.log(subtractFromFirst(number1, number2))
console.log(subtractFromFirst(number3, number4))