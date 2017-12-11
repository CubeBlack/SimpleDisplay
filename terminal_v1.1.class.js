class Terminal{
	constructor(){
	this.sends = [];
	this.receved = "";
	//---------- config
	//servidor de testes, para offline
	this.server = ""
	this.workerUrl = "http://localhost/GitHub/Teminal/terminal_v1.worker.js";

	this.send_pre = "";
	this.send_pos = "";

	this.receved_pre = "";
	this.receved_pos = "";
	//-------------
	this.wRequest = new Worker(this.workerUrl);
	};
	//---------------------------
	com (comander,retorno){
		this.send(comander,retorno);
	}
	send (comander,retorno){
		if(term.server == "")
			return "Servidor n'ao reconhecido";
		
		//mensage = "";
		var mensage = this.server + "?comander=" + comander;
		this.wRequest.postMessage(mensage);
		
		this.wRequest.onmessage = function(event) {
			term.receved = event.data;
			retorno(event.data);
		}
		//return this.receved;
	}
}
console.log("terminal_v1.1.class.js");