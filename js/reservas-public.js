const reserva = {
  hospedes: {
    adultos: 2,
    criancas: 0,
    resumo() {
      return `${this.adultos} adultos, ${this.criancas} crianças`;
    },
  },
  checkin: {
    today() {
      return new Date();
    },
    days2() {
      return new Date(this.today().valueOf() + 2 * 86400000);
    },
    valor(valorData) {
      return ajustaData(valorData);
    },
    escolhido: 0,
  },
  checkout: {
    today() {
      return new Date();
    },

    days4() {
      return new Date(this.today().valueOf() + 4 * 86400000);
    },
    valor(valorData) {
      return ajustaData(valorData);
    },
    escolhido: 0,
  },
  noites() {
    return parseInt(
      (this.checkout.escolhido - this.checkin.escolhido) / 86400000
    );
  },
  quarto: {
    nomes: ["Premier Room", "Deluxe Room", "T.EX Premier"],
    valores: [950, 1425, 2230],
    selecionado: "",
    valor: 0,
    // quarto0: { nome: "Premier Room", valor: 950 },
    // quarto1: { nome: "Deluxe Room", valor: 1425 },
    // quarto2: { nome: "T.EX Premier", valor: 2230 },
  },
  adicionais: {
    academia: { select: false, valor: 30 },
    cofre: { select: false, valor: 150 },
    despertador: { select: false, valor: 20 },
    estacionamento: { select: false, valor: 25 },
    transferChegada: { select: false, valor: 75 },
    transferPartida: { select: false, valor: 75 },
    valor() {
      let soma = 0;
      for (const key of Object.entries(this)) {
        if (!key[0]) {
          soma = soma + soma;
        }
      }
    },
  },
  total: 0,
};

const hospedesResumo = document.querySelectorAll(".hospedes-resumo");
function altHospedes() {
  hospedesResumo.forEach((element) => {
    element.innerHTML = reserva.hospedes.resumo();
  });
}

//Adicionando e removendo adultos-----------
let entradaAdulto = document.querySelectorAll(".entrada-adulto");
entradaAdulto.innerHTML = reserva.hospedes.adultos;
let btnRemAdulto = document.querySelector(".btn-rem-adulto");
let btnAddAdulto = document.querySelector(".btn-add-adulto");

btnRemAdulto.onclick = function () {
  if (reserva.hospedes.adultos > 1) {
    reserva.hospedes.adultos--;
    entradaAdulto.forEach((element) => {
      element.innerHTML = reserva.hospedes.adultos;
    });
  }
  altHospedes();
};

btnAddAdulto.onclick = function () {
  if (reserva.hospedes.adultos < 9) {
    reserva.hospedes.adultos++;
    entradaAdulto.forEach((element) => {
      element.innerHTML = reserva.hospedes.adultos;
    });
  }
  altHospedes();
};

//Adicionando e removendo crianças----------
let entradaCrianca = document.querySelectorAll(".entrada-crianca");
entradaCrianca.innerHTML = reserva.hospedes.criancas;
let btnRemCrianca = document.querySelector(".btn-rem-crianca");
let btnAddCrianca = document.querySelector(".btn-add-crianca");

btnRemCrianca.onclick = function () {
  if (reserva.hospedes.criancas > 0) {
    reserva.hospedes.criancas--;
    entradaCrianca.forEach((element) => {
      element.innerHTML = reserva.hospedes.criancas;
    });
  }
  altHospedes();
};

btnAddCrianca.onclick = function () {
  if (reserva.hospedes.criancas < 9) {
    reserva.hospedes.criancas++;
    entradaCrianca.forEach((element) => {
      element.innerHTML = reserva.hospedes.criancas;
    });
  }
  altHospedes();
};

//Apresentando noites de estadia----------
let noites = document.querySelectorAll(".display-noites");

function changeNoites() {
  noites.forEach((element) => {
    element.innerHTML = reserva.noites();
  });
}

//Inserindo data de Check-in----------
let entradaCheckin = document.querySelector("#entrada-checkin");
let checkinShowup = document.querySelectorAll(".checkin-showup");

function ModificarCheckin2(x) {
  reserva.checkin.escolhido = x;
  checkinShowup.forEach((element) => {
    element.innerHTML = reserva.checkin.valor(x);
    changeNoites();
  });
}

ModificarCheckin2(reserva.checkin.days2());

function modificarCheckin() {
  let mod = new Date(entradaCheckin.value); // Está retornando um dia a menos do selecionado
  mod = new Date(mod.valueOf() + 86400000);
  ModificarCheckin2(mod);
}

entradaCheckin.addEventListener("input", modificarCheckin);

//Inserindo data de Check-out----------
let entradaCheckout = document.querySelector("#entrada-checkout");
let checkoutShowup = document.querySelectorAll(".checkout-showup");

function ModificarCheckout2(x) {
  reserva.checkout.escolhido = x;
  checkoutShowup.forEach((element) => {
    element.innerHTML = reserva.checkout.valor(x);
    changeNoites();
  });
}

ModificarCheckout2(reserva.checkout.days4());

function modificarCheckout() {
  let mod = new Date(entradaCheckout.value); // Está retornando um dia a menos do selecionado
  mod = new Date(mod.valueOf() + 86400000);
  ModificarCheckout2(mod);
}

entradaCheckout.addEventListener("input", modificarCheckout);

//Seleção dos quartos----------
let btnReservarQuartos = document.querySelectorAll(".quarto-reservar");
let displayQuarto = document.querySelectorAll(".quarto-selecionado");
let displayValorQuarto = document.querySelectorAll(".quarto-selecionado-valor");

btnReservarQuartos.forEach((element, index) => {
  element.onclick = function () {
    displayQuarto.forEach((e) => {
      reserva.quarto.selecionado = reserva.quarto.nomes[index];
      e.innerHTML = reserva.quarto.selecionado;
    });
    displayValorQuarto.forEach((e) => {
      reserva.quarto.valor = reserva.quarto.valores[index];
      e.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(reserva.quarto.valor);
    });
  };
});

//

import ajustaData from "/js/modules/ajustaData-reservas-public.js";
import calendario from "/js/modules/calendario-reservas-public.js";
import modal from "/js/modules/modal-reservas-public.js";

modal();
calendario();
