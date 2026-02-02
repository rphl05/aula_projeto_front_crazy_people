function showError(id){
    document.getElementById(id).style.display = "block"
}

function clearError(id){
            document.getElementById(id).style.display = "none"
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