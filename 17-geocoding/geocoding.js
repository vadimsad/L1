// Базовый URL для запросов с Yandex API
const BASE_URL = 'https://geocode-maps.yandex.ru/1.x/?apikey=12d93819-eafc-4a2a-992b-0b6243403bbc&geocode=';

// Функция для формирования полного URL с запросом
function getURL(request) {
    return BASE_URL + request + '&format=json';
}

// Получение элементов из DOM
const inputElement = document.getElementById('input');
const selectElement = document.getElementById('select-location');

// Создание функции fetchGeoData с devounce
const debouncedFetch = debounceAsync(fetchGeoData, 300);

// Обработчик события ввода текста в поле ввода
inputElement.oninput = (event) => {
    const value = event.target.value;
    // Запуск функции fetchGeoData с devounce после ввода
    // и обновление опций после получения ответа
    debouncedFetch(value).then(updateOptions);
};

// Обработчик события выбора элемента из выпадающего списка
selectElement.onchange = (event) => {
    inputElement.value = event.target.value;
};

// Асинхронная функция для запроса геоданных
async function fetchGeoData(query) {
    // Возвращаем пустой массив при пустом запросе
    if (!query) {
        return [];
    }

    try {
        const response = await fetch(getURL(query));
        const data = await response.json();
        return data.response.GeoObjectCollection.featureMember;
    } catch (error) {
        console.log(error);
        return [];
    }
}

// Функция для добавления debounce асинхронным функциям
function debounceAsync(func, delay) {
    // Переменная для хранения таймера
    let timerID = null;

    return async (...args) => {
        // Удаляем прошлый таймаут
        clearTimeout(timerID);
        return new Promise(resolve => {
            // Создаем новый таймаут, по прошествии которого функция будет вызвана
            // с последними переданными ей аргументами
            timerID = setTimeout(async () => {
                const result = await func(...args);
                resolve(result);
            }, delay);
        });
    }
}

// Функция для обновления вариантов выбора в выпадающем списке
function updateOptions(addresses) {
    // Удаление всех вариантов выбора, кроме "none"
    removeOptions(Array.from(selectElement.options), (option) => option.value !== 'none');

    if (!addresses || addresses.length === 0) {
        return;
    }

    // Добавление новых вариантов выбора на основе полученных геоданных
    addresses.forEach(address => {
        const option = document.createElement('option');
        option.value = option.textContent = `${address.GeoObject.name}, ${address.GeoObject.description}`;
        selectElement.append(option);
    });
}

// Функция для удаления опций из выпадающего списка на основе критерия
function removeOptions(options, criteria) {
    const optionsToRemove = options.filter(criteria);
    optionsToRemove.forEach(option => option.remove());
}
