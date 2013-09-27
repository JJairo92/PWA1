//canvas painter
console.log("start canvas painter main.js");

(function() {
   
	var canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	canvas.width = 640;
	canvas.height = 480;
	var ctx = canvas.getContext("2d");

	ctx.fillStyle = '#cccccc'; //set background color
	ctx.fillRect (0,0,640,480);

	var mouse = utils.getMouse(canvas); //the getmouse function returns and object literal that has X and Y of the Mouse
	var draw = false; //boolean that holds that status of whether or not the mouse is being clicked

	var color = "rgb(255,0,0)";
	/*ctx.strokeStyle=color;

	canvas.addEventListener("mousedown", onDraw);
	canvas.addEventListener("mouseup", onStopDraw);
	canvas.addEventListener("mouseout", onStopDraw);*/

	var ball = new Ball();
	ball.x = 320;
	ball.y = 240;
	var vx = 0;
	var vy = 0;

	window.addEventListener("keydown", onDown);
	window.addEventListener("keyup", onUp);

	function onUp(e) {
		if(e.keyCode == 39) {
			vx = 0;
		}
	};

	function onDown(e) {
		if(e.keyCode == 39) { // right arrow
			vx = 5;
		}
		if(e.keyCode == 37) { // left arrow
			vx = -5;
		}
	};


	/*function onDraw(e){
		draw=true;
		ctx.beginPath();
		ctx.moveTo(mouse.x,mouse.y);
	}
	function onStopDraw(e){
		draw=false;
	}*/
	(function update(){
		/*if(draw){
			ctx.lineTo(mouse.x,mouse.y);
			ctx.stroke();
		}*/
		ctx.clearRect(0,0, canvas.width, canvas.height);
		ctx.fillStyle = "#ccc";
		ctx.fillRect(0,0,640,480);
		ball.x = mouse.x;
		ball.y = mouse.y;
		ball.update(ctx);
		requestAnimationFrame(update); //function thats runs 60 frames per second
	})();
})();