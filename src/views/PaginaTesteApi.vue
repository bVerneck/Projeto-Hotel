<template>
    <!-- <div id="hoteis">
        <li v-for="(pokemons, i) in pokemons" :key="i">
            {{ pokemons.name }} 
        </li>
    </div> -->
</template>

<script>
import api from '@/services/api.js';

export default{
    name:'hoteis',
    data(){
        return {
            hoteis: []
        }
    },
    mounted(){
        api.get('/hoteis').then(response => {
            console.log(response.data);
        })
    },
    // const listarHoteis = async () => {
    //     const dados = await api.listarHoteis();
    //     console.log(dados);
    // }
}
</script>

<style>
</style>