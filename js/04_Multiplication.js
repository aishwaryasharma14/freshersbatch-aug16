function multiply(){
	var num=document.getElementById("no").value;
	for(var i=1;i<11;i++){
		document.write(num * i + "\n");
		
	}
	
	var option=confirm("Do you want to enter another number?");
	if(option==true){
		//document.write('<input type="button" value="Enter another number" onclick="reload()">');
		window.location.reload();
	}
	else{
		document.write("Thanks!");
	}
		
}
