document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener("submit",(e) => {
    e.preventDefault()
    handleToDo(e.target.new_task_description.value, e.target.Priority_Dropdown.value)
  form.reset()
  })
  })

  function handleToDo(toDo, priority){
    let li = document.createElement("li")
    let btn = document.createElement("button")

    btn.textContent = "x"
    btn.addEventListener('click',handleDelete)
    li.textContent = `Priority level ${priority}: ${toDo} `
    li.className = priority
    li.appendChild(btn)
    document.querySelector("#tasks").appendChild(li)
  }

  function handleDelete(e){
    e.target.parentNode.remove()
  }
