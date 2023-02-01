<template>
  <div class="reservas__quartos">
    <div class="reserva__quartos__container">
      <h2 class="reserva__titulo">Selecione o quarto</h2>
    </div>
    <div class="reserva__quartos__container">
      <div class="quarto__container">
        <div class="quarto__imagem">
          <img src="@/assets/img/premier-room.webp" alt="Premier Room" />
          <ul class="no-mobile">
            <li>Permitido pets</li>
            <li>WiFi Free</li>
            <li>Ar condicionado</li>
          </ul>
        </div>
        <div class="quarto__especificacoes">
          <div class="quarto__especificacoes__info">
            <h3>Premier Room</h3>
            <p class="bold">Sofá | Escrivaninha | 30m²</p>
            <p>
              Estes quartos aconchegantes oferecem conforto com algumas
              facilidades tecnológicas.
            </p>
            <ul>
              <li>Janelas anti-ruído</li>
              <li>Controle por voz</li>
            </ul>
          </div>
          <div class="quarto__especificacoes__selecao">
            <p class="bold">Diária: R$ 950.00/pessoa</p>
            <p class="info-adicional">
              Para crianças, os valores de diária serão cobrados pela metade.
            </p>
            <button class="btn-reservar quarto-reservar">Reservar</button>
          </div>
        </div>
      </div>
      <div class="quarto__container">
        <div class="quarto__imagem">
          <img src="@/assets/img/deluxe-room.jpg" alt="Deluxe Room" />
          <ul class="no-mobile">
            <li>Permitido pets</li>
            <li>WiFi Free</li>
            <li>Ar condicionado</li>
          </ul>
        </div>
        <div class="quarto__especificacoes">
          <div class="quarto__especificacoes__info">
            <h3>Deluxe Room</h3>
            <p class="bold">Sofá | Escrivaninha | 50m²</p>
            <p>
              Estes quartos aconchegantes oferecem conforto com algumas
              facilidades tecnológicas.
            </p>
            <ul>
              <li>Janelas anti-ruído</li>
              <li>Controle por voz</li>
            </ul>
          </div>
          <div class="quarto__especificacoes__selecao">
            <p class="bold">Diária: R$ 1425.00/pessoa</p>
            <p class="info-adicional">
              Para crianças, os valores de diária serão cobrados pela metade.
            </p>
            <button class="btn-reservar quarto-reservar">Reservar</button>
          </div>
        </div>
      </div>
      <div class="quarto__container">
        <div class="quarto__imagem">
          <img src="../../assets/img/tex-premier-room.webp" alt="Tex Premier" />
          <ul class="no-mobile">
            <li>Permitido pets</li>
            <li>WiFi Free</li>
            <li>Ar condicionado</li>
          </ul>
        </div>
        <div class="quarto__especificacoes">
          <div class="quarto__especificacoes__info">
            <h3>T.EX Premier</h3>
            <p class="bold">Sofá | Duas camas | 75m²</p>
            <p>
              Estes quartos aconchegantes oferecem conforto com o melhor da
              tecnologia.
            </p>
            <ul>
              <li>Janelas anti-ruído</li>
              <li>Controle por voz</li>
            </ul>
          </div>
          <div class="quarto__especificacoes__selecao">
            <p class="bold">Diária: R$ 2230.00/pessoa</p>
            <p class="info-adicional">
              Para crianças, os valores de diária serão cobrados pela metade.
            </p>
            <button class="btn-reservar quarto-reservar">Reservar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservasQuartos",
};
</script>

<style scoped>

*{
    padding: 0;
    margin: 0;
}
.bold {
  font-weight: bold;
}
li {
  font-size: 0.7rem;
  line-height: 20px;
  list-style-type: none;
}
li::before {
  display: inline-block;
  content: "";
  height: 4px;
  width: 4px;
  background-color: #14274a;
  margin-right: 10px;
}

p, li, h3{
    text-align: left;
}
.info-adicional {
  font-style: italic;
  font-size: 0.8rem;
}
.reserva__titulo {
  font-family: "Mont-bold", Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 2rem 0;
}

.quarto__container {
  padding: 1rem;
  box-shadow: 1px 1px 5px 3px #eaecec;
  margin-bottom: 25px;
}

.quarto__imagem {
  width: 100%;
}
.quarto__imagem img {
  width: 100%;
}

.quarto__especificacoes {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.quarto__especificacoes__info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.quarto__especificacoes__selecao {
  padding: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.btn-reservar {
  display: block;
  width: fit-content;
  align-self: flex-end;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  border: none;
  border-radius: 2px;
  background-color: #0dadbd;
  color: white;
  font-weight: bold;
}
.btn-reservar:hover {
  cursor: pointer;
}
.no-mobile {
  display: none;
}

@media (min-width: 768px) {
  .quarto__container {
    display: flex;
    flex-direction: row;
  }
  .quarto__imagem {
    max-width: 300px;
  }
  .quarto__imagem img {
    width: 100%;
  }
  .no-mobile {
    display: block;
  }
}
</style>
