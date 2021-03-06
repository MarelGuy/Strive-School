/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/

let test = "banana with sauce";
console.log(test);

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/

let sum = 10 + 20;
console.log(sum);

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/

let ran = Math.floor((Math.random() * 20) + 0);
console.log(ran);

/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/

let Me = {
  Name: "Loris",
  Surname: "Cuntreri",
  Age: "15",
  atbi: []
}
console.log(Me);
//atbi: array to be inserted

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/

delete Me.Age;
console.log(Me);

/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/

let skills = ["Go", "C++"];
Me.atbi.push(skills);
console.log(Me);

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/

skills.splice(-1, 1);
console.log(Me);

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/

const Dice = () => Math.floor((Math.random() * 6) + 1);

console.log(Dice(6, 1));

/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/

let x = 5;
let y = 9;

function wis() {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

console.log(wis(x, y));

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/

let string = "banana with sauce";

function SplitMe() {
  return string.split(" ");
}
console.log(SplitMe(string));
/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/
let str = "humpback";

function DeleteOne() {
  if (str === true) {
    return str.slice(1, -1);
  } else {
    return str.substring(1);
  }
}

console.log(DeleteOne(str));
/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
let nstr = "i like 12 trains"
let anstr = [];
let array = nstr.split(" ");

function OnlyLetters3() {

  for (let i = 0; i < array.length; i++) {
    if (!array[i].match(/^[0-9]+$/)) {
      anstr.push(array[i]);
    }
  }

  return anstr;
}

console.log(OnlyLetters3(anstr));

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/

const IsThisAnEmail = (email) => {
  let validation = /\S+@\S+\.\S+/;

  return validation.test(email);
};

console.log("This is an e-Mail: ", IsThisAnEmail("epicari66@ymail.com"));
console.log("This is not an e-Mail: ", IsThisAnEmail("epicari66"));


/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WhatDayIsIt = () => {
  const now = new Date();
  return daysOfWeek[now.getDay() - 1];
};

console.log(WhatDayIsIt());

/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

function dieroll() {
  var result = [];
  for (var i = 0; i < 3; i++) {
    result.push(Math.floor(Math.random() * 6 + 1));
  }
  return result;
}
console.log(dieroll());

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/



/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

Age = function () {
  var e, o;
  return (
    (renderAgeLoop = function () {
      setInterval(renderAge, 100);
    }),
    (renderAge = function () {
      var n = 762498000000, //milliseconds between Jan 01 1970 00:00:00 and Mar 31 1994 00:00:00
        r = new Date(),
        t = r - n,
        a = t / 31556900000; //milliseconds in a year
      (e = $("#major")), (o = $("#minor"));
      var i = a.toFixed(9).toString().split(".");

      var d = new Date();
      console.log(d.toUTCString());

      e.text(i[0]), o.text(i[1]);
    }), {
      renderAgeLoop: renderAgeLoop,
    }
  );
};


/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/

const CountMovies = () => movies.length;

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the title and another array "nonMatch" with the other movies
*/

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

function Tree(h) {
  for (var i = 0; i <= h; i++) {
    var star = "";
    for (var k = 1; k <= h - i; k++) {
      star += " ";
    }
    for (var j = 0; j <= i; j++) {
      star += " *";
    }
    console.log(star);
  }
}

Tree(2);

/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/

function Tree(h) {
  for (var i = 0; i <= h; i++) {
    var star = "";
    for (var k = 1; k <= h - i; k++) {
      star += " ";
    }
    for (var j = 0; j <= i; j++) {
      star += " *";
    }
    console.log(star);
  }
}

Tree(2);

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/

let n = 5;

function IsItPrime() {

  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}

console.log(IsItPrime(n));

/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [{
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];