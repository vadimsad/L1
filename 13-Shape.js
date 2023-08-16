class Shape {
    constructor() {}

    getPerimeter() {
        throw new Error('Not implemented yet');
    }

    getArea() {
        throw new Error('Not implemented yet');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    constructor(side1, side2, side3) {
        super();

        // Сразу проверяем, может ли существовать треугольник с такими сторонами
        if (!Triangle.isValid(side1, side2, side3)) {
            throw new Error('Invalid triangle sides');
        };

        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    getArea() {
        // Полупериметр
        const p = this.getPerimeter() / 2;
        // Используем формулу Герона
        return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3))
    }

    // Делаем метод статическим, т.к. он не зависит от конкретного экземпляра треугольника
    static isValid(side1, side2, side3) {
        // Проверка на то, существует ли треугольник с такими сторонами
        return (
            side1 > 0 &&
            side2 > 0 &&
            side3 > 0 &&
            side1 + side2 > side3 &&
            side1 + side3 > side2 &&
            side2 + side3 > side1
        );
    }
}