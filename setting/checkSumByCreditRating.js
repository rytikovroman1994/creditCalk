// функция получения суммы по кредитному рейтингу
export default function checkSumByCreditRating(ranking) {
    switch(ranking) {
        case -1 : 
            return 1
        case 0 :
            return 5
        case 1:
            return 10
        case 2:
            return 10
    }
}