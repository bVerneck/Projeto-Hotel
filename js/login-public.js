// logar()

// var userInfo = [
//     { email: "Raylan@tex.com", password: "123456", nome: "Raylan medeiros" },
//     { email: "admin@tex.com", password: "admin", nome: "Tex Admin" },
//     { email: "user3@tex.com", password: "password3", nome: "teste2" }
// ];

function logar() {
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;
    var confirmation = 0;
    var userAtual;

    localStorage.setItem("user", login)

    var email_localStorage = localStorage.getItem("email");

    const users = JSON.parse(localStorage.getItem("users"));
    // console.log(users);
    // users.forEach(user => {
    //     console.log(`Nome: ${user.name}, Email: ${user.email}`);
    // });

    users.forEach(user => {

        if (login == user.email && password == user.password) {
            location.href = "../index.html";
            localStorage.setItem("confirmation", "1");
            localStorage.setItem("name", user.name);

        }
    });

    if (localStorage.getItem("confirmation") != "1") {
        alert("Usuário ou senha incorretos!")
    }
}

function confirm() {
    if (localStorage.getItem("confirmation") == "1") {

        document.getElementById("link").href = "/pages/reservas.html";
        document.getElementById("login").innerHTML = localStorage.getItem("name");
        document.getElementById("cadastro").innerHTML = `<a href="" onclick="logout()">Sair<a/>`;
    }
}

function logout() {
    localStorage.setItem("confirmation", "0");;
    alert("Você se desconectou!");
}

const form = document.querySelector("#signup-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#name").value;
    const email = form.querySelector("#email").value;
    const password = form.querySelector("#password").value;

    function checkEmailExists(email) {
        const users = JSON.parse(localStorage.getItem("users"));
        if (!users) {
            return false;
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                return true;
            }
        }
        return false;
    }

    if (checkEmailExists(email)) {
        alert("Email já cadastrado!");
    } else {
        // Add new user to local storage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ name: name, email: email, password: password });
        localStorage.setItem("users", JSON.stringify(users));
        location.href = "../index.html";
        alert("Cadastro realizado com sucesso!")
    }
    
});

function tester() {
    const users = JSON.parse(localStorage.getItem("users"));
    // console.log(users);
    users.forEach(user => {
        console.log(`Nome: ${user.name}, Email: ${user.email}`);
    });

}