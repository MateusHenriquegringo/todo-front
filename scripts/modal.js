const button = document.getElementById("open-modal")
const modal = document.getElementById("task-modal")
const span = document.getElementsByClassName("close-button")[0]

const form = document.getElementById("task-form")

const createButton = document.getElementById("create-task-button")

button.addEventListener('click', ()=>{
    modal.style.display = "block"
})


window.addEventListener('click', (event)=> {
    if (event.target === modal) {
        modal.style.display = "none";
    }
})

span.onclick = function(){
    modal.style.display = "none"
}

form.onsubmit=createTask

