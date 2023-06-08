const userInput=document.getElementById('inputNumber');
        const clearButton=document.getElementById('clearbutton');
        const sum=document.getElementById('sum');
        function sumOfDigits(){ 
        const inputNumber=document.getElementById('userInput')
        var n, remainder, sum = 0;
        n = parseInt(document.getElementById("inputNumber").value);
        if (userInput.value<=0 || userInput.value===""){
                alert("Please enter the valid input")
        } else {
  while(n)
  {
    remainder = n % 10;
    sum = sum + remainder;
    n = Math.floor(n/10);
  }
  document.getElementById("sum").value = sum;
}
}
const clearOp = () => {
        userInput.value = '';
        sum.value='';
      }
      clearButton.addEventListener('click',clearOp); 