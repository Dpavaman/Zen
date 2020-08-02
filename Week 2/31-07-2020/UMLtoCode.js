class Bank{
    constructor(code,address){
        this.code = code;
        this.address = address;

        manages(){

        }

        maintainace(){

        }
    }
}

class ATM extends Bank{
    constructor(location, manageability){
        this.location = location;
        this.manageability = manageability;
        identifies(){

        }
        transactions(){

        }
    }
}

class Account extends ATM{
    constructor(number,balance){
        this.number = number;
        this.balance = balance;
        deposit(){

        }
        withdraw(){

        }
        createTransaction(){

        }

    }
}

class Customer extends Account{
    constructor(name, address, dob, cardnumber, pin)
    {
        this.name = name;
        this.address = address;
        this.dob = dob;
        this.cardnumber = cardnumber;
        this.pin = pin;
    }
    varifyPassword(){

    }
}
class ATMTransaction extends Account{
    constructor(transactionId, date, type, amount, postbalance){
        this.transactionId = transactionId;
        this.date = date;
        this.type = type;
        this.amount = amount;
        this.postbalance = postbalance;
    }
    modifies(){

    }
}
class currentAccount extends Account{
    constructors(number,balance){
        super(number,balance);
    }
    withdaw(){
        
    }
}

class SavingsAccount extends Account{
    constructors(number,balance){
        super(number,balance);
    }
}