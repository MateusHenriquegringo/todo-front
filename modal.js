const button = document.getElementById("create-task")
const modal = document.getElementById("task-modal")
const span = document.getElementsByClassName("close-button")[0]

const form = document.getElementById("task-form")

const createButton = document.getElementById("create-task-button")

button.onclick = function(){
    modal.style.display = "block"
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

span.onclick = function(){
    modal.style.display = "none"
}

form.onsubmit = function(event){
    event.preventDefault();

    const name = document.getElementById("task-name").value;
    const description = document.getElementById("task-description").value;
    const finalDate = document.getElementById("task-date").value;
    const status = document.getElementById("task-status").value;
    const category = document.getElementById("task-category").value;
    const priority = document.getElementById("task-priority").value;

    const ul = document.querySelector(".tasks ul");
    const li = document.createElement("li");

    li.innerHTML = `
        <div class="task">
            <h2>Nome: <span>${name}</span></h2>
            <p>Descricao: <span>${description}</span></p>
            <p>Prioridade: <span>${priority}</span></p>
            <p>Status: <span>${status}</span></p>
            <p>Categoria: <span>${category}</span></p>
            <p>Data Final: <span>${finalDate}</span></p>
        </div>
    `;

    ul.appendChild(li);

    modal.style.display = "none";

    form.reset();
}



    

