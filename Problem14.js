function leftrotarr(arr) {
  var N1=parseInt(document.getElementById("number14-1").value);
  var k=parseInt(document.getElementById("number14-2").value);

  var array=N1.toString().split('');

  console.log(array);

  for(var i=k;i<=array.length;i++) {
    var del=array.pop();
    array.unshift(del);
  }
  var result=document.getElementById('ans14');
  result.innerHTML=array;
}



