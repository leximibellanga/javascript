let botao_contar = document.getElementsByTagName("input")[3]
botao_contar.addEventListener("click", () => {
    let ini = document.getElementById("iinicio")
    let f = document.getElementById("ifim")
    let p = document.getElementById("ipasso")
    let resultado = document.querySelector("#res p")

    if (ini.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        resultado.innerHTML = `Impossivel contar`
    } else {
        resultado.innerHTML = `Contando: <br>`
        let inicio = Number(ini.value)
        let fim = Number(f.value)
        let passo = Number(p.value)

        if (passo <= 0) {
            passo = 1
        }

        // crescente
        if (inicio < fim) {
            for(let i = inicio; i <= fim; i += passo) {
                resultado.innerHTML += `${i} 👉 `
            }

        // decrescente
        } else if (fim < inicio) {
            for(let i = inicio; i >= fim; i -= passo) {
                resultado.innerHTML += `${i} 👉 `
            }
        }
        resultado.innerHTML += `🏳️`
    }
    
})