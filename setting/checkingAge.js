// даныне для проверки входных данных
const infoForCheck = [
    'man',
    'woman'
];

// функция проверки по возрасту
export default function checkingAge(age, gender, term) {
    if(typeof age === 'string') {
        throw new Error('Возраст должен быть заданный цифрой');
    }
    gender = gender.toLowerCase();
    if(infoForCheck.indexOf(gender) < 0) {
        throw new Error('Проверьте входные данные поля выбора гендера');
    }
    if((gender === 'man' && (age + term) <= 65 && age >= 18) || (gender === "woman" && (age + term) <= 60 && age >= 18)) {
        return true
    } else {
        return false
    }
}