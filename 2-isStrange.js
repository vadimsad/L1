// Проверям, является ли число странным используя цикл
function isStrange(number) {
    let sumOfDivisors = 0;

    // Проходим в цикле от 1 до number / 2 (так как наибольший делитель, не равный самому числу, 
    // будет либо равен его половине, либо еще меньше) и находим его делители
    for (let i = 1; i <= number / 2; i++) {
        // Если текущее число является делителем, то добавляем его к сумме делителей
        if (number % i === 0) {
            sumOfDivisors += i;
        }
    }
    // Возвращаем результат сравнения исходного числа с суммой его делителей
    return number === sumOfDivisors;
}

// Проверям, является ли число странным используя рекурсию
function isStrangeRecursion(number) {
    // Возвращаем результат сравнения исходного числа с суммой его делителей
    return getSumOfDivisors(number) === number;

    // Функция для нахождения суммы делителей числа
    function getSumOfDivisors(number, divisor = Math.floor(number / 2)) {
        // База рекурсии - если делитель равен 0, возвращаем 0
        if (divisor === 0) {
            return 0;
        }

        // Шаг рекурсии - если divisor является делителем, возвращаем сумму текущего делителя со следующим
        if (number % divisor === 0) {
            return divisor + getSumOfDivisors(number, divisor - 1);
        }

        // Если divisor не является делителем, пропускаем его и смотрим следующее число
        return getSumOfDivisors(number, divisor - 1);
    }
}