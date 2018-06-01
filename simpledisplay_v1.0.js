class SimpleDisplay{
	constructor(content,id="SimpleDisplay",adicional=""){
		var parametros = {"id":id,"adicional":adicional};
		content.innerHTML = SimpleDisplay.replace(SimpleDisplayBase.svg,parametros);
		this.ele = document.getElementById(id);
	}
	addRect(x=0,y=0,width=100,height=100,style="",adicional=""){
		var nEle = {};
		nEle.parametros = {
		"x":x,
		"y":y,
		"width":width,
		"height":height,
		"adicional":adicional,
		"style":style
		};
		nEle.str = SimpleDisplay.replace(SimpleDisplayBase.rect,nEle.parametros);
		return this.addElemento(nEle);
	}
	addElemento(ele){
		this.str = this.str + ele.str;
		this.rewrite();
	}
	rewrite(){
		this.ele.innerHTML = this.str;
	}
	static replace(base,dados){
		var dadosK=Object.keys(dados);
		for (var i = 0; i < dadosK.length; i++) {
			base = base.replace(new RegExp("{" + dadosK[i] + "}", 'g'),dados[dadosK[i]]);
		}
		return base;
	}
}
var SimpleDisplayBase = [];
SimpleDisplayBase.rect = "<rect x=\"{x}\" y=\"{y}\" width=\"{width}\" height=\"{height}\" style=\"{style}\" {adicional} /></rect>";
SimpleDisplayBase.circle = "<rect x=\"{x}\" y=\"{y}\" width=\"{width}\" height=\"{height}\" style=\"{style}\" {adicional} /></rect>";
SimpleDisplayBase.svg = "<svg id={id} xmlns=\"http://www.w3.org/2000/svg\" {adicional}></svg>";