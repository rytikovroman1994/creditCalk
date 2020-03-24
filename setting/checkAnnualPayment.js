// проверяем годовой платёж
export default function checkAnnualPayment(annualAmount, income) {
    if(income / 2 > annualAmount / 1000000) {
        return true 
    } else {
        return false
    }
};