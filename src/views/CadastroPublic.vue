<template>
    <main>
        
     <UnifiedHeader />
        
      <div class="first-box">
            <form @submit.prevent="salvar" id="signup-form">
              <h1 >Registre-se</h1>
                <label for="name">Nome:</label>
                <input type="text" id="name" name="nome" required v-model="cliente.nome">

                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required v-model="cliente.email">

                <label for="password">Senha:</label>
                <input type="password" id="password" name="senha" required v-model="cliente.senha">
                
                <label for="password">Confirmar Senha:</label>
                <input type="password" id="password" name="confirmaSenha" required v-model="cliente.confirmaSenha">

                <input type="submit">
            </form>
          </div>  
      <UnifiedFooter />
    </main>
</template>

<script>
import UnifiedHeader from '@/components/UnifiedHeader.vue';
import UnifiedFooter from '@/components/UnifiedFooter.vue';

import apiMetodos from '@/services/apiMetodos';

export default{
    name: "cadastroPublic",
    components: {
        UnifiedHeader,         
        UnifiedFooter
    },
    data() {
    return {
      clientes: {
        id:"",
        email:"",
        nome:"",
      },
      cliente: {
        email:"",
        nome:"",
        senha:"",
        confirmaSenha:""
      },
      errors: []
    }
  },
  mounted(){
    this.listar()
  },
  methods:{
    listar(){
      apiMetodos.listar().then(resposta => {
        this.clientes = resposta.data
      }).catch(e => {
        console.log(e)
      })
    },
    salvar(){
      if(!this.cliente.id){
        apiMetodos.salvar(this.cliente).then(response => {
          this.cliente = {}
          alert('Cadastrado com sucesso!')
          this.errors = {}
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }else{
        apiMetodos.atualizar(this.cliente).then(resposta => {
          this.cliente = {}
          this.errors = {}
          alert('Atualizado com sucesso!')
          this.listar()
        }).catch(e => {
          this.errors = e.response.data.errors
        })
      }
    },
  }
  
};
</script>

<style scoped>



main{
  background-image:url("../assets/img/singapore-skyscrapers-marina-bay-sands-evening-4k-es.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 33px;
}
h1{
  margin-bottom: 5vh;
}
.first-box{
  margin-top: 10vh;
}
#signup-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  margin-bottom: 8rem;
}
#signup-form label {
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
}
#signup-form input[type=text],
#signup-form input[type=email],
#signup-form input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin-bottom: 20px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 18px;
}
#signup-form input[type=submit] {
  width: 100%;
  background-color: #0dadbd;
  color: white;
  padding: 14px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
}
#signup-form input[type=submit]:hover {
  background-color: #0daebda2;
}




</style>