function run(){
var materials = ["copper","tin","zinc","lead","gold","silver","ardite","cobalt"];
var material = "copper";
//array[][] to get nested
var i=0;

var type = document.getElementById("alloy").value;
document.getElementById("three").innerHTML=type;
switch(type){
	case "bronze":
	i=0;
	document.getElementById("one").innerHTML=materials[0]+" at 3/4";
	document.getElementById("two").innerHTML=materials[1]+" at 1/4";
	document.getElementById("tinker1").src="resources/textures/fluids/"+materials[0]+".png";
	document.getElementById("tinker2").src="resources/textures/fluids/"+materials[1]+".png";
	document.getElementById("tinker1").height="128";
	document.getElementById("tinker1").width="64";
	document.getElementById("tinker2").height="32";
	document.getElementById("tinker2").width="64";
	break;
	case "brass":
	document.getElementById("three").innerHTML=type;
	document.getElementById("fluid1").src="resources/textures/fluids/blank.png";
	break;
	default:
	document.getElementById("one").innerHTML="err";
}
//document.getElementById("texture1").src="resources/textures/fluids/"+materials[i];

}
