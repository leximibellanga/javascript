let hora = new Date().getHours()
console.log(hora)

if (hora > 12 && hora <= 17) {
    console.log("boa tarde")
} else if (hora > 17) {
    console.log("boa noite")
} else {
    console.log("bom dia")
}

