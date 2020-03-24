import calculateAnnualPaymentAmount from '../setting/calculateAnnualPaymentAmount';
const assert = require('chai').assert;

// проверяем на реальных кейсах
const infoForCheck = [
    { 'requestedAmount': 6, 'statusSumCredit': 10, 'term': 10, 'initialBet': 10, 'newEate': 0.72, 'result': 1243200 },
    { 'requestedAmount': 8, 'statusSumCredit': 1, 'term': 15, 'initialBet': 10, 'newEate': 2.35, 'result': 190166.67 },
    { 'requestedAmount': 7.78, 'statusSumCredit': 5, 'term': 15, 'initialBet': 10, 'newEate': 0.86, 'result': 876333.33 },
    { 'requestedAmount': 1.8, 'statusSumCredit': 10, 'term': 20, 'initialBet': 10, 'newEate': -2.26, 'result': 229320 },
    { 'requestedAmount': 4, 'statusSumCredit': 5, 'term': 10, 'initialBet': 10, 'newEate': -2.35, 'result': 706000 },
    { 'requestedAmount': 4, 'statusSumCredit': 5, 'term': 10, 'initialBet': 10, 'newEate': -2.35, 'result': 706000 },
    { 'requestedAmount': 6, 'statusSumCredit': 10, 'term': 6, 'initialBet': 10, 'newEate': -3.2800000000000002, 'result': 1403200 },
];

describe('Проверяем функцию расчёта годовой суммы выплаты', () => {
    infoForCheck.forEach(({requestedAmount, statusSumCredit, term, initialBet, newEate, result}) => {
        it(`Проверяем работу функции с данными ${requestedAmount}, ${statusSumCredit}, ${term}, ${initialBet}, ${newEate}`, function() {
            // получаем результат тестов
            const getResultFunction = calculateAnnualPaymentAmount(requestedAmount, statusSumCredit, term, initialBet, newEate);
            assert(getResultFunction === result, `При данны:
            запрошенная сумма - ${requestedAmount},
            одобренная сумма - ${statusSumCredit},
            срок выплат - ${term},
            модификатор процентной ставки - ${newEate},
            сумма ${getResultFunction} не равно ожидаемой ${result}`);
        })
    })
});
