let pode_passar = true

function check_field(elemento){
    if(elemento.value == "") {
        alert("Campo vazio")
        pode_passar = false
    }
}

function check_all(){
    check_field(input_email)
    check_field(input_nome)
    check_field(input_sobrenome)
    check_field(input_telefone)
    check_field(input_mensagem)
}

btn_enviar.addEventListener('click', (evento) =>{
    check_all()
    if(!pode_passar) evento.preventDefault()
    pode_passar = true
})