// RECURSIVIDADE

function factorial(n) {
    if (n == 1) {
        return 1
    } else {
        let fat = n * factorial(n - 1)
        return fat
    }
}

console.log(factorial(5))