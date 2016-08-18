function factorial(){
	var num=document.getElementById("no").value;
	var fact=1;
	for(var i=1;i<=num;i++){    
	      fact=fact*i;    
	  }
	document.getElementById("result").value=fact;
	//document.write(fact);
}