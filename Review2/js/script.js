/*// prompts and alerts

// this is an alerts
// alert("This is an alert. Hi");

// prompts
var yearBorn = prompt("Type in your year of birth:");
var age = (yearBorn) + 5;
console.log(age);
*/

// functions!
// BASIC FUNCTION
/*function calcArea(height, width) {
	var area = height * width;
	return area;
}

var a = calcArea(5, 6);
console.log(a); */

// var info = prompt("your name");
// console.log(a);

//ANONYMOUS FUNCTION
var calcForce = function(mass, acc) {
	var force = mass * acc;
	console.log(force);
}

calcForce(6, 7);