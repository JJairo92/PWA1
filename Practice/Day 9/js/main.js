(function() {
	console.log("Start");

	var canvas = document.createElement("canvas");
	document.body.appendChild(canvas);

	canvas.width = 550; // "stage" in Actionscript
	canvas.height = 400; // "stage" in Actionscript

	//ctx.strokeStyle = "#ff0000"; // rgb(255, 0, 0);	

	/*for(var i=0; i<500;i++) {
		var red = ~~(Math.random()*255);
		var green = ~~(Math.random()*255);
		var blue = ~~(Math.random()*255);
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.strokeStyle = "rgb("+red+","+green+","+blue+")";
		ctx.lineWidth = 2;
		ctx.moveTo((Math.random()*550), (Math.random()*400));
		ctx.lineTo((Math.random()*550), (Math.random()*400));
		ctx.stroke(); // renders each line
	};*/

	var ctx = canvas.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth = 3;
	ctx.strokeStyle = "#ff0000";
	ctx.moveTo(275,0);
	ctx.lineTo(275,400);
	ctx.moveTo(0,200);
	ctx.lineTo(550,200);
	ctx.stroke();

	ctx.beginPath();
	ctx.strokeStyle = "#0000ff";
	ctx.fillStyle = "#000000";
	ctx.rect(275-20, 200-20, 40, 40);
	ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = "#00ff00";
	ctx.lineWidth = 3;
	ctx.arc(275,200,20,0,Math.PI*2);
	//ctx.stroke();
	ctx.fill();

	ctx.beginPath();
	ctx.fillStyle = "#000000"; // color of fill
	ctx.font = "24px Helvetica"; // font size HAS to be in pixels
	ctx.fillText("Hello World", 100, 100); // what the text is going to say, and where is it going to be in the canvas

	var qr = new Image();
	qr.src = "http://media-curse.cursecdn.com/attachments/thumbnails/63/639/952/1670/lol_fiora_artwork.jpg";
	qr.addEventListener("load", function() {
		console.log("Image is done loading.");
		ctx.drawImage(qr,35,25,275,275);
	}, false);

})();