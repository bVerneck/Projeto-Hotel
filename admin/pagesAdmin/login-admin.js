logar()

function logar() {
    var login = document.getElementById('email').value;
    // var password = document.getElementById('pwd').value;

    localStorage.setItem('user', login)
    var email_localStorage = localStorage.getItem('email')

}


