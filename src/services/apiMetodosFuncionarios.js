import api from "./api";

export default	{

    salvar:(funcionario)=>{
        return api.post('funcionarios', funcionario);
    },

    atualizar:(funcionario)=>{
        return api.put(`funcionarios/${funcionario.id}`, funcionario);
    },

    listar:()=>{
        return api.get('funcionarios')
    },

    apagar:(funcionario)=>{
        return api.delete(`funcionarios/${funcionario.id}`, { data: funcionario })
    }

}