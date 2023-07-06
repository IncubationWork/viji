class Accounts {
    constructor(accountHolder, accountNumber, deposit, withdraw, balance){
        this.accountHolder = "accountHolder";
        this.accountNumber = "accountNumber";
        this.deposit = 0;
        this.withdraw = 0;
        this.balance = 0;
    }
    deposit(amount){
        depositAmount += this.balance


    }
}















//Import Account class 
import Account from './account.js';
    
   // create account holders
class Holder extends Account {
    constructor(accountNumber, accountHolder, balance, userId, password) {
        super(accountNumber, accountHolder, balance);
        this.userId = userId;
        this.password = password;
    }

    verifyCredentials() {
        const isValidCredentials = userCredentials.some(cred => cred.userId === this.userId && cred.password === this.password);

        if (isValidCredentials) {
            window.location.href = "index.html";
            //return true;
        } else {
            alert("Please enter a valid userid and password");
            //return false;
        }
    }
}

let account1 = new Holder(1111, 'Tulip', 5000, "tulip", "tulip#1");
let account2 = new Holder(1112, 'Ram', 8700, "ram", "ram#2");
let account3 = new Holder(1113, 'Nila', 800, "nila", "nila#3");
let account4 = new Holder(1114, 'Vedha', 12000, "vedha", "vedha#4");

account1.verifyCredentials(account1.userId, account1.password);
account2.verifyCredentials(account2.userId, account2.password);
account3.verifyCredentials(account3.userId, account3.password);
account4.verifyCredentials(account4.userId, account4.password);

