/*
	Jairo Jurado
	09/04/2013
	The Duel - Part 1
*/

(function() {
	console.log("Fight!");

	var fighterOne = ["Batman", Math.floor(Math.random()*20-1), 100]; // Name of fighter 1 (Batman), damage, and health
	var fighterTwo = ["Superman", Math.floor(Math.random()*20-1), 100]; // Name of fighter 2 (Superman), damage, and health

	//var fighterOneHealth = 100; // Starting health of Batman
	//var fighterTwoHealth = 100; // Starting health of Superman

	var round = 1; // Round starts at 1

	function fight(){
		// Starting alert message
		alert(fighterOne[0]+": "+fighterOne[2]+" *START* "+fighterTwo[0]+": "+fighterTwo[2]);

		for(var i=0; i<10; i++){ // 10 rounds maximum
			//var fighterOneDamage = Math.floor(Math.random()*20-1); // Batman's random damage (5 min) (30 max)
			//var fighterTwoDamage = Math.floor(Math.random()*20-1); // Superman's random damage (5 min) (30 max)

			fighterOne[2] -= fighterTwo[1]; // Batman's health after Superman's attack
			fighterTwo[2] -= fighterOne[1]; // Superman's health after Batman's attack

			var results = checkWin();
			if(results === "No Winner") {
				// alert is updated
				alert(fighterOne[0]+": "+fighterOne[2]+" *END OF ROUND "+round+"* "+fighterTwo[0]+": "+fighterTwo[2]);
				round++; // round goes up by 1 after each fight
			} else {
				alert(results); // will update the results before the loop breaks
				break; // will break the loop if a winner is found before the 10 rounds
			}
		}

		alert(results); // will show winner after 10 rounds if both healths are greater than 1
	};

	function checkWin(){
		var result = "No Winner";

		if(fighterOne[2] < 1 && fighterTwo[2] < 1) { // if health is lower than 1 = No Winner
			result = "No Winner. Tied Game.";
		} else if(fighterTwo[2] < 1 || (fighterOne[2] > fighterTwo[2] && round == 10)) { // Batman also wins if it's round 10 and his health is higher than Superman's health
			result = fighterOne[0]+" Wins!"; 
		} else if(fighterOne[2] < 1 || (fighterTwo[2] > fighterOne[2] && round == 10)) { // Superman also wins if it's round 10 and his health is higher than Batman's health
			result = fighterTwo[0]+" Wins!";
		}

		return result;
	};

	fight(); // fight function called

})();