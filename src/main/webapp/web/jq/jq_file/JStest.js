/*
  function test(){
  	alert("外部引入");
  }
*/
//state object
var JSVariable={};
JSVariable.test=function(){
	alert("object mode is execute");	
}
//use factory model
function getJSvariable(){
	var JSVariable={};
	JSVariable.test=function(){
		alert("factory model is execute");
	}
	return JSVariable;
}

