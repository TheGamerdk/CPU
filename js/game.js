
function employPress(company) {
	console.log(company);
	document.getElementById(company).onclick = function() { firePress(company) };
	document.getElementById(company).innerHTML = "FIRE";
	document.getElementById(company).className = "btn btn-lg btn-danger";
	document.getElementById(company + "_Employ").innerHTML = "EMPLOYED";
	document.getElementById(company + "_Employ").style = "color: green;";
}

function firePress(company) {
	console.log(company);
	document.getElementById(company).onclick = function() { employPress(company) };
	document.getElementById(company).innerHTML = "EMPLOY";
	document.getElementById(company).className = "btn btn-lg btn-primary";
	document.getElementById(company + "_Employ").innerHTML = "NOT EMPLOYED";
	document.getElementById(company + "_Employ").style = "color: red;";
}