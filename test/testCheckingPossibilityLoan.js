import checkingPossibilityLoan from '../setting/checkingPossibilityLoan';
const assert = require('chai').assert;

function getRandom() {
    const info = [true, false];
    const arrayRandInfo = [];
    for(let i = 1; i <= 5; i++) {
        arrayRandInfo.push(info[Math.floor(Math.random() * info.length)]);

    }
    return arrayRandInfo
}

describe('Тестируем функцию итогово результата по выдаче кредита', () => {
    it('Проверяем резултат по выдаже кредита', function() {
        for(let i = 1; i <= 100; i++) {
            const arrayRandInfo = getRandom();
            const resultSumAllInfo = arrayRandInfo[0] && arrayRandInfo[1] && arrayRandInfo[2] && arrayRandInfo[3] && arrayRandInfo[4];

            // получаем данные из функции
            const resultFunction = checkingPossibilityLoan(arrayRandInfo[0],arrayRandInfo[1],arrayRandInfo[2],arrayRandInfo[3],arrayRandInfo[4]);
            assert(resultFunction === resultSumAllInfo, `Функция отработала не коректно при уловиях:
            ${arrayRandInfo[0]},
            ${arrayRandInfo[1]},
            ${arrayRandInfo[2]},
            ${arrayRandInfo[3]},
            ${arrayRandInfo[4]}, и отдала ${resultFunction} при ожидании ${resultSumAllInfo}`);
        }
    });
})
