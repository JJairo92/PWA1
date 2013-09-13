/*
	Jairo Jurado
	09/11/2013
	The Duel - Part 3
*/

(function() {
	console.log("Fight!");

	var fighters = [ // array of two fighter objects
		// First Object
		fighterOne = {
			name: "Batman", // Name of fighter 1 (Batman)
			damage: Math.floor(Math.random()*20+1), // Batman's damage: random (20 max; 1 min)
			health: 100 // Batman's health
		},

		// Second Object
		fighterTwo = {
			name: "Superman", // Name of fighter 2 (Superman)
			damage: Math.floor(Math.random()*20+1), // Superman's damage: random (20 max; 1 min)
			health: 100 // Superman's health
		}
	];

	var round = 1; // Round starts at 1

	function fight(){
		// Batman's health and name
		var batman = document.querySelector("#kabal");
		batman.innerHTML = fighters[0].name+": "+fighters[0].health;

		// Superman's health and name
		var superman = document.querySelector("#kratos");
		superman.innerHTML = fighters[1].name+": "+fighters[1].health;

		// Round
		var msg = document.querySelector("#round");
		msg.innerHTML = "*START*";

		// Created the button variable
		var button = document.querySelector(".buttonblue");

		button.addEventListener("click", function onClick (event){
			var results = checkWin();

			if(results === "No Winner") {
				fighters[0].health -= fighters[1].damage; // Batman's health after Superman's attack
				fighters[1].health -= fighters[0].damage; // Superman's health after Batman's attack
			
				// Update Batman and Superman's health
				batman.innerHTML = fighters[0].name+": "+fighters[0].health;
				superman.innerHTML = fighters[1].name+": "+fighters[1].health;

				// Update Round Number
				msg.innerHTML = "*Round: "+round+"*";
				round++;
			} else {
				msg.innerHTML = results; // shows winner
				button.removeEventListener("click", onClick); // removes the button's event listener
			}
		});
	};

	function checkWin(){
		var result = "No Winner";

		if(fighters[0].health < 1 && fighters[1].health < 1) { // if health is lower than 1 = No Winner
			result = "No Winner. Tied Game.";
		} else if(fighters[1].health < 1 || (fighters[0].health > fighters[1].health && round == 10)) { // Batman also wins if it's round 10 and his health is higher than Superman's health
			result = fighters[0].name+" Wins!"; 
		} else if(fighters[0].health < 1 || (fighters[1].health > fighters[0].health && round == 10)) { // Superman also wins if it's round 10 and his health is higher than Batman's health
			result = fighters[1].name+" Wins!";
		}

		return result;
	};

	fight(); // fight function called

})();