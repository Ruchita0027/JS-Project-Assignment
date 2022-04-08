function convert() {
  var c=document.getElementById('number5').value;
  var f=(c*1.8)+32;
  var result5=document.getElementById('ans5');
  result5.innerHTML=(Math.round(f*100)/100);
}