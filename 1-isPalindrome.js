// Проверяем равенство двух строк
function isPalindrome(string) {
    // Очищаем строку от пробелов
    const cleanedString = string.toLowerCase().replaceAll(' ', '');

    // Возвращаем результат сравнения исходной строки с ее перевернутой версией
    return cleanedString === cleanedString.split('').reverse().join('');
}

// Проверяем равенство символов с противоположных сторон строки используя цикл
function isPalindromeInCycle(string) {
    // Очищаем строку от пробелов
    const cleanedString = string.toLowerCase().replaceAll(' ', '');
    const length = cleanedString.length;

    // Обходим в цикле половину строку, сравнивая символ на текущей позиции с символом на той же позиции, но с конца строки
    for (let i = 0; i < Math.floor(length / 2); i++) {
        // Если соответствующие символы не равны, значит строка не является палиндромом
        if (cleanedString[i] !== cleanedString[length - i - 1]) {
            return false
        }
    }

    // Если каждая пара соответствующих символов равна, значит строка является палиндромом
    return true
}

// Проверяем равенство символов с противоположных сторон строки используя рекурсию
function isPalindromeRecursion(string) {
    // Очищаем строку от пробелов
    const cleanedString = string.toLowerCase().replaceAll(' ', '');

    // База рекурсии - когда длина строки меньше либо равна единице, то строка совершенно точно является палиндромом
    if (cleanedString.length <= 1) {
        return true;
    }

    // Шаг рекурсии - если крайние символы не равны, строка не является палиндромом
    if (cleanedString[0] !== cleanedString[cleanedString.length - 1]) {
        return false
    }
    // А если крайние символы равны, продолжаем проверку и вызываем следующий шаг рекурсии, передавая туда строку без крайних символов
    return isPalindromeRecursion(cleanedString.substring(1, cleanedString.length - 1));
}