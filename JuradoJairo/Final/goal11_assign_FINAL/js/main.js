/*
	Jairo Jurado
	09/27/2013
	Final Practical
*/

(function() {
	var number = 0; // used for the onClick function loop
	var dom = {
		button: document.querySelector(".buttonred"), // button
		name: document.querySelector("#name"), // student's name
		address: document.querySelector("#address"), // student's address
		gpa: document.querySelector("#gpa"), // student's gpa
		date: document.querySelector("#date"), // date
		gpaAvg: document.querySelector("#gpaavg") // gpa average
	};

	// Array of student objects
	var students = [
		new Student("Jairo Jurado", "666 Immortal Blvd., Kissimmee, Florida", [3.2, 3.5, 3.8], getDate()),
		new Student("Fiora Salazar", "3826 Riot St., Winter Park, Florida", [4.0, 3.1, 3.7], getDate())
	];

	console.log("********** Array of Students at the beginning: **********");
	studentList(); // displays old students' information on the console


	// New Student Added to "students" array
	var student = new Student("Katheryn Hudson", "456 Champion Ct., Los Angeles, California", [3.2, 4.0, 2.2], getDate());
	students.push(student);


	console.log("********** Array of Students at the end: **********");
	studentList(); // displays new students' information on the console

	// Function to display students' information on the console
	function studentList() {
		for(var i=0; i<students.length; i++) {
			console.log("Name: "+ students[i].name);
			console.log("Address: "+ students[i].address);
			console.log("GPA: "+ students[i].gpa);
			console.log("Date: "+ students[i].date);
		};
	};

	// It's easier to get the date by using a function
	function getDate (){
		var date = new Date();
		var month = date.getMonth()+1;
		var day = date.getDate(); // day is the numbered date
		var year = date.getFullYear(); // acquires the 4 digit year

		if(month < 10) {
			month = "0"+ month;
		}
		if(day < 10){
			day='0'+ day;
		}

		date = month +"/"+ day +"/"+ year;
		return date;
	};

	// Button onClick
	dom.button.addEventListener("click", onClick, false); // adds the button event listener

	function onClick (event){ // changes the HTML to display the name, address, gpa, date, and gpaAvg of each student
		if(number<students.length) {
			dom.name.innerHTML = "Name: "+ students[number].name;
			dom.address.innerHTML = "Address: "+ students[number].address;
			dom.gpa.innerHTML = "GPA: "+ students[number].gpa;
			dom.date.innerHTML = "Date: "+ getDate();
			dom.gpaAvg.innerHTML = "Average GPA: "+ students[number].average(students[number].gpa);
			number++;
		} else {
			dom.button.innerHTML = "Done!!!"; // changes button text to "done!!!"
			dom.button.removeEventListener("click", onClick, false); // removes event listener
		}
	};
})();