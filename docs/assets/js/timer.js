/*VARIABLES GLOBALES*/
var elChrono, timer;
var time=300;
var pauseCompteRebours = false;

/*3, 2, 1 GO*/
function timerGo() {
	document.getElementById("divMenuPause").hidden=true;
	document.getElementById("btnGo").disabled=true;
	let t=3;
	corps.classList.add("flou");
	divPause.innerHTML=t;
	centerScreen.hidden = false;
	divPause.hidden = false;
	document.getElementById("btnConfig").disabled=true;
	let go = setInterval(function() {
		t--;
		divPause.innerHTML=t;
		},1000);
	setTimeout(function() {
		divPause.innerHTML="Go !";
		clearInterval(go);
		setTimeout(function() {
			centerScreen.hidden = true;
			divPause.innerHTML="Pause";
			corps.classList.remove("flou");
			slider(2);
			document.getElementById("btnGo").disabled=false;
		},500);
	}, 3000);
}

/*COMPTE A REBOURS*/
function compteRebours() {
	timer = setInterval(function() {
		if (pauseCompteRebours==false) {
			time--;
			elChrono.innerHTML=compteReboursAff(time);
		}
		if (time<=0) {
			compteReboursStop();
		}
	}, 1000);
}

function compteReboursAff(t) {
	let s=t%60;
	let m=Math.floor(t/60);
	if (m<10) {m="0"+m;}
	if (s<10) {s="0"+s;}
	return m+":"+s;
}

function compteReboursRefresh() {
	btnCompteRebours.classList.remove("outline");
	time=document.getElementById("timeRange").value;
	elChrono.innerHTML=compteReboursAff(time);
}

function compteReboursReset() {
	if (document.getElementById("togChrono").checked==true) {
		document.getElementById("liLogo").hidden=true;
		document.getElementById("divChrono").hidden=false;
		document.getElementById("timeRangeSpan").hidden=false;
		compteReboursRefresh();
	} else {
		document.getElementById("liLogo").hidden=false;
		document.getElementById("divChrono").hidden=true;
		document.getElementById("timeRangeSpan").hidden=true;
	}
}

function menuPause() {
	if (slon > 1) { compteReboursPause(); }
	else {
		corps.classList.toggle("flou");
		centerScreen.hidden=!centerScreen.hidden;
	}
}

function compteReboursPause(cmd) {
	if (slon>1) {
		if (typeof cmd != "boolean") { pauseCompteRebours=!pauseCompteRebours; } else { pauseCompteRebours=cmd; }
		if (pauseCompteRebours==true) { corps.classList.add("flou"); centerScreen.hidden=false; divMenuBack.hidden=false; divPause.hidden=false; btnCompteRebours.classList.add("outline"); clearInterval(timer); }
		if (pauseCompteRebours==false) { corps.classList.remove("flou"); centerScreen.hidden=true; divMenuBack.hidden=true; divPause.hidden=true; if (time > 0) btnCompteRebours.classList.remove("outline"); compteRebours(); }
	}
}

function compteReboursStop() {
	clearInterval(timer);
	time=0;
	btnCompteRebours.classList.add("outline");
	elChrono.innerHTML="Terminé !";
	corps.classList.remove("flou");
	centerScreen.hidden=true;
	divPause.hidden=true;
	divMenuBack.hidden=true;
	pauseCompteRebours=false;
}
