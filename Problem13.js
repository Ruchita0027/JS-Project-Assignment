function nterm() {
  var num = document.getElementById("number13").value;
  var term;
  term = num * num;
  if (num < 0) {
    document.getElementById("ans13").innerHTML = "no. is -ve";
  }
  else if (num == 0) {
    document.getElementById("ans13").innerHTML = "0";
  }
  else {
    var result = document.getElementById('ans13');
    result.innerHTML = term;
  }
}


