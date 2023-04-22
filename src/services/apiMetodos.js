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
	}
}