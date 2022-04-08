function daysInMonth() {
  var month=parseInt(document.getElementById('day').value);
  console.log(month);

  switch(month) {
    case 1: 
      var days="31 days";
      break;
    case 2: 
      var days="28 days";
      break;
    case 3: 
      var days="31 days";
      break;
    case 4: 
      var days="30 days";
      break;
    case 5: 
      var days="31 days";
      break;
    case 6: 
      var days="30 days";
      break;
    case 7: 
      var days="31 days";
      break;
    case 8: 
      var days="31 days";
      break;
    case 9: 
      var days="30 days";
      break;
    case 10: 
      var days="31 days";
      break;
    case 11: 
      var days="30 days";
      break;
    case 12: 
      var days="31 days";
      break;
    default: 
      var days="error";
      break;
 }
  var result=document.getElementById('ans4');
  result.innerHTML=days;
}  
  
