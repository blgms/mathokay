var slon = 1;
var page, nbPages;

function chargePage() {
	let query = window.location.search;
	let params = new URLSearchParams(query);
	let refTuto = params.get('page');
	if (refTuto) {
		if (UrlExists("https://blgms.github.io/mathokay/docs/assets/tutos/"+refTuto+".html") == true) {
			afficheTuto(refTuto);
		}
	}
}

function UrlExists(url) {
	var http = new XMLHttpRequest();
	http.open('HEAD', url, false);
	http.send(null);
	return http.status!=404;
}

async function afficheTuto(ref) {
	await fetch("https://blgms.github.io/mathokay/docs/assets/tutos/"+ref+".html")
	.then(function(response) {
		return response.text();
	})
	.then(function(data) {
		document.getElementById("articleTuto").innerHTML = data;
		nbPages = document.getElementById("corpsTuto").childElementCount;
		page = 1;
		affPage();
		slider(3);
	});
}

function slider(sl) {
	if (sl!=slon) {
		let el=document.getElementById("slide"+slon);
		el.hidden=true;
		slon = sl;
		el=document.getElementById("slide"+slon);
		el.hidden=false;
	}
	if (slon==3) {
		document.getElementsByTagName("footer")[0].hidden = false;
	} else {
		document.getElementsByTagName("footer")[0].hidden = true;
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

function tutoPage(n) {
	if (page+n >= 1 && page+n <= nbPages) {
		document.getElementById("tutoPage"+page).hidden = true;
		page += n;
		document.getElementById("tutoPage"+page).hidden = false;
		affPage();
	}
}

function affPage() {
	document.getElementById("affPage").innerHTML = page+"/"+nbPages;
	if (page==1) { document.getElementById("btnPagePrec").disabled = true; } else { document.getElementById("btnPagePrec").disabled = false; }
	if (page==nbPages) { document.getElementById("btnPageSuiv").disabled = true; } else { document.getElementById("btnPageSuiv").disabled = false; }
}
