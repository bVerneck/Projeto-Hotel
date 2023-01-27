<template>
  <unifiedHeader /> <br />
  <div>
    <footerContent />
  </div>
  
    
</template>


<script>
import unifiedHeader from '../src/components/unifiedHeader.vue'
import footerContent from './components/footerContent.vue'

export default {
  name: 'App',
  components: {
    unifiedHeader,
    footerContent
  },
  
}
</script>

