function occur() {
   var num=document.getElementById("number11").value;
  var arr=num.toString().split('');
  console.log(arr);
  var count=1;
  var obj=[];
  for(var i=0;i<arr.length;i++)
    {
      if(arr[i]==arr[i+1]) {
        count+=1;
      }
       else {
         var ele=[];
         ele.push(arr[i]);
         ele.push(count);
         obj.push(ele);
         count=1;
       }
   }
  obj.sort((a,b)=>a[1]-b[1]);
  console.log(obj);
  var final=[];
  for(var i=obj.length-1;i>=0;i--) {
    final.push(obj[i][0]);
  }

  var result=document.getElementById('ans11');
  result.innerHTML=final;
}  