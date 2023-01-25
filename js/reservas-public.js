function stringToBoolean(string) {
  if (string) {
    if (string == "false") {
      return false;
    }
    return true;
  }
}

function lsSet(item, valor) {
  localStorage.setItem(item, valor);
}

function lsGet(item) {
  let valor = localStorage.getItem(item);
  if (valor) {
    if (valor === "0" || parseInt(valor) / parseInt(valor) == 1) {
      return parseInt(valor);
    } else if (valor == "true" || valor == "false") {
      return stringToBoolean(valor);
    } else if (Date.parse(valor)) {
      return new Date(Date.parse(valor));
    } else {
      return valor;
    }
  } else {
    return null;
  }
}

const reserva = {
  hospedes: {
    adultos() {
      return lsGet("adultos") ? lsGet("adultos") : 2;
    },
    criancas() {
      return lsGet("criancas") ? lsGet("criancas") : 0;
    },
  },
  datas: {
    hoje() {
      return new Date();
    },
    checkinDefault() {
      return new Date(this.hoje().valueOf() + 2 * 86400000);
    },
    checkoutDefault() {
      return new Date(this.hoje().valueOf() + 4 * 86400000);
    },
    checkin() {
      return lsGet("checkin") ? lsGet("checkin") : this.checkinDefault();
    },
    checkout() {
      return lsGet("checkout") ? lsGet("checkout") : this.checkoutDefault();
    },
    noites() {
      return parseInt(
        (this.checkout().valueOf() - this.checkin().valueOf()) / 86400000
      );
    },
  },
  quartos: {
    0: { nome: "Escolha seu quarto", diaria: 0, src: "" },
    1: { nome: "Premier Room", diaria: 950, src: "../img/premier-room.webp" },
    2: {
      nome: "Deluxe Room",
      diaria: 1425,
      src: "../img/QUARTO DELUXE ROOM.jpg",
    },
    3: {
      nome: "T.Ex Premier",
      diaria: 2230,
      src: "../img/tex-premier-room.webp",
    },
    selecionado() {
      return lsGet("quarto") ? lsGet("quarto") : 0;
    },
  },
  adicionais: {
    academia: {
      select() {
        return lsGet("academia") ? lsGet("academia") : false;
      },
      valor: 30,
      parcial() {
        if (this.select()) {
          return (
            this.valor * reserva.hospedes.adultos() * reserva.datas.noites()
          );
        } else {
          return 0;
        }
      },
    },
    cofre: {
      select() {
        return lsGet("cofre") ? lsGet("cofre") : false;
      },
      valor: 150,
      parcial() {
        if (this.select()) {
          return this.valor * reserva.datas.noites();
        } else {
          return 0;
        }
      },
    },
    despertador: {
      select() {
        return lsGet("despertador") ? lsGet("despertador") : false;
      },
      valor: 20,
      parcial() {
        if (this.select()) {
          return this.valor * reserva.datas.noites();
        } else {
          return 0;
        }
      },
    },
    estacionamento: {
      select() {
        return lsGet("estacionamento") ? lsGet("estacionamento") : false;
      },
      valor: 25,
      parcial() {
        if (this.select()) {
          return this.valor * reserva.datas.noites();
        } else {
          return 0;
        }
      },
    },
    transferChegada: {
      select() {
        return lsGet("transferChegada") ? lsGet("transferChegada") : false;
      },
      valor: 75,
      parcial() {
        if (this.select()) {
          return this.valor;
        } else {
          return 0;
        }
      },
    },
    transferPartida: {
      select() {
        return lsGet("transferPartida") ? lsGet("transferPartida") : false;
      },
      valor: 75,
      parcial() {
        if (this.select()) {
          return this.valor;
        } else {
          return 0;
        }
      },
    },
  },
};



//Obter valor total----------
function valorTotal() {
  let parcial1 = 0;
  let parcial2 = 0;
  let index = reserva.quartos.selecionado();
  parcial1 =
    (reserva.hospedes.adultos() + reserva.hospedes.criancas() / 2) *
    reserva.datas.noites() *
    reserva.quartos[index].diaria;
  for (let key of Object.entries(reserva.adicionais)) {
    parcial2 = parcial2 + key[1].parcial();
  }
  return parcial1 + parcial2;
}

//Altera o display----------

function altDisplayTotal() {
  let displayTotal = document.querySelectorAll(".display-total");
  displayTotal.forEach((element) => {
    element.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valorTotal());
  });
}

function alteraDisplayHospedes() {
  let hospedesResumo = document.querySelectorAll(".hospedes-resumo");
  let entradaAdulto = document.querySelectorAll(".entrada-adulto");
  let entradaCrianca = document.querySelectorAll(".entrada-crianca");
  hospedesResumo.forEach((element) => {
    element.innerHTML = `${reserva.hospedes.adultos()} adultos, ${reserva.hospedes.criancas()} crianças`;
  });
  entradaAdulto.forEach((element) => {
    element.innerHTML = reserva.hospedes.adultos();
  });
  entradaCrianca.forEach((element) => {
    element.innerHTML = reserva.hospedes.criancas();
  });
}

