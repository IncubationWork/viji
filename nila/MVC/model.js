// Model: User
class User {
    constructor(username, password, fullName) {
      this.username = username;
      this.password = password;
      this.fullName = fullName;
    }
    // Additional methods and properties specific to the User model
  }
  
  // Model: Account
  class Account {
    constructor(accountNumber, accountType, balance) {
      this.accountNumber = accountNumber;
      this.accountType = accountType;
      this.balance = balance;
    }
    // Additional methods and properties specific to the Account model
  }
  
  // Model: Transaction
  class Transaction {
    constructor(transactionID, date, amount, description) {
      this.transactionID = transactionID;
      this.date = date;
      this.amount = amount;
      this.description = description;
    }
    // Additional methods and properties specific to the Transaction model
  }