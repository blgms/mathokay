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
var idCarte = 0;

/*LANCEMENT DE L'APPLI ET AFFICHAGE DU MENU*/
function demarrageAuto() {
	const slide2 = document.getElementById("slide2");
	const slide3 = document.getElementById("slide3");
	const centerScreen = document.getElementById("centerScreen");
	const divPause = document.getElementById("divPause");
	const btnCompteRebours = document.getElementById("btnCompteRebours");
	elChrono = document.getElementById("chrono");
	document.getElementById("togChrono").checked=false;
	menu("auto");
	affNb();
	verifActif();
}

/*CREATION OU CHANGEMENT DE MENU DE SELECTION*/
function menu(m) {
	let exosListe = "";
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
	let elq = document.getElementById('questions');
	let elr = document.getElementById('reponses');
	elq.innerHTML = ""; elr.innerHTML = "";
	for (idCarte=0 ; idCarte<liste.length ; idCarte++) {
		liste[idCarte].type = liste[idCarte].groupe + " - " + liste[idCarte].nom;
		if (idCarte%3==0) {
			elq.innerHTML += "<div class='pageQuestions'>";
		}
		elq.innerHTML += "<div class='divQuestion'><article><header><small><div class='grid'><div><h5>Exercice "+(idCarte+1)+" - "+groupes[liste[idCarte].Gpe].nom+"</h5></div><div class='droite'><h6>"+liste[idCarte].nom+"</h6></div></div></small></header><div id='consigne"+idCarte+"'></div><div id='question"+idCarte+"'></div></article></div>";
		elr.innerHTML += "<div><article><header><small><div class='grid'><div><h5>Réponse "+(idCarte+1)+" - "+groupes[liste[idCarte].Gpe].nom+"</h5></div><div class='droite'><h6>"+liste[idCarte].nom+"</h6></div></div></small></header><div id='consigneR"+idCarte+"'></div><div id='reponse"+idCarte+"'></div></article></div>";
		infos = eval(liste[idCarte].fonc+")");
		document.getElementById("consigne"+idCarte).innerHTML += infos[0];
		document.getElementById("consigneR"+idCarte).innerHTML += document.getElementById("consigne"+idCarte).innerHTML;
		document.getElementById("question"+idCarte).innerHTML += infos[1];
		document.getElementById("reponse"+idCarte).innerHTML += infos[2];
		if (idCarte%3==2 || idCarte==liste.length-1) {
			elq.innerHTML += "</div>";
		}
	}
	if (document.getElementById("togChrono").checked==true) { timerGo(); } else { slider(2); }
}
