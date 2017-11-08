console.log("SampleDisplay.load");
var SampleDisplay = {

};

SampleDisplay.addDisplay = function(){}
SampleDisplay.template = {};
SampleDisplay.template.rect = "<rect id=\"{id}\" x=\"{x}\" y=\"{y}\" width=\"{width}\" height=\"{height}\" style=\"fill:{fill};stroke:{stroke};\" />";


SampleDisplay.addRect = function (x=0,y=0,width=100,height=100,color="white",line="red"){
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
  str = template.replace(SampleDisplay.template.rect,parametros);
  console.log(str);
  document.getElementById("display").innerHTML = str;
  //console.log(str);
};
SampleDisplay.addCircle = function (){
  document.getElementById("display").innerHTML = "<circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />";
};
SampleDisplay.display = function(){
  //document.write("display");
}
SampleDisplay.refresh = function(){
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
