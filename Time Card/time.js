var canvas;
var ctx;
var time = 0;

$(document).ready(function() {
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	var loop = function(){
		time += 1/600;
		draw();
	};
	var interval = setInterval(loop, 100);
	draw();
});

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.arc(canvas.width / 2, canvas.height / 3, 100, Math.PI * 1.5, Math.PI * ((time * 2) + 1.5));
	var gradient = ctx.createLinearGradient(0, 0, 0, 200);
	gradient.addColorStop("0", "#FF5F6D");
	gradient.addColorStop("1", "#FFC371");
	ctx.strokeStyle = gradient;
	ctx.lineWidth = 15;
	ctx.lineCap = "round";
	ctx.stroke();
}