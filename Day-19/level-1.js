//closure with one inner function
function outerFunction() {
    let count = 0;

    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}

//with three inner function
function outerFunction() {
    let count = 0;

    function plusOne() {
        count++
        return count
    }

    function minusOne() {
        count--
        return count
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}

//personAccount

function personAccount() {
    let firstName = "victor";
    let lastName = "kenneth";
    let incomes = [1000, 300];
    let expenses = [500];

    function addIncome(income) {
        incomes.push(income)
        return income;
    }

    function addExpense(expense) {
        expenses.push(expense);
        return expenses;
    }

    function totalIncome() {
        let TI = 0;
        let TE = 0;
        incomes.forEach(income => {
            TI += income
        })
        expenses.forEach(expense => {
            TE += expense
        })

        let result = TI - TE;
        return result;
    }

    function totalExpense() {
        let TE = 0;
        expenses.forEach(expense => {
            TE += expense
        })
        return TE
    }

    function accountBalance() {
        totalIncome();
    }

    function accountInfo() {
        return `name:${firstName} ${lastName} Balance:${totalIncome()}`
    }

    return {
        addIncome: addIncome(),
        addExpense: addExpense(),
        totalIncome: totalIncome(),
        totalExpense: totalExpense(),
        accountBalance: accountBalance(),
        accountInfo: accountInfo()
    }
}

const accFunc = personAccount();
console.log(accFunc.accountInfo);