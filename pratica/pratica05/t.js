let nrs = [8, 2, 10, 4, 7] 


let totalValores = function(vector) {
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

let menor = function(vector) {
    let m = vector[0]
    for (let i = 0; i < vector.length; i++) {
        if (m >= vector[i]) {
            m = vector[i]
        }
    }
    return m
}

let soma = function(vector) {
    let s = 0
    for (let i in vector) {
        s += vector[i]
    }
    return s
}

let media = function(vector) {
    let s = 0
    for (let i in vector) {
        s += vector[i]
    }
    return (s / vector.length)
}

console.log(nrs)
console.log("temos " + totalValores(nrs) + " nrs")
console.log("maior: " + maior(nrs))
console.log("menor: " + menor(nrs))
console.log("soma: " + soma(nrs))
console.log("media: " + media(nrs))