const checkButton=document.getElementById("checkbutton");
const clearButton=document.getElementById("clearbutton");
const resultButton=document.getElementById("resultbutton");
const userInput = document.getElementById('age');

checkButton.addEventListener('click',function(){
  const ageInput=userInput.value;
  

  if (ageInput==="" || +ageInput<=0){
    alert("please input a valid age");
  }
  else if(+ageInput>=18){
    resultButton.innerHTML='<button class="button green">Eligible</button>';
  }else{
    resultButton.innerHTML='<button class="button red">Not Eligible</button>';
  }
});


const clearOp = () => {
  userInput.value = ''; 
  resultButton.innerHTML='';
}

clearButton.addEventListener('click', clearOp);