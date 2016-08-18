function maximum(){
var arr=[1,2,3,4,5];

	var max=arr[0];
	for(var j=1;j<arr.length;j++){
		if(arr[j]>max){
			max=arr[j];
		
	}
	
}
document.getElementById("result").value=max;
}

function minimum(){
	var arr1=[1,2,3,4,5];
	
		var min=arr1[0];
		for(var j=1;j<arr1.length;j++){
			if(arr1[j]<min){
				min=arr1[j];
			
		}
	}
	//document.write(min);
		document.getElementById("result1").value=min;
}

function total(){
	var arr2=[1,2,3,4,5];
	var sum=0;
	for(var i=0;i<arr2.length;i++){
		sum=sum+arr2[i];
	}
	document.getElementById("result3").value=sum;
	//document.write(sum);
}

function average(){
	var arr2=[1,2,3,4,5];
	var sum=0;
	for(var i=0;i<arr2.length;i++){
		sum=sum+arr2[i];
	}
	document.getElementById("result2").value=sum/arr2.length;
	//document.write(sum/arr2.length);
}
