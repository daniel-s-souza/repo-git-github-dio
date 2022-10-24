class Carro {
  marca;
  cor;
  gastoMedioKm;

  constructor(marca, cor, gastoMedioKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioKm = gastoMedioKm;
  }

  calcGastoViagem(distancia, preco) {
    return distancia * this.gastoMedioKm * preco;
  }
}

const newCar = new Carro('Renegade', 'Vermelho', 1/10);
console.log(newCar.calcGastoViagem(987, 5.87));
