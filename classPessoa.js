class Person {
  name;
  height;
  weight;

  constructor(name, height, weight) {
    this.name = name;
    this.height = height;
    this.weight = weight;
  }

  calcImc() {
    return this.weight / (this.height * this.height);
  }
}

const person = new Person('José', 1.75, 70);
console.log(person.calcImc());