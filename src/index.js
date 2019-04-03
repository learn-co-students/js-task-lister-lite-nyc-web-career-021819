document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form")
  const taskList = document.querySelector('#tasks')
  let counter = 0

  form.addEventListener("submit", e => {
    e.preventDefault()
    let userInput = document.getElementById('new-task-description').value
    form.reset();

    let newTask = document.createElement('li')
    newTask.innerText = userInput + " "
    newTask.id = ++counter

    let deleteButton = document.createElement('button')
    deleteButton.id = newTask.id
    deleteButton.innerText = "delete"

    taskList.appendChild(newTask)
    newTask.appendChild(deleteButton)

    deleteButton.addEventListener('click', e =>{
      if(newTask.id === deleteButton.id) {
        taskList.removeChild(newTask)
      }
    });

  });
});
