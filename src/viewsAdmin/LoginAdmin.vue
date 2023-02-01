<template>
    <!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>Login Admin</title>
</head>
<body>
  
    <div class="container">
        <img src="../assets/img/group.png" alt="logo" class="logo">
        
        <form action="" method="post" class="form-inline">
            <label for="email" class="email">Email</label><br>
            <input type="email" id="email" placeholder="Enter email" name="email"> <br>
            <label for="pwd">Password</label><br>
            <input type="password" id="pwd" placeholder="Enter password"><br>
            <button type="submit" onclick="logar(); return false">Submit</button>
        </form>
    </div>
       
    
</body>
</html>
</template>

<script>

export default {
    name:"LoginAdmin",

methods:{
logar()

{function logar() {
    var login = document.getElementById('email').value;
    // var password = document.getElementById('pwd').value;

    localStorage.setItem('user', login)
    var email_localStorage = localStorage.getItem('email')
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
    width: 355px;
    border-radius: 5px;
    overflow: hidden;
    /* background-color: red;  */
    text-align: center;
}



body{
 
    background-image:linear-gradient(rgba(119, 35, 255, 0),rgba(119, 35, 255, 0.164)),
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



form{
    color: white;
}

.logo{
    height: 100px;
    padding-left:22%;
    border-radius: 12px ;
    
}

.form-inline{
    /* display: flex; */
    /* flex-flow: row wrap; */
    align-items: center;
    border-radius: 10px;
    margin-top: 80px;
    
}

.form-inline label {
    margin:  5px 10px 5px 0;
    
}

.form-inline input{
    vertical-align: middle;
    margin: 5px 10px 5px 0;
    padding: 10px;
    width: 350px;
    background-color: rgba(255, 255, 255, 0.603);
    text-align: center;
    border-radius: 10px;
    
}

.form-inline button {
    padding: 10px 20px;
    background-color: slateblue;
    border: 1px solid #ddd;
    color: white;
    cursor: pointer;
    border-radius: 10px;
}

.form-inline button:hover{
    
    background-color: rgb(45, 95, 160);
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