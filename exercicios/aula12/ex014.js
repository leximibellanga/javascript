// let data = new Date()
let dia_semana = new Date().getDay()

switch(dia_semana) {
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda-feira")
        break
    case 2:
        console.log("Terca-feira")
        break
    case 3:
        console.log("Quarta-feira")
        break
    case 4:
        console.log("Quinta-feira")
        break
    case 5:
        console.log("Sexta-feira")
        break
    case 6:
        console.log("Sabado")
        break
    default:
        console.log("[ERRO] data invalida!!!")
}

