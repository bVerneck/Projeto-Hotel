const reserva = {
  stringToBoolean(string) {
    if (string) {
      if (string == "false") {
        return false;
      }
      return true;
    }
  },

  lsSet(item, valor) {
    localStorage.setItem(item, valor);
  },

  lsGet(item) {
    let valor = localStorage.getItem(item);
    if (valor) {
      if (valor === "0" || parseInt(valor) / parseInt(valor) == 1) {
        return parseInt(valor);
      } else if (valor == "true" || valor == "false") {
        return this.stringToBoolean(valor);
      } else if (Date.parse(valor)) {
        return new Date(Date.parse(valor));
      } else {
        return valor;
      }
    } else {
      return null;
    }
  },
  hospedes: {
    adultos() {
      return reserva.lsGet("adultos") ? reserva.lsGet("adultos") : 2;
    },
    criancas() {
      return reserva.lsGet("criancas") ? reserva.lsGet("criancas") : 0;
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
      return reserva.lsGet("checkin")
        ? reserva.lsGet("checkin")
        : this.checkinDefault();
    },
    checkout() {
      return reserva.lsGet("checkout")
        ? reserva.lsGet("checkout")
        : this.checkoutDefault();
    },
    noites() {
      return parseInt(
        (this.checkout().valueOf() - this.checkin().valueOf()) / 86400000
      );
    },
  },
  quartos: {
    0: { nome: "Escolha seu quarto", diaria: 0, src: "" },
    1: {
      nome: "Premier Room",
      diaria: 950,
      src: "premier-room.webp",
    },
    2: {
      nome: "Deluxe Room",
      diaria: 1425,
      src: "deluxe-room.jpg",
    },
    3: {
      nome: "T.Ex Premier",
      diaria: 2230,
      src: "tex-premier-room.webp",
    },
    selecionado() {
      return reserva.lsGet("quarto") ? reserva.lsGet("quarto") : 0;
    },
  },
  adicionais: {
    academia: {
      select() {
        return reserva.lsGet("academia") ? reserva.lsGet("academia") : false;
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
        return reserva.lsGet("cofre") ? reserva.lsGet("cofre") : false;
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
        return reserva.lsGet("despertador")
          ? reserva.lsGet("despertador")
          : false;
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
        return reserva.lsGet("estacionamento")
          ? reserva.lsGet("estacionamento")
          : false;
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
        return reserva.lsGet("transferChegada")
          ? reserva.lsGet("transferChegada")
          : false;
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
        return reserva.lsGet("transferPartida")
          ? reserva.lsGet("transferPartida")
          : false;
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

export default reserva;
