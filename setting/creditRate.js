// функция условия изменения базовой кредитной ставки 
export default function creditRate(sourceOfIncome, requestedAmount, ranking, intent) {
    // переменная модификации кредитной ставки
    let creditRateModifier = 0;
    // изменение ставки исходя из данных о теме заёма
    switch(intent) {
        case 'ипотека': 
            creditRateModifier -= 2;
            break
        case 'развитие бизнеса':
            creditRateModifier -= 0.5;
            break
        case 'потребительский' :
            creditRateModifier +=1.5;
            break
    };
    
    // изменение ставки исходя из данных кредитного рейтинга
    switch(ranking) {
        case -1:
            creditRateModifier += 1.5;
            break;
        case 0:
            creditRateModifier += 0;
            break
        case 1:
            creditRateModifier -= 0.25;
            break
        case 2: 
            creditRateModifier -= 0.75;
            break
    };

    // изменение ставки исходя из данных об источнике дохода
    switch(sourceOfIncome) {
        case 'пассивный доход': 
            creditRateModifier += 0.5;
            break;
        case 'наёмный работник':
            creditRateModifier -= 0.25;
            break;
        case 'собственный бизнес':
            creditRateModifier += 0.25;
            break;
    };

    // функция вычисления модификатора процентной ставки по сумме кредита
    function interestRateModification(income) {
        return -Math.log10(income).toFixed(2);
    };
    // изменяем ставки исходя из суммы кредита
    const percentageAmount = interestRateModification(requestedAmount);
    creditRateModifier += percentageAmount

    return +creditRateModifier;
};