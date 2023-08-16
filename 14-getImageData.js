function getImageData(imageURL) {
    return new Promise((resolve, reject) => {
        // Создаем объект изображения
        const image = new Image();

        // Навешиваем обработчик на событие успешной загрузки
        image.onload = () => {
            // Собираем необходимые данные об изображении
            const imageInfo = {
                width: image.width,
                height: image.height,
                src: imageURL,
            };
            // Разрешаем промис с собранными данными
            resolve(imageInfo);
        };

        // Навешиваем обработчик на событие неуспешной загрузки
        image.onerror = (error) => {
            // Отклоняем промис с данными об ошибке
            reject(error);
        };

        // Устанавливаем src изображения после создания обработчиков, чтобы 
        // они отработали, даже когда изображение сохранено в кеше браузера
        image.src = imageURL;
    })
}