'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money === '' || money === null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 3; i++) {
        let payment = prompt('Введите наименование расходов: ', ''),
            costs = prompt('Во сколько обойдется?', '');

        if (typeof (payment) === 'string' && typeof (payment) != null && typeof (costs) != null && payment !== "" && costs !== "" && payment.length < 25) {
            console.log('done');
            appData.expenses[payment] = costs;
        } else {
            console.log('Введены неверные данные');
            i--;
        }
    }
}

chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = Math.floor(appData.budget / 30);
    alert('Ваш бюджет на день: ' + appData.moneyPerDay + 'грн');
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Minimum level');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Middle level');
    } else if (appData.moneyPerDay > 2000) {
        console.log('High level');
    } else {
        console.log('Maybe your budget less then your expenses?');
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings) {
        let save = +prompt('Какого сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход с депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 2; i++) {
        let option = prompt('Статья необязательных расходов?', '');
        let optionAnswer = prompt('Сумма: ');
        appData.optionalExpenses[option] = optionAnswer;
    }
}
