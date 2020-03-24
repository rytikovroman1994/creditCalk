// функция вычисления суммы ежегодного платежа
export default function calculateAnnualPaymentAmount(requestedAmount, statusSumCredit, term, initialBet, newEate) {
    // вычисление по формуле
    if(requestedAmount <= statusSumCredit) {
        const annualPayment = (requestedAmount * (1 + term * ((initialBet + newEate) / 100))) / term;
        const annualAmount = Math.round((annualPayment * 1000000)*100)/100;
        return annualAmount;
    } else {
        const annualPayment = (statusSumCredit * (1 + term * ((initialBet + newEate) / 100))) / term;
        const annualAmount = Math.round((annualPayment * 1000000)*100)/100;
        return annualAmount;
    }
}