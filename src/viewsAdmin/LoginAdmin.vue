<template>
  <main>
    <div class="container">
      <img src="../assets/img/group.png" alt="logo" class="logo">
      
      <form @submit.prevent="login" class="form-inline">
        <label for="email" class="email">Email</label><br>
        <input type="email" id="email" placeholder="Email" v-model="email"> <br>
        <label for="pwd">Senha</label><br>
        <input type="password" id="pwd" placeholder="Senha" v-model="senha"><br>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'LoginAdmin',
  data() {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    login() {
      
      if (this.email === 'texhotel@tex.com' && this.senha === 'admin') {
        console.log('login bem-sucedido')
        this.$router.push('/homeAdmin')
      } else {
        console.log('email ou senha incorretos')
      }
    }
  }
}
</script>


<style scoped>
@font-face {
    font-family:  'Mont';
    src: url('../assets/fonts/Montserrat-Regular.otf');
}

@font-face {
    font-family:  'Gara';
    src: url('../assets/fonts/AGaramondPro-Regular.otf');
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'gara';
    font-size: 23px;
}

.container{
    height: 520px;
    width: 500px;
    border-radius: 8px 8px 8px 8px;
    overflow: hidden;
    text-align: center;
    background-color: #dddddd78;
}

main{
 
    background-image:
    url("../assets/img/singapore-skyscrapers-marina-bay-sands-evening-4k-es.jpg");
    min-height: 120px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    height: 100vh;
    justify-content: center; 
    align-items: center;
       
}



.logo{
    height: 100px;
    
    border-radius: 0px 0px 12px 12px;
    
}

.form-inline{
    align-items: center;
    border-radius: 10px;
    margin-top: 40px;
    
}

.form-inline input{
    vertical-align: middle;
    margin: 5px 10px 50px 0;
    padding: 10px;
    width: 350px;
    background-color: rgba(255, 255, 255, 0.603);
    text-align: center;
    border-radius: 10px;
    
}

.form-inline button {
    padding: 10px 20px;
    background-color: #670bff;
    border: 1px solid #ddd;
    color: white;
    cursor: pointer;
    border-radius: 10px;
}

.form-inline button:hover{
    
    background-color: #690bffd4;
}
teste {
background-color: aliceblue;    
}

@media (max-width: 800px){
    .form-inline input{
        margin: 10px 0;
    }

    .form-inline{
        flex-direction: column;
        align-items: stretch;
    }
}

</style>