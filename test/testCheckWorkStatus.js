import checkWorkStatus from '../setting/checkWorkStatus';
const assert = require('chai').assert;

// тестовые данные
const infoAboutWorkStatus = [
    {'work': 'безработный', 'status': false},
    {'work': 'пассивный доход', 'status': true},
    {'work': 'наёмный работник', 'status': true},
    {'work': 'собственный бизнес', 'status': true},
];

describe(`Тестируем функцию опрделения выдачи кредита по источнику дохода`, () => {
        infoAboutWorkStatus.forEach(({work, status}) => {
            it(`Проверяем источник дохода - ${work}`, function(){
                const resultFunction = checkWorkStatus(work);
                assert(resultFunction === status, `При источнике дохода ${work} функция возвращает ${resultFunction}`);
        });
    });
});