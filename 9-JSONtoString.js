function JSONtoString(data) {
    // Шаг рекурсии - если значение имеет объектный тип и не является null
    if (typeof data === 'object' && data !== null) {
        // Если значение является массивом, формируем строку определенным образом
        if (Array.isArray(data)) {
            const arrayValues = data.map(JSONtoString);
            return `[${arrayValues.join(',')}]`;
        } 
        // Если значение является объектом, формируем строку определенным образом
        else {
            const objectEntries = Object.entries(data).map(([key, value]) => {
                return `"${key}":${JSONtoString(value)}`;
            })
            return `{${objectEntries.join(',')}}`;
        }
    }
    // База рекурсии - если значение имеет строковый тип данных, возвращаем значение в двойных кавычках
    else if (typeof data === 'string') {
        return `"${data}"`;
    }
    // В остальных случаях (undefined, number, boolean, Symbol) приводим значение к строке
    else {
        return String(data)
    }
}