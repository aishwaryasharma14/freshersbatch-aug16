var count=0,spaceCount=0;
function calculate(){
	var sentence="Hello people";
	for(var i=0;i<sentence.length;i++){
		count++;
	}
	for(var i=0;i<sentence.length;i++){
		if(sentence.charAt(i)===' ')
			spaceCount++;
	}
	document.write(count-spaceCount);
}