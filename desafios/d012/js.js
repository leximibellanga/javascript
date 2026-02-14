const msgClique = document.querySelector(".msg-clique");
let msg = document.querySelector(".msg");
let msgPrecosAntigoActual = document.querySelector(".msg-precos-antigo-actual");
let situacao = document.querySelector(".situacao");

function resultado() {
    msgClique.style.display = "none";

    // pegar os precos anterior e actuais
    let precoAnterior = prompt("Qual era o preco anterior do produto?");
    let precoActual = prompt("Qual eh o preco actual do produto?");

    msg.textContent = `Analisando os valores informados...`;
    msgPrecosAntigoActual.innerHTML = `<br> O produto custava ${precoAnterior}MT\'s e agora custa ${precoActual}MT's.`;

    let msgSituacao;
    let percentagem = 0;
    if (precoActual === precoAnterior) {
        msgSituacao = `Hoje o produto continua com o mesmo preco`;
    } else if (precoActual > precoAnterior) {
        msgSituacao = `Hoje o produto esta mais caro`;
        percentagem = ((precoAnterior * 100) / precoActual) - 100;
        alert(`${percentagem}%`);
    } else {
        msgSituacao = `Hoje o produto esta mais barato`;
    }
    situacao.textContent = msgSituacao;

    
    





}

const btn = document.querySelector("#btn");
btn.addEventListener('click', resultado);