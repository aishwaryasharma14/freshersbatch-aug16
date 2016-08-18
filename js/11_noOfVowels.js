function count(){
	var sentence="This is Xoriant";
	var arr=["a","e","i","o","u"];
	aCount=0,eCount=0,iCount=0,oCount=0,uCount=0;
	for(var i=0;i<=sentence.length;i++){
		switch(sentence[i]){
		case "a" : aCount++;break;
		case "e" : eCount++;break;
		case "i" : iCount++;break;
		case "o" : oCount++;break;
		case "u" : uCount++;break;
		default :  break;
		}
	}
	document.write("No. of As " + aCount + " No. of Es " + eCount  + " No. of Is " + iCount + " No. of Os " + oCount + " No. of Us " + uCount);
}