function alteraDisplayData() {
  let checkinShowup = document.querySelectorAll(".checkin-showup");
  let checkoutShowup = document.querySelectorAll(".checkout-showup");
  let noites = document.querySelectorAll(".display-noites");
  checkinShowup.forEach((element) => {
    element.innerHTML = ajustaData(reserva.datas.checkin());
  });
  checkoutShowup.forEach((element) => {
    element.innerHTML = ajustaData(reserva.datas.checkout());
  });
  noites.forEach((element) => {
    element.innerHTML = reserva.datas.noites();
  });
}

function alteraDisplayAdicional() {
  let resumoAdicionais = document.querySelectorAll(".resumo-adicionais");
  let resumoAdicionaisShort = document.querySelector(
    ".resumo-adicionais-short"
  );
  let r = 0;
  resumoAdicionais.forEach((element) => {
    for (let keys of Object.entries(reserva.adicionais)) {
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
  resumoAdicionaisShort.innerHTML = `${r / 2} itens`;
}

function alteraDisplayInputAdicional() {
  let inputs = document.querySelectorAll('input[type="checkbox"]');
  inputs.forEach((element) => {
    for (let key of Object.entries(reserva.adicionais)) {
      if (element.id == key[0]) {
        key[1].select() ? (element.checked = key[1].select()) : element.checked = false;
      }
    }
  });
}

function alteraDisplayQuartos() {
  let displayQuarto = document.querySelectorAll(".quarto-selecionado");
  let displayValorQuarto = document.querySelectorAll(
    ".quarto-selecionado-valor"
  );
  let i = reserva.quartos.selecionado();
  displayQuarto.forEach((element) => {
    element.innerHTML = reserva.quartos[i].nome;
  });
  displayValorQuarto.forEach((element) => {
    element.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(reserva.quartos[i].diaria);
  });
}

//Alteração em todos os displays---------

function altDisplay() {
  altDisplayTotal();
  alteraDisplayHospedes();
  alteraDisplayData();
  alteraDisplayAdicional();
  alteraDisplayInputAdicional();
  alteraDisplayQuartos();
}

//Adicionando evento aos botões----------

//Hospedes
let btnRemAdulto = document.querySelector(".btn-rem-adulto");
let btnAddAdulto = document.querySelector(".btn-add-adulto");

function alertaLimite() {
  window.alert("Máximo de hóspedes é 4 (Adultos e Crianças)");
  return false;
}

function limiteHospedes() {
  return reserva.hospedes.adultos() + reserva.hospedes.criancas() < 4
    ? true
    : alertaLimite();
}

btnRemAdulto.onclick = function () {
  if (reserva.hospedes.adultos() > 1) {
    lsSet("adultos", reserva.hospedes.adultos() - 1);
    altDisplay();
  }
};

btnAddAdulto.onclick = function () {
  if (limiteHospedes()) {
    lsSet("adultos", reserva.hospedes.adultos() + 1);
    altDisplay();
  }
};

let btnRemCrianca = document.querySelector(".btn-rem-crianca");
let btnAddCrianca = document.querySelector(".btn-add-crianca");

btnRemCrianca.onclick = function () {
  if (reserva.hospedes.criancas() > 0) {
    lsSet("criancas", reserva.hospedes.criancas() + 1);
    altDisplay();
  }
};

btnAddCrianca.onclick = function () {
  if (limiteHospedes()) {
    lsSet("criancas", reserva.hospedes.criancas() + 1);
    altDisplay();
  }
};

//Checkin
const entradaCheckin = document.querySelector("#entrada-checkin");

function alteraCheckin() {
  let mod = new Date(entradaCheckin.value); // Está retornando um dia a menos do selecionado
  mod = new Date(mod.valueOf() + 86400000);
  lsSet("checkin", mod);
  altDisplay();
}

entradaCheckin.addEventListener("input", alteraCheckin);

//Checkout
const entradaCheckout = document.querySelector("#entrada-checkout");

function alteraCheckout() {
  let mod = new Date(entradaCheckout.value); // Está retornando um dia a menos do selecionado
  mod = new Date(mod.valueOf() + 86400000);
  lsSet("checkout", mod);
  altDisplay();
}

entradaCheckout.addEventListener("input", alteraCheckout);

//Adicionais
const inputs = document.querySelectorAll('input[type="checkbox"]');

function alteraAdicionais(element) {
  for (let key of Object.entries(reserva.adicionais)) {
    if (element.id == key[0]) {
      lsSet(key[0], element.checked);
    }
  }
  altDisplay();
}

inputs.forEach((element) => {
  element.onchange = function () {
    alteraAdicionais(element);
  };
});

//Reservar
let btnReservarQuartos = document.querySelectorAll(".quarto-reservar");

btnReservarQuartos.forEach((element, index) => {
  element.onclick = function () {
    lsSet("quarto", index + 1);
    altDisplay();
  };
});

//Limpar
const btnLimpar = document.querySelectorAll(".limpar-dados");

btnLimpar.forEach((element) => {
  element.onclick = function () {
    localStorage.clear();
    altDisplay();
  };
});
//Continuar


import ajustaData from "./modules/ajustaData-reservas-public.js";
import calendario from "./modules/calendario-reservas-public.js";
import modal from "./modules/modal-reservas-public.js";

modal();
calendario();

// modalModal();





