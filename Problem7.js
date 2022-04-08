function submit() {
  var num7 = document.getElementById("number7").value;
  var term7;
  term7 = num7 * num7;
  if (num7 < 0) {
    document.getElementById("ans7").innerHTML = "Error";
  }
  else if (num7 == 0) {
    document.getElementById("ans7").innerHTML = "0";
  }
  else {
    var result7 = document.getElementById('ans7');
    result7.innerHTML = term7;
  }
}










