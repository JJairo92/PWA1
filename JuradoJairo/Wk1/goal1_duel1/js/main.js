/*
	Jairo Jurado
	09/04/2013
	The Duel - Part 1
*/

(function() {
	console.log("Fight!");

	var fighterOne = "Batman"; // Name of fighter 1 (Batman)
	var fighterTwo = "Superman"; // Name of fighter 2 (Superman)

	var fighterOneHealth = 100; // Starting health of Batman
	var fighterTwoHealth = 100; // Starting health of Superman

	var round = 1; // Round starts at 1

	function fight(){
		alert(fighterOne+": "+fighterOneHealth+" *START* "+fighterTwo+": "+fighterTwoHealth);

		for(var i=0; i<10; i++){
			var fighterOneDamage = Math.floor(Math.random()*20-1); // Batman's random damage (5 min) (30 max)
			var fighterTwoDamage = Math.floor(Math.random()*20-1); // Superman's random damage (5 min) (30 max)

			fighterOneHealth -= fighterTwoDamage; // Batman's health after Superman's attack
			fighterTwoHealth -= fighterOneDamage; // Superman's health after Batman's attack

			var results = checkWin();
			if(results === "No Winner") {
				// alert is updated
				alert(fighterOne+": "+fighterOneHealth+" *END OF ROUND "+round+"* "+fighterTwo+": "+fighterTwoHealth);
				round++; // round goes up by 1 after each fight
			} else {
				alert(results);
				break;
			}
		}

		alert(results); // will show winner after 10 rounds if both healths are greater than 1
	};

	function checkWin(){
		var result = "No Winner";

		if(fighterOneHealth < 1 && fighterTwoHealth < 1) {
			result = "No Winner. Tied Game.";
		} else if(fighterTwoHealth < 1 || (fighterOneHealth > fighterTwoHealth && round == 10)) { // Batman also wins if it's round 10 and his health is higher than Superman's health
			result = fighterOne+" Wins!"; 
		} else if(fighterOneHealth < 1 || (fighterTwoHealth > fighterOneHealth && round == 10)) { // Superman also wins if it's round 10 and his health is higher than Batman's health
			result = fighterTwo+" Wins!";
		}

		return result;
	};

	fight(); // fight function called

})();