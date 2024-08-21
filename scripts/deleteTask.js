function excludeTask(event){
    const taskItem = event.target.closest('li');
    if (taskItem) {
        taskItem.remove();
    }
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-task')) {
        excludeTask(event);
    }
});