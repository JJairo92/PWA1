(function() {
	var h = [2,4,5];
	h.forEach(function (num) {
		var category = "";
		switch(num) {
			case 1: category = "Low";
					break;

			case 2: category = "Low";
					break;

			case 3: category = "Med";
					break;

			case 4: category = "Med";
					break;

			default: category = "High";
		}
		console.log(category);
	})
})();