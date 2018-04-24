class Terminal{
	constructor(){
		this.id = "Term2.0";
		this.coms = [];
		this.aComs = 10;
		
		this.receved = "";
		//---------- config
		//servidor de testes, para offline
		this.server = "";
		this.workerUrl = "";

		this.send_pre = "";
		this.send_pos = "";

		this.receved_pre = "";
		this.receved_pos = "";
		//-------------
	
	};
	//---------------------------
	com (comander,retorno = "Empty!"){
		if(comander[0] == "."){
			this.iCom(comander,retorno);
			return;
		}
		//
		comander = encodeURI(comander);
		this.send(comander,retorno);
	}
	iCom(comander, retorno = "Empty!"){
		if(retorno == "Empty!"){
			retorno = this.rCom;
		}
		/*
			m = mode de entrada
			comander = entrada de comandos
			dado = entrada de dados
		*/
		var m = "";
		var IComander = "";
		var dado = "";
		var msg;
		
		for(var a = 0; a < comander.length; a++){
			if(m == ""){
				if(comander[a] == "."){
					m = "comander";
					continue;
				}
			}
			if(m == "comander"){
				if(comander[a] == "("){
					m = "dado";
					continue;
				}

			}
			if(m == "comander"){
				IComander += comander[a];
				continue;
			}
			if (m == "dado"){
				if(comander[a] == ")"){
					continue;
				}
				dado += comander[a];
			}
			
		}
		if(IComander == "help" || IComander == ""){
			msg = this.help();
		}
		///------------
		else if(IComander == "setServer"){
			msg = this.setServer(dado);
		}
		else if(IComander == "setWorker"){
			msg = this.setWorker(dado);
		}
		else if(IComander == "on"){
			msg = this.on();
		}
		///-----------
		else{
			msg = this.id + ": Comando Interno não reconhecido, utilize o comando '.help'."
		}
		retorno(msg);
	}
	rCom(msg){
		console.log(this.id + ": " + msg);
	}
	send (comander,retorno="Empty!"){
		if(retorno == "Empty!"){
			retorno = this.rCom;
		}
		if(this.wRequest == undefined){
			retorno(this.id + ": Não foi posivel a comunicação com o servidor, Verifique se o terminal foi iniciado corretamente");
			return;
		}
		if(term.server == ""){
			retorno(this.id + ": Servidor não reconhecido");
			return;
		}
		//mensage = "";
		var mensage = this.server + "?comander=" + comander;
		this.wRequest.postMessage(mensage);
		
		this.wRequest.onmessage = function(event) {
			term.receved = event.data;
			retorno(event.data);
		}
		//return this.receved;
	}
	setServer(url){
		this.server = url;
		return this.id + ": Definido o endereço do servidor para '" + url + "'";
	}
	setWorker(url){
		this.workerUrl = url;
	}
	on(){
		if(this.workerUrl==""){
			return this.id + ": TerminalUrl não definido";
		}
		this.wRequest = new Worker(this.workerUrl);
		return this.id + ": Aberta conecção com o servidor";
	}
	help(){
		var retorno = "";
		retorno += this.id + "\n";
		retorno += " - ---------- .Help - ---------- \n";
		retorno += "aaaa \n";
		return retorno;
	}
}
console.log("terminal_v2.0.class.js");