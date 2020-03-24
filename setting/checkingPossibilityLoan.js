// функция проверки выдачи кредита
export default function checkingPossibilityLoan(statusAge, statusYeard, statusCreditStatus, statusJob, statusWage) {
    if(statusAge && statusYeard && statusCreditStatus && statusJob && statusWage) {
        return true;
    } else {
        return false;
    }
};