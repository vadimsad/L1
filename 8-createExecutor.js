function createExecutor(array) {
    // Возвращаем функцию, которая получает список аргументов args
    return (...args) => {
        // Создаем массив для хранения результатов работы каждый из функций
        const result = [];

        // Обходим каждую функцию из массива и сохраняем результаты ее вызова с переданными аргументами args
        for (let func of array) {
            const funcResult = func(...args);
            result.push(funcResult);
        }

        return result;
    }
}

// Асинхронная версия
async function createAsyncExecutor(array) {
    return async (...args) => {
        const result = [];

        for(let func of array) {
            const funcResult = await func(...args);
            result.push(funcResult);
        }

        return result;
    }
}