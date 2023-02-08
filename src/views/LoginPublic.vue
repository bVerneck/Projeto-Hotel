<template>
    <main>
   <UnifiedHeader />
        <div id="login-container">
      <h1>Login</h1>
      <form action="">
        <label for="email">E-mail</label>
        <input type="email" name="login" id="login" placeholder="Insira seu e-mail" autocomplete="off">
        <label for="password">Senha</label>
        <input type="password" name="password" id="password" placeholder="Insira sua senha">
        <input type="submit" onclick="logar(); return false" value="Confirmar">
        <a href="#" id="esqueci_senha">Esqueceu sua senha?</a>
      </form>
      <div id="social-container">
        <p>Ou entre pelas suas redes sociais</p>
        <ul>
        <li>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
          <span>Facebook</span>
        </li>
        <li>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
          <span>Instagram</span>
        </li>
        <li>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
          <span>Twitter</span>
        </li>
      </ul>
      </div>
      <div id="registrar_container">
        <p>Ainda não tem uma conta?</p>
        <router-link to="/cadastroPublic">Registre-se</router-link>
      </div>
    </div>
   
   <unifiedFooter />
    </main> 
</template>

<script>
import UnifiedHeader from '@/components/UnifiedHeader.vue';
import UnifiedFooter from '@/components/UnifiedFooter.vue';

export default{
    name: "loginPublic",
    components: {
        UnifiedHeader,         
        UnifiedFooter
    },
};
</script>

<style scoped>



main{
  background-image:url("../assets/img/singapore-skyscrapers-marina-bay-sands-evening-4k-es.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 33px;
}

form { 
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

  input[type="submit"] {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  height: 40px;
  border-radius: 20px;
  margin-top: 20px;
  color: #fff;
  background-color: #0dadbd;
  cursor: pointer; }

  input[type="submit"]:hover {
  background-color: #afdaa7;
  transition: 0.5s; }

  #login-container {
  background-color: rgb(235, 243, 235);
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 30px;
  margin-top: 10vh;
  margin-bottom: 20vh;
  border-radius: 10px;
  text-align: center;
  }

  /* redes sociais*/
#social-container, #social-container p {
  margin-bottom: 20px; 
  margin-top:10%;
  }

#social-container i {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  line-height: 40px;
  color: #fff;
  margin: 0 5px;
  cursor: pointer; 
  }
  

.fa-facebook, span{
  /* background-color: #3b5998;  */
  cursor: pointer;
  }

.fa-linkedin, span {
  /* background-color: #0077b5;  */
  cursor: pointer;
  }

.fa-twitter, span {
  /* background-color: #00acee;  */
  cursor: pointer;
  }

/* registrar */
#registrar_container{
  margin-bottom: 10px; 
  }
  

  ul {
    display: flex;
    padding: 0 50px;
    justify-content: space-between;
    
  }

  ul, li {
    padding: 0 10px;
    
  }

</style>