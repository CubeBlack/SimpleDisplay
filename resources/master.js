var page = {};
function loaded(){
	console.log("master.js loaded");
	
	page.title = document.getElementById('title');
	page.display = document.getElementById("display");
	page.content =  document.getElementById('content');
	page.nav =  document.getElementById('nav_menu');
  
	page.loadContent(page.nav,"nav");
	page.openT("Display");
	
	SimpleDisplay.new(page.display,"test");

};
page.loadContent = function(ele,name){
	ele.innerHTML = "loading...";
	ele.innerHTML = httpGet( "articles/" + name + ".html");
}
page.openT = function (dado){
	if(dado.innerHTML)
		sTitle = dado.innerHTML;
	else 
		sTitle = dado;
	page.loadContent(page.content,sTitle);
	page.title.innerHTML = "SimpleDisplay | " + sTitle;
	document.title = "SB | " + sTitle;
}
function httpGet(theUrl){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
	if(xmlHttp.responseText == ""){
		return "return empty";
	}
    return xmlHttp.responseText;
}
