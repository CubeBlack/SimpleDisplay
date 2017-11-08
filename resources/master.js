var page = {};
function loaded(){
  console.log("loaded");
  page.content =  document.getElementById('content');
  page.content.innerHTML= "loading";
  retorno = httpGet("articles/rect.html");
  page.content.innerHTML = retorno;
};
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
	if(xmlHttp.responseText == ""){
		return "return empty";
	}
    return xmlHttp.responseText;
}
