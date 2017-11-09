console.log("simpleDisplay.js loaded");
var SimpleDisplay = {

};

SimpleDisplay.addDisplay = function(){}
SimpleDisplay.template = {};
SimpleDisplay.template.rect = "<rect id=\"{id}\" x=\"{x}\" y=\"{y}\" width=\"{width}\" height=\"{height}\" style=\"fill:{fill};stroke:{stroke};\" />";
SimpleDisplay.template.svg = "<svg id=\"{id}\" height=\"300\" width=\"500\" xmlns=\"http://www.w3.org/2000/svg\">";

//SimpleDisplay.display = [];

SimpleDisplay.new = function(ele,nome){
	id = "SimpleDisplay_" + nome;
	parametros = {
		"id":id,

	};
	SimpleDisplay.display = {};
	SimpleDisplay.display.id = id;
	ele.innerHTML = template.replace(SimpleDisplay.template.svg,parametros);
}
SimpleDisplay.addRect = function (x=0,y=0,width=100,height=100,color="white",line="red"){
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
  console.log(str);
  document.getElementById("display").innerHTML = str;
  //console.log(str);
};
SimpleDisplay.addCircle = function (){
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
