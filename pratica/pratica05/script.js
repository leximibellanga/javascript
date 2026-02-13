let numeros = []
let numero = document.getElementById("inumero")
let lista = document.getElementById("iarray")
let res = document.getElementById("res")
let p = document.createElement("p")
p.innerHTML = ""

function adicionar() {
    let valor = Number(nr.value)
    if (valor > 0 && valor <= 100) {
        array.push(valor)

        let op = document.createElement("option") 
        op.innerHTML = `na posicao ${numeros.length}, temos ${numeros[numeros.length - 1]}`
        lista.appendChild(op)

        alert(`${valor} adicionado com sucesso.`)
    } else {
        alert("Nao posso adicionaor esse valor.")
    }
}

function finalizar(v) {
    if (v.length == 0) {

    } else {
        let totalValores = function (vector) {
        return vector.length
    }

    let maior = function (vector) {
        let m = vector[0]
        for (let i = 0; i < vector.length; i++) {
            if (m <= vector[i]) {
                m = vector[i]
            }
        }
        return m
    }

    let menor = function (vector) {
        let m = vector[0]
        for (let i = 0; i < vector.length; i++) {
            if (m >= vector[i]) {
                m = vector[i]
            }
        }
        return m
    }

    let soma = function (vector) {
        let s = 0
        for (let i in vector) {
            s += vector[i]
        }
        return s
    }

    let media = function (vector) {
        let s = 0
        for (let i in vector) {
            s += vector[i]
        }
        return (s / vector.length)
    }
    p.innerHTML = `Ao todo temos ${totalValores(numeros)} numeros cadastrados.<br>
O maior valor informado foi ${maior(numeros)}.<br>
O menor valor informado foi ${menor(numeros)}.<br>
Somando todos os valores, temos ${soma(numeros)}.<br>
A media dos valores digitados eh ${media(numeros)}.`

    res.appendChild(p)
    }
}