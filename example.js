var name = "SARAH";
console.log(name);
document.querySelector("#myname").innerHTML= "hello my name is "+name;
var button = document.querySelector("#calculate"); 
button.onclick=function() {

var input1= document.querySelector("#question1").value; 
var input2= document.querySelector("#question2").value;
var result= input1 * input2;
console.log(result); 

document.querySelector("#answer").innerHTML= result;

}



