const checkButton=document.getElementById("checkbutton");
const resultButton=document.getElementById("resultbutton");

checkButton.addEventListener('click',function(){
  const ageInput=document.getElementById('age');
  const age=parseInt(ageInput.value);

  if(age>=18){
    resultButton.innerHTML='<button class="button green">Eligible</button>';
  }else{
    resultButton.innerHTML='<button class="button red">Not Eligible</button>';
  }
});


