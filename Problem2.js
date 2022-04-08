function Cube() {
  var num=document.getElementById("number2").value;
  var cube=num*num*num;
  document.getElementById('ans2').innerText = `The cube of ${num} is ${cube}.` ;
}
