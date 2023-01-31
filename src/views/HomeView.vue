<template>
  <UnifiedHeader />
  <p>HOME</p>
  <UnifiedFooter />
</template>

<script>
import UnifiedHeader from "@/components/UnifiedHeader.vue";
import UnifiedFooter from "@/components/UnifiedFooter.vue";

export default {
  name: "HomeView",
  components: {
    UnifiedHeader,
    UnifiedFooter,
  },
};
</script>
