function h() {
    let hora = new Date().getHours()
    let min = new Date().getMinutes()
    let seg = new Date().getSeconds()
    let caixa_hora = document.getElementById("hora")
    let img = document.getElementsByTagName("img")[0]
    let body = document.body

    caixa_hora.innerHTML = `Agora são ${hora}:${min}:${seg}`
    img.style.borderRadius = "50%"
    img.style.marginTop = "20px"

    if (hora >= 24) {
        caixa_hora.innerHTML = "[ERRO] Hora invalida!!"

        // manha
    } else if (hora >= 0 && hora < 12) {
        body.style.backgroundColor = "#5c5918ff"

        // tarde
    } else if (hora >= 12 && hora < 18) {
        body.style.backgroundColor = "#62371aff"

        // noite
    } else if (hora >= 18 && hora < 24) {
        body.style.backgroundColor = "#251755"
        img.setAttribute("src", "wallpaper.jpg")
    } 
}

setInterval(h, 1000)
h()
