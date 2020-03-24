import statusCretid from '../index';
const assert = require('chai').assert;

// проверенные негативные кейсы для проверки 
const infoForCheckNeg = [
    {'age': 18, 'sex': 'man', 'sourceOfIncome': 'собственный бизнес', 'income': 1, 'ranking': -1, 'requestedAmount': 3, 'term': 5, 'intent': 'ипатека', 'result': false},
    {'age': 57, 'sex': 'woman', 'sourceOfIncome': 'наёмный работник', 'income': 10, 'ranking': 2, 'requestedAmount': 1, 'term': 10, 'intent': 'ипатека', 'result': false},
    {'age': 31, 'sex': 'man', 'sourceOfIncome': 'безработный', 'income': 1, 'ranking': 1, 'requestedAmount': 4, 'term': 8, 'intent': 'развитие бизнеса', 'result': false},
    {'age': 21, 'sex': 'man', 'sourceOfIncome': 'собственный бизнес', 'income': 10, 'ranking': -2, 'requestedAmount': 4, 'term': 8, 'intent': 'ипатека', 'result': false},
    {'age': 58, 'sex': 'man', 'sourceOfIncome': 'пассивный доход', 'income': 4, 'ranking': 0, 'requestedAmount': 2, 'term': 8, 'intent': 'ипатека', 'result': false},
    {'age': 45, 'sex': 'woman', 'sourceOfIncome': 'пассивный доход', 'income': 2, 'ranking': 1, 'requestedAmount': 15, 'term': 15, 'intent': 'развитие бизнеса', 'result': false},
    {'age': 60, 'sex': 'man', 'sourceOfIncome': 'собственный бизнес', 'income': 2, 'ranking': 1, 'requestedAmount': 15, 'term': 15, 'intent': 'ипатека', 'result': false},
    {'age': 100, 'sex': 'man', 'sourceOfIncome': 'собственный бизнес', 'income': 1, 'ranking': -1, 'requestedAmount': 3, 'term': 5, 'intent': 'ипатека', 'result': false},
    {'age': 34, 'sex': 'man', 'sourceOfIncome': 'наёмный работник', 'income': 3, 'ranking': -1, 'requestedAmount': 7, 'term': 1, 'intent': 'потребительский', 'result': false},
    {'age': 23, 'sex': 'man', 'sourceOfIncome': 'наёмный работник', 'income': 4, 'ranking': 2, 'requestedAmount': 8, 'term': 5, 'intent': 'потребительский', 'result': false},
];

// проверенные позитивные кейсы для проверки 
const infoForCheckPositiv = [
    {'age': 18, 'sex': 'man', 'sourceOfIncome': 'наёмный работник', 'income': 4, 'ranking': 2, 'requestedAmount': 2, 'term': 5, 'intent': 'потребительский', 'result': 604000},
    {'age': 60, 'sex': 'man', 'sourceOfIncome': 'наёмный работник', 'income': 4, 'ranking': 2, 'requestedAmount': 2, 'term': 5, 'intent': 'ипатека', 'result': 574000},
    {'age': 40, 'sex': 'man', 'sourceOfIncome': 'пассивный доход', 'income': 10, 'ranking': -1, 'requestedAmount': 5, 'term': 10, 'intent': 'ипатека', 'result': 213000},
    {'age': 30, 'sex': 'woman', 'sourceOfIncome': 'Собственный бизнес', 'income': 7, 'ranking': 1, 'requestedAmount': 9, 'term': 10, 'intent': 'Потребительский', 'result': 1692000},
    {'age': 40, 'sex': 'man', 'sourceOfIncome': 'Наёмный работник', 'income': 7, 'ranking': 1, 'requestedAmount': 9, 'term': 10, 'intent': 'Потребительский', 'result': 940000},
    {'age': 50, 'sex': 'man', 'sourceOfIncome': 'Наёмный работник', 'income': 7, 'ranking': 1, 'requestedAmount': 9, 'term': 15, 'intent': 'Ипатека', 'result': 773333.33},
];

describe('Проверяем функцию проверки на выдачу кредита', () => {
    infoForCheckNeg.forEach(({age, sex, sourceOfIncome, income, ranking, requestedAmount, term, intent, result}, i) => {
        it(`Проверяем результат функции по негативной схеме номер ${i}`, function() {
            // получаем ответ от функции
            const getResultFunction = statusCretid(age, sex, sourceOfIncome, income, ranking, requestedAmount, term, intent);
            assert(getResultFunction['Статус выдачи кредина'] === result, `Функция решения выдачи кредита отдаёт не верное решение
            прии схеме номер ${i}`);
        });
    });

    infoForCheckPositiv.forEach(({age, sex, sourceOfIncome, income, ranking, requestedAmount, term, intent, result}, i) => {
        it(`Проверяем результат функции по позитивной схеме номер ${i}`, function() {
            // получаем ответ от функции
            const getResultFunction = statusCretid(age, sex, sourceOfIncome, income, ranking, requestedAmount, term, intent);
            assert(getResultFunction['Сумма ежегодных выплат'] === result, `Функция решения выдачи кредита отдаёт не верное решение
            прии схеме номер ${i}`);
        });
    });
});


