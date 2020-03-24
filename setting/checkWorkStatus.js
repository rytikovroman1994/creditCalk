// массив возможных данных 
const infoForCheck = [
    'безработный',
    'пассивный доход',
    'наёмный работник',
    'собственный бизнес'
];

// проверяем статус работы 
export default function checkWorkStatus(sourceOfIncome) {
    // проверяем входыне данные
    if(infoForCheck.indexOf(sourceOfIncome) < 0) {
        throw new Error('Проверьте входные данные поля информации о работе');
    }
    sourceOfIncome = sourceOfIncome.toLowerCase();
    switch(sourceOfIncome) {
        case 'безработный':
            return false
        case 'пассивный доход' :
        case 'наёмный работник' :
        case 'собственный бизнес' :
            return true 
        default:
            return false
    }
};