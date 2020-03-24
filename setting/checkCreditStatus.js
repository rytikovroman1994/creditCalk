// проверяем кредитный статус
export default function checkCreditStatus(ranking) {
    if(ranking >= -1) {
        return true 
    } else {
        return false
    }
}