export function chooseWordForm(number, wordForms) {
    // Получаем последние две цифры числа
    const lastTwoDigits = Math.abs(number) % 100;
    // Получаем последнюю цифру числа
    const lastDigit = lastTwoDigits % 10;

    // Если последние две цифры находятся в диапазоне от 11 до 19, то выбираем 3 форму слова
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return wordForms[2];
    }

    // Если последняя цифра находится в диапазоне от 2 до 4, то выбираем 2 форму слова
    if (lastDigit >= 2 && lastDigit <= 4) {
        return wordForms[1];
    }

    // Если последняя цифра равна 1, то выбираем 1 форму слова
    if (lastDigit === 1) {
        return wordForms[0];
    }

    // Во всех остальных случаях выбираем 3 форму слова
    return wordForms[2];
}