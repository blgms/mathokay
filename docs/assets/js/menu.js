/*VARIABLES GLOBALES*/
const btns = [
	{"id":"Go", "lbl":"Go&nbsp;!", "actif":true},
	{"id":"Config", "lbl":"Config", "actif":false},
	{"id":"Questions", "lbl":"Questions", "actif":false},
	{"id":"Reponses", "lbl":"Réponses", "actif":false}
	];
	
var slon = 1;
var menuon = "Gpe";

/*LANCEMENT DE L'APPLI ET AFFICHAGE DU MENU*/
function demarrage() {
	const corps = document.getElementById("corps");
	const centerScreen = document.getElementById("centerScreen");
	const divPause = document.getElementById("divPause");
	const btnCompteRebours = document.getElementById("btnCompteRebours");
	elChrono = document.getElementById("chrono");
	document.getElementById("togChrono").checked=false;
	menu("Gpe");
	renderMathInElement(document.getElementById("corps"));
	affNb();
	verifActif();
}

/*CREATION OU CHANGEMENT DE MENU DE SELECTION*/
function menu(m) {
	let exosListe = "";
	if (m=="Gpe") {
		exos.sort(function(a, b) {return a.Gpe-b.Gpe;});
		for (let i=0 ; i<exos.length ; i++) {
			if (i==0 || exos[i].Gpe!=exos[i-1].Gpe) {
				exosListe += "<thead><tr><th>"+groupes[exos[i].Gpe].nom+"</th></tr></thead>";
			}
			let check = "";
			if (exos[i].act==true) { check=" checked"; }
			exosListe += "<tr><td><label for='switch'><input type='checkbox' id='togExo"+i+"' name='switch' role='switch' class='toggledroite' onclick='majMenu("+i+")'"+check+">"+diffs[exos[i].Diff].couleur+" "+exos[i].nom+"</label></td></tr>";
		}
		document.getElementById("tableGpe").innerHTML = exosListe;
	}
	if (m=="Diff") {
		exos.sort(function(a, b) {return a.Diff-b.Diff;});
		for (let i=0 ; i<exos.length ; i++) {
			if (i==0 || exos[i].Diff!=exos[i-1].Diff) {
				exosListe += "<thead><tr><th>"+diffs[exos[i].Diff].couleur+" "+diffs[exos[i].Diff].nom+"</th></tr></thead>";
			}
			let check = "";
			if (exos[i].act==true) { check=" checked"; }
			exosListe += "<tr><td><label for='switch'><input type='checkbox' id='togExo"+i+"' name='switch' role='switch' class='toggledroite' onclick='majMenu("+i+")'"+check+">"+exos[i].nom+"</label></td></tr>";
		}
		document.getElementById("tableDiff").innerHTML = exosListe;
	}
	if ((m=="Opt" && menuon!="Opt") || (m!="Opt" && menuon=="Opt")) { document.getElementById("iconBtnMenuOpt").classList.toggle("iconMenu"); document.getElementById("iconBtnMenuOpt").classList.toggle("iconSelect"); };
	document.getElementById("divTable"+menuon).hidden=!document.getElementById("divTable"+menuon).hidden;
	document.getElementById("btnMenu"+menuon).classList.toggle("outline");
	menuon=m;		
	document.getElementById("divTable"+menuon).hidden=!document.getElementById("divTable"+menuon).hidden;
	document.getElementById("btnMenu"+menuon).classList.toggle("outline");
	renderMathInElement(document.getElementById("corps"));
}

/*MISE A JOUR AUTO MENU*/
function majMenu(n) {
	exos[n].act=!exos[n].act;
	verifActif();
}

/*TRANSITION ET DECLENCHEMENT DU COMPTE A REBOURS*/
function slider(sl) {
	if (sl!=slon) {
		let el=document.getElementById("slide"+slon);
		el.hidden=true;
		slon = sl;
		el=document.getElementById("slide"+slon);
		el.hidden=false;
	}
	defilHaut();
	let btnsNew=[];
	if (sl==1) {
		btnsNew=[true, false, false, false];
		if (document.getElementById("togChrono").checked==true) {
			compteReboursStop();
			setTimeout(function() {
				compteReboursReset();
			}, 500);
		}
	} else if (sl==2) {
		btnsNew=[false, true, false, true];
		if (document.getElementById("togChrono").checked==true) {
			compteReboursPause(false);
		}
	} else if (sl==3) {
		btnsNew=[false, true, true, false];
		compteReboursStop();
	}
	for (let i=0 ; i<4 ; i++) {
		document.getElementById("liBtn"+btns[i].id).hidden=!btnsNew[i];
	}
	renderMathInElement(document.getElementById("corps"));
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
			if (nbexos >= nbvoulu && !document.getElementById("togDoublons").checked) {
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
		quesrep = eval(liste[i].fonc);
		let consigne = quesrep[0], question = quesrep[1], reponse = quesrep[2];
		cartesq += "<div><article><header><small><div class='grid'><div><h5>Exercice "+(i+1)+" - "+groupes[liste[i].Gpe].nom+"</h5></div><div class='droite'><h6>"+liste[i].nom+"</h6></div></div></small></header><div>"+consigne+"</div><div>"+question+"</div></article></div>";
		cartesr += "<div><article><header><small><div class='grid'><div><h5>Réponse "+(i+1)+" - "+groupes[liste[i].Gpe].nom+"</h5></div><div class='droite'><h6>"+liste[i].nom+"</h6></div></div></small></header><div>"+consigne+"</div><div>"+reponse+"</div></article></div>";
	}
	document.getElementById("questions").innerHTML = cartesq;
	document.getElementById("reponses").innerHTML = cartesr;
	if (document.getElementById("togChrono").checked==true) { timerGo(); } else { slider(2); }
}

/*ROLL CREDITS*/
function about() {
	let el = document.getElementById("aPropos");
	if (el.style.display == "") {el.style.display = "grid"; } else {el.style.display = ""; }
}
