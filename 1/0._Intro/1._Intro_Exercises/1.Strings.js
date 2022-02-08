// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

    newOne = parseFloat(numberOne)
    newTwo = parseFloat(numberTwo)

    sum = newOne + newTwo

    console.log('Exercise 1: ' + sum)
// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

console.log('Exercise 2: ' + Number(sum).toFixed(2))


// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

avgArray = [one,two,three]
const reducer = (previousValue, currentValue) => previousValue + currentValue

console.log('Exercise 3: ' + avgArray.reduce(reducer).toFixed(5))

// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";

// Get me the character "c"

thirdChar = letters.charAt(2)

console.log('Exercise 4: ' + thirdChar)

// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript ??????????????????????????????????????????????????????????????

capiTheJ = fact.replace("j","J")

console.log('Exercise 5: ' + capiTheJ)

// --------------------------------------



