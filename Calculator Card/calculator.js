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
		$('#calculation').val( $('#calculation').val() + calculation);
		$('#calculation').keypress(function(event) {
			if (event.keyCode == 13) {
				submit();
				return false;
			}
		});
		$("#result").val("");
	});
	$("#submit").click(function(event) {
		submit();
	});
}
document.onLoad = initialize();

function submit() {
	$("#result").val((Parser.parse($('#calculation').val().replaceAll(" ", "")).evaluate()));
}

String.prototype.replaceAll = function(search, replacement) {
	var target = this;
	return target.replace(new RegExp(search, 'g'), replacement);
};