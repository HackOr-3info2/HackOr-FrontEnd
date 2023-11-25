import api from "../plugins/api";
export default class AvaliacaoApi {
  async buscarTodasAsAvaliacoes() {
    const { data } = await api.get('/api/avaliacao/');
    console.log(data);
    return data.results;
  }
  async adicionarAvaliacao(avaliacao) {
    const { data } = await api.post('/api/avaliacao/', avaliacao);
    return data;
  }
  async atualizarAvaliacao(avaliacao) {
    const { data } = await api.put(`/api/avaliacao/${avaliacao.id}/`, avaliacao);
    return data;
  }
}   