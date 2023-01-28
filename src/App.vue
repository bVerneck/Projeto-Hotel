<template>
  <unifiedHeader /> <br />

  <div>
    <footerContent />
  </div> <br />

  <div>
  <logoHeader />
  </div> <br />

  <div>
  <botaoReserva />
  </div>

  <div><br />
   <botaoLogout />
  </div>
  <div><br />
   <botaoConfirmar />
  </div>

  <div><br />
   <formularioLogin />
  </div>
  
  

  
    
</template>


<script>
import unifiedHeader from '../src/components/unifiedHeader.vue'
import footerContent from './components/footerContent.vue'
import logoHeader from './components/logoHeader.vue'
import botaoReserva from './components/botaoReserva.vue'
import botaoLogout from './components/botaoLogout.vue'
import formularioLogin from './components/formularioLogin.vue'
import botaoConfirmar from './components/botaoConfirmar.vue'

export default {
  name: 'App',
  components: {
    unifiedHeader,
    footerContent,
    logoHeader,
    botaoReserva,
    botaoLogout,
    formularioLogin,
    botaoConfirmar
  },
  
}
</script>

