// Класс для удобного создания узлов связного списка
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function JSONtoLinkedList(json) {
    // Преобразуем JSON
    const parsedJSON = JSON.parse(json);

    // Если полученные данные не являются массивом или длина этого массива равна нулю, останавливаем выполнение
    if (!Array.isArray(parsedJSON) || parsedJSON.length === 0) {
        return;
    }

    // Создаем голову списка
    const head = new Node(parsedJSON[0]);
    // Сохраняем в переменную текущего узла ссылку на голову
    let currentNode = head;

    // В цикле обходим каждый элемент массива
    for (let i = 1; i < parsedJSON.length; i++) {
        // Создаем новый узел с соответствующими данными
        const newNode = new Node(parsedJSON[i]);
        // Для текущего узла указываем ссылку на новый узел
        currentNode.next = newNode;
        // В качестве текущего узла сохраняем только что созданный узел
        currentNode = newNode;
    }

    // Возвращаем начало списка
    return head;
}