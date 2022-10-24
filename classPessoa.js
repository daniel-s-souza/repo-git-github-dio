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

  ImcTable() {
    if (this.calcImc() < 18.5 ){
      return "Abaixo do Peso"
    } else if (this.calcImc() >= 18.5 && this.calcImc() < 25) {
      return "Peso Normal"
    } else if (this.calcImc() >= 25 && this.calcIm() < 30) {
      return "Sobrepeso"
    } else {
      return 'Obesidade'
    }
  }
}

const person = new Person('José', 1.75, 70);
console.log(person.calcImc());
console.log(person.ImcTable());