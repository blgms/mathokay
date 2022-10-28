var slon = 1;
var test;

function slider(sl) {
	if (sl!=slon) {
		let el=document.getElementById("slide"+slon);
		el.hidden=true;
		slon = sl;
		el=document.getElementById("slide"+slon);
		el.hidden=false;
	}
	corps.classList.remove("flou");
	centerScreen.hidden = true;
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

function lanceExp(exp) {
	eval(exp+"()");
	slider(2);
	clearTimeout(test);
}

//REFLEXES
function reflexes() {
	document.getElementById("artExpHead").innerHTML = "Test de réflexes";
	document.getElementById("expConsigne").innerHTML = "Appuyer sur le bouton, puis rappuyer dessus le plus vite possible lorsqu'il redevient actif.";
	document.getElementById("expMilieu").innerHTML = "<button id='reflexBtn' onclick='reflexBtn()'><span id='reflex'>Je suis prêt !</span></button><div id='reflexChr'>&nbsp;</div><div id='ti' hidden></div>";
}
function reflexBtn() {
	if (document.getElementById("reflex").innerHTML=="Je suis prêt !") {
		let t = Math.round(Math.random()*4000)+1000;
		document.getElementById("reflex").innerHTML = "Attention...";
		document.getElementById("reflexBtn").disabled = true;
		test = setTimeout(function() {
			document.getElementById("reflexBtn").disabled = false;
			document.getElementById("reflex").innerHTML = "CLIC !";
			document.getElementById("ti").innerHTML = (new Date()).getTime();
		},t);
	} else {
		let ti = document.getElementById("ti").innerHTML;
		let tf = (new Date()).getTime();
		let dt = (tf - ti)/1000;
		document.getElementById("reflexChr").innerHTML = "Il s'est écoulé <b>"+dt+"</b> secondes.";
		document.getElementById("reflex").innerHTML = "Je suis prêt !";
	}
}


//EQUATIONS
function equations() {
	document.getElementById("artExpHead").innerHTML = "Équations";
	document.getElementById("expConsigne").innerHTML = "Sélectionner un type d'équation puis la résoudre.";
	document.getElementById("expMilieu").innerHTML = "<div id='btnEquations'><button onclick='equaGen(1)'>ax=b</button><button onclick='equaGen(2)'>ax+b=c</button><button onclick='equaGen(3)'>ax+b=cx+d</button></div><div id='affEquation'></div>";
}
function equaGen(n) {
	
}
