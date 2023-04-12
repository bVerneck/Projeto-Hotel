<template>
  <footer>
    <div class="company-footer">
      <img src="@/assets/img/tex_logo_branco.png" />
      <h2>HOTÉIS</h2>
      <span>
        <p>Av. Atlântica, 1284
         <br />(11) 95423-6698
         <br />contato@texhotels.com
        </p>
      </span>
    </div>

    <div class="footer-box">
      <ul>
        <li><a href="pages/sobre.html">Avaliações</a></li>
        <li><a href="#">Contatos</a></li>
        <li><a href="#">Termos e Condições</a></li>
        <li><a href="https://www.google.com.br/maps">Localização</a></li>
        <li><a href="#nossos-servicos">Conheça nossos serviços</a></li>
      </ul>
    </div>
    <div class="social-media">
      <h2 class="con">Conecte-se conosco</h2>
      <ul>
        <li>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
          <span>Facebook</span>
        </li>
        <li>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
          <span>Instagram</span>
        </li>
        <li>
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
          <span>Twitter</span>
        </li>
      </ul>
    </div>
    <div class="newsletter">
      <h2>Assine nosso boletim de notícias:</h2>
      <form action="post">
        <input type="email" name="email" placeholder="Endereço de e-mail" />
        <button type="submit">OK</button>
      </form>
    </div>
  </footer>
</template>

<script>
export default {
  name: "UnifiedFooter",
};
</script>

<style scoped>
* {
  margin: 0;
}
footer {
  background-color: #0dadbd;
  font-family: "Mont";
  font-weight: 400;
  color: #ffffff;
  display: flex;
  justify-content: space-around;
  padding: 1% 10% 1% 10%;
}
.company-footer h2 {
  margin: 0 0 25px 0;
}
.company-footer {
  width: 80%;
  padding: 25px;
}
.footer-box {
  font-family: "AGaramondPro-Regular";
  width: 80%;
  padding: 0px 0px 0px 5%;
  display: flex;
}
a {
  color: #ffffff;
  text-decoration: none;
}
.social-media {
  font-family: "Montserrat";
  width: 80%;
  padding: 0px 0px 0px 5%;
}
.social-media ul {
  display: block;
  float: left;
}
.social-media ul li {
  display: flex;
  justify-content: space-around;
}
span {
  padding: 0 15px;
}
ul {
  padding: 0;
}
li {
  list-style: none;
  font-weight: bold, 400;
  font-size: 16px;
  line-height: 20px;
  border: 0, 5px solid #fff;
}
.footer-box li {
  padding: 5%;
}
.social-media li {
  padding: 10px;
}
h2 {
  font-weight: 400;
}
.newsletter {
  width: 50%;
  padding: 1%;
  float: left;
  font-family: "Montserrat";
}

.newsletter form{
    display: flex;
    flex-direction: row;
    border: 2px solid rgb(105, 11, 255);
    border-radius: 4px;
}
.newsletter form button{
    color: #fff;
    background-color:  rgb(105, 11, 255);
    border: none;
    padding: 0.3rem 0.6rem;
}

@media screen and (max-width: 1000px) and (orientation: portrait) {
  .newsletter {
    display: none;
  }
  .footer-box {
    display: none;
  }
  .social-media ul {
    width: 120px;
    display: flex;
    float: none;
  }
  .social-media {
    padding: 0px 0px 0px 60%;
    margin-top: -2%;
    margin-bottom: 21px;
  }
  span {
    display: none;
  }
  .con {
    display: none;
  }
  footer {
    padding: 0px;
    flex-direction: column;
  }
  .footer-box {
    width: 100%;
    margin-left: -15px;
  }
  .footer-box ul {
    display: flex;
    font-family: "AGaramondPro-Regular";
    width: 37%;
    height: 9%;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: flex-end;
  }
  .company-footer {
    padding-top: 10px;
    padding-left: 5px;
    width: 25%;
    margin-bottom: -55px;
  }
  .company-footer h2 {
    margin: 0 0 0px 0;
  }
  .company-footer p {
    display: none;
  }
  .social-media h2 {
    display: none;
  }
  .texto h1 {
    font-size: 8rem;
  }
  .texto .texto-hotel {
    font-size: 3rem;
  }
  footer .img {
    display: flex;
  }
}
@media screen and (max-width: 1000px) and (orientation: landscape) {
  .newsletter {
    display: none;
  }
  .social-media ul {
    width: 120px;
    display: flex;
    float: none;
  }
  .social-media {
    padding: 0px 0px 0px 72%;
    margin-top: -18%;
    margin-bottom: 115px;
  }
  .social-media h2 {
    display: none;
  }
  span {
    display: none;
  }
  .con {
    display: none;
  }
  footer {
    padding: 0px;
    flex-direction: column;
  }
  .footer-box {
    width: 106%;
    margin-left: -82px;
  }
  .footer-box li {
    padding: 0%;
  }
  .footer-box ul {
    display: flex;
    font-family: "AGaramondPro-Regular";
    width: 100%;
    height: 9%;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    align-items: flex-end;
    padding: 22px 0px 0px 8%;
  }
  .company-footer {
    padding-top: 15px;
    width: 25%;
    margin-bottom: -45px;
  }
  .company-footer h2,
  p {
    margin-bottom: 15px;
  }
  .texto h1 {
    font-size: 8rem;
  }
  .texto .texto-hotel {
    font-size: 3rem;
  }
  footer .img {
    display: flex;
  }
}
</style>
