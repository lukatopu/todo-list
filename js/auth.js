const registrationContainer = document.querySelector('#registrationContainer')
const todosContainer = document.querySelector('#todosContainer')

updateHTMLContent()

export function updateHTMLContent() {
    if(localStorage.getItem('isLoggedIn') === 'true') {
        todosContainer.style.display = 'flex'
        registrationContainer.style.display = 'none'
    } else {
        todosContainer.style.display = 'none'
        registrationContainer.style.display = 'block'
    }
}