// logar()

var userInfo = [
    { email: "Raylan@tex.com", password: "123456", nome: "Raylan medeiros" },
    { email: "admin@tex.com", password: "admin", nome: "Tex Admin" },
    { email: "user3@tex.com", password: "password3", nome: "teste2" }
];

function logar() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    var confirmation = 0;
    var userAtual;

    localStorage.setItem("user", login)

    var email_localStorage = localStorage.getItem("email");

    userInfo.forEach(user => {

        if (login == user.email && password == user.password) {
            location.href = "../index.html";
            localStorage.setItem("confirmation", "1");
            localStorage.setItem("name", user.nome);

        }
    });

    if (localStorage.getItem("confirmation") != "1") {
        alert("Usuário ou senha incorretos!")
    }
}

function confirm() {
    if (localStorage.getItem("confirmation") == "1") {

        document.getElementById("link").href="/pages/reservas.html";
        document.getElementById("login").innerHTML = localStorage.getItem("name");
        document.getElementById("cadastro").innerHTML = `<a href="" onclick="logout()">Sair<a/>`;
    }
}

function logout() {
    localStorage.setItem("confirmation", "0");;
    alert("Você se desconectou!");
}