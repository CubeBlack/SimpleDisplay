term =  {};
term.sends = [];
term.loaded = function(){
	console.log("term.load");
	this.server = "http://localhost/GitHub/EddysWorld/server/eddysworld_server.term.php";
	this.wRequest = new Worker("js/request.worker.js");
	this.statusLbl = document.getElementById("statusLbl");
	this.comandInp = document.getElementById("comandInp");
	this.content = document.getElementById("content");
	
	this.setContent("Bem vindo ao terminal CubeBlack","log");
	inputEnter();
	
}

term.send = function(){
	
	con = this.comandInp.value;
	term.setContent(con,"sended");
	this.comandInp.value = "";
	if(con == ""){
		this.setContent("Empty!","log");
		return;
	}

	mensage = this.server + "?comander=" + con;
	this.wRequest.postMessage(mensage);
	
	this.wRequest.onmessage = function(event) {
		//term.content.innerHTML += event.data;
		
		term.setContent(event.data,"receved");
	}
	
}
term.setContent = function(nStr,tipo = "log"){
	this.content.innerHTML += "<p id = \""  + tipo + "\">" + nStr + "</p>";
	this.content.scrollTop = this.content.scrollHeight;
}
function inputEnter(){
	var keynum;
	if(window.event) { //IE
		keynum = event.keyCode
	} else if(event.which) { // Netscape/Firefox/Opera AQUI ESTAVA O PEQUENINO ERRO ao invés de "e." é "event."
		keynum = event.which
	}
	if( keynum == 13 ) {
		term.send();
    }
	//console.log(keynum);
}