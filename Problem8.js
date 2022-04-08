function removeWhitespaces() {
  var string = document.getElementById("number8").value;

  var string= string.trim();
  var string=(string.replace(/\s/g,''));
  
  var result = document.getElementById('ans8');
  result.innerHTML = string;
}


