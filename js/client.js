
// Number Achievements

// Initial number value
let number = 100;
console.log("Before", number);

// Increment or decrement a number using ++/--;
number++;
console.log("After - increment =", number);

// Convert a number to a string with Number.toString();
const number1 = number.toString();
console.log("After - convert number to string =", number1);

// Convert a number or string to an integer with Number.parseInt();
const strNumber = "98.5";
const number2 = parseInt(strNumber);
console.log("Before", strNumber)
console.log("After - convert string to integer =", number2);



// String Achievements

// Initial string value
const email = "deoj.abcdef@gmail.com";
console.log("Before", email);

// Show the first index of a word that can be found in your string with String.indexOf();
const string1 = email.indexOf('o');
console.log("After - first index of 'o' =", string1);

// Show a sub-string of your string with String.slice();
const string2 = email.slice(0, 4);
console.log("After - slice(0, 4) =", string2);

// Show a sub-string of your string with String.substr() or String.substring();
const string3 = email.substr(5, 10);
console.log("After - substr(5, 10) =", string3);