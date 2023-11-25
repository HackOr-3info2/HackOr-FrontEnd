import api from "../plugins/api";
export default class AvaliadorApi {
  async buscarTodosOsAvaliadores() {
    const { data } = await api.get('/api/avaliador/');
    console.log(data);
    return data.results;
  }
  async adicionarAvaliador(avaliador) {
    const { data } = await api.post('/api/avaliador/', avaliador);
    return data;
  }
  async atualizarAvaliador(avaliador) {
    const { data } = await api.put(`/api/avaliador/${avaliador.id}/`, avaliador);
    return data;
  }
}   