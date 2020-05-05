// Go to Register form
function toRegister() {
    let login = document.querySelector('.login-form')
    let register = document.querySelector('.register-form')

    login.style.display = 'none';
    register.style.display = 'block';
}

// Go to Login form
function toLogin() {
    let login = document.querySelector('.login-form')
    let register = document.querySelector('.register-form')

    login.style.display = 'block';
    register.style.display = 'none';
}

// Strored user information
function storeInfo() {
    let name = document.querySelector('#enter-name')
    let password = document.querySelector('#enter-password')
    let email = document.querySelector('#enter-email')

    if(name.value === '' || password.value ==='' || email ==='') {
        alert('Please fill out your information')
    } else {
        localStorage.setItem('#enter-name', name.value)
        localStorage.setItem('#enter-password', password.value)
        localStorage.setItem('#enter-email', email.value)
    
        // Comeback Login form
        let login = document.querySelector('.login-form')
        let register = document.querySelector('.register-form')
        login.style.display = 'block';
        register.style.display = 'none';
    }
}

// Check user information
function checkInfo() {
    let userName = document.querySelector('#user-name')
    let userPass = document.querySelector('#user-pass')
    let storedName = localStorage.getItem('#enter-name')
    let storedPass = localStorage.getItem('#enter-password')

    // Login status
    if(userName.value === storedName && userPass.value === storedPass) {
        alert('Login Successful!')
        return
    } else if(userName.value === '' || userPass.value === '') {
        alert('Please fill out your Username and Password')
        return
    } else {
        alert('ERROR')
        return
    }
}