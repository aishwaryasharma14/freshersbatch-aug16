var a=[1,5,2,3,9,4];
function asc(){
	var temp;
	 for (var i = 0; i < a.length; i++) 
     {
         for (var j = i + 1; j < a.length; j++) 
         {
             if (a[i] > a[j]) 
             {
                 temp = a[i];
                 a[i] = a[j];
                 a[j] = temp;
             }
         }
     }
     document.write("Ascending Order:");
     for (var i = 0; i < a.length - 1; i++) 
     {
         document.write(a[i] + ",");
     }
     document.write(a[a.length - 1]);
 }


function desc(){
	var temp;
	for (var i = 0; i < a.length; i++) 
    {
        for (var j = i + 1; j < a.length; j++) 
        {
            if (a[i] < a[j]) 
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
	 document.write("Descending Order:");
	 for (var i = 0; i < a.length - 1; i++) 
     {
         document.write(a[i] + ",");
     }
     document.write(a[a.length - 1]);
 }