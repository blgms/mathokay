/*VARIABLES GLOBALES*/
var elChrono, timer;
var time=300;
var pauseCompteRebours = false;

/*3, 2, 1 GO*/
function timerGo() {
	document.getElementById("btnGo").disabled=true;
	let corps = document.getElementById("corps");
	let centerScreen = document.getElementById("centerScreen");
	let t=3;
	corps.classList.add("flou");
	centerScreen.innerHTML=t
	centerScreen.hidden = false;
	let go = setInterval(function() {
		t--;
		centerScreen.innerHTML=t;
		},1000);
	setTimeout(function() {
		centerScreen.innerHTML="Go !";
		clearInterval(go);
		setTimeout(function() {
			centerScreen.hidden = true;
			centerScreen.innerHTML="Pause";
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
	document.getElementById("btnCompteRebours").classList.remove("outline");
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

function compteReboursPause(cmd) {
	if (time>0 && slon==2) {
		if (typeof cmd != "boolean") { pauseCompteRebours=!pauseCompteRebours; } else { pauseCompteRebours=cmd; };
		if (pauseCompteRebours==true) { document.getElementById("corps").classList.add("flou"); document.getElementById("centerScreen").hidden=false; document.getElementById("btnCompteRebours").classList.add("outline"); clearInterval(timer); }
		if (pauseCompteRebours==false) { document.getElementById("corps").classList.remove("flou"); document.getElementById("centerScreen").hidden=true; document.getElementById("btnCompteRebours").classList.remove("outline"); compteRebours(); }	
	}
}

function compteReboursStop() {
	clearInterval(timer);
	time=0;
	document.getElementById("btnCompteRebours").classList.add("outline");
	elChrono.innerHTML="Terminé !";
	document.getElementById("corps").classList.remove("flou");
	document.getElementById("centerScreen").hidden=true;
}
