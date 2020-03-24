import checkAnnualPayment from '../setting/checkAnnualPayment';
import calculateAnnualPaymentAmount from '../setting/calculateAnnualPaymentAmount';
const assert = require('chai').assert;

// функция рандомного диапазона 
function randRange(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
};
// функция проверки возможно выдать кредит или не возможно
function checkPosibleCredit(annualAmount, income) {
    if(income / 2 > annualAmount / 1000000) {
        return true 
    } else {
        return false
    }
}

// все изветсные заначения модификаторов 
const allMod = [-0.25, -0.5, -0.75, -1, -1.5, -1.75, -2, -2.25, -2.5, -3, 0, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.75, 3.25, 3.5];

describe('Тестируем функцию выдачи кредита при условии что половина дохода больше чем годовой платеж', () => {
    it('Проверяем на сгенерированных данных работу функции', function() {
        for(let i = 1; i <= 100; i++) {
            const initialBet = 10;
            // генерируем данные запрошенной суммы кредита
            const requestedAmount = randRange(0.1, 10);
            // генерирум данные об ежегодном доходе
            const income = randRange(0.1, 10);
            // генерируем данные срока выплаты кредита
            const term = randRange(1, 20);
            // генерируем данные модификатора кредитной ставки
            const newEate = randRange(-2, 3.5);

            // получаем сумму ежегодного платежа
            const annualAmount  = calculateAnnualPaymentAmount(requestedAmount, requestedAmount, term, initialBet, newEate);
            // текущие решение
            const currentSolution = checkPosibleCredit(annualAmount, income);
            // решение из функции
            const resultFunction = checkAnnualPayment(annualAmount, income);
            assert(resultFunction === currentSolution, `Не верное решение по выдаче кредита при условиях:
            сумма кредита - ${requestedAmount},
            сумма годового дохода - ${income},
            срок погашения кредита = ${term},
            модификатор кредитной ставки - ${newEate}`);
        }
    });

    describe('Проверяем функциию с всеми возможными известными модификаторами', () => {
        allMod.forEach(item => {
            it(`Тестирование функции при модификаторе ${item}`, function(){
            const initialBet = 10;
            // генерируем данные запрошенной суммы кредита
            const requestedAmount = randRange(0.1, 10);
            // генерирум данные об ежегодном доходе
            const income = randRange(0.1, 10);
            // генерируем данные срока выплаты кредита
            const term = randRange(1, 20);
            // генерируем данные модификатора кредитной ставки
            const newEate = randRange(-2, 3.5);

            // получаем сумму ежегодного платежа
            const annualAmount  = calculateAnnualPaymentAmount(requestedAmount, requestedAmount, term, initialBet, newEate);
            // текущие решение
            const currentSolution = checkPosibleCredit(annualAmount, income);
            // решение из функции
            const resultFunction = checkAnnualPayment(annualAmount, income);
            assert(resultFunction === currentSolution, `Не верное решение по выдаче кредита при условиях:
            сумма кредита - ${requestedAmount},
            сумма годового дохода - ${income},
            срок погашения кредита = ${term},
            модификатор кредитной ставки - ${newEate}`);
            });
        })
    });
});


// вычисление всех возможных изветсных модификаторов
// var a = ['-2', '-0.5', '1.5'];
// var b = ['1.5', '0', '-0.25', '-0.75']
// var c = ['0.5', '-0.25', '0.25']
// var newArray = [];

// function rand(array) {
//     return array[Math.floor(Math.random() * array.length)];
// }

// for(let i = 1; i <= 1000; i++) {
//     const a1 = rand(a);
//     const b1 = rand(b);
//     const c1 = rand(c);
//     const summ = +a1 + +b1 + +c1;
//     if(newArray.indexOf(summ) < 0) {
//         newArray.push(summ)
//     } 
// }