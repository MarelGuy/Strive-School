/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/
function area(l1, l2) {
    return l1 * l2;
}

console.log(area(5, 8));
/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

let x1 = 5;
let x2 = 5;

function crazySum(x1, x2) {
    if (x1 === x2) {
        return 3 * (x1 + x2);
    } else {
        return "banana";
    }
}
console.log(crazySum(x1, x2))

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

let n = 22;

function crazyDiff(n) {
    if (n <= 19) {
        return (19 - n);
    } else {
        return (n - 19) * 3;
    }
}
console.log(crazyDiff(n))

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

/* WRITE YOUR CODE HERE */

function boundary(int) {
    return (20 < int && int <= 100 || int === 400 ? true : false);
}

console.log(boundary(500));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

/* WRITE YOUR CODE HERE */

function strivify(s) {

    const result = `strive${s}`
    if (s.startsWith("Strive")) {
        return s
    } else {
        return result
    }

}
console.log(strivify("s"));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

function check3and7() {

}

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

const reverseString = (s) => {
    return s.split("").reverse().join("").toLowerCase();
};
console.log(reverseString("Dame da ne. Dame yo, dame na no yo."));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

/* WRITE YOUR CODE HERE */

const giveMeRandom = (n) => {
    let arrayN = [];
    for (i = 0; i <= n; i++) {
        arrayN.push(Math.floor(Math.random() * 10 + 0));
    }
    return arrayN;
};
console.log(giveMeRandom(5));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/