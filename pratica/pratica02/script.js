function verificar() {
    var data = new Date()
    var ano_actual = data.getFullYear()
    var ano_nasc = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano_actual) {
        alert("[ERRO] verifique os dados e tente novamente")
    } else {
        var sexo = document.getElementsByName("sexo")
        var idade = ano_actual - Number(ano_nasc.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")

        // masculino
        if (sexo[0].checked) {
            genero = "Homem"
            if (idade > 0 && idade <= 5) {
                img.setAttribute("src", "imagens/bebe-m.jpg")
                img.setAttribute("alt", "imagem de um bebe")
            } else if (idade >= 6 && idade <= 10) {
                img.setAttribute("src", "imagens/crianca-m.jpg")
                img.setAttribute("alt", "imagem de uma crianca")
            } else if (idade >= 11 && idade <= 18) {
                img.setAttribute("src", "imagens/adolescente-m.jpg")
                img.setAttribute("alt", "imagem de um adolescente")
            } else if (idade >= 19 && idade <= 25) {
                img.setAttribute("src", "imagens/jovem-m.jpg")
                img.setAttribute("alt", "imagem de um jovem")
            } else if (idade >= 26 && idade <= 50) {
                img.setAttribute("src", "imagens/adulto-m.jpg")
                img.setAttribute("alt", "imagem de um adulto")
            } else if (idade >= 51 && idade <= 120) {
                img.setAttribute("src", "imagens/idoso-m.jpg")
                img.setAttribute("alt", "imagem de um idoso")
            } else {
                img.setAttribute("src", "imagens/erro.jpg")
                img.setAttribute("alt", "imagem de erro")            
            }
            // feminino
        } else if (sexo[1].checked) { 
            genero = "Mulher"
            if (idade > 0 && idade <= 5) {
                img.setAttribute("src", "imagens/bebe-f.jpg")
                img.setAttribute("alt", "imagem de um bebe")
            } else if (idade >= 6 && idade <= 10) {
                img.setAttribute("src", "imagens/crianca-f.jpg")
                img.setAttribute("alt", "imagem de uma crianca")
            } else if (idade >= 11 && idade <= 18) {
                img.setAttribute("src", "imagens/adolescente-f.jpg")
                img.setAttribute("alt", "imagem de um adolescente")
            } else if (idade >= 19 && idade <= 25) {
                img.setAttribute("src", "imagens/jovem-m.jpg")
                img.setAttribute("alt", "imagem de um jovem")
            } else if (idade >= 26 && idade <= 50) {
                img.setAttribute("src", "imagens/adulto-f.jpg")
                img.setAttribute("alt", "imagem de um adulto")
            } else if (idade >= 51 && idade <= 120) {
                img.setAttribute("src", "imagens/idoso-f.jpg")
                img.setAttribute("alt", "imagem de um idoso")
            } else {
                img.setAttribute("src", "imagens/erro.jpg")
                img.setAttribute("alt", "imagem de erro")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos</strong>`
        res.appendChild(img)
    }
}

