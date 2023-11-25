import api from "../plugins/api";
export default class EquipeApi {
  async buscarTodosAsEquipes() {
    const { data } = await api.get('/api/equipe/');
    console.log(data);
    return data.results;
  }
  async adicionarEquipe(hackathon) {
    const { data } = await api.post('/api/equipe/', hackathon);
    return data;
  }
  async atualizarEquipe(hackathon) {
    const { data } = await api.put(`/api/equipe/${hackathon.id}/`, hackathon);
    return data;
  }
}   