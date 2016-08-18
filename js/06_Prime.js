function prime(){
	var no_1 = parseInt(document.getElementById("no1").value);
	var no_2 = parseInt(document.getElementById("no2").value);	
	//var no_3 = no_1;
	
	for(var i=no_1; i<=no_2;i++){
		var count=0;
		for(var j=2;j<=i/2;j++)
			{
			if(i%j==0){
				count++;
				break;
			}
		}
		if(count==0 && i!=1)
			document.write(" "+ i + " ");
	}
	
}