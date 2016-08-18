var count=0;
function check(){
	var username = document.getElementById("name").value;
	var password = document.getElementById("pwd").value;
	
	
	
		if(username=="aish" && password=="aish"){
			document.write("Congrats!");
		
		}
		else{
			alert("You have entered incorrect details!");
			count++;
			if(count==3){
				alert("You have exceeded the maximum attempts!");
			}
			}
		
   }
	