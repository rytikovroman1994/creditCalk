import checkingAge from './setting/checkingAge';
import checkAnnualIncome from './setting/checkAnnualIncome';
import checkCreditStatus from './setting/checkCreditStatus';
import checkWorkStatus from './setting/checkWorkStatus';
import checkAnnualPayment from './setting/checkAnnualPayment';
import checkLoanAmount from './setting/checkLoanAmount';
import creditRate from './setting/creditRate';
import checkingPossibilityLoan from './setting/checkingPossibilityLoan';
import calculateAnnualPaymentAmount from './setting/calculateAnnualPaymentAmount';

function statusCretid(age, gender, sourceOfIncome, income, ranking, requestedAmount, term, intent){
    // переменная хранящая базовою ставку
    const initialBet = 10;
    // переменная хранящая результат функции 
    const result = {};
    // проверка выдачи кредита по полу и возрасту
    const statusAge = checkingAge(age, gender, term);
    // проверка выдачи кредита по кретерию более трети годового дохада
    const statusYeard = checkAnnualIncome(income, requestedAmount, term);
    // проверка получения кредита по рейтингу
    const statusCreditStatus = checkCreditStatus(ranking);
    // проверка получения кредита по виду деятельности
    const statusJob = checkWorkStatus(sourceOfIncome);
    // получение максимального размера кредита
    const statusSumCredit = checkLoanAmount(sourceOfIncome, ranking);
    // получение модификатора процентной ставки
    const newEate = creditRate(sourceOfIncome, requestedAmount, ranking, intent);
    // вычисляем сумму ежегодного платежа
    const annualAmount = calculateAnnualPaymentAmount(requestedAmount, statusSumCredit, term, initialBet, newEate);
    // проверяем меньше ли ежегодгный платёж половины годового дохода
    const statusWage = checkAnnualPayment(annualAmount, income);
    console.log(statusAge, statusYeard, statusCreditStatus, statusJob, statusWage, statusSumCredit, newEate, annualAmount);
    // проверяем возможена ли выдача кридита
    const statusPossibilityLoan = checkingPossibilityLoan(statusAge, statusYeard, statusCreditStatus, statusJob, statusWage);
    // добавляем данные в ответ
    if(statusPossibilityLoan === true) {
        result['Статус выдачи кредина'] = statusPossibilityLoan;
        result['Сумма ежегодных выплат'] = annualAmount;
    } 
    if(statusPossibilityLoan === false){
        result['Статус выдачи кредина'] = statusPossibilityLoan;
    }

    return result
}

// const result = statusCretid(36, 'man', 'собственный бизнес', 3.77, 2, 6, 6, 'ипотека');
// console.log(result)