function multiply (x,y) {return 
x * y ;
}


var name = "SARAH";
console.log(name);
document.querySelector("#myname").innerHTML= "hello my name is "+name;
var button = document.querySelector("#calculate"); 
button.onclick=function() {

var input1= document.querySelector("#question1").value; 
var input2= document.querySelector("#question2").value;
var result= multiply(input1,input2);

console.log(result); 
document.querySelector("#answer").innerHTML= result;
}

function updatename (newname) 
 if (newname === "SARAH")
 document.querySelector("myname").innerHTML= " hey, my name is Sarah too!";
 } else {
 	document.querySelector("#myname").innerHTML= "Hello," + newname; 
 }
 {
 	
 	var nameField= document.querySelector("#nameinput");
 	nameField.oninput=function() {  
 	  updatename(nameField.value);
 	}
 	 
 	
var colourField= document.querySelector("#colour");
colourField.oninput=function() {  
  document.querySelector("#colourchange").style.color= colourField.value;