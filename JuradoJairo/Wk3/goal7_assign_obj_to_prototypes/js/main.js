/*
 	Jairo Jurado
 	09/18/2013
 	Goal 7 - Objects
 */

 (function () {
 	// Array of names & Array of rows
 	var names = ["Jairo", "Katheryn", "Fiora", "Axel", "Drake"];
 	var rows = [1,2,3];

 	// Array that will hold each Person Object created
 	var people = [];
 	var interval = setInterval(runUpdate,1000);

 	// Query Selectors
 	var dom = {
		r1c1:document.querySelector("#r1c1"),
		r1c2:document.querySelector("#r1c2"),
		r1c3:document.querySelector("#r1c3"),
		r2c1:document.querySelector("#r2c1"),
		r2c2:document.querySelector("#r2c2"),
		r2c3:document.querySelector("#r2c3"),
		r3c1:document.querySelector("#r3c1"),
		r3c2:document.querySelector("#r3c2"),
		r3c3:document.querySelector("#r3c3")
	};

 	// Creates three instances of Person and pushes each to the "people" array
 	for(var i=0; i<3; i++) {
 		var randomName = ~~(Math.random()*names.length); // gets a random name from the "names" array
 		var randomRow = ~~(Math.random()*rows.length); // gets a random row from the "rows" array

 		// This allows the names and rows to not repeat (Big thanks go to Mike, was struggling with this for a while)
 		var row = rows.splice(randomRow,1);
		var name = names.splice(randomName,1);

		// Each person is created and pushed to the "people" array
	 	var person = new Person(name, row);
	 	people.push(person);
	 	populateHTML(); // calls the "populateHTML" function each time it passes the loop
 	};

 	//console.log(people);

 	function populateHTML() {
 		for(var n=0; n<people.length;n++){
			if(people[n].row[0] === 1){
				dom.r1c1.innerHTML = people[n].name;
				dom.r1c2.innerHTML = people[n].job;
				dom.r1c3.innerHTML = people[n].action;
			} else if(people[n].row[0] === 2){
				dom.r2c1.innerHTML = people[n].name;
				dom.r2c2.innerHTML = people[n].job;
				dom.r2c3.innerHTML = people[n].action;
			} else {
				dom.r3c1.innerHTML = people[n].name;
				dom.r3c2.innerHTML = people[n].job;
				dom.r3c3.innerHTML = people[n].action;
			}
		}
 	};

 	function runUpdate() {
	 	people.forEach(function(element){
			element.update();
		});	

		populateHTML();

	 };
 })();