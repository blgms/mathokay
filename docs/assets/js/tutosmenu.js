var slon = 1;

function slider(sl) {
	if (sl!=slon) {
		let el=document.getElementById("slide"+slon);
		el.hidden=true;
		slon = sl;
		el=document.getElementById("slide"+slon);
		el.hidden=false;
	}
	defilHaut();
}

/*DÉFILEMENT VERS LE HAUT*/
function defilHaut() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mainMenu() {
	corps.classList.toggle("flou");
	centerScreen.hidden=!centerScreen.hidden;
}

async function afficheTuto() {
	await fetch("https://blgms.github.io/mathokay/docs/assets/tutos/ti_stat1.html")
	.then(function(response) {
		return response.text();
	})
	.then(function(data) {
		document.getElementById("tutoAffiche").innerHTML = data;
		slider(3);
	});
}
