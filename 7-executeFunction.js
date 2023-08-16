// Объявляем асинхронную функцию
async function executeFunctions(array) {
    let currentIndex = 0;

    // Обходим в цикле все функции из полученного массива
    for (let func of array) {
        // Дожидаемся выполнения каждой из функций, прежде чем перейти к следующей
        await func();
        // Выводим порядковый номер функции
        console.log(currentIndex + 1);
        currentIndex++;
    }
}