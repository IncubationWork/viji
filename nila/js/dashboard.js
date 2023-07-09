const accountHolders = [account1, account2, account3, account4];
const profileName = document.querySelector('.profile');

const loggedInUserId = "tulip"; // Replace with the actual logged-in user ID

for (const accountHolder of accountHolders) {
  if (accountHolder.userId === loggedInUserId) {
    const user = document.createElement('div');
    user.id = "userName";
    user.innerHTML = `Welcome ${accountHolder.userId}`;
    profileName.appendChild(user);
    break; // Exit the loop once the logged-in user is found
  }
}
    
    const viewBalance = document.querySelector(".balance span")
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
        return totalValue;
    }
    function viewBalanceAmount(){
        viewBalance.innerHTML = calcTotal();

    }
    //Event listener
    credit.addEventListener('click', function(){
        calcDeposit();
        calcTotal();
        depositInput.value = "";
        viewBalanceAmount();
    
    });
    debit.addEventListener('click', function(){
        calcWithdraw();
        calcTotal();
        withdrawInput.value = "";
        viewBalanceAmount();

    
    });