import api from "../plugins/api";
export default class CategoriaApi {
  async buscarTodasAsCategorias() {
    const { data } = await api.get('/api/avaliador/');
    console.log(data);
    return data.results;
  }
  async adicionarCategoria(categoria) {
    const { data } = await api.post('/api/categoria/', categoria);
    return data;
  }
  async atualizarCategoria(categoria) {
    const { data } = await api.put(`/api/categoria/${categoria.id}/`, categoria);
    return data;
  }
}   