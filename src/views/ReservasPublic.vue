<template>
  <UnifiedHeader />
  <div v-if="modalHospedes" v-on:click="clickFora" class="modal-container">
    <div class="modal-hospedes">
      <div class="modal-header flex-row">
        <h4>Hóspedes</h4>
        <button @click="fecharModal" class="modal-fechar">X</button>
      </div>
      <div class="modal-body flex-col">
        <div class="modal-adulto flex-row">
          <p>Adultos</p>
          <div class="flex-row">
            <button @click="btnRemAdulto" class="retirar btn-rem-adulto">-</button>
            <p class="entrada-adulto">{{ entradaAdulto }}</p>
            <button @click="btnAddAdulto" class="adicionar btn-add-adulto">+</button>
          </div>
        </div>
        <div class="modal-crianca flex-row">
          <p>Crianças</p>
          <div class="flex-row">
            <button @click="btnRemCrianca" class="retirar btn-rem-crianca">-</button>
            <p class="entrada-crianca">{{ entradaCrianca }}</p>
            <button @click="btnAddCrianca" class="adicionar btn-add-crianca">+</button>
          </div>
        </div>
      </div>
      <div class="modal-confirma">
        <button @click="fecharModal" class="btn-reservar btn-modal-ok modal-ok">OK</button>
      </div>
    </div>
  </div>
  <div v-if="modalAdicionais" v-on:click="clickFora" class="modal-container">
    <div class="modal-adicionais">
      <div class="modal-header flex-row">
        <h4>Adicionais</h4>
        <button @click="fecharModal" class="modal-fechar">X</button>
      </div>
      <div class="modal-body flex-col">
        <div class="flex-row">
          <input
            v-bind:checked="objreservas.default.adicionais.academia.select()"
            @change="alteraAdicionais"
            type="checkbox"
            id="academia"
            name="academia"/>
          <div class="flex-row">
            <p class="bold left">Academia</p>
            <p>R$ 30.00/dia</p>
          </div>
        </div>
        <div class="flex-row">
          <input
            v-bind:checked="objreservas.default.adicionais.cofre.select()"
            @change="alteraAdicionais"
            type="checkbox"
            id="cofre"
            name="cofre"/>
          <div class="flex-row">
            <p class="bold left">Cofre</p>
            <p>R$ 150.00/dia</p>
          </div>
        </div>
        <div class="flex-row">
          <input
            v-bind:checked="objreservas.default.adicionais.despertador.select()"
            @change="alteraAdicionais"
            type="checkbox"
            id="despertador"
            name="despertador"/>

          <div class="flex-row">
            <p class="bold left">Despertador</p>
            <p>R$ 20.00/dia</p>
          </div>
        </div>
        <div class="flex-row">
          <input
            v-bind:checked="
              objreservas.default.adicionais.estacionamento.select()"
            @change="alteraAdicionais"
            type="checkbox"
            id="estacionamento"
            name="estacionamento"/>
          <div class="flex-row">
            <p class="bold left">Estacionamento</p>
            <p>R$ 25.00/dia</p>
          </div>
        </div>
        <div class="flex-col">
          <div class="flex-row">
            <p class="bold">Transfer</p>
            <p class="info-adicional left">Tranporte aeroporto-hotel</p>
          </div>
          <div class="flex-row">
            <input
              v-bind:checked="
                objreservas.default.adicionais.transferChegada.select()"
              @change="alteraAdicionais"
              type="checkbox"
              id="transferChegada"
              name="transferChegada"/>
            <div class="flex-row">
              <p class="left">Chegada</p>
              <p>R$ 75.00</p>
            </div>
          </div>
          <div class="flex-row">
            <input
              v-bind:checked="
                objreservas.default.adicionais.transferPartida.select()"
              @change="alteraAdicionais"
              type="checkbox"
              id="transferPartida"
              name="transferPartida"/>
            <div class="flex-row">
              <p class="left">Partida</p>
              <p>R$ 75.00</p>
            </div>
          </div>
        </div>
      </div>

      <div class="modal-confirma">
        <button @click="fecharModal" class="btn-reservar btn-modal-ok modal-ok">OK</button>
      </div>
    </div>
  </div>
  <div v-if="modalResumo" v-on:click="clickFora" class="modal-container">
    <div class="modal-resumo">
      <div class="modal-header">
        <h4>Resumo da reserva</h4>
        <button @click="fecharModal" class="modal-fechar">X</button>
      </div>
      <div class="modal-body flex-col">
        <div class="resumo__conteudo flex-col">
          <div class="resumo__conteudo__item flex-row">
            <p class="bold">Check-in</p>
            <p class="info checkin-showup">{{ checkinShowup }}</p>
          </div>
          <div class="resumo__conteudo__item flex-row">
            <p class="bold">Check-out</p>
            <p class="info checkout-showup">{{ checkoutShowup }}</p>
          </div>
        </div>
        <div class="resumo_conteudo_acomodacoes flex-col">
          <p class="bold left">Quarto</p>
          <div class="resumo_conteudo_acomodacoes__wrap flex-row">
            <div class="resumo_conteudo_acomodacoes__itens">
              <ul>
                <li class="quarto-selecionado">{{ displayQuarto }}</li>
                <li>Noites</li>
                <li>Adultos</li>
                <li>Crianças</li>
              </ul>
            </div>
            <div class="resumo_conteudo_acomodacoes__valores">
              <ul class="right">
                <li class="quarto-selecionado-valor">
                  {{ displayValorQuarto }}
                </li>
                <li class="display-noites">{{ noites }}</li>
                <li class="entrada-adulto">{{ entradaAdulto }}</li>
                <li class="entrada-crianca">{{ entradaCrianca }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resumo_conteudo_adicionais flex-col">
          <p class="bold left">Adicionais</p>
          <div class="resumo_conteudo_adicionais__wrap flex-row">
            <div class="resumo_conteudo_adicionais__itens">
              <ul>
                <li>Academia</li>
                <li>Cofre</li>
                <li>Despertador</li>
                <li>Estacionamento</li>
                <li>Tranfer - Chegada</li>
                <li>Transfer - Partida</li>
              </ul>
            </div>
            <div class="resumo_conteudo_adicionais__valores">
              <ul class="right">
                <li class="resumo-adicionais academia">R$0.00</li>
                <li class="resumo-adicionais cofre">R$0.00</li>
                <li class="resumo-adicionais despertador">R$0.00</li>
                <li class="resumo-adicionais estacionamento">R$0.00</li>
                <li class="resumo-adicionais transferChegada">R$0.00</li>
                <li class="resumo-adicionais transferPartida">R$0.00</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resumo__total flex-row">
          <p class="bold">TOTAL:</p>
          <p class="bold display-total">{{ total }}</p>
        </div>
        <div class="modal-btn flex-row">
          <button class="modal-btn-limpar limpar-dados" @click="limparDados">Limpar</button>
          <button @click="ativarModalFinal" class="modal-btn-continuar">Finalizar Reserva</button>
        </div>
      </div>
      <div class="modal-confirma">
        <button @click="fecharModal" class="btn-reservar btn-modal-ok modal-ok">OK</button>
      </div>
    </div>
  </div>

  <!-- Código referente a reserva: entradas, quartos e resumo da reserva  -->
  <div class="reservas__container">
    <!--O main agrupa toda parte de escolha: entradas e quartos-->
    <main class="reservas__container__main">
      <!--Código referente as entradas-->
      <div class="reservas__entradas">
        <div
          v-on:click="ativarModalHospedes"
          class="reservas__entradas__itens modal-abrir">
          <p><font-awesome-icon icon="user" /></p>
          <div>
            <p class="bold">Hóspedes</p>
            <p class="hospedes-resumo">{{ hospedesResumo }}</p>
          </div>
          <p><font-awesome-icon icon="sort-desc"/></p>
        </div>
        <div
          v-on:click="ativarCheckin"
          class="reservas__entradas__itens entrada-date">
          <p><font-awesome-icon icon="calendar"/></p>
          <div>
            <p class="bold">Check-in</p>
            <p class="checkin-showup">{{ checkinShowup }}</p>
          </div>
          <p><font-awesome-icon icon="sort-desc" /></p>
          <input
            @input="alteraCheckin"
            type="date"
            class="dropdown"
            name=""
            id="entrada-checkin"/>
        </div>

        <div
          v-on:click="ativarCheckout"
          class="reservas__entradas__itens entrada-date">
          <p><font-awesome-icon icon="calendar" /></p>
          <div>
            <p class="bold">Check-out</p>
            <p class="checkout-showup">{{ checkoutShowup }}</p>
          </div>
          <p><font-awesome-icon icon="sort-desc"/></p>
          <input
            @input="alteraCheckout"
            type="date"
            class="dropdown"
            name=""
            id="entrada-checkout"
          />
        </div>
        <div
          v-on:click="ativarModalAdicionais"
          class="reservas__entradas__adicionais modal-abrir">
          <p></p>
          <div>
            <p class="bold">Adicionais</p>
            <p class="resumo-adicionais-short">0 itens</p>
          </div>
          <p><font-awesome-icon icon="sort-desc" /></p>
        </div>
        <div
          v-on:click="ativarModalResumo"
          class="reservas__entradas__resumo modal-abrir no-desktop">
          <p></p>
          <div>
            <p class="bold">Total</p>
            <p class="display-total">{{ total }}</p>
          </div>
          <p><font-awesome-icon icon="sort-desc" /></p>
        </div>
      </div>
      <div class="reservas__quartos">
        <div class="reserva__quartos__container">
          <h2 class="reserva__titulo">Selecione o quarto</h2>
        </div>
        <div class="reserva__quartos__container">
          <div class="quarto__container">
            <div class="quarto__imagem">
              <img
                v-bind:src="
                  require('@/assets/img/' + objreservas.default.quartos[1].src)"
                alt="Premier Room"/>
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
                  Para crianças, os valores de diária serão cobrados pela
                  metade.
                </p>
                <button
                  class="btn-reservar quarto-reservar"
                  value="1"
                  @click="reservarQuartos">Reservar</button>
              </div>
            </div>
          </div>
          <div class="quarto__container">
            <div class="quarto__imagem">
              <img
                v-bind:src="
                  require('@/assets/img/' + objreservas.default.quartos[2].src)"
                alt="Deluxe Room"/>
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
                  Para crianças, os valores de diária serão cobrados pela
                  metade.
                </p>
                <button
                  class="btn-reservar quarto-reservar"
                  value="2"
                  @click="reservarQuartos">Reservar</button>
              </div>
            </div>
          </div>
          <div class="quarto__container">
            <div class="quarto__imagem">
              <img
                v-bind:src="require('@/assets/img/' + objreservas.default.quartos[3].src)"
                alt="Tex Premier"/>
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
                  Para crianças, os valores de diária serão cobrados pela
                  metade.
                </p>
                <button
                  class="btn-reservar quarto-reservar"
                  value="3"
                  @click="reservarQuartos">
                  Reservar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <aside class="reservas__container__resumo">
      <div class="reservas__container__resumo__holder">
        <div class="resumo__header">
          <h3 class="resumo__titulo">Resumo da reserva</h3>
          <button class="no-desktop"></button>
        </div>
        <div class="resumo__conteudo">
          <div class="resumo__conteudo__item">
            <p class="bold">Check-in</p>
            <p class="info checkin-showup">{{ checkinShowup }}</p>
          </div>
          <div class="resumo__conteudo__item">
            <p class="bold">Check-out</p>
            <p class="info checkout-showup">{{ checkoutShowup }}</p>
          </div>
          <div class="resumo__conteudo__item">
            <p class="bold">Hospedes</p>
            <p class="info hospedes-resumo">{{ hospedesResumo }}</p>
          </div>
        </div>
        <div class="resumo_conteudo_acomodacoes">
          <p class="bold">Quarto</p>
          <div class="resumo_conteudo_acomodacoes__wrap">
            <div class="resumo_conteudo_acomodacoes__itens">
              <ul>
                <li class="quarto-selecionado">{{ displayQuarto }}</li>
                <li>Noites</li>
                <li>Adultos</li>
                <li>Crianças</li>
              </ul>
            </div>
            <div class="resumo_conteudo_acomodacoes__valores">
              <ul>
                <li class="quarto-selecionado-valor">
                  {{ displayValorQuarto }}
                </li>
                <li class="display-noites">{{ noites }}</li>
                <li class="entrada-adulto">{{ entradaAdulto }}</li>
                <li class="entrada-crianca">{{ entradaCrianca }}</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resumo_conteudo_adicionais">
          <p class="bold">Adicionais</p>
          <div class="resumo_conteudo_adicionais__wrap">
            <div class="resumo_conteudo_adicionais__itens">
              <ul>
                <li>Academia</li>
                <li>Cofre</li>
                <li>Despertador</li>
                <li>Estacionamento</li>
                <li>Tranfer - Chegada</li>
                <li>Transfer - Partida</li>
              </ul>
            </div>
            <div class="resumo_conteudo_adicionais__valores">
              <ul>
                <li class="resumo-adicionais academia">R$0.00</li>
                <li class="resumo-adicionais cofre">R$0.00</li>
                <li class="resumo-adicionais despertador">R$0.00</li>
                <li class="resumo-adicionais estacionamento">R$0.00</li>
                <li class="resumo-adicionais transferChegada">R$0.00</li>
                <li class="resumo-adicionais transferPartida">R$0.00</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resumo__total">
          <p class="bold">TOTAL:</p>
          <p class="bold display-total">{{ total }}</p>
        </div>
        <div class="btn__aside">
          <button class="btn__aside__limpar limpar-dados" @click="limparDados">
            Limpar
          </button>
          <button class="btn__aside__continuar" id="exibir-conteudo" @click="exibirPagamento" >Finalizar Reserva</button>
        </div>
      </div>
    </aside>
  </div>
  <div  id="conteudo" :class="{ pagamento_hidden: !mostrarPagamento, pagamento: mostrarPagamento }">
   <FormularioDePagamento />
  </div>
  
  <UnifiedFooter />
</template>

<script>
import UnifiedHeader from "@/components/UnifiedHeader.vue";
import UnifiedFooter from "@/components/UnifiedFooter.vue";
import FormularioDePagamento from "@/components/FormularioDePagamento.vue";
export default {
  name: "ReservasPublic",
  components: {
    UnifiedHeader,
    UnifiedFooter,
    FormularioDePagamento,
  },
  data() {
    return {
      modalHospedes: false,
      modalAdicionais: false,
      modalResumo: false,
      objreservas: {},
      total: "",
      hospedesResumo: "",
      entradaAdulto: 2,
      entradaCrianca: 0,
      checkinShowup: "",
      checkoutShowup: "",
      noites: 0,
      displayQuarto: "",
      displayValorQuarto: "",
      mostrarPagamento: false,
    };
  },
  
  methods: {
   
  exibirPagamento() {
      this.mostrarPagamento = !this.mostrarPagamento;
    },
    callReservas() {
      this.objreservas = require("@/assets/reservas.js");
    },
    ativarModalHospedes() {
      this.modalHospedes = !this.modalHospedes;
    },
    ativarModalAdicionais() {
      this.modalAdicionais = !this.modalAdicionais;
    },
    ativarModalResumo() {
      this.modalResumo = !this.modalResumo;
    },
    fecharModal() {
      (this.modalHospedes = false),
        (this.modalAdicionais = false),
        (this.modalResumo = false);
    },
    clickFora(event) {
      if (event.target.classList.contains("modal-container")) {
        this.fecharModal();
      }
    },
    ativarCheckin() {
      document.querySelector("#entrada-checkin").showPicker();
    },
    ativarCheckout() {
      document.querySelector("#entrada-checkout").showPicker();
    },
    ajustaData(infoData) {
      const dias = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

      let dia = dias[infoData.getDay()];
      let data = infoData.getDate();
      data < 10 ? (data = "0" + data) : null;
      let mes = infoData.getMonth() + 1;
      mes < 10 ? (mes = "0" + mes) : null;
      let ano = infoData.getFullYear().toString().slice(-2);

      return `${dia}, ${data}/${mes}/${ano}`;
    },
    valorTotal() {
      let parcial1 = 0;
      let parcial2 = 0;
      let index = this.objreservas.default.quartos.selecionado();
      parcial1 =
        (this.objreservas.default.hospedes.adultos() +
          this.objreservas.default.hospedes.criancas() / 2) *
        this.objreservas.default.datas.noites() *
        this.objreservas.default.quartos[index].diaria;
      for (let key of Object.entries(this.objreservas.default.adicionais)) {
        parcial2 = parcial2 + key[1].parcial();
      }
      return parcial1 + parcial2;
    },
    altDisplayTotal() {
      this.total = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(this.valorTotal());
      return this.total;
    },
    alteraDisplayHospedes() {
      this.hospedesResumo = `${this.objreservas.default.hospedes.adultos()} adultos, ${this.objreservas.default.hospedes.criancas()} crianças`;
      return this.hospedesResumo;
    },
    alteraDisplayAdultos() {
      this.entradaAdulto = this.objreservas.default.hospedes.adultos();
      return this.entradaAdulto;
    },
    alteraDisplayCriancas() {
      this.entradaCrianca = this.objreservas.default.hospedes.criancas();
      return this.entradaCrianca;
    },
    alteraDisplayCheckin() {
      this.checkinShowup = this.ajustaData(
        this.objreservas.default.datas.checkin()
      );
      return this.checkinShowup;
    },
    alteraDisplayCheckout() {
      this.checkoutShowup = this.ajustaData(
        this.objreservas.default.datas.checkout()
      );
      return this.checkoutShowup;
    },
    alteraDisplayNoites() {
      this.noites = this.objreservas.default.datas.noites();
      return this.noites;
    },
    alteraDisplayAdicional() {
      let resumoAdicionais = document.querySelectorAll(".resumo-adicionais");
      let resumoAdicionaisShort = document.querySelector(
        ".resumo-adicionais-short"
      );
      let r = 0;
      resumoAdicionais.forEach((element) => {
        for (let keys of Object.entries(this.objreservas.default.adicionais)) {
          if (element.classList.contains(keys[0]) && keys[1].select()) {
            r++;
            element.innerHTML = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(keys[1].parcial());
          }
          if (element.classList.contains(keys[0])) {
            element.innerHTML = new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(keys[1].parcial());
          }
        }
      });
      resumoAdicionaisShort.innerHTML = `${r} itens`;
    },
    alteraDisplayInputAdicional() {
      let inputs = document.querySelectorAll('input[type="checkbox"]');
      inputs.forEach((element) => {
        for (let key of Object.entries(this.objreservas.default.adicionais)) {
          if (element.id == key[0]) {
            key[1].select()
              ? (element.checked = key[1].select())
              : (element.checked = false);
          }
        }
      });
    },
    alteraDisplayQuarto() {
      let i = this.objreservas.default.quartos.selecionado();
      this.displayQuarto = this.objreservas.default.quartos[i].nome;
      return this.displayQuarto;
    },

    alteraDisplayValorQuarto() {
      let i = this.objreservas.default.quartos.selecionado();
      this.displayValorQuarto = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(this.objreservas.default.quartos[i].diaria);
      return this.displayValorQuarto;
    },
    altDisplay() {
      this.altDisplayTotal();
      this.alteraDisplayHospedes();
      this.alteraDisplayAdultos();
      this.alteraDisplayCriancas();
      this.alteraDisplayCheckin();
      this.alteraDisplayCheckout();
      this.alteraDisplayNoites();
      this.alteraDisplayAdicional();
      this.alteraDisplayInputAdicional();
      this.alteraDisplayQuarto();
      this.alteraDisplayValorQuarto();
    },
    alertaLimite() {
      window.alert("Máximo de hóspedes é 4 (Adultos e Crianças)");
      return false;
    },
    limiteHospedes() {
      return this.objreservas.default.hospedes.adultos() +
        this.objreservas.default.hospedes.criancas() <
        4
        ? true
        : this.alertaLimite();
    },
    btnRemAdulto() {
      if (this.objreservas.default.hospedes.adultos() > 1) {
        this.objreservas.default.lsSet(
          "adultos",
          this.objreservas.default.hospedes.adultos() - 1
        );
        this.altDisplay();
      }
    },
    btnAddAdulto() {
      if (this.limiteHospedes()) {
        this.objreservas.default.lsSet(
          "adultos",
          this.objreservas.default.hospedes.adultos() + 1
        );
        this.altDisplay();
      }
    },
    btnRemCrianca() {
      if (this.objreservas.default.hospedes.criancas() > 0) {
        this.objreservas.default.lsSet(
          "criancas",
          this.objreservas.default.hospedes.criancas() - 1
        );
        this.altDisplay();
      }
    },

    btnAddCrianca() {
      if (this.limiteHospedes()) {
        this.objreservas.default.lsSet(
          "criancas",
          this.objreservas.default.hospedes.criancas() + 1
        );
        this.altDisplay();
      }
    },
    alteraCheckin() {
      let mod = new Date(document.querySelector("#entrada-checkin").value); // Está retornando um dia a menos do selecionado
      mod = new Date(mod.valueOf() + 86400000);
      this.objreservas.default.lsSet("checkin", mod);
      this.altDisplay();
    },

    alteraCheckout() {
      let mod = new Date(document.querySelector("#entrada-checkout").value); // Está retornando um dia a menos do selecionado
      mod = new Date(mod.valueOf() + 86400000);
      this.objreservas.default.lsSet("checkout", mod);
      this.altDisplay();
    },
    alteraAdicionais(event) {
      for (let key of Object.entries(this.objreservas.default.adicionais)) {
        if (event.target.id == key[0]) {
          this.objreservas.default.lsSet(key[0], event.target.checked);
        }
      }
      this.altDisplay();
    },
    reservarQuartos(event) {
      this.objreservas.default.lsSet("quarto", event.target.value);
      this.altDisplay();
    },
    limparDados() {
      localStorage.clear();
      this.altDisplay();
    },
  },
  
  created() {
    this.callReservas();
  },
  mounted() {
    this.altDisplay();
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: "Mont";
  src: url("../assets/fonts/Montserrat-Regular.otf");
}
@font-face {
  font-family: "Mont-bold";
  src: url("../assets/fonts/Montserrat-Bold.otf");
}
@font-face {
  font-family: "Garamond";
  src: url("../assets/fonts/AGaramondPro-Bold.otf");
}

li {
  list-style-type: none;
  line-height: 20px;
}

.reservas__container {
  font-family: "Mont", Arial, Helvetica, sans-serif;
  color: #14274a;
  padding: 0.3rem;
  margin: 4rem auto;
}
.reservas__container aside {
  display: none;
}
.reservas__container li {
  font-size: 0.7rem;
}
.reservas__container li::before {
  display: inline-block;
  content: "";
  height: 4px;
  width: 4px;
  background-color: #14274a;
  margin-right: 10px;
}

.bold {
  font-weight: bold;
}

.w100 {
  width: 100%;
}

.info-adicional {
  font-style: italic;
  font-size: 0.8rem;
}

.flex-row {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.flex-col {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.modal-container {
  font-family: "Mont", Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-hospedes,
.modal-adicionais,
.modal-resumo {
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  padding: 2rem;
  position: relative;
  min-width: 200px;
  max-width: 95%;
  border-radius: 4px;
}

.modal-adicionais p,
.modal-resumo p {
  font-size: 0.8rem;
}
.modal-adicionais li,
.modal-resumo li {
  font-size: 0.8rem;
}

.modal-resumo p,
.modal-resumo li {
  font-size: 0.8rem;
}

.modal-header,
.modal-adulto,
.modal-crianca {
  justify-content: space-between;
}

.modal-header {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

.modal-header button {
  background-color: white;
  cursor: pointer;
  border: 0px;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.2rem;
}

.modal-body {
  align-items: center;
  gap: 1.5rem;
}

.modal-body p:first-child {
  min-width: 80px;
}

.modal-body div {
  justify-content: space-between;
  min-width: 90px;
  gap: 1rem;
}

.modal-body button {
  background-color: #0dadbd;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  height: 25px;
  width: 25px;
  border: 0px;
  border-radius: 2px;
  cursor: pointer;
}
.modal-body button.modal-btn-limpar {
  width: fit-content;
  height: fit-content;
  font-weight: normal;
  font-size: 0.9rem;
  color: #000;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
}
.modal-body button.modal-btn-continuar {
  width: fit-content;
  height: fit-content;
  font-size: 0.9rem;
  background-color: #670bff;
  color: white;
  font-weight: bold;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-size: 1rem;
}

.modal-ativo {
  display: flex;
}

.reservas__entradas {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.reservas__entradas__itens,
.reservas__entradas__resumo,
.reservas__entradas__adicionais {
  cursor: pointer;
  padding: 0.3rem;
  border: 1px solid #2b2b2b;
  border-radius: 2px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}
.reservas__entradas__itens div,
.reservas__entradas__resumo div,
.reservas__entradas__adicionais div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
.reservas__entradas__itens input.dropdown {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
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

.left {
  text-align: left;
  justify-self: left;
  align-self: flex-start;
}

.right {
  text-align: right;
}
.pagamento_hidden {
  display: none;
}
.pagamento {
  position: fixed;
  top: 15%;
  bottom: 25%;
  left: 35%;
  right: 35%;
}

@media (min-width: 768px) {
  .reservas__entradas {
    flex-direction: row;
    margin-bottom: 1rem;
    justify-content: space-around;
  }
  .reservas__entradas__itens,
  .reservas__entradas__resumo,
  .reservas__entradas__adicionais {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .reservas__entradas__itens div,
  .reservas__entradas__resumo div,
  .reservas__entradas__adicionais div {
    flex-direction: column;
    gap: 2px;
  }
  .modal-adicionais p {
    font-size: 0.9rem;
  }
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
@media (min-width: 1025px) {
  .no-desktop {
    display: none;
  }
  .modal-adicionais p {
    font-size: 1rem;
  }
  .reservas__container {
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
  .reservas__container aside {
    display: block;
  }
  .reservas__container aside .reservas__container__resumo__holder {
    width: 300px;
    background-color: #eaecec;
    padding: 1rem;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .reservas__container .resumo__header,
  .reservas__container .resumo__total {
    padding: 0.5rem 0;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
  .resumo__conteudo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .resumo_conteudo_adicionais,
  .resumo_conteudo_acomodacoes {
    display: flex;
    flex-direction: column;
  }
  .resumo_conteudo_acomodacoes__valores,
  .resumo_conteudo_adicionais__valores {
    text-align: right;
  }
  .resumo__conteudo__item,
  .resumo__total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .resumo_conteudo_adicionais__wrap,
  .resumo_conteudo_acomodacoes__wrap {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .resumo_conteudo_adicionais li::before,
  .resumo_conteudo_acomodacoes li::before {
    display: none;
  }
  .btn__aside {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .btn__aside__limpar {
    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;
  }
  .btn__aside__continuar {
    background-color: #670bff;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    font-size: 1rem;
  }
  .no-mobile {
    display: block;
  }

}

/*# sourceMappingURL=reservas-public.css.map */
</style>