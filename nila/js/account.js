class Account {
    constructor(accountNumber,accountHolder,balance){
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    deposit(amount){
        this.balance +=amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}`);
    }
    withdraw(amount){
        if(this.balance >= amount){
        this.balance -=amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}`);
        } else {
            console.log(`Insufficient balance in accout ${this.accountNumber}`);
        }
    }
    getBalance(){
        console.log(`Balance of account ${this.accountNumber}: ${this.balance}`);
    }
}

    //Export the Account class
export default Account;