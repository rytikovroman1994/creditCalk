// функция проверки по проверки годового дохода 
export default function checkAnnualIncome(income, requestedAmount, term) {
    const piceIncome = (income * 1000000) / 3;
    const annualPaymentWithoutInterest = (requestedAmount * 1000000) / term;
    if(annualPaymentWithoutInterest <= piceIncome) {
        return true 
    } else {
        return false
    }
}