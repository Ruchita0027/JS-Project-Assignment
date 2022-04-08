function Factorial() {
  var num = document.getElementById('number1').value;
  var fact = 1;
  for(let i=1;i<=num;i++) { 
    fact*=i;
  }
  document.getElementById('ans1').innerText = `The factorial of ${num} is ${fact}.` ;
}