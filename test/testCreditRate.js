import creditRate from '../setting/creditRate';
const assert = require('chai').assert;

// информация о теме заёма
const infoLoan = [
    {'case': 'ипотека', 'modification': -2},
    {'case': 'развитие бизнеса', 'modification': -0.5},
    {'case': 'потребительский', 'modification': 1.5},
];

// информация о кредитном рейтинге
const infoCreditRating = [
    {'case': -1, 'modification': 1.5},
    {'case': 0, 'modification': 0},
    {'case': 1, 'modification': -0.25},
    {'case': 2, 'modification': -0.75},
];

// информация об источнике дохода
const infoSourceOfIncome = [
    {'case': 'пассивный доход', 'modification': 0.5},
    {'case': 'наёмный работник', 'modification': -0.25},
    {'case': 'собственный бизнес', 'modification': 0.25},
];

// функция рандомного выбора данных
function getRandInfo(info) {
    return info[Math.floor(Math.random() * info.length)];
};

// функция рандомного генерирования суммы заёма
function getRandSumCredit() {
    const randSum = 0.1 + Math.random() * (10 + 1 - 0.1);
    let getDecimalNumber = randSum.toFixed(2);
    if(getDecimalNumber > 10) {
        getDecimalNumber -= 1
        return +getDecimalNumber
    } else {
        return +getDecimalNumber
    }
};

// функция вычисления модификатора процентной ставки по сумме кредита
function interestRateModification(income) {
    return -Math.log10(income).toFixed(2);
};

describe('Тестирование функции расчёта модификаторов кредитной ставки', () => {
    it('Генерируем рандомные значения и проверяем данные на выходе', function() {
        for(let i = 1; i <= 100; i++) {
            // получаем рандомную тему заёма
            const { case: randLoanCase, modification: randLoanMode } = getRandInfo(infoLoan);
            // получаем рандомную информацию о кредитном рейтинге
            const { case: randRatingCase,  modification: randRatingMode } = getRandInfo(infoCreditRating);
            // получаем рандомную информацию об источнике дохода
            const { case: randSourceOfIncomeCase, modification: randSourceOfIncomeMode } = getRandInfo(infoSourceOfIncome);
            // получаем рандомную сумму кредита
            const sumCredit = getRandSumCredit();
            // получаем модификатор кредитной ставки по сумме кредита
            const getModifOnSum = interestRateModification(sumCredit);
            // счиатем итогую сумму всех модификаторов
            const totalAmountModifier = randLoanMode + randRatingMode + randSourceOfIncomeMode + getModifOnSum;

            const resultFuncion = creditRate(randSourceOfIncomeCase, sumCredit, randRatingCase, randLoanCase);
            assert(resultFuncion === totalAmountModifier, `Фукция вернула сумму модификатора ${resultFuncion}, 
            когда ожидалось ${totalAmountModifier}, при данных:
            источник дохода - ${randSourceOfIncomeCase},
            сумма кредита в млн - ${sumCredit},
            кредитный рейтинг ${randRatingCase},
            причина заёма - ${randLoanCase}`);
        }
    });
});