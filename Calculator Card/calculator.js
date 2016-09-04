function initialize() {
	$("#table tr td").click(function(event) {
		var id = $(this).attr('id');
		var calculation = "";
		if (!isNaN(parseFloat(id)) && isFinite(id)) {
			calculation += id;
		} else {
			switch (id) {
				case "clear":
				$('#calculation').val("");
				break;
				case "decimal":
				calculation += ".";
				break;
				case "exponent":
				calculation += "^";
				break;
				case "root":
				calculation += "sqrt(";
				break;
				case "multiply":
				calculation += " * ";
				break;
				case "divide":
				calculation += " / ";
				break;
				case "add":
				calculation += " + ";
				break;
				case "subtract":
				calculation += " - ";
				break;
				case "openParenthesis":
				calculation += "(";
				break;
				case "closeParenthesis":
				calculation += ")";
				break;
			}
		}
		$('#calculation').val( $('#calculation').val() + " " + calculation);
		$("#result").val("");
	});
	$("#submit").click(function(event) {
		$("#result").val((Parser.parse($('#calculation').val().replaceAll(" ", "")).evaluate()));
	});
	$('input').on("keypress", function(e) {
		/* ENTER PRESSED*/
		if (e.keyCode == 13) {
		}
	}
}
document.onLoad = initialize();

String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};