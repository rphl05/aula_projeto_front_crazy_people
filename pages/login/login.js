function validate(email, password){
    let valid = true

    if(!validateEmail(email)){
        showError("error-email")
        valid = false
    }
    if(!validatePassword(password)){
        valid = false
    }
    return valid
}

function login(){
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()

    if(validate(email,password)){
        window.location.href = "../feed/feed.html"
        return false
    }
    return false
}

function toggleErrorsPassword(){
    let password = document.getElementById("password").value.trim()

    // mínimo 8 caracteres
    if (password.length < 8) {
        document.getElementById("error-minlength").classList.add("error")
        document.getElementById("error-minlength").classList.remove("success")
    }else{
        document.getElementById("error-minlength").classList.add("success")
        document.getElementById("error-minlength").classList.remove("error")
    }
    // deve conter ao menos um número
    if (
        ["0","1","2","3","4","5","6","7","8","9"].filter(
            (item) => password.indexOf(item) >= 0
        ).length === 0
        
    ) {
       document.getElementById("error-number").classList.add("error")
       document.getElementById("error-number").classList.remove("success")
    } else{
        document.getElementById("error-number").classList.add("success")
        document.getElementById("error-number").classList.remove("error")
    }
    // deve conter ao menos uma letra maiúscula
    if (!/[A-Z]/.test(password)) {
        document.getElementById("error-uppercase").classList.add("error")
        document.getElementById("error-uppercase").classList.remove("success")
    } else {
        document.getElementById("error-uppercase").classList.add("success")
        document.getElementById("error-uppercase").classList.remove("error")
    }

    // deve conter ao menos uma letra minúscula
    if (!/[a-z]/.test(password)) {
        document.getElementById("error-lowercase").classList.add("error")
        document.getElementById("error-lowercase").classList.remove("success")
    } else {
        document.getElementById("error-lowercase").classList.add("success")
        document.getElementById("error-lowercase").classList.remove("error")
    }
}