const preco = 200
const condicaoPagamento = 'Pix'

if (condicaoPagamento === 'Débito') {
  const precoTotal = preco - (preco * 0.1)
  console.log(precoTotal)
} else if (condicaoPagamento === 'Pix') {
  const precoTotal = preco - (preco * 0.15)
  console.log(precoTotal)
} else if (condicaoPagamento === '2x Crédito') {
  const precoTotal = preco
  console.log(precoTotal)
} else {
  const precoTotal = preco + (preco * 0.1)
  console.log(precoTotal)
}