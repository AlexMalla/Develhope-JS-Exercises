class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(obj) {
    if (obj.side) {
      return obj.side ** 2;
    } else if ((obj.width, obj.height)) {
      return obj.width * obj.height;
    } else {
      return obj.radius ** 2 * Math.PI;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);
const myObj = { name: "Marco", surname: "Rossi" };
const myArr = [1, 2, 3, 4];

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
console.log(AreaCalculator.calculate(myObj));
