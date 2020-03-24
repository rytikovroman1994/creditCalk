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
    sourceOfIncome = sourceOfIncome.toLowerCase();
    if(infoForCheck.indexOf(sourceOfIncome) < 0) {
        throw new Error('Проверьте входные данные поля информации о работе');
    }
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