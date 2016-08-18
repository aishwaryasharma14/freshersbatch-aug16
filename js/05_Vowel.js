function check(){
	var alphabet=document.getElementById("alpha").value;
	var vow = ["a","e","i","o","u"];
	 var i=0;
	 for(i in vow){
		 if(alphabet==vow[i]){
			 document.getElementById("result").value="Vowel";
			 //document.write("Vowel");
			 break;
		 }
		 else{
			 document.getElementById("result").value="Not a Vowel";
			/* document.write("Not a vowel!");*/
		 }
	 }
}