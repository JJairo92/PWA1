/*
	Jairo Jurado
	09/27/2013
	Final Practical
*/

(function () {
	window.Student = Student; // "window" is to make this js file accessible to other js files

	function Student (n, a, GPA, d) {
		this.name = n; // assigns "n" to "name"
		this.address = a; // assigns "a" to the "address"
		this.gpa = GPA; // assigns "GPA" to "gpa"
		this.date = d; // assigns "d" to "date"
	};

	Student.prototype.average = function (g) {
		var total = 0; // total starts at 0
		g.forEach(function (n) {
			total += n; // each number in the array is added to the total
		})
		var avg = total/this.gpa.length; // calculates average

		var rounded=Math.round(avg*100)/100; // rounds it
		return rounded; // returns rounded average
	};
})();