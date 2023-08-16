async function executeAsyncFunctions(functions) {
    // Массив результатов вызовов функций
    const result = [];

    for (let func of functions) {
        // Результат выполнения текущей функции
        const funcResult = await func();
        result.push(funcResult);
    }

    return result;
}

// Функция с использованием Promise.all
async function executeAsyncFunctionsPromiseAll(functions) {
    // Используем метод Promise.all, который разрешается при разрешении каждой из функций
    // с массивом результатов работы каждой из функций
    const result = await Promise.all(functions.map(func => func()));
    return result
}