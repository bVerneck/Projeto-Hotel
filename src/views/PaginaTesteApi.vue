<template>
    <div id="example-1">
        <li v-for="(pokemons, i) in pokemons" :key="i">
            {{ pokemons.name }} 
        </li>
    </div>
</template>

<script>
import api from '@/services/api';

export default{
    name:'example-1',
    data(){
        return {
            pokemons: []
        }
    },
    mounted(){
        api.get('').then(response => {
            this.pokemons = response.data.results;
            console.log(response.data.results);
        })
    }
}
</script>

<style>
</style>