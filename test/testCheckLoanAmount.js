import checkLoanAmount from '../setting/checkLoanAmount';
import checkTypeEvenue from '../setting/checkTypeEvenue';
import checkSumByCreditRating from '../setting/checkSumByCreditRating';
const assert = require('chai').assert;

// информация о размере кредита исходя из вида деятельности
const infoTypeEvenue =  [
    {'work': 'пассивный доход', 'sum': 1},
    {'work': 'наёмный работник', 'sum': 5},
    {'work': 'собственный бизнес', 'sum': 10},
];
// информация о размере кредита исходя из кредитного рейтинга
const infoSumByCreditRating = [
    {'rang': -1, 'sum': 1},
    {'rang': 0, 'sum': 5},
    {'rang': 1, 'sum': 10},
    {'rang': 2, 'sum': 10},
];

// функция нахождения минимального цисла из двух
function min(a, b) {
    return a < b ? a : b;
}

describe('Тестирование фукнцию расчёта суммы кредита исходя из вида деятельности', () => {
    infoTypeEvenue.forEach(({work, sum}) => {
        it(`Тестируем сумму кредита по виду деятельности - ${work}`, function() {
            const resultFunction = checkTypeEvenue(work);
            assert(resultFunction === sum, `При виде деятельности ${work} сумма кредита составила ${resultFunction}`);
        });
    });
});

describe('Тестируем функцию рассчёта суммы кредита исходя из кредитного рейтинга', () => {
    infoSumByCreditRating.forEach(({rang, sum}) => {
        it(`Тестируем сумму кредита по крдитному рейтингу ${rang}`, function() {
            const resultFunction = checkSumByCreditRating(rang);
            assert(resultFunction === sum, `При кредитном рейтинге ${rang} сумма кредита ${resultFunction}`);
        });
    });
});

describe('Тестируем функцию расчёта суммы кредита изходя из данных рейтинга и вида деятельности', () => {
    it('Проверяем что функция возвращает минимальное значение', function() {
        for(let i = 1; i <= 30; i++) {
            // получаем рандомное значение информации о виде деятельности
            const { work: randWork, sum: randSumWork } = infoTypeEvenue[Math.floor(Math.random() * infoTypeEvenue.length)];
            // получаем рандомное значение информации о кредитном рейтинге
            const { rang: randRang, sum: randSumRang } = infoSumByCreditRating[Math.floor(Math.random() * infoSumByCreditRating.length)];
            
            // получаем сумму кредита исходя из вида деятельности
            const resultWork = checkTypeEvenue(randWork);
            // получаем сумму кредита исходя из кредитного рейтинга
            const resultRang = checkSumByCreditRating(randRang);

            // получаем наименьшее число
            const minRandNumber = min(resultWork, resultRang);
            const minInfoNumber = min(randSumWork, randSumRang);
            const resultFunction = checkLoanAmount(randWork, randRang);
            // проверяем с данными получеными из функций
            assert(resultFunction === minRandNumber, `При условия:
            вид дейстельнсои - ${randWork},
            кредитный рейтинг ${randRang}
            максимальная сумма кредита равна ${resultFunction}`);
            // проверяем с данными из дефолтгных массивов
            assert(resultFunction === minInfoNumber, `При условия:
            вид дейстельнсои - ${randWork},
            кредитный рейтинг ${randRang}
            максимальная сумма кредита равна ${resultFunction}`);
        }
    });
});

