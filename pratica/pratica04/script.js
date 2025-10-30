let inputNR = document.getElementById("inumero")
let botao = document.getElementsByTagName("input")[1]
botao.addEventListener("click", () => {
    if (inputNR.value.length == 0) {
        alert("informe um numero")
    } else {
        let nr = Number(inputNR.value)
        let select = document.getElementById("itabuada")
        select.innerHTML = ""
        for (let i = 1; i <= 12; i++) {
            opcao = document.createElement("option")
            opcao.innerHTML = `${nr} x ${i} = ${nr * i}`
            opcao.value = `tab${i}`

            select.appendChild(opcao)
        }
    }
})
