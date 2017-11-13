var canvas;
var ctx;

var x = 0;

$(document).ready(function() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	var loop = function(){
		update();
		draw();
	};
	var interval = setInterval(loop, 10);
	draw();
});

function update() {
	x += 0.01;
	if (x > 6.28) {
		x = 0;
	}
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = 'RGBA(0, 143, 236, 0.95)';
	ctx.rect(30,10,280,460);
	ctx.fill();
	var circleLoc = {x: 170, y: 210};
	ctx.beginPath();
	ctx.arc(circleLoc.x, circleLoc.y, 25 * Math.sin(x) + 75, 0, Math.PI * 2);
	ctx.fillStyle = "white";
	ctx.fill();
}