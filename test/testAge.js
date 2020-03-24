import checkingAge from '../setting/checkingAge';
const assert = require('chai').assert;

describe('Тестирование функции выдачи кредита по возрасту', () => {
    it('Проверка негативного кейса - возраст от 0 до 17', function() {
        for(let i = 0; i <= 17; i++) {
            const getResiltFunctionMan = checkingAge(i, 'man', i);
            const getResiltFunctionWooman = checkingAge(i, 'woman', i);
            assert(getResiltFunctionMan === false, `Кредит на возраст ${i} не должен выдаваться`);
            assert(getResiltFunctionWooman === false, `Кредит на возраст ${i} не должен выдаваться`);
        }
    });
    it('Проверка негативного кейса - пенсионный возраст', function() {
        const getResiltFunctionMan = checkingAge(66, 'man', 0);
        assert(getResiltFunctionMan === false, 'Кредит выдаётся мужчинам пенсионного возраста');
        const getResiltFunctionWooman = checkingAge(61, 'woman', 0);
        assert(getResiltFunctionWooman === false, 'Кредит выдаётся женщинам пенсионного возраста');
    });

    it('Проверка позитивного кейса - разрешённый возраст кредитования', function() {
        // получаем случайное число 
        for(let i = 18; i <= 65; i++) {
            const getResiltFunctionMan = checkingAge(i, 'man', 0);
            assert(getResiltFunctionMan === true, 'Кредит выдаётся мужчинам не проходящих по возрасту');
        }
        for(let i = 18; i <= 6; i++) {
            const getResiltFunctionWooman = checkingAge(i, 'woman', 0);
            assert(getResiltFunctionWooman === true, 'Кредит выдаётся женщинам не проходящих по возрасту');
        }
     });

     it('Проверка работы функции с разными данными', function() {

        for(let i = 1; i <= 100; i++) {
            // переменная рандомно генерируемого возраста 
            const randAge = Math.round(Math.random() * 100);
            // переменная рандомно генерируемого срока кредита
            const randTern = Math.round(Math.random() * 20);
            // переменная рандомного пола кредетующегося
            const randGender = ['man', 'woman'][Math.round(Math.random() * 1)];
            const getResultFunction = checkingAge(randAge, randGender, randTern);
            if(randGender === 'man' && randAge + randTern <= 65 && randAge >= 18) {
                assert(getResultFunction === true, `Функция вернула false при условиях: возраст - ${randAge},
                пол - ${randGender}, срок кредита - ${randTern}`);
            } else if(randGender === 'woman' && randAge + randTern <= 60 && randAge >= 18) {
                assert(getResultFunction === true, `Функция вернула false при условиях: возраст - ${randAge},
                пол - ${randGender}, срок кредита - ${randTern}`);
            } else {
                assert(getResultFunction === false, `Функция вернула ${getResultFunction} при условиях: возраст - ${randAge},
                пол - ${randGender}, срок кредита - ${randTern}`)
            }
        }
     });

     it('Проверка на отрицательное цисло', function() {
        const getResiltFunctionMan = checkingAge(-1, 'man', 0);
        assert(getResiltFunctionMan === false, 'При отрицательном возрасте фкнция возвращает true');
     });
});