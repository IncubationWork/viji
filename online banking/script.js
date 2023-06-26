let banking_model = {
        bank_info:{
                name: "Tula Bank",
                mode: "online banking",
                available_services:['user accounts', 'transactions', 'banking operations']
                  },
                  user_accounts:['current', 'savings'],
                  transactions:['withdrawal', 'deposit'],
                  banking_operations:['issuing loans', 'customer support'],
}
       
class User{
        constructor(name, cust_id, account_number, ifs_code, branch, contact, account_type){
                this.name= name,
                this.cust_id = cust_id,
                this.account_number= account_number,
                this.ifs_code= ifs_code,
                this.branch= branch,
                this.contact= contact,
                this.account_type= account_type
        }
}
       
      var cust1= new User ('swathi', 239840, 698475837283834, 'TULB0000698', 'ks colony', 9876548976, 'savings');
      var cust2= new User ('nila', 879879, 876776755388080, 'TULB0000876', 'sb colony', 7098987887, 'current');
      var cust3= new User ('anitha', 954359, 698475837284543, 'TULB0000698', 'ks colony', 8843543950, 'current');
      var cust4= new User ('vetha', 349359, 698475837282332, 'TULB0000698', 'ks colony', 9594594358, 'current');
      var cust5= new User ('preethi', 849549, 876475837289876, 'TULB0000876', 'sb colony', 7443455456, 'savings');
      var cust6= new User ('kavi', 304930, 876475837283456, 'TULB0000876', 'sb colony', 7880453434, 'current');


class transactions{
        constructor(_withdrawal, _deposit){
                this.withdrawal='withdrawal',
                this.deposit='deposit'
        }
}
        var trans_cust1= new transactions(500,1000);
        var trans_cust4= new transactions(4000,3000);
        var trans_cust6= new transactions(300,5000);

class customer_support{
        
}                            
                        
      

