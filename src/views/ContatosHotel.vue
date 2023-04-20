<template>
    <UnifiedHeader />
    
    <section class="capa"></section>
    <main>

<aside>
  <h1>Entre em contato</h1>
  <h4>Fale Conosco</h4>
  <p>Utilize o formulário ao lado ou envie um e-mail para contato@txhoteis.com</p>
</aside>

<section>
  <form @submit.prevent="check" action="../index.html">

    <div>
      <p>E-mail</p><input id="input_email" type="text">
      <p>Nome</p><input id="input_nome" type ="text">
      <p>Sobrenome</p><input id="input_sobrenome" type ="text">
      <p>Telefone</p><input id="input_telefone" type ="text">
    </div>

    <div>
      <p>Selecione uma área</p>
      <select>
        <option>Selecione</option>
        <option>Administrativo</option>
        <option>Alimentos e Bebidas</option>
        <option>Eventos</option>
        <option>Governança</option>
        <option>Recepção</option>
        <option>Recursos Humanos</option>
        <option>Reservas</option>
        <option>Vendas e Comercial</option>
      </select>
    </div>

    <div>
      <p>Mensagem</p>
      <textarea id="input_mensagem" name=""></textarea>
    </div>

    <label class="termos">
        <input type="checkbox">
        <span>Concordo que meus dados sejam usados para envio de comunicação e contato.</span>
    </label>

    <div>
      <button type="submit" @click="check()" class="btn" id="btn_enviar">Enviar</button>
    </div>  
    
</form>
</section>


</main>    

    <UnifiedFooter />
</template>

<script>

import UnifiedHeader from '@/components/UnifiedHeader.vue';
import UnifiedFooter from '@/components/UnifiedFooter.vue';

export default{
    name: "ContatoHotel",
    components: {UnifiedHeader, UnifiedFooter},

    data(){
        return {
            pode_passar: false
        }
    },

    methods: {
        check_field(elemento){
            if(elemento.value == "") {
                alert("Campo vazio")
                this.pode_passar = false
            }
        },
        check_all(){
            this.check_field(input_email)
            this.check_field(input_nome)
            this.check_field(input_sobrenome)
            this.check_field(input_telefone)
            this.check_field(input_mensagem)
        },
        check(){
            this.check_all()
            // if(!this.pode_passar) evento.preventDefault()
            window.location.href = "/"
            this.pode_passar = true
        }
    }
}


// btn_enviar.addEventListener('click', (evento) =>{
//     check_all()
//     if(!pode_passar) evento.preventDefault()
//     pode_passar = true
// })

</script>



<style scoped>
*{
    padding: 0px;
    margin: 0px;
}
/* main */
main{
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding: 4em;
  /* align-items: center; */
}

main > *{
  padding: 1em;
}



main section div input, main section div textarea, main  section div select{
  width: 100%;
}

main *{
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* inputs */
input, select, textarea{
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    /* width: 100%; */
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}

/* button */
.btn{
    background-color: #670bff;
    color: white;
    border: none;
    padding: .5em 1em;
    font-size: large;
    border-radius: 5px;
}

/* footer */

footer {
  background-color: #0dadbd;
  font-family: "Mont";
  font-weight: 400;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  padding: 1% 10% 1% 10%;
}

.company-footer h2{
  margin: 0 0 25px 0;
}

.company-footer{
  width: 80%;
  padding: 25px;
}

.footer-box{
  font-family: "AGaramondPro-Regular";
  width: 80%;
  padding: 0px 0px 0px 5%;
  display: flex;
}

a {
  color: #ffffff;
  text-decoration: none;
}

.social-media{
  font-family: "Montserrat";
  width: 80%;
  padding: 0px 0px 0px 5%;
}

.social-media ul{
  display: block;
  float: left;
}

.social-media ul li{
  display: flex;
  justify-content: space-around;
}

span{
  padding: 0 15px;
}

ul{
  padding: 0;
}

li {
  list-style: none;
  font-weight: bold, 400;
  font-size: 16px;
  line-height: 20px;
  border: 0, 5px solid #fff;
}

.footer-box li{
  padding: 5%;
}

.social-media li{
  padding: 10px;
}

h2{
  font-weight: 400;
}

.newsletter{
  width: 50%;
  padding: 1%;
  float: left;
  font-family: "Montserrat";
}

i{
    color: red;
    margin: 0px;
}

.capa{
  width: 100%;
  height: 12vw;
  background-color: red;
  background: url('https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  background-position: center center;
  background-size: cover;
}

</style>