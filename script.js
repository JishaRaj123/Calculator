const result=document.getElementById("result")

// append value to the input
function appendToResult(value){
    result.value+=value;
}

// clear the input
function clearbutton(){
    result.value='';
}

// calculate the result
function equals(){
   try{
    result.value=eval(result.value)
   }
   catch{
    result.value='Error'
   }
}