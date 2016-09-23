var canvas;
var ctx;
var seconds = 0;

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
	var d = new Date();
	seconds = d.getSeconds() / 59 + d.getMilliseconds() / 999 * (1 / 59);
}

function draw() {
	var circleLoc = {x: canvas.width / 1.6, y: canvas.height / 2};
	var textY = circleLoc.y + 30;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	var d = new Date();
	ctx.font = "100px calibri";
	ctx.textAlign = "center";
	for (var i = -3; i <= 3; i++) {
		if (d.getMinutes() - i > -1) {
			var trans = 100 * i + 100 * d.getSeconds() / 59 - 50;
			//RGBA(255, 181, 107, 1.00)
			ctx.fillStyle = 'RGBA(255, 181, 107, ' + (1 - Math.abs(trans) / 230) + ')';
			var minutes = "" + d.getMinutes() - i;
			if (d.getMinutes() - i < 10) {
				minutes = "0" + minutes;
			}
			ctx.fillText(minutes, circleLoc.x, textY + trans);
		}
	}
	ctx.font = "75px calibri";
	ctx.fillStyle = 'RGBA(255, 181, 107, 1.00)';
	ctx.textAlign = "right";
	var hours = d.getHours();
	if (hours > 12) {
		hours -= 12;
	} else if (hours === 0) {
		hours = 12;
	}
	if (hours < 10) {
		hours = "0" + hours;
	}
	ctx.fillText(hours, 90, textY - 5);

	ctx.beginPath();
	ctx.arc(circleLoc.x, circleLoc.y, 90, Math.PI * 1.5, Math.PI * (2 + 1.5));
	ctx.strokeStyle = "rgba(255,180,122, 0.2)";
	ctx.lineWidth = 15;
	ctx.lineCap = "round";
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(circleLoc.x, circleLoc.y, 90, Math.PI * 1.5, Math.PI * ((seconds * 2) + 1.5));
	var gradient = ctx.createLinearGradient(0, canvas.height / 5, 0, canvas.height / 4 * 3);
	gradient.addColorStop("0", "#FF976D");
	gradient.addColorStop("1", "#FFCE52");
	ctx.strokeStyle = gradient;
	ctx.lineWidth = 15;
	ctx.lineCap = "round";
	ctx.stroke();
}