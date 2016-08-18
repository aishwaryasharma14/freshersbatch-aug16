function validate(){
var em=document.getElementById("email").value;
var len=em.length;
var flag=0;
for(var i=0;i<em.length;i++)
	{
	if((em[i]=="@")&&(em.charAt(len-4)==".")){
		flag = 1;
	}
	
	}
if(flag==1)
	document.write("Email Id accepted!");
else
	alert("Incorrect format !");
}