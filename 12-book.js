const book = {
    // Объявляем условно-приватные свойства
    _title: 'Мартин Иден',
    _author: 'Джек Лондон',
    _year: 1908,

    // Объявляем методы для доступа к свойствам
    getTitle() {
        return this._title;
    },
    setTitle(value) {
        this._title = value;
    },

    getAuthor() {
        return this._author;
    },
    setAuthor(value) {
        this._author = value;
    },

    getYear() {
        return this._year;
    },
    setYear(value) {
        this._year = value;
    },

    // Более универсальные методы для получения и изменения свойств объекта
    getProperty(prop) {
        // Проверяем, был ли передан prop и есть ли такое свойство в объекте
        if (prop && prop in this) {
            // Возвращаем значение этого свойства
            return this[prop]
        } else {
            // Если такого свойства нет или оно не было передано, выкидываем ошибку
            throw new Error(`Object  doesn't have property ${prop}`)
        }
    },
    setProperty(prop, value) {
        if (prop && prop in this) {
            this[prop] = value;
        } else {
            throw new Error(`Object  doesn't have property ${prop}`)
        }
    }
}

console.log(book.getProperty());

