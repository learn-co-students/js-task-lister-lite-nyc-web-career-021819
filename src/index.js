document.addEventListener("DOMContentLoaded", () => {
  const submit = document.getElementsByTagName("input")[1]
  const list = document.getElementById("list")
  const ul = document.getElementsByTagName("ul")[0]
  const input = document.getElementById("new-task-description")
  const createTaskForm = document.getElementById("create-task-form")
  const dropDown = document.createElement("select")
  const userName = document.createElement("input")
  userName.id = "user-name"
  userName.placeholder = "Enter Your User Name!"
  dropDown.innerHTML = `<select id="dropdown">
    <option value="high" data-number="1">High Priority</option>
    <option value="medium" data-number="2">Medium Priority</option>
    <option value="low" data-number="3">Low Priority</option>
</select>`
  createTaskForm.prepend(userName)
   createTaskForm.prepend(dropDown)



  submit.addEventListener('click', ev => {
    ev.preventDefault()
    let li = document.createElement("li")
    let deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete Task"
    deleteButton.style.backgroundColor = "red"
    deleteButton.style.color = "white"
    deleteButton.dataset.action = "delete"
    if (input.value && userName.value) {li.innerText = "Username: " + input.value + " Priority: " + dropDown.value
      li.dataset.priority = dropDown.value
      li.dataset.userName = userName.value
      li.appendChild(deleteButton)
      ul.appendChild(li)
      if (li.dataset.priority === "high") {
        li.style.color = "red"
      }
      else if(li.dataset.priority === "medium") {
        li.style.color = "orange"
      }
      else {
        li.style.color = "cyan"
      }
      input.value = ''
      }
    else {
      alert("Please enter a task to list!")
    }

  })

   function sortUl(ul) {

   }

  list.addEventListener('click', ev => {
    if (ev.target.dataset.action === "delete") {
      ev.target.parentElement.remove()
    }
  })
});
