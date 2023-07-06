const user = document.createElement('div');
user.id = "userName";
const profileName = document.querySelector('.profile');
profileName.appendChild(user);
user.innerText = "Welcome"

const depositInput = document.getElementById('inputdep');
const withdrawInput = document.getElementById('inputwith')

const depositAmount = document.querySelector('.dep.amount span');
const withdrawAmount = document.querySelector('.with.amount span');
const totalAmount = document.querySelector('.total.amount span');

const credit = document.querySelector(".credit")
const debit  = document.querySelector(".debit");

//Initialize the deposit and withdraw amounts
let totalDeposit = 0;
let totalWithdraw = 0;

//Function to update the amounts
function calcDeposit() {
    const depositValue = parseFloat(depositInput.value);
    totalDeposit += depositValue;
    depositAmount.textContent = totalDeposit.toFixed(2);
}
function calcWithdraw() {
    const withdrawValue = parseFloat(withdrawInput.value);
    totalWithdraw += withdrawValue;
    withdrawAmount.textContent = totalWithdraw.toFixed(2);
}
function calcTotal() {
    const totalValue = totalDeposit - totalWithdraw;
    totalAmount.textContent = totalValue.toFixed(2);
}

//Event listener
credit.addEventListener('click', function(){
    calcDeposit();
    calcTotal();
});
debit.addEventListener('click', function(){
    calcWithdraw();
    calcTotal();
});





//Initialize the deposit and withdraw amounts
/*let totalDeposit = 0;
let totalWithdraw = 0;

//Function to update the amounts
function updateAmounts() {
//get the deposit and withdraw amounts from the inputs

    const depositValue = parseFloat(depositInput.value);
    const withdrawValue = parseFloat(withdrawInput.value);

    //Update the deposit amount and total amount
    totalDeposit += depositValue;
    depositAmount.textContent = totalDeposit.toFixed(2);

    //Update the withdraw amount and total amount
    totalWithdraw += withdrawValue;
    withdrawAmount.textContent = totalWithdraw.toFixed(2);

    //calculate  balance
    const balance = totalDeposit - totalWithdraw;
    totalAmount.textContent = balance.toFixed(2);
}
// Event listener for the deposit button
document.querySelector('.calc.dep .credit').addEventListener('click', updateAmounts);

// Event listener for the withdraw button
document.querySelector('.calc.with .debit').addEventListener('click', updateAmounts);*/