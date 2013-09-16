/*
	Jairo Jurado
	09/16/2013
	Midterm
*/

(function() {
	// Add a Student function
	var addStudent = function(student) {
		var scholar = student;

		return scholar;
	};

	// Average Function
	var average = function (gpa) {
		var total = 0; // total starts at 0
		gpa.forEach(function (n) {
			total += n; // each number in the array is added to the total
		})

		var average = total/gpa.length; // calculates average

		return average; // returns average
	};

	// Array of student objects
	var students = [

		// First Student
		student1 = {
			name: "Jairo Jurado", 
			address: {
				street: "666 Immortal Blvd.",
				city: "Kissimmee,",
				state: "Florida"
			},
			gpa: [3.2, 3.5, 3.8]
		},

		// Second Student
		student2 = {
			name: "Fiora Salazar",
			address: {
				street: "3826 Riot St.",
				city: "Winter Park,",
				state: "Florida"
			},
			gpa: [4.0, 3.1, 3.7]
		}
	];

	// Third Student Added by calling the addStudent function
	student3 = addStudent({name: "Katheryn Hudson", address: {street: "456 Champion Ct.", city: "Los Angeles,", state: "California"}, gpa: [3.2, 4.0, 2.2]});
	students.push(student3); // third student added to the students array of objects

	var buttonFunction = function (){
		var button = document.querySelector(".buttonred");
		var arrayNumber = 0;

		// Button onClick
			button.addEventListener("click", onClick, false); // adds the button event listener

			function onClick (event){
				var date = new Date();

				if(arrayNumber<students.length) {
					// Student's Name
					var name = document.querySelector("#name");
					name.innerHTML = "Name: "+ students[arrayNumber].name;

					// Student's Address
					var address = document.querySelector("#address");
					address.innerHTML = "Address: "+ students[arrayNumber].address.street, students[arrayNumber].address.city, students[arrayNumber].address.state;
						
					// Student's GPA
					var gpa = document.querySelector("#gpa");
					gpa.innerHTML = "GPA: "+ students[arrayNumber].gpa;

					// Date
					var d = document.querySelector("#date");
					d.innerHTML = "Date: "+ (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear();

					// Student's GPA Average
					var gpaAvg = document.querySelector("#gpaavg");
					gpaAvg.innerHTML = "Average GPA: "+ average(students[arrayNumber].gpa);
					
					arrayNumber++;
					console.log(arrayNumber);
						
					} else {
						button.innerHTML = "Done!!!"; // changes button text to "done!!!"
						button.removeEventListener("click", onClick, false); // removes event listener
						console.log("It's done");
					}
				}
			};
	};

	for(var i=0; i<students.length; i++) {
		console.log("********** Student# "+i+" **********");
		var date = new Date();
		console.log("Name: "+ students[i].name);
		console.log("Address: "+ students[i].address.street, students[i].address.city, students[i].address.state);
		console.log("GPA: "+ students[i].gpa);
		console.log("Date: "+ (date.getMonth()+1)+"/"+date.getDate()+"/"+date.getFullYear());
	};

	buttonFunction();
})();