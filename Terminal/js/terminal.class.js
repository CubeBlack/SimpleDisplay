term =  {
  statusLbl: null,
  worker:{
    send: new Worker("js/request.worker.js")
  },
  constructor(){

  },

  loading(){
    if (this.statusLbl==null) {
      console.log("Carregando...");
    }else {
      this.statusLbl.innerHTML = "hunter";
    }
  },
  loadded(){},
  send(){
      this.loading();

        this.worker.send.postMessage("valor de A");
        console.log('Message posted to worker');

      /*
      this.worker.send.onmessage = function(event) {
        alert("Worker said: " + event.data);
      };
      */
  }
};
