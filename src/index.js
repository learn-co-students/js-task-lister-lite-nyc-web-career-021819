document.addEventListener("DOMContentLoaded", () => {
  let taskList = document.querySelector('ul#tasks')
  // your code here
  // add listener for on post. On post, take the value
  // of the posted data and build an li html element
  // append the html element to the #tasks ul
  function createListElement() {
    let listItem = document.createElement('li')
    listItem.innerText = document.querySelector('input#new-task-description').value
    return listItem
   }
   
   function appendListElement() {
     return taskList.appendChild(createListElement())
   }
  
  function submitAction(event) {
    event.preventDefault()
    console.log('submitted!')
    // put add list element here
    appendListElement(event)
  }
  
  document.addEventListener("submit", submitAction)
});





