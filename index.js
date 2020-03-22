// если возраст больше пенсионного то не выдаётся
// Если результат деления запрошенной суммы на срок погашения в годах более трети годового дохода --> кредит не выдаётся
// Если кредитный рейтинг -2 --> кредит не выдаётся
// Если в источнике дохода указано "безработный" --> кредит не выдаётся
// Если годовой платёж (включая проценты) больше половины дохода --> кредит не выдаётся
// функция проверки по возрасту
function checkingAge(age, gender) {
    if(age < 0) {
        new Error('Введены не коректыне данные возраста');
    }
    if((gender === 'man' && age > 65) || (gender === "woman" && age > 60)) {
        return false
    } else {
        return true
    }
}

// функция проверки по проверки годового дохода 
function checkAnnualIncome(income, requestedAmount, term) {
    const piceincome = income * 1000000 / 3;
    const status = requestedAmount * 1000000 / term;
    if(status > piceincome) {
        return true 
    } else {
        return false
    }
}

// проверяем кредитный статус
function checkCreditStatus(ranking) {
    if(ranking >= -1) {
        return true 
    } else {
        return false
    }
}

// проверяем статус работы 
function checkWorkStatus(sourceOfIncome) {
    switch(sourceOfIncome) {
        case 'безработный':
            return false
            break
        case 'пассивный доход' : 
            return true
            break
        case 'наёмный работник' :
            return true
            break
        case 'собственное дело' :
            return true
            break
        default:
            return false
    }
};

// проверяем годовой платёж
function checkAnnualPayment(requestedAmount, term, initialBet) {
    const summForEar = requestedAmount * 1000000 / term;
    const summPesent = requestedAmount * 1000000 / initialBet;
    const itogSumm = summForEar + summPesent;
    if(itogSumm > requestedAmount / 2) {
        return true 
    } else {
        return false
    }
};

// функция получения суммы по виду дохода
function checkTypeEvenue(sourceOfIncome) {
    switch(sourceOfIncome) {
        case 'пассивный доход' : 
            return 1
            break
        case 'наёмный работник' :
            return 5
            break
        case 'собственное дело' :
            return 10
            break
    }
}

// функция получения суммы по кредитному рейтингу
function checkSumByCreditRating(ranking) {
    switch(ranking) {
        case -1 : 
            return 1
            break
        case 0 :
            return 5
            break
        case ranking > 0 :
            return 10
            break
    }
}

// функция получения суммы кредита 
function checkLoanAmount(sourceOfIncome, ranking) {
    const getSumByTypeEvenue = checkTypeEvenue(sourceOfIncome);
    const getSumByCreditRating = checkSumByCreditRating(ranking);
    if(getSumByTypeEvenue < getSumByCreditRating) {
        return getSumByTypeEvenue
    } else {
        return getSumByCreditRating
    }
};

// функция вычисления модификатора процентной ставки по сумме кредита
function interestRateModification(income) {
    return -Math.log10(income).toFixed(2);
}

// функция условия изменения базовой кредитной ставки 
function creditRate(sourceOfIncome, requestedAmount, ranking, intent, initialBet) {
    // изменение ставки исходя из данных о тиме заёма
    switch(intent) {
        case 'ипотека': 
            initialBet -= 2;
            break
        case 'развитие бизнеса':
            initialBet -= 0.5;
            break
        case 'потребительский' :
            initialBet +=1.5;
            break
    }
    // изменение ставки исходя из данных кредитного рейтинга
    switch(ranking) {
        case -1:
            initialBet += 1.5;
            break;
        case 0:
            initialBet += 0;
            break
        case 1:
            initialBet -= 0.25;
            break
        case 2: 
            initialBet -= 0.75;
            break
    }
    // изменение ставки исходя из данных об источнике дохода
    switch(sourceOfIncome) {
        case 'пассивный доход': 
            initialBet += 0.5;
            break;
        case 'наёмный работник':
            initialBet -= 0.25;
            break;
        case 'собственное дело':
            initialBet += 0.25;
            break;
    }
    // изменяем ставки исходя из суммы кредита
    const percentageAmount = interestRateModification(requestedAmount);
    initialBet += percentageAmount

    return initialBet;
};

function statusCretid(age, gender, sourceOfIncome, income, ranking, requestedAmount, term, intent){
    let initialBet = 10;
    const result = {};
    const statusage = checkingAge(age, gender);
    const statusYeard = checkAnnualIncome(income, requestedAmount, term);
    const statusCreditStatus = checkCreditStatus(ranking);
    const statusJob = checkWorkStatus(sourceOfIncome);
    const stausWage = checkAnnualPayment(requestedAmount, term, initialBet);
    const statusSumCredit = checkLoanAmount(sourceOfIncome, ranking);
    const newEate = creditRate(sourceOfIncome, requestedAmount, ranking, intent, initialBet);
    console.log(statusage, statusYeard, statusCreditStatus, statusJob, stausWage, statusSumCredit, newEate);

    // проверяем возможена ли выдача кридита
    if(statusage && statusYeard && statusCreditStatus && statusJob && stausWage) {
        result['status'] = 'Разрешён';
    } else {
        result['status'] = 'Не разрешён';
    }
    // вычисляем сумму ежегодного платежа
    const annualPayment = (requestedAmount * (1 + term * initialBet)) / 6;
    result['Сумма ежегодных выплат'] = annualPayment;

    return result
}

const result = statusCretid(59, 'woman', 'пассивный доход', 2.4, -1, 8, 6, 'развитие бизнеса');
console.log(result)