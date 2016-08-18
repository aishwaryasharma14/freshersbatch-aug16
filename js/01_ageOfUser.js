function getBirthYear(){
//alert("Hi");
var dateObj = new Date();
var CurrYear = dateObj.getFullYear();
var age = document.getElementById("age").value;
var byear = CurrYear - age;
document.write("Your Birth Year is " + byear);
}
