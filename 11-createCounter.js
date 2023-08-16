function createCounter() {
    // Объявляем переменную во внешней функции
    let count = 0;
    // Возвращаем другую функцию
    return () => {
        // При вызове внутренней функции возвращаем переменную, объявленную во внешней функции, инкрементируем ее
        return count++;
    }
}

// В переменную записываем результат вызова внешней функции,  в результате
// переменная counter будет хранить в себе внутреннюю функцию, у которой будет доступ
// к переменной count, объявленной во внешней функции
const counter1 = createCounter();
const counter2 = createCounter();

// У каждой функции будет свой собственный счетчик count
counter1(); // 0
counter1(); // 1

counter2(); // 0
counter2(); // 1
counter2(); // 2

