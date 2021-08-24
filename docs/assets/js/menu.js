/*VARIABLES GLOBALES*/
var diffs = [
	{"nom": "Très facile", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconblue' />"},
	{"nom": "Facile", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 icongreen' />"},
	{"nom": "Moyen", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconyellow' />"},
	{"nom": "Difficile", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconorange' />"},
	{"nom": "Hardcore", "couleur": "<img src='docs/assets/images/star.svg' class='icon20 iconred' />"}
];

var btns = [
	{"id":"Go", "lbl":"Go&nbsp;!", "actif":true},
	{"id":"Config", "lbl":"Config", "actif":false},
	{"id":"Questions", "lbl":"Questions", "actif":false},
	{"id":"Reponses", "lbl":"Réponses", "actif":false}
	];
	
var slon = 1;
var menuon = "Exos";

/*LANCEMENT DE L'APPLI ET AFFICHAGE DU MENU*/
function demarrage() {
	exos.sort(function(a, b) {return a.Gpe-b.Gpe;});
	let exosStr = "";
	let gpeStr = "";
	let diffStr = "";
	for (let i=0 ; i<exos.length ; i++) {
		if (i==0 || exos[i].Gpe!=exos[i-1].Gpe) {
			exosStr += "<thead><tr><th>"+groupes[exos[i].Gpe]+"</th></tr></thead>";
		}
		exosStr += "<tr><td><label for='switch'><input type='checkbox' id='togExo"+i+"' name='switch' role='switch' class='toggledroite' onclick='majMenu(&apos;Exos&apos;,"+i+")'>"+diffs[exos[i].Diff].couleur+" "+exos[i].nom+"</label></td></tr>"	
	}
	for (let i=0 ; i<groupes.length ; i++) {
		gpeStr += "<tr><td><label for='switch'><input type='checkbox' id='togGpe"+i+"' name='switch' role='switch' class='toggledroite' onclick='majMenu(&apos;Gpe&apos;,"+i+")'>"+groupes[i]+"</label></td></tr>"
	}
	for (let i=0 ; i<diffs.length ; i++) {
		diffStr += "<tr><td><label for='switch'><input type='checkbox' id='togDiff"+i+"' name='switch' role='switch' class='toggledroite' onclick='majMenu(&apos;Diff&apos;,"+i+")'>"+diffs[i].couleur+" "+diffs[i].nom+"</label></td></tr>"
	}
	document.getElementById("tableExos").innerHTML = exosStr;
	document.getElementById("tableGpe").innerHTML = gpeStr;
	document.getElementById("tabDiff").innerHTML = diffStr;
	affNb();
	verifActif();
}

/*CHANGEMENT DE MENU DE SELECTION*/
function menu(m) {
	majMenu("Exos",-1);
	document.getElementById("divTable"+menuon).hidden=!document.getElementById("divTable"+menuon).hidden;
	menuon = m;
	document.getElementById("divTable"+menuon).hidden=!document.getElementById("divTable"+menuon).hidden;
	document.getElementById("divBtnExos").hidden=!document.getElementById("divBtnExos").hidden;
	document.getElementById("divBtnCat").hidden=!document.getElementById("divBtnCat").hidden;
	majMenu("Exos",-1);
}

/*MISE A JOUR AUTO MENU*/
function majMenu(cat,n) {
	if (cat!="Exos") {
		selectionne(cat,n);
	} else {
		if (n>-1) {
			exos[n].act=document.getElementById("togExo"+n).checked
		}
		let countGpe = Array(groupes.length).fill(0);
		let countGpeAct = Array(groupes.length).fill(0);
		let countDiff = Array(diffs.length).fill(0);
		let countDiffAct = Array(diffs.length).fill(0);		
		for (let i=0 ; i<exos.length ; i++) {
			countGpe[exos[i].Gpe] += 1;
			countDiff[exos[i].Diff] += 1;
			if (exos[i].act==true) {
				countGpeAct[exos[i].Gpe] += 1;
				countDiffAct[exos[i].Diff] += 1;
			}
			exos[i].act=document.getElementById("togExo"+i).checked
		}
		for (let i=0 ; i<countGpe.length ; i++) {
			let el = document.getElementById("togGpe"+i)
			if (countGpeAct[i]==countGpe[i] && countGpe[i]>0) {
				el.checked=true;
			} else {
				el.checked=false;
			}
		}
		for (let i=0 ; i<countDiff.length ; i++) {
			let el = document.getElementById("togDiff"+i)
			if (countDiffAct[i]==countDiff[i] && countDiff[i]>0) {
				el.checked=true;
			} else {
				el.checked=false;
			}
		}
	}
	verifActif();
}

/*TRANSITION*/
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
		document.getElementById("footerpage").hidden=false;
	} else if (sl==2) {
		btnsNew=[false, true, false, true];
		document.getElementById("footerpage").hidden=true;
	} else if (sl==3) {
		btnsNew=[false, true, true, false];
		document.getElementById("footerpage").hidden=true;
	}
	for (let i=0 ; i<4 ; i++) {
		document.getElementById("liBtn"+btns[i].id).hidden=!btnsNew[i];
	}
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

/*SELECTION PAR GROUPE/DIFFICULTE*/
function selectionne(cat,n) {
	let select = [];
	let count = 0;
	for (let i=0 ; i<exos.length ; i++) {
		let el;
		let gpeexo = exos[i][cat];
		if (gpeexo == n) {
			el = document.getElementById("togExo"+i);
			select[count] = el.checked;
			count += 1;
		}
	}
	if (select.includes(false)) {
		select.fill(true);
	} else {
		select.fill(false);
	}
	count = 0;
	for (let i=0 ; i<exos.length ; i++) {
		let gpeexo = exos[i][cat];
		if (gpeexo == n) {
			el = document.getElementById("togExo"+i);
			el.checked = select[count];
			count += 1;
		}
	}
}

/*VERIFICATION DES EXERCICES ACTIFS*/
function verifActif() {
	let liste = [];
	for (let i=0 ; i<exos.length ; i++) { 
		let el = document.getElementById("togExo"+i);
		liste[i] = el.checked;
	}
	if (liste.includes(true)) {
		document.getElementById("btnGo").disabled=false;
	} else {
		document.getElementById("btnGo").disabled=true;
	}
}

/*SELECTION DE TOUS LES EXERCICES*/
/*function selectTout() {
	let liste=verifActif();
	if (liste.includes(false)) {
		liste.fill(true);
	} else {
		liste.fill(false);
	}
	for (let i=0 ; i<exos.length ; i++) { 
		let el = document.getElementById("togExo"+i);
		el.checked = liste[i];
	}
	majMenu('exos',-1);
}*/

/*LANCEMENT*/
function lancement() {
	let array = selectExos();
	tirageExos(array);
}


/*CREATION D'UN ARRAY AVEC LES EXERCICES ACTIVES*/
function selectExos() {
	let exosselect = [];
	for (let i=0 ; i<exos.length ; i++) {
		let el = document.getElementById("togExo"+i);
		if (el.checked) {
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
		let question = quesrep[0], reponse = quesrep[1];
		cartesq += "<div><article><header><small><h5>Exercice "+(i+1)+" - "+groupes[liste[i].Gpe]+"</h5><h6>"+liste[i].nom+"</h6></small></header><div>"+question+"</div></article></div>";
		cartesr += "<div><article><header><small><h5>Réponse "+(i+1)+" - "+groupes[liste[i].Gpe]+"</h5><h6>"+liste[i].nom+"</h6></small></header><div>"+reponse+"</div></article></div>";
	}
	document.getElementById("questions").innerHTML = "<div>"+cartesq+"</div>";
	document.getElementById("reponses").innerHTML = cartesr;
	slider(2);
}
