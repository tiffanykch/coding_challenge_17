// TASK 1: CREATE CUSTOMER CLASS
class Customer{
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    };

    addPurchase(amount) {
        if(typeof amount === "number" && amount > 0) {
            this.purchaseHistory.push(amount);
            console.log("Purchase amount succesfully added!");
        } else {
            console.log("Invalid purchase amount!");
        }
        
    };

    getTotalSpent() {
        let totalSpent = this.purchaseHistory.reduce((sum, total) => sum + total, 0);
        return totalSpent;
    };
}

// Test Cases
const customer1 = new Customer("Phineas Flynn","pflynn@disney.com");
const customer2 = new Customer("Dr. Heinz Doofenshmirtz", "doof@doofenshmirtzevilinc.com");
const customer3 = new Customer("Perry The Platypus", "pplatypus@owca.gov")

customer1.addPurchase(200);
customer1.addPurchase(500);
customer1.addPurchase(100);
console.log(customer1.getTotalSpent());

// TASK 2: CREATE A SALESREP CLASS
class SalesRep{
    constructor(name) {
        this.name = name;
        this.clients = [];
    };

    addClient(customer) {
        if(customer instanceof Customer) {
            this.clients.push(customer);
        }
    };

    getClientTotal(name) {
        const client = this.clients.find(customer => customer.name === name);
        
        if (client) {
            return client.getTotalSpent();
        } else {
            console.log("Client not found!");
        }
    }
}

// Test Cases
const rep1 = new SalesRep("Mario")
rep1.addClient(customer1);
rep1.getClientTotal("Phineas Flynn");

// TASK 3: CREATE VIPCUSTOMER CLASS (EXTENDS CUSTOMER)
class VIPCustomer extends Customer {
    constructor(name, email,vipLevel) {
        super(name, email);
        this.vipLevel = vipLevel;
    };

    getTotalSpent() {
        const total = super.getTotalSpent()
        let bonus = 0.1;
        const totalBonus = total * (1 + bonus);
        return totalBonus;
    };
}

// Test Case
const vip1 = new VIPCustomer("Christopher Smith", "csmith@usf.edu", "Gold")
vip1.addPurchase(234);
vip1.addPurchase(3521);
console.log(vip1.getTotalSpent());