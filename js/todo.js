import { updateHTMLContent } from './auth.js'

const logOutButton = document.querySelector('#logOutButton')
logOutButton.addEventListener('click', (e) => {
    localStorage.setItem('isLoggedIn', false)
    updateHTMLContent()
})


const addTodoInput = document.querySelector('.addTodoContainer > input')
const addTodoButton = document.querySelector('.addTodoContainer > button')
const todoList = document.querySelector('.todoList')
let todoToEdit = null


addTodoButton.addEventListener('click', () => {

    if(addTodoInput.value.trim().length === 0) {
        return;
    }

    if(addTodoButton.innerText.toLowerCase() === 'add') {
        addTodo(addTodoInput.value)
    } else if(addTodoButton.innerText.toLowerCase() === 'save') {
        // alert()
        editTodo()
        // editTodo()
    }

    //დავაბრუნოთ ყველაფერი default მნიშვნელობაზე 
    todoToEdit = null
    addTodoButton.innerText = 'add'
    addTodoInput.value = ""
})

function addTodo(todoText) {
    const todoContainerEl = document.createElement('div')
    todoContainerEl.classList.add('todo')
    const todoTextEl = document.createElement('p')
    todoTextEl.innerText = todoText
    const removeAndEditTodoParentEl = document.createElement('div')
    const removeTodoEl = document.createElement('button')
    removeTodoEl.innerText = 'remove'
    const editTodoEl = document.createElement('i')
    editTodoEl.classList.add('fa')
    editTodoEl.classList.add('fa-pencil')
    editTodoEl.ariaHidden = true

    todoList.appendChild(todoContainerEl)
    todoContainerEl.appendChild(todoTextEl)
    todoContainerEl.appendChild(removeAndEditTodoParentEl)
    removeAndEditTodoParentEl.appendChild(editTodoEl)
    removeAndEditTodoParentEl.appendChild(removeTodoEl)


    removeTodoEl.addEventListener('click', (e) => {
        removeTodo(todoContainerEl)
    })

    editTodoEl.addEventListener('click', (e) => {
        addTodoButton.innerText = 'save'
        addTodoInput.value = todoTextEl.innerText

        todoToEdit = todoTextEl

    })
    
}

function removeTodo(elementToRemove) {
    todoList.removeChild(elementToRemove)
}

function editTodo() {
    todoToEdit.innerText = addTodoInput.value
}