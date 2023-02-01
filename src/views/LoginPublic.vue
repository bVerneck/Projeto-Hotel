<template>
    <UnifiedHeader />
    <p>Login</p>
    <UnifiedFooter />
</template>

<script>
import UnifiedHeader from '@/components/UnifiedHeader.vue';
import UnifiedFooter from '@/components/UnifiedFooter.vue';
export default{
    name: "login-public",
    components: {UnifiedHeader, UnifiedFooter}
}
</script>