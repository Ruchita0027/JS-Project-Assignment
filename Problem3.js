function Area() {
  var num=document.getElementById("number3").value;
  let i, area=1;
  var side=num;
  for(i=1;i<=num;i++) {
    area=(1.73*num*num)/4;
  }
  var result3=document.getElementById('ans3');
  result3.innerHTML=(Math.round(area*100)/100);
}

