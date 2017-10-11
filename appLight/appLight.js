function bChange(){
	var toggle;
	if (document.body.style.backgroundColor == "black"){
			document.body.style.backgroundColor = "white";
			toggle = "ON";
	} else {
			document.body.style.backgroundColor = "black";
			toggle = "OFF";
	}
	document.getElementById("phrase").innerHTML = toggle;
}