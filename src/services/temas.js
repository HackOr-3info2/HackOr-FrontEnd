// import axios from 'axios';
import api from "../plugins/api";
export default class TemasApi {
  async buscarTodosOsTemas() {
    const { data } = await api.get('/api/Temas/');
    return data.results;
  }
  async adicionarTema(tema) {
    const { data } = await api.post('/api/Temas/', tema);
    return data;
  }
  async atualizarTema(tema) {
    const { data } = await api.put(`/api/Temas/${tema.id}/`, tema);
    return data;
  }
}