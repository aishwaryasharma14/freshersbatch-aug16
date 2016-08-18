function palindrome() {
    var sentence="aka";
	var len = sentence.length;
	var flag=0;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (sentence[i] !== sentence[len - 1 - i]) {
            flag=1;
            break;
        }
    }
    if(flag==1)
    document.write("Not a palindrome");
    else
    document.write("palindrome");
}