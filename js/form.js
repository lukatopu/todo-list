import { updateHTMLContent } from './auth.js'

const emailInput = document.querySelector('#emailContainer > input')
const emailErrorP = document.querySelector('#emailContainer > p')
const usernameInput = document.querySelector('#usernameContainer > input')
const usernameErrorP = document.querySelector('#usernameContainer > p')
const passwordInput = document.querySelector('#passwordContainer > input')
const passwordErrorP = document.querySelector('#passwordContainer > p')
const confirmPasswordInput = document.querySelector('#confirmPasswordContainer > input')
const confirmPasswordErrorP = document.querySelector('#confirmPasswordContainer > p')

const errorMessages = {
    email: 'enter valid email',
    username: 'username must contain numbers',
    password: 'enter strong password',
    confirmPassword: 'password does not match'
}

const submitButton = document.querySelector('#submitButton')

submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    checkValidations()
})

function checkValidations() {
    //email
    let isEmailValid = checkEmailValidation()
    //username
    let isUsernameValid = checkUsernameValidation()
    //password
    let isPassowrdValid = checkPasswordValidation()
    //confirm password
    let isConfirmPasswordValid = checkConfirmPasswordValidation()

    if(isEmailValid && isUsernameValid && isPassowrdValid && isConfirmPasswordValid) {
        localStorage.setItem('isLoggedIn', true)
        updateHTMLContent()
    }
}

function checkEmailValidation() {
    if(!emailInput.value.includes('@')) {
        emailErrorP.innerText = errorMessages.email
        emailInput.classList.add('error')
        return false
    } else {
        emailErrorP.innerText = ''
        emailInput.classList.remove('error')
        return true
    }
}
function checkUsernameValidation() {
    let hasNumbers = false;
    const numbersArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    for(let i = 0; i < usernameInput.value.length; i++) {
        if(numbersArr.includes(usernameInput.value[i])) {
            hasNumbers = true
            break;
        }
    }
    if(!hasNumbers) {
        usernameErrorP.innerText = errorMessages.username
        usernameInput.classList.add('error')
        return false
    } else {
        usernameErrorP.innerText = ''
        usernameInput.classList.remove('error')
        return true
    }
}
function checkPasswordValidation() {
    let hasUppercaseLetters = false
    const specialSymbolsArr = ['@', '#', '!', '$', '%'] 
    let hasSpecialSymbols = false

    for(let i = 0; i < passwordInput.value.length; i++){
        let char = passwordInput.value[i]

        if(char === char.toUpperCase()){
            hasUppercaseLetters = true
        }
        if(specialSymbolsArr.includes(char)) {
            hasSpecialSymbols = true
        }
    }
    if(!hasUppercaseLetters || !hasSpecialSymbols){
        passwordErrorP.innerText = errorMessages.password
        passwordInput.classList.add('error')
        return false
    } else {
        passwordErrorP.innerText = ''
        passwordInput.classList.remove('error')
        return true
    }
}
function checkConfirmPasswordValidation() {
    if(confirmPasswordInput.value !== passwordInput.value) {
        confirmPasswordErrorP.innerText = errorMessages.confirmPassword
        confirmPasswordInput.classList.add('error')
        return false
    } else {
        confirmPasswordErrorP.innerText = ''
        confirmPasswordInput.classList.remove('error')
        return true
    }
}