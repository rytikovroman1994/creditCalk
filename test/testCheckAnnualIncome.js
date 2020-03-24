import checkAnnualIncome from '../setting/checkAnnualIncome';
const assert = require('chai').assert;

// функиця получения рандомного значения из диапазона
function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
};

describe('Проверяем функцию проверки трети дохода', () => {
    it('Проверяем негатиный кейсы', function() {
        for(let i = 1; i <= 100; i++) {
            const randIncome = randomInteger(0.1, 10);
            const randRequestedAmount = randomInteger(0.1, 10);
            const randTerm = randomInteger(1, 10);

            const piceIncome = (randIncome * 1000000) / 3;
            const annualPaymentWithoutInterest = (randRequestedAmount * 1000000) / randTerm; 

            const resultFunction = checkAnnualIncome(randIncome, randRequestedAmount, randTerm);
            if(annualPaymentWithoutInterest <= piceIncome) {
                assert(resultFunction === true, `При значениях:
                годовой дохох - ${randIncome},
                сумма кредита - ${randRequestedAmount},
                срок погашения кредита - ${randTerm}
                фукция выдаёт false`)
            } else {
                assert(resultFunction === false, `При значениях:
                годовой дохо - ${randIncome},
                сумма кредита - ${randRequestedAmount},
                срок погашения кредита - ${randTerm}
                фукция выдаёт true`)
            }
        }
    });
});