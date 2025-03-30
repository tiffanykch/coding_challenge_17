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
        console.log(`Total Spend: $${totalSpent}`);
        return totalSpent;        
    };
}

// Test Cases
const customer1 = new Customer("Phineas Flynn","pflynn@disney.com");
const customer2 = new Customer("Dr. Heinz Doofenshmirtz", "doof@doofenshmirtzevilinc.com");
const customer3 = new Customer("Perry The Platypus", "pplatypus@owca.gov")
// console.log(customer1);
// console.log(customer2);
// console.log(customer3);

customer1.addPurchase(200);
customer1.addPurchase(500);
customer1.addPurchase(100);
customer1.getTotalSpent();