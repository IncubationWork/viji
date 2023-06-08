
        const userInput=document.getElementById('number');
        const clearButton = document.getElementById("clearbutton");
        const result=document.getElementById('result');
      function myFunction(){
        const number=parseInt(userInput.value);
        
        const result=document.getElementById("result");
        result.innerHTML="";  
        if (+userInput.value<=1 || userInput.value===""){
          alert("Please enter the valid input")}
        
        else{
        for (let i = 2; i <= number; i += 2){
          result.innerHTML += i + "<br>";
        }
      }
    }
      const clearOp = () => {
        userInput.value = '';
        result.innerHTML='';
      }
      clearButton.addEventListener('click',clearOp);