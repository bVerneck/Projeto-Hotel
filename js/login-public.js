logar()

function logar() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    localStorage.setItem("user", login)

    var email_localStorage = localStorage.getItem("email")

    if(login == "admin@tex.com" && password == "admin"){
        // alert("Bem vindo Usuário!");
        location.href = "../index.html";
    }
     else {
        alert("Usuário ou senha incorreta!")
     }
}