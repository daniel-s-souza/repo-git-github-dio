
function aplyDiscountOrFees (valor, taxa) {
  return (valor * (taxa/100));
}

function main () {
  const preco = 200;
  const condicaoPagamento = 3;
  // 1 = Débito, 2 = Dinheiro ou Pix, 3= 2x Credito, 4= Mais q 2x//
  if (condicaoPagamento === 1) {
    const precoTotal = preco - aplyDiscountOrFees(preco, 10);
    console.log(precoTotal);
  } else if (condicaoPagamento === 2) {
    const precoTotal = preco - aplyDiscountOrFees(preco, 15);
    console.log(precoTotal);
  } else if (condicaoPagamento === 3) {
    const precoTotal = preco
    console.log(precoTotal);
  } else {
    const precoTotal = preco + aplyDiscountOrFees(preco, 10);
    console.log(precoTotal);
  };
};

main();


