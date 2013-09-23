/*
 	Jairo Jurado
 	09/18/2013
 	Goal 7 - Objects
 */

(function() {
	window.Person = Person; // "window" is to make this js file accessible to other js files
	var jobs = ["Web Designer", "Architect", "Manga Artist", "Writer", "Teacher"];
	var actions = ["Painting", "Sleeping", "Eating", "Running", "Playing"];

	function Person(n, r) {
		var randomAction = ~~(Math.random()*actions.length);
		var randomJob = ~~(Math.random()*jobs.length);

		this.name = n;
		this.action = actions[randomAction];
		this.job = jobs[randomJob];
		this.row = r;
	};

	Person.prototype.update = function() { // "prototype" allows to use the "this" from the Person function
		var randomAction = ~~(Math.random()*actions.length);
		this.action = actions[randomAction];
	};
})();