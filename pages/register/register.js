function validate(name, email, password, passwordConfirm){
    let valid = true
    if(name.indexOf(" ") <= 0){
        valid = false
        showError("error-name")
    }
    if(!validateEmail(email)){
        valid = false
        showError("error-email")
    }
    if(!validatePassword(password)){
        valid = false
        showError("error-password")
    }
    if(password != passwordConfirm){
        valid = false
        showError("error-password-confirm")
    }
    return valid
}

function register(){
    let name = document.getElementById("name").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()
    let passwordConfirm = document.getElementById("password-confirm").value.trim()

    if(validate(name, email, password, passwordConfirm)){
        //salvar os dados do usuario
        alert("Cadastrado com sucesso")
    }else{
        return false
    }
}


