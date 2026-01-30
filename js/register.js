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
function showError(id){
    document.getElementById(id).style.display = "block"
}
function clearError(id){
            document.getElementById(id).style.display = "none"
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
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
    // mínimo 8 caracteres
    if (password.length < 8) {
        return false;

    // deve conter ao menos um número
    } else if (
        ["0","1","2","3","4","5","6","7","8","9"].filter(
            (item) => password.indexOf(item) >= 0
        ).length === 0
    ) {
        return false;

    // deve conter ao menos uma letra maiúscula
    } else if (password.toLowerCase() === password) {
        return false;

    // deve conter ao menos uma letra minúscula
    } else if (password.toUpperCase() === password) {
        return false;
    }

    return true;
}

function showPassword(id,idEye){
    let type = document.getElementById(id).type
    if (type == "password"){
        document.getElementById(id).type = "text"
        document.getElementById(idEye).classList.toggle("fa-eye-slash")
    }else{
        document.getElementById(id).type = "password"
        document.getElementById(idEye).classList.toggle("fa-eye-slash")
    }
}