term = {};
term.sends = [];
term.receved = "";
//---------- config
//servidor de testes, para offline
term.server = ""
term.workerUrl = "http://localhost/GitHub/Teminal/terminal_v1.worker.js";

term.send_pre = "";
term.send_pos = "";

term.receved_pre = "";
term.receved_pos = "";
//-------------
term.wRequest = new Worker(term.workerUrl);
term.com = function(comander,retorno){
	this.send(comander,retorno);
}
term.send = function(comander,retorno){
	if(term.server == "")
		return "Servidor n'ao reconhecido";
	send = {};
	
	mensage = this.server + "?comander=" + comander;
	this.wRequest.postMessage(mensage);
	
	this.wRequest.onmessage = function(event) {
		term.receved = event.data;
		retorno(event.data);
	}
	//return this.receved;
}
console.log("terminal.js");