<template>
<headerAdmin />
  <div>
    <h1>Reserva Manual</h1>
    <form id="reservation-form" @submit="save">
      <input type="text" name="name" placeholder="Nome Completo" v-model="name" />
      <input type="email" name="email" placeholder="E-mail" v-model="email" />
      <input type="text" name="cpf" placeholder="CPF" v-model="cpf" @keypress="onlyNumbers" />

      <label for="preco">Data de nascimento:</label>
      <input type="date" name="birthDate" placeholder="Data de Nascimento" v-model="birthDate" />

      <label for="dataEntrada">Data de entrada:</label>
      <input type="date" name="checkInDate" placeholder="Data de Entrada" v-model="checkInDate" />

      <label for="dataSaida">Data de saida:</label>
      <input type="date" name="checkOutDate" placeholder="Data de Saída" v-model="checkOutDate" />

      <label for="acompanhantes">Acompanhantes:</label>
      <input type="text" name="acompanhantes" placeholder="Quantidade de Acompanhantes" v-model="acompanhantes" @keypress="onlyNumbers" />
      
      <div>Serviços Adicionais:</div>
      <input type="checkbox" name="academia" v-model="services.academia" />
      <label>Academia</label>
      <input type="checkbox" name="cofre" v-model="services.cofre" />
      <label>Cofre</label>
      <input type="checkbox" name="despertador" v-model="services.despertador" />
      <label>Despertador</label>
      <input type="checkbox" name="estacionamento" v-model="services.estacionamento" />
      <label>Estacionamento</label>
      <div>Tipo de Quarto:</div>
      <input type="radio" name="roomType" value="Premier Room" v-model="roomType" />
      <label>Premier Room</label>
      <input type="radio" name="roomType" value="Deluxe Room" v-model="roomType" />
      <label>Deluxe Room</label>
      <input type="radio" name="roomType" value="Tex Premier Room" v-model="roomType" />
      <label>Tex Premier Room</label>
      <input type="submit" value="Salvar" />
      
    </form>

    <h2>hospedes</h2>
    <table>
      <thead>
        <tr>
          <th>Nome Completo</th>
          <th>E-mail</th>
          <th>CPF</th>
          <th>Data de Nascimento</th>
          <th>Data de Entrada</th>
          <th>Data de Saída</th>
          <th>companhantes</th>
          <th>Serviços Adicionais</th>
          <th>Tipo de Quarto</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(reservation, index) in reservations" :key="index">
          <td>{{ reservation.name }}</td>
          <td>{{ reservation.email }}</td>
          <td>{{ reservation.cpf }}</td>
          <td>{{ reservation.birthDate }}</td>
          <td>{{ reservation.checkInDate }}</td>
          <td>{{ reservation.checkOutDate }}</td>
          <td>{{ reservation.acompanhantes }}</td>
          <td>
            {{ reservation.services.academia ? 'Academia' : '' }}
            {{ reservation.services.cofre ? 'Cofre' : '' }}
            {{ reservation.services.despertador ? 'Despertador' : '' }}
            {{ reservation.services.estacionamento ? 'Estacionamento' : '' }}
          </td>
          <td>{{ reservation.roomType }}</td>
          <td>
            <button @click="edit(index)">Editar</button>
            <button @click="remove(index)">Remover</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HeaderAdmin from './components/HeaderAdmin.vue';
export default {
  components: {
    HeaderAdmin
  },
  data() {
    return {
      name: '',
      email: '',
      cpf: '',
      birthDate: '',
      checkInDate: '',
      checkOutDate: '',
      acompanhantes: '',
      services: {
        academia: false,
        cofre: false,
        despertador: false,
        estacionamento: false
      },
      roomType: '',
      reservations: [],
       reservations: [
        {
          name: 'Raylan Barbosa',
          email: 'raylanbarbosa@gmail.com',
          cpf: '00000000000',
          birthDate: '1995-03-22',
          checkInDate: '2023-04-19',
          checkOutDate: '2023-04-26',
          acompanhantes: 4,
          services: {
            academia: true,
            cofre: true,
            despertador: true,
            estacionamento: true
          },
          roomType: 'Premier Room'
        },
        {
          name: 'Willian Pinheiro',
          email: 'willianpinheiro@gmail.com',
          cpf: '00000000000',
          birthDate: '1998-07-05',
          checkInDate: '2023-04-18',
          checkOutDate: '2023-04-26',
          acompanhantes: 3,
          services: {
            academia: true,
            cofre: false,
            despertador: true,
            estacionamento: true
          },
          roomType: 'Deluxe Room'
        },
        {
          name: 'João Ricardo',
          email: 'Joaoricardo@gmail.com',
          cpf: '00000000000',
          birthDate: '1994-06-15',
          checkInDate: '2023-04-20',
          checkOutDate: '2023-04-30',
          acompanhantes: 2,
          services: {
            academia: true,
            cofre: true,
            despertador: false,
            estacionamento: true
          },
          roomType: 'Tex Premier Room'
        }
      ]
    }
  },
  
  methods: {
    
    
     remove(index) {
    if (confirm('Tem certeza que deseja remover este quarto?')) {
   this.reservations.splice(index, 1);

  }
},
    save(event) {
      event.preventDefault()
      const reservation = {
        name: this.name,
        email: this.email,
        cpf: this.cpf,
        birthDate: this.birthDate,
        checkInDate: this.checkInDate,
        checkOutDate: this.checkOutDate,
        acompanhantes: this.acompanhantes,
        services: this.services,
        roomType: this.roomType
      }

      this.reservations.push(reservation)
    },
    edit(index) {
      const reservation = this.reservations[index]

      this.name = reservation.name
      this.email = reservation.email
      this.cpf = reservation.cpf
      this.birthDate = reservation.birthDate
      this.checkInDate = reservation.checkInDate
      this.checkOutDate = reservation.checkOutDate
      this.acompanhantes = reservation.acompanhantes
      this.services = reservation.services
      this.roomType = reservation.roomType

      this.reservations.splice(index, 1)
      
    },
    onlyNumbers(event) {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault()
      }
    }
  },
  
}
</script>
<style scoped>
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

* {
  box-sizing: border-box;
  margin: 0;
  font-family: "Montserrat";
}

</style>