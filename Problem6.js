function calculate() {
  var num = document.getElementById("number6").value;
  var sum = 0;
  for(let i=1;i<=num;i++) { 
    sum+=i;
  }
 document.getElementById('ans6').innerText = `The sum of integers from 1 to ${num} is ${sum}.` ;
}


