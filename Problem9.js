function roots() {
var a = parseInt(document.getElementById("num1").value);
var b = parseInt(document.getElementById("num2").value);
var c = parseInt(document.getElementById("num3").value);
  
var root1=(-b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);
var root2=(-b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a);  
  
var result1=document.getElementById('ans9-1');
var result2=document.getElementById('ans9-2');  
  result1.innerHTML=(Math.round(root1*100)/100);
  result2.innerHTML=(Math.round(root2*100)/100);
}

