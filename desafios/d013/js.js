const msgClique = document.querySelector(".msg-clique");
const tabela = document.querySelector(".tabela");
let td = document.querySelectorAll(".td");
let tdSit = document.querySelector(".situacao");

function resultado() {
    msgClique.style.display = "none";
    td[0].textContent = prompt("Qual eh o nome do aluno?");

    // Notas
    let n1 = Number(prompt("Informe a primeira nota do aluno: "));
    let n2 = Number(prompt("Informe a segunda nota do aluno: "));
    let n3 = Number(prompt("Informe a terceira nota do aluno: "));
    td[1].textContent = n1;
    td[2].textContent = n2;
    td[3].textContent = n3;

    // media
    let media = (n1 + n2 + n3) / 3; 
    td[4].textContent = media;

    // situacao
    let situacao;
    if (media >= 14) {
        situacao = "Dispensado";
        tdSit.style.backgroundColor = "rgba(0, 255, 0, .5)";
        tdSit.style.borderColor = "rgb(0, 255, 0)";
    } else if (media < 10) {
        situacao = "Reprovado";
        tdSit.style.backgroundColor = "rgba(255, 0, 0, .5)";
        tdSit.style.borderColor = "rgb(255, 0, 0)";
    } else {
        situacao = "Aprovado";
        tdSit.style.backgroundColor = "rgba(255, 255, 0, .5)";
        tdSit.style.borderColor = "rgb(255, 255, 0)";
    }
    tdSit.textContent = situacao;
    
    // Abrir a tabela com os dados do aluno
    tabela.style.display = "block";
}


const btn = document.querySelector("#btn");
btn.addEventListener('click', resultado);
