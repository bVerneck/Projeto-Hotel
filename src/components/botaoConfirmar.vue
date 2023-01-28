<template>
    <input type="submit" onclick="logar(); return false" value="Confirmar">
</template>

<script>
export default{
    name: 'botaoConfirmar'
}
</script>

<style scoped>
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
  background-color: #7413ac;
  transition: 0.5s; 
}
</style>
