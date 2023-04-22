import api from "./api";

export default	{

	salvar:(clientes)=>{
		return api.post('clientes', clientes);
	},

	atualizar:(clientes)=>{
		return api.put('clientes', clientes);
	},

	listar:()=>{
		return api.get('clientes')
	},

	apagar:(clientes)=>{
		return api.delete('clientes', { data: clientes })
	},

	salvar:(funcionario)=>{
		return api.post('funcionario', funcionario);
	},

	atualizar:(funcionario)=>{
		return api.put('funcionario', funcionario);
	},

	listar:()=>{
		return api.get('funcionarios')
	},

	apagar:(funcionario)=>{
		return api.delete('funcionario', { data: funcionario })
	}
}