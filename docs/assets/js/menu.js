/*CONFIGURATION MATHJAX*/
MathJax = {
  options: {
    renderActions: {
      assistiveMml: [],
    }
  },
};

/*VARIABLES GLOBALES*/
const btns = [
	{"id":"Go", "lbl":"Go&nbsp;!", "actif":true},
	{"id":"Questions", "lbl":"Questions", "actif":false},
	{"id":"Reponses", "lbl":"Réponses", "actif":false}
	];
	
var slon = 1;
var menuon = "Gpe";

/*LANCEMENT DE L'APPLI ET AFFICHAGE DU MENU*/
function demarrage() {
	const slide2 = document.getElementById("slide2");
	const slide3 = document.getElementById("slide3");
	const centerScreen = document.getElementById("centerScreen");
	const divPause = document.getElementById("divPause");
	const btnCompteRebours = document.getElementById("btnCompteRebours");
	elChrono = document.getElementById("chrono");
	document.getElementById("togChrono").checked=false;
	menu("Gpe");
	affNb();
	verifActif();
}

/*CREATION OU CHANGEMENT DE MENU DE SELECTION*/
function menu(m) {
	let exosListe = "";
	if (m=="Gpe") {
		exos.sort(function(a, b) {return a.Gpe-b.Gpe;});
		let b = Array.from(new Set(exos.map(a => a.Gpe)));
		for (let j in b) {
			exosListe += "<article><header>"+groupes[b[j]].nom+"</header><table role='grid'>";
			let c = exos.filter(obj => { return obj.Gpe == b[j]; });
			for (let i in c) {
				let check = "";
				if (c[i].act==true) { check=" checked"; }
				let k = exos.indexOf(c[i]);
				exosListe += "<tr><td><label for='switch'><input type='checkbox' id='togExo"+k+"' name='switch' role='switch' class='toggledroite' onclick='majMenu("+k+")'"+check+">"+diffs[c[i].Diff].couleur+" "+c[i].nom+"</label></td></tr>";
			}
			exosListe += "</table></article>";
		}
		document.getElementById("divTableGpe").innerHTML = exosListe;
	}
	MathJax.startup.defaultReady();
}

/*MISE A JOUR AUTO MENU*/
function majMenu(n) {
	exos[n].act=!exos[n].act;
	verifActif();
}

/*TRANSITION ET DECLENCHEMENT DU COMPTE A REBOURS*/
function slider(sl) {
	if (sl!=slon) {
		if (slon==1) MathJax.startup.defaultReady();
		let el=document.getElementById("slide"+slon);
		el.hidden=true;
		slon = sl;
		el=document.getElementById("slide"+slon);
		el.hidden=false;
	}
	defilHaut();
	let btnsNew=[];
	if (sl==1) {
		btnsNew=[true, false, false];
		compteReboursStop();
		if (document.getElementById("togChrono").checked==true) {
			setTimeout(function() {
				compteReboursReset();
			}, 500);
		}
	} else if (sl==2) {
		btnsNew=[false, false, true];
		if (document.getElementById("togChrono").checked==true) {
			compteReboursPause(false);
		}
		document.getElementById("divMenuPause").hidden=false;
	} else if (sl==3) {
		btnsNew=[false, true, false];
		compteReboursStop();
	}
	for (let i in btns) {
		document.getElementById("liBtn"+btns[i].id).hidden=!btnsNew[i];
	}
	document.getElementById("btnConfig").disabled=false;
}

/*DÉFILEMENT VERS LE HAUT*/
function defilHaut() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*AFFICHEUR NOMBRE EXOS*/
function affNb() {
	document.getElementById("affNb").innerHTML=document.getElementById("nbvoulu").value;
}

/*VERIFICATION DES EXERCICES ACTIFS*/
function verifActif() {
	let liste = selectExos();
	if (liste.length > 0) {
		document.getElementById("btnGo").disabled=false;
	} else {
		document.getElementById("btnGo").disabled=true;
	}
}

/*LANCEMENT*/
function lancement() {
	let array = selectExos();
	tirageExos(array);
}


/*CREATION D'UN ARRAY AVEC LES EXERCICES ACTIVES*/
function selectExos() {
	let exosselect = [];
	for (let i=0 ; i<exos.length ; i++) {
		if (exos[i].act==true) {
			exosselect.push(exos[i]);
		}
	}
	return exosselect;
}

/*TIRAGE DES EXERCICES*/
function tirageExos(liste) {
	let nbvoulu = document.getElementById("nbvoulu").value;
	if (liste.length<1) {
		alert("Pas d'exercices sélectionnés.");
	} else {
		let exosproposes = [];
		let nbexos = liste.length;
		for (let i=0 ; i<nbvoulu ; i++) {
			let x = Math.floor(Math.random()*liste.length);
			exosproposes[i] = liste[x];
			if (nbexos >= nbvoulu) {
				liste.splice(x,1);
			}
		}
		creerExos(exosproposes);
	}
}

/*CREATION DES EXOS*/
function creerExos(liste) {
	var cartesq = "", cartesr = "";
	for (let i=0 ; i<liste.length ; i++) {
		liste[i].type = liste[i].groupe + " - " + liste[i].nom;
		quesrep = eval(liste[i].fonc+liste[i].nbAuto+")");
		let consigne = quesrep[0], question = quesrep[1], reponse = quesrep[2];
		if (i%3==0) {
			cartesq += "<div class='pageQuestions'>";
		}		
		cartesq += "<div class='divQuestion'><article><header><small><div class='grid'><div><h5>Exercice "+(i+1)+" - "+groupes[liste[i].Gpe].nom+"</h5></div><div class='droite'><h6>"+liste[i].nom+"</h6></div></div></small></header><div>"+consigne+"</div><div>"+question+"</div></article></div>";
		cartesr += "<div><article><header><small><div class='grid'><div><h5>Réponse "+(i+1)+" - "+groupes[liste[i].Gpe].nom+"</h5></div><div class='droite'><h6>"+liste[i].nom+"</h6></div></div></small></header><div>"+consigne+"</div><div>"+reponse+"</div></article></div>";
	if (i%3==2 || i==liste.length-1) {
			cartesq += "</div>";
		}		
	}
	document.getElementById("questions").innerHTML = cartesq;
	document.getElementById("reponses").innerHTML = cartesr;
	if (document.getElementById("togChrono").checked==true) { timerGo(); } else { slider(2); }
}
