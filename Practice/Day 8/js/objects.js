(function() {
	var Person = {
		name: "Eli",
		age: 0,
		die: function() {
			console.log("I am dead")
		}
	};

	var Student = Object.create(Person);

	var Student = {
		badge: "Orange",
		degree: "Web",
		die: "I am a dying student"
	};

	var Russell = Object.create(Student);

	var James = Object.create(Person);


	/*var james = Object.create(Person);
	james.car = "BMW";

	var ross = Object.create(Person);
	ross.games = "LoL";*/
})();