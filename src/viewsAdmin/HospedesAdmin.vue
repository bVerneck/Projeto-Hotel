
<template>
  <headerAdmin />
  <div>
    <div class="new-employee-container">
    <h1>Reserva Manual</h1>
    <form id="reservation-form" @submit="save">
      <div class="form-group">
        <label>Nome Completo:</label>
      <input
        type="text"
        name="name"
        placeholder="Nome Completo"
        v-model="name"
      />
      </div>
        <div class="form-group">
          <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        v-model="email"
      />
      </div>
      
      <div class="form-group">
        <label>Cpf:</label>
      <input
        type="text"
        name="cpf"
        placeholder="CPF"
        v-model="cpf"
        @keypress="onlyNumbers"
      />
      </div>
      <div class="form-group">

      <label for="preco">Data de nascimento:</label>
      <input
        type="date"
        name="birthDate"
        placeholder="Data de Nascimento"
        v-model="birthDate"
      />
      </div>
      <div class="form-group">

      <label for="dataEntrada">Data de entrada:</label>
      <input
        type="date"
        name="checkInDate"
        placeholder="Data de Entrada"
        v-model="checkInDate"
      />
      </div>
      <div class="form-group">

      <label for="dataSaida">Data de saida:</label>
      <input
        type="date"
        name="checkOutDate"
        placeholder="Data de Saída"
        v-model="checkOutDate"
      />  
     </div>
     <div class="form-group">
      <label for="acompanhantes">Acompanhantes:</label>
      <input
        type="text"
        name="acompanhantes"
        placeholder="Quantidade de Acompanhantes"
        v-model="acompanhantes"
        @keypress="onlyNumbers"
      />
      </div>

      <div>Serviços Adicionais:</div>
      <input type="checkbox" name="academia" v-model="services.academia" />
      <label>Academia</label>
      <input type="checkbox" name="cofre" v-model="services.cofre" />
      <label>Cofre</label>
      <input
        type="checkbox"
        name="despertador"
        v-model="services.despertador"
      />
      <label>Despertador</label>
      <input
        type="checkbox"
        name="estacionamento"
        v-model="services.estacionamento"
      />
      <label>Estacionamento</label>
      
      <div>Tipo de Quarto:</div>
      <input type="radio" name="roomType" value="Premier Room" v-model="roomType" />
      <label>Premier Room</label>
      <input type="radio" name="roomType" value="Deluxe Room" v-model="roomType" />
      <label>Deluxe Room</label>
      <input
        type="radio"
        name="roomType"
        value="Tex Premier Room"
        v-model="roomType"
      />
      <label>Tex Premier Room</label>
      <div>
      <input type="submit" value="Salvar" class="btn-primary"/>
      </div>
    </form>
    </div>

<div>
    <h1>hospedes</h1>
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
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(reservation, index) in reservations"
          :key="index"
        >
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
            <button @click="edit(index)" class="btn-secondary">Editar</button>
            <button @click="remove(index)" class="btn-danger">Remover</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
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
      if (confirm('Deseja realmente remover essa reserva?')) {
        this.reservations.splice(index, 1)
      }
    },
    edit(index) {
      this.name = this.reservations[index].name
      this.email = this.reservations[index].email
      this.cpf = this.reservations[index].cpf
      this.birthDate = this.reservations[index].birthDate
      this.checkInDate = this.reservations[index].checkInDate
      this.checkOutDate = this.reservations[index].checkOutDate
      this.acompanhantes = this.reservations[index].acompanhantes
      this.services = this.reservations[index].services
      this.roomType = this.reservations[index].roomType

      this.reservations.splice(index, 1)
    },
    save(e) {
      e.preventDefault()

      this.reservations.push({
        name: this.name,
        email: this.email,
        cpf: this.cpf,
        birthDate: this.birthDate,
        checkInDate: this.checkInDate,
        checkOutDate: this.checkOutDate,
        acompanhantes: this.acompanhantes,
        services: this.services,
        roomType: this.roomType
      })

      this.name = ''
      this.email = ''
      this.cpf = ''
      this.birthDate = ''
      this.checkInDate = ''
      this.checkOutDate = ''
      this.acompanhantes = ''
      this.services = {
        academia: false,
        cofre: false,
        despertador: false,
        estacionamento: false
      }
      this.roomType = ''
    },
    onlyNumbers(e) {
      if (e.keyCode < 48 || e.keyCode > 57) {
        e.preventDefault()
      }
    }
  }
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

.new-employee-container {
  width: 100%;
  background-color: #dbd9d98b;
  text-align: center;
  
  
}
.form-group {
  
  margin-bottom: 1em;
}

.form-group label {
   display: block;
  margin-bottom: 0.5em;
  font-weight: bold;
  
}

.form-group input {
  width: 75%;
  padding: 0.5em;
  font-size: 0.9em;
  border: 1px solid #ddd;
  text-align: center;
  
}

.btn-danger {
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background-color: #f44336;
  color: white;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: #da190b;
}
.btn-secondary {
  margin-right: 0.5em;
  padding: 0.5em 1em;
  border: none;
  border-radius: 4px;
  background-color: #ddd;
  color: black;
  cursor: pointer;
}
.btn-primary {
  margin-top: 1em;
  padding: 0.7em 6em;
  border: none;
  border-radius: 4px;
  background-color: #670bff;
  color: white;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #690bffd4;
}
  h1{
    font-size: 2em;
    font-weight: bold;
    color: #000000;
    margin-bottom: 0.5em;
  }

  form {
    margin-bottom: 1em;
  }

  input {
    border: 1px solid #ccc;
    padding: 0.5em;
    margin-bottom: 0.5em;
  }

  label {
    font-weight: bold;
    margin-right: 0.5em;
  }

  button {
    background: #eee;
    border: 1px solid #ccc;
    padding: 0.5em;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #ddd;
    padding: 0.5em;
    text-align: left;
  }

  th {
    background: #eee;
    font-weight: bold;
  }
</style>
