<template>
  <unifiedHeader /> <br />
  <div>
    <footerTer />
  </div>
  
    
</template>


<script>
import unifiedHeader from '../src/components/unifiedHeader.vue'
import footerTer from '../src/components/footerTer.vue'

export default {
  name: 'App',
  components: {
    unifiedHeader,
    footerTer
  },
  
}
</script>

