const clearButton=document.getElementById("clrBtn")
var inputElement = document.getElementById('input');
var outputElement = document.getElementById('output');


function squareNumbers() {
  
    var numbers = inputElement.value.split(',');
    if(numbers===""){
        alert("Enter a valid number");
    }else{
    // Using map to square each number
    var squaredNumbers = numbers.map(function(number) {
      var trimmedNumber = parseFloat(number.trim());
      return trimmedNumber * trimmedNumber;
    
    });
}
    outputElement.textContent = squaredNumbers.join(', ');
  }
  const clearOp = () => {
    inputElement.value = ''; 
    outputElement.innerHTML='';
  }
  
  clearButton.addEventListener('click', clearOp);  