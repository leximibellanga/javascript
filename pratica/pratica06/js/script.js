// {/* <li class="task-box">
//     <span class="task-title">exemplo 01</span>
//     <i class="done-btn">✔️</i>
//     <i class="remove-btn">❌</i>
// </li> */}


let btnAdd = document.getElementById('btn');
let task = document.getElementById('task');
let taskList = document.getElementById('task-list');



function addTask() {
    if (task.value === "") {
        alert("vazio");
    } else {
        let li = document.createElement('li');
        li.setAttribute('class', 'task-box');

        li.innerHTML = `<span class="task-title">${task.value}</span>
                        <i class="done-btn">✔️</i>
                        <i class="remove-btn">❌</i>`;

        // adicionar na taskList
        taskList.appendChild(li);
    }
}


// Botao para adicionar task
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();

    addTask();

    // Limpar input 
    task.value = "";
});



let btnDone = document.getElementsByClassName('done-btn');
let btnRemove = document.getElementsByClassName('remove-btn');
let taskBox = document.getElementsByClassName('task-box');
// Botao para marcar como concluida a task
for (let i = 0; i < btnDone.length; i++) {
    btnDone[i].addEventListener('click', () => {
        // taskBox[i].classList.add('done');
        alert(`clicou. tamanho ${btnDone.length}`);
    });
}


