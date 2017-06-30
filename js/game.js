
function employPress(company) {
	console.log(company);
	document.getElementById(company).onclick = firePress(company);
	document.getElementById(company).value = "FIRE";
	document.getElementById(company).style = "btn btn-lg btn-danger";
}

function firePress(company) {
	console.log(company);
}