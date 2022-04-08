function palindrome() {
var str=document.getElementById("number12").value;
  var len;
  var mid;
    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            document.getElementById("ans12").innerHTML = "Error";
        }

    else {
    var result = document.getElementById('ans12');
    result.innerHTML = mid;
    }
  }
}


