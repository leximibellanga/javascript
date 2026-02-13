// declaracao
let frutas = ["manga", "banana", "maca", "pera"]

// .length
let comprimento = frutas.length

console.log(frutas)
console.log(`Esse vector tem ${comprimento} posicoes\n`)

// .push(valor)
console.log("Adicionando <<TURANJA>>")
frutas.push("turanja")

console.log(frutas)
console.log(`Esse vector tem ${frutas.length} posicoes, foi adicionado uma fruta.\n`)

// .sort()
console.log("Ordenando o vector:")
console.log(`$frutas.sort()\n`)

// .indexOf(valor)
console.log("Procurar uma fruta na lista")
console.log(`Banana esta na posicao: ${frutas.indexOf("banana") + 1}.\n`)

// For () in {}, para percorrer o vector.
for (let key in frutas) {
    console.log(`${frutas[key]} esta na posicao ${Number(key) + 1}`)
}
console.log(``)

// foreach
frutas.forEach(elemento => {
    console.log(elemento)
});
