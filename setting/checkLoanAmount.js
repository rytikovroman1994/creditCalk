import checkTypeEvenue from './checkTypeEvenue';
import checkSumByCreditRating from './checkSumByCreditRating';
// функция получения суммы кредита 
export default function checkLoanAmount(sourceOfIncome, ranking) {
    const getSumByTypeEvenue = checkTypeEvenue(sourceOfIncome);
    const getSumByCreditRating = checkSumByCreditRating(ranking);
    if(getSumByTypeEvenue <= getSumByCreditRating) {
        return getSumByTypeEvenue
    } else {
        return getSumByCreditRating
    }
};