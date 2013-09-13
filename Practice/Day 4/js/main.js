console.log("guess loaded");

(function() {
	//var soundSpec = "";

	//var movie = {
		//title: "Star Wars",
		//rating: "PG",
		//cast: ["Ford", "Hamill", "Fisher"],
		/*sound: function() {
			console.log("projecting Sound");
			return "THX";
		}*/
	//};

	//var property = "rating";
	//console.log(movie["rating"]);
	//console.log(movie.title);
	//console.log(movie.cast[2]); // to show "Fisher"
	//movie.sound(); // to call the "sound" function
	//soundSpec = movie.sound();

	//console.log(soundSpec);
	//console.log(movie.sound());

	/*for(var key in movie) {
		console.log(movie[key]);
	}*/

	/*var soundSpec = "";
	var movies = {
		aliens: [
			{
				director:"James",
				rating:"R",
				cast:["Bob", "Dave"]
			}
		],
		raiders: [
			{
				director: "James",
				rating: "R"
			}
		]	
	//};

	console.log(movies.aliens[0].cast[1]);*/

	// by "getElementById"
	/*var test = document.getElementById("ot1").innerHTML = "I am starved";

	console.log(test);*/

	// by "querySelection"
	/*var test = document.querySelector("#ot1");
	test.innerHTML = "Hello!";
	console.log(test);*/

	/*var test = document.getElementsByTagName("p");
	test.innerHTML[0] = "I want a nap!";
	console.log(test);*/

	var domStuff = {
		btn : document.querySelector("#p")
	};

	domStuff.btn.addEventListener("click", onClick, false);

	function onClick(e) {
		console.log("Dude");
	}

})();