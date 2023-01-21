    salvarLocalStorage()

    function salvarLocalStorage(){

      localStorage.setItem("email", "teste@teste.com.br")

      var email_localStorage = localStorage.getItem("email")
      alert(`Seja bem vindo ${email_localStorage}`);
    }