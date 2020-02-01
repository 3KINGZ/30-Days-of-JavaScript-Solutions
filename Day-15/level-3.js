class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
    }

    totalIncome() {
        let totalIncom = 0;
        this.incomes.forEach(income => totalIncom += income)
        return totalIncom
    }
    totalExpenses() {
        let totalExpenses = 0;
        this.expenses.forEach(expense => totalExpenses += expense)
        return totalExpenses;
    }

    accountInfo() {
        return `
        Full-Name: ${this.firstName} ${this.lastName}
        total-Income: ${this.totalIncome()}
        total-Expenses: ${this.totalExpenses()}
        `
    }

    set addIncome(amount) {
        this.incomes.push(amount)
    }

    set addExpenses(cost) {
        this.expenses.push(cost)
    }
}

let myAccount = new PersonAccount("victor", "kenneth")