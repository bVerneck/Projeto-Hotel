<template>
    <form class="container-form">
        <label for="email">E-mail</label>
        <input type="email" name="login" id="login" placeholder="Insira seu e-mail" autocomplete="off">
        <label for="password">{{password}}</label>
        <input type="password" name="password" id="password" placeholder="Insira sua senha">
        <BotaoConfirmar />
        <a href="#" id="esqueci_senha">Esqueceu sua senha?</a>
      </form>
</template>

<script>
import BotaoConfirmar from '@/components/botaoConfirmar.vue'
export default{
    name: 'formularioLogin',

    components:{
        BotaoConfirmar

    },
    data(){
        return{
            password: 'Senha'
        }
    }
    
}
</script>

<style >
.container-form{
 margin-top: 30px;
  margin-bottom: 40px;

}
label, input {
  display: block;
  width: 100%;
  text-align: left; }
label {
  font-weight: bold;
  font-size: 0.8rem; }
  input {
  border-bottom: 2px solid #131212;
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px; }


</style>
