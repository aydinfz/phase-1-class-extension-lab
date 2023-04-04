class Polygon {
  constructor(arr) {
    this.sides = arr;
  }
  get countSides() {
    return this.sides.length;
  }
  get perimeter() {
    return this.sides.reduce((acc, curr) => acc + curr);
  }
}

class Triangle extends Polygon {
  get isValid() {
    const sides = this.sides;
    for (let i = 0; i < 3; i++) {
      if (sides[i] >= sides[(i + 1) % 3] + sides[(i + 2) % 3]) {
        return false;
      }
    }
    return true;
  }
}

class Square extends Polygon {
  get isValid() {
    const sides = this.sides;
    return sides.every((side) => side === sides[0]);
  }

  get area() {
    return this.sides[0] ** 2;
  }
}
