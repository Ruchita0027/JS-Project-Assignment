function PostFix()
{
  var N2 = (document.getElementById("number15").value);
  var array2 = N2.toString().split('');

  var postfixEval;

  var stack = [];
  for( element of array2 ){
            console.log("element: " + element);
           
            if(isNaN(element)){
                var x = stack.pop();
                var y = stack.pop();
                console.log("var x/y: " + x + " " + y + " element: " + element) ;
                if (element == "+"){
                    result = (y+x);
                    console.log("Expected Result: " + result)
                    stack.push(y + x);
                } else if (element == '-'){
                    stack.push(y - x);
                } else if (element == '*'){
                    stack.push(y * x);
                } else if (element == '/'){
                    stack.push(y / x);
                }
            } 
            else {
                stack.push( parseFloat(element) );
            }
        }

        var element = stack.pop();  
            if(isNaN(element)){
              
                postfixEval = null;
              
            } else{
              
                postfixEval = element;
            }
  console.log(postfixEval);
       
  var result15 = document.getElementById ('ans15');
  result15.innerHTML = postfixEval;
}