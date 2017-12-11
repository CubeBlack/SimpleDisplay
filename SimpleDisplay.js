console.log("simpleDisplay.js loaded");
SimpleDisplay = {};
SimpleDisplay.template = {};
SimpleDisplay.displayObj = {};
SimpleDisplay.display = [];

SimpleDisplay.template.rect = "<rect id=\"{id}\" x=\"{x}\" y=\"{y}\" width=\"{width}\" height=\"{height}\" style=\"fill:{fill};stroke:{stroke};\" />";
SimpleDisplay.template.svg = "<svg id=\"{id}\" height=\"{height}\" width=\"{width}\" xmlns=\"http://www.w3.org/2000/svg\">";

SimpleDisplay.new = function(base,nome, height="100%", width="100%"){
	nDisplay = SimpleDisplay.displayObj;
	nDisplay.id = "SimpleDisplay_" + nome;
	nDisplay.base = base;
	parametros = {
		"id":nDisplay.id,
		"height":height,
		"width":width
	};
	nDisplay.base.innerHTML = template.replace(SimpleDisplay.template.svg,parametros);
	nDisplay.svg = document.getElementById(nDisplay.id);
	SimpleDisplay.display[nome] = nDisplay;
	return SimpleDisplay.display[nome];
};
SimpleDisplay.displayObj.rewrite = function(){
	//console.log(this.str);
	this.svg.innerHTML = this.str;
}
SimpleDisplay.displayObj.addEle = function(ele){
	this.str = ele.str;
	this.rewrite();
};

SimpleDisplay.displayObj.addRect = function(x=0,y=0,width=100,height=100,color="white",line="red"){
  //document.getElementById("display").innerHTML = "<rect id=\"redrect\" width=\"50\" height=\"50\" fill=\"red\" />";
	nEle = {};
  nEle.parametros = {
    "id":"X",
    "x":x,
    "y":x,
    "width":width,
    "height":height,
    "fill":color,
    "stroke":line
  };
  nEle.str = template.replace(SimpleDisplay.template.rect,nEle.parametros);
	this.addEle(nEle);
  //SimpleDisplay.display[display].ele.innerHTML = str;
  //console.log(str);
};
SimpleDisplay.displayObj.addCircle = function (display){
  document.getElementById("display").innerHTML = "<circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />";
};
SimpleDisplay.displayObj.refresh = function(){
  document.getElementById("display").innerHTML = "<rect id=\"redrect\" width=\"50\" height=\"50\" fill=\"red\" />";
};

var template = {};
template.replace = function(base,dados){
  dadosK=Object.keys(dados);
  for (var i = 0; i < dadosK.length; i++) {
    base = base.replace(new RegExp("{" + dadosK[i] + "}", 'g'),dados[dadosK[i]]);
  }
  return base;
}
