/*eslint-env browser*/
//STEP 1
/*var names = ["stepbrothers", "Lord of the Rings", "batman", "Wonder Woman", "titanic"];
window.console.log(names[0]);
*/

//STEP 2
/*var movies = new Array(5);
movies[0] = "stepbrothers";
movies[1] = "Lord of the Rings";
movies[2] = "batman";
movies[3] = "Wonder Woman";
movies[4] = "titanic";
window.console.log(movies[0]);*/

//STEP 3
/*var movies = new Array(5);
movies[0] = "stepbrothers";
movies[1] = "Lord of the Rings";
movies[2] = "batman";
movies[3] = "Wonder Woman";
movies[4] = "titanic";
movies[movies.length] = "pink panther";
window.console.log(movies.length);
*/

//STEP 4
/*var movies = [];
movies[0] = "stepbrothers";
movies[1] = "Lord of the Rings";
movies[2] = "batman";
movies[3] = "Wonder Woman";
movies[4] = "titanic";
delete movies[0];
window.console.log(movies);
*/


//STEP 5
/*var movies = ["stepbrothers", "Lord of the Rings", "batman", "Wonder Woman", "titanic", "the smurfs", "coco"];

var i;
for (i = 0; i < 7; i += 1) {
     window.console.log(movies[i]);
 }
*/

//STEP 6
/*var movies = ["stepbrothers", "Lord of the Rings", "batman", "Wonder Woman", "titanic", "the smurfs", "coco"];

var i;
for (i in movies) {
     window.console.log(movies[i]);
}
*/

//STEP 7
/*var movies = ["Stepbrothers", "Lord of the Rings", "Batman", "Wonder Woman", "Titanic", "The Smurfs", "Coco"];
window.console.log(movies.sort());
*/

//STEP 8
/*var movies = ["stepbrothers", "Lord of the Rings", "batman", "Wonder Woman", "titanic", "the smurfs", "coco"];
var leastFavoriteMovies = ["cars", "trolls", "sicario"];
window.console.log("Movies I like: ");
window.console.log("");
var i;
for (i = 0; i < 7; i += 1) {
    window.console.log(movies[i]);
}
window.console.log("");
window.console.log("Movies I regret watching: ");
window.console.log("");
for (i = 0; i < 7; i += 1) {
    window.console.log(leastFavoriteMovies[i]);
}
*/


//STEP 9
/*var movies = ["Stepbrothers", "Lord of the Rings", "Batman", "Wonder Woman", "Titanic", "The Smurfs", "Coco"];
movies = movies.concat("Cars", "Trolls", "Sicario");
window.console.log(movies.reverse());
*/

//STEP 10
/*var movies = ["Stepbrothers", "Lord of the Rings", "Batman", "Wonder Woman", "Titanic", "The Smurfs", "Coco"];
movies = movies.pop ();
window.console.log(movies);
*/

//STEP 11
/*var movies = ["Stepbrothers", "Lord of the Rings", "Batman", "Wonder Woman", "Titanic", "The Smurfs", "Coco"];
movies = movies.shift ();
window.console.log(movies);
*/

//STEP 12
/*var movies = ["Stepbrothers", "Lord of the Rings", "Batman", "Wonder Woman", "Titanic", "The Smurfs", "Coco", "Cars", "Trolls", "Sicario"];
var i;
i = movies.indexOf("Cars");
movies[i] = "Cinderella";
*/

//STEP 13
/*var employee1 = [];
var employee2 = [];

employee1.employeeid = "1234";
employee1.employeename = "joe";
employee1.employeetitle = "manager";
employee1.employeedepartment = "sales";
employee1.employeecurrent = true;

employee2.employeeid = "4321";
employee2.employeename = "sandy";
employee2.employeetitle = "technician";
employee2.employeedepartment = "lab";
employee2.employeecurrent = true;

var employees = [];
employees[0] = employee1;
employees[1] = employee2;

window.console.log(employees[1].employeename);
*/

//STEP 14
/*var employee1 = [];
var employee2 = [];

employee1.employeeid = "1234";
employee1.employeename = "joe";
employee1.employeetitle = "manager";
employee1.employeedepartment = "sales";
employee1.employeecurrent = true;

employee2.employeeid = "4321";
employee2.employeename = "sandy";
employee2.employeetitle = "technician";
employee2.employeedepartment = "lab";
employee2.employeecurrent = true;

var employees = [];
employees[0] = employee1;
employees[1] = employee2;

var i;
for (i = 0; i < 2; i += 1) {
    window.console.log(employees[i].employeename);
}
*/

//STEP 15
/*var employee1 = [];
var employee2 = [];
var employee3 = [];
var employees = [];
var i;

employee1.employeeid = "1234";
employee1.employeename = "joe";
employee1.employeetitle = "manager";
employee1.employeedepartment = "sales";
employee1.employeecurrent = true;

employee2.employeeid = "4321";
employee2.employeename = "sandy";
employee2.employeetitle = "technician";
employee2.employeedepartment = "lab";
employee2.employeecurrent = true;

employee3.employeeid = "246";
employee3.employeename = "jessica";
employee3.employeetitle = "nurse";
employee3.employeedepartment = "ER";
employee3.employeecurrent = false;


employees[0] = employee1;
employees[1] = employee2;
employees[2] = employee3;

for (i = 0; i < employees.length; i += 1) {
if (employees[i].employeecurrent) {
    window.console.log(employees[i].employeename);
    }  
}
*/
//STEP 16
/*var movies = [["Stepbrothers", 1], ["Lord of the Rings", 2], ["Batman", 3], ["Wonder Woman", 4], ["Titanic", 5]];
var moviesNames = [];
var moviesName = [];

movies.forEach(function (movies) {
    "use strict";
    moviesName = movies.filter(function (item) {
        return typeof item === "string";
    });
    moviesNames = moviesNames.concat(moviesName);
});
window.document.write(moviesNames);
*/

//STEP 17
/*var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];

function show(employees) {
    "use strict";
    employees.forEach(function (employee) {
        window.console.log(employee);
    });
}
show(employees);
*/

//STEP 18
/*var testData = [58, "", "abcd", true, null, false, 0];
function filterValues() {
    "use strict";
    testData = testData.filter(function (item) {
        return item !== undefined;
    });
    testData = testData.filter(function (item) {
        return item !== null;
    });
    testData = testData.filter(function (item) {
        return item !== 0;
    });
    testData = testData.filter(function (item) {
        return item !== false;
    });
    window.document.write(testData);
}
filterValues(testData);
*/

//STEP 19
/*var numbersNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function randomPosition(numbersNumber) {
    "use strict";
    var randomNumber = parseInt(Math.random() * numbersNumber.length, 10);
    return numbersNumber[randomNumber];
    
}
window.document.write(randomPosition(numbersNumber));
*/


//STEP 20
/*var numbersNumber1 = [1, 5, 3, 4, 5, 12, 7, 9, 8, 10];

function largestNumber(numbersNumber1) {
    "use strict";
    numbersNumber1 = numbersNumber1.sort();
    window.document.write(numbersNumber1);
    
}
largestNumber(numbersNumber1);
*/
















