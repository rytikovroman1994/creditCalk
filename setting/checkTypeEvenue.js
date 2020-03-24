// информация для проверки входных данных
const infoForCheck = [
    'пассивный доход',
    'наёмный работник',
    'собственный бизнес',
    'безработный',
]

// функция получения суммы по виду дохода
export default function checkTypeEvenue(sourceOfIncome) {
    sourceOfIncome = sourceOfIncome.toLowerCase();
    if(infoForCheck.indexOf(sourceOfIncome) < 0) {
        throw new Error('Проверьте входыне данные поля вида деятельности');
    }
    switch(sourceOfIncome) {
        case 'безработный' :
            return 0
        case 'пассивный доход' : 
            return 1
        case 'наёмный работник' :
            return 5
        case 'собственный бизнес' :
            return 10
    }
}