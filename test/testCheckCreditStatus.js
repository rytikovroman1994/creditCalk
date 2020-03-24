import checkCreditStatus from '../setting/checkCreditStatus';
const assert = require('chai').assert;

// тестовые данные
const infoAboutCreditStatus = [
    {'rang': -2, 'status': false},
    {'rang': -1, 'status': true},
    {'rang': 0, 'status': true},
    {'rang': 1, 'status': true},
    {'rang': 2, 'status': true},
]

describe('Тестирование функции проверки кредитного рейтинга', () => {
    infoAboutCreditStatus.forEach(({rang, status}) => {
        it(`Проверяем статус при рейтинге ${rang}`, function(){
            const resultFunction = checkCreditStatus(rang);
            assert(resultFunction === status, `При ранге ${rang} функция возвращает ${resultFunction}`);
        });
    });
});