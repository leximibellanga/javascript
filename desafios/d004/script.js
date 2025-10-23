let botaoComprar = document.getElementsByTagName("button")[0]

botaoComprar.addEventListener("click", function() {
    let nomeProduto = prompt("Qual produto voce esta comprando? ")
    let valorProduto = Number(prompt(`Quanto custa ${nomeProduto} que voce esta comprando? `))
    let valorPagar = Number(prompt(`Qual foi o valor que voce deu para pagar ${nomeProduto}`))
    let troco = valorPagar - valorProduto

    alert(`Voce comprou ${nomeProduto} que custa ${valorProduto}MT's.
Deu ${valorPagar}MT's em dinheiro e vai receber ${troco}MT's de troco. 

Volte sempre!`)
})