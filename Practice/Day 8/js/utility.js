(function () {
	console.log("Start");
	
	window.utils = {};
	utils.getAreaTriangle = function(b, h) {
		return .5*(b*h);
	};

	utils.rnd = function (f, l) {
		if(l>f) {
			return Math.floor(Math.random()*((l+1)-f)+f)
		}

		return Math.floor(Math.random()*(f-l)+l);
	};

	utils.degConversion = function(t, d) {
		if (d == "C" || d == "c") { // converts to Celsius
			var c = 0;

			return (f-32) * (5/9);
		} else if (d == "F" || d == "f") { // converts to fahrenheit
			var f = 0;

			return c * (9/5) + 32;
		}
			return "error";
	};
})();