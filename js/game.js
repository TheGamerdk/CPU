
function employPress(company) {
	console.log(company);
	document.getElementById(company).onclick = "firePress(company);";
	document.getElementById(company).innerHTML = "FIRE";
	document.getElementById(company).className = "btn btn-lg btn-danger";
}

function firePress(company) {
	console.log(company);

}