let botao = document.getElementsByTagName("button")[0]

botao.addEventListener("click", function() {
    let distanciaM = Number(prompt("Digite uma distancia em metros (m)"))

    /* pequena aula
        1m = 0,001km
        8  = x

        1m = 0,01Hm
        1m = 0,1Dam
        1m = 10dm
        1m = 100cm
        1m = 1000mm
    */ 

    let distanciaKM = 0.001 * distanciaM
    let distanciaHM = 0.01 * distanciaM
    let distanciaDAM = 0.1 * distanciaM
    let distanciaDM = 10 * distanciaM 
    let distanciaCM = 100 * distanciaM 
    let distanciaMM = 1000 * distanciaM

    alert(`${distanciaKM} km
${distanciaHM} Hm
${distanciaDAM} dam
${distanciaDM} dm
${distanciaCM} cm
${distanciaMM} mm
        `)
});