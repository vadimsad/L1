// Сортировка с использованием встроенного метода sort
function sortArray(array) {
    return array.sort(compareobject)
}

// Алгоритм быстрой сортировки
function quickSortArray(array) {
    // В случае, когда массив имеет длину меньше 2, он не нуждается в сортировке
    if (array.length < 2 ) {
        return array;
    }

    // Определяем опорную точку, в моем варианте это середина массива
    const pivotIndex = Math.floor(array.length / 2);
    const pivot = array[pivotIndex];

    // Создаем массивы для хранения элементов меньших и болльших, чем опорный
    const less = [];
    const greater = [];

    // Обходим весь массив и заполняем подмассивы less и greater
    for (let i = 0; i < array.length; i++) {
        // Пропускаем опорный элемент
        if (i === pivotIndex) {
            continue;
        }

        // Распределяем элементы по массивам less и greater
        if (compareobject(array[i], pivot) < 0) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    // Возвращаем отсортированный массив
    return [...quickSortArray(less), pivot, ...quickSortArray(greater)];
}

// Функция для сравнения объектов по полям age и name
function compareobject(obj1, obj2) {
    if (obj1.age !== obj2.age) {
        return obj1.age - obj2.age;
    } else {
        return obj1.name.localeCompare(obj2.name);
    }
}
