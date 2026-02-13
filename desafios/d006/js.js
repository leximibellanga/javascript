const msgClique = document.querySelector(".msg-clique");
let msg = document.querySelector(".msg");
let grausK = document.querySelector(".kelven");
let grausF = document.querySelector(".fahrnheit");

function resultado() {
    msgClique.style.display = "none";

    let c = Number.parseFloat(prompt("Informe a temperatura em graus celcius"));
    let f = (c * 1.8) + 32;
    let k = c + 273.15;

    msg.textContent = `A temperatura de ${c}C, corresponde a...`;
    grausK.textContent = `${k}K (kelven).`;
    grausF.textContent = `${f}F (fahrnheit).`;
}

const btn = document.querySelector("#btn");
btn.addEventListener('click', resultado);