// функция проверки по проверки годового дохода 
export default function checkAnnualIncome(income, requestedAmount, term) {
    const piceIncome = (income * 1000000) / 3;
    console.log(piceIncome);
    const annualPaymentWithoutInterest = (requestedAmount * 1000000) / term;
    console.log(annualPaymentWithoutInterest);
    if(annualPaymentWithoutInterest <= piceIncome) {
        return true 
    } else {
        return false
    }
}