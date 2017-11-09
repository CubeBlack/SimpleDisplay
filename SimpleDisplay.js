console.log("simpleDisplay.js loaded");
SimpleDisplay = {};
SimpleDisplay.template = {};
SimpleDisplay.displayObj = {};
SimpleDisplay.display = [];

SimpleDisplay.template.rect = "<rect id=\"{id}\" x=\"{x}\" y=\"{y}\" width=\"{width}\" height=\"{height}\" style=\"fill:{fill};stroke:{stroke};\" />";
SimpleDisplay.template.svg = "<svg id=\"{id}\" height=\"300\" width=\"500\" xmlns=\"http://www.w3.org/2000/svg\">";




SimpleDisplay.new = function(base,nome){
	nDisplay = {};
	nDisplay.id = "SimpleDisplay_" + nome;
	nDisplay.base = base;
	parametros = {
		"id":nDisplay.id,
	};
	nDisplay.base.innerHTML = template.replace(SimpleDisplay.template.svg,parametros);
	nDisplay.ele = document.getElementById(nDisplay.id);
	SimpleDisplay.display[nome] = nDisplay;
}
SimpleDisplay.addEle = function(){
	
};
SimpleDisplay.addRect = function (display,x=0,y=0,width=100,height=100,color="white",line="red"){
  //document.getElementById("display").innerHTML = "<rect id=\"redrect\" width=\"50\" height=\"50\" fill=\"red\" />";
  parametros = {
    "id":"X",
    "x":x,
    "y":x,
    "width":width,
    "height":height,
    "fill":color,
    "stroke":line
  };
  str = template.replace(SimpleDisplay.template.rect,parametros);
  SimpleDisplay.display[display].ele.innerHTML = str;
  //console.log(str);
};
SimpleDisplay.addCircle = function (display){
  document.getElementById("display").innerHTML = "<circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />";
};
SimpleDisplay.display = function(){
  //document.write("display");
}
SimpleDisplay.refresh = function(){
  document.getElementById("display").innerHTML = "<rect id=\"redrect\" width=\"50\" height=\"50\" fill=\"red\" />";
};

var template = {

};
template.replace = function(base,dados){
  dadosK=Object.keys(dados);
  for (var i = 0; i < dadosK.length; i++) {
    base = base.replace(new RegExp("{" + dadosK[i] + "}", 'g'),dados[dadosK[i]]);
  }
  return base;
}
