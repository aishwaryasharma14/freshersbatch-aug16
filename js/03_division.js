function divide(){
	var no_1 = document.getElementById("no1").value;
	var no_2 = document.getElementById("no2").value;
	
	if(no_2==0){
		alert("Illegal operation! Please enter another denominator!");
	}
	else{
		var no_3= no_1/no_2;
	}
	//document.write("Answer is " + no_3);
	document.getElementById("result").value= no_3;
	
}