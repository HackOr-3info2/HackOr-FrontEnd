import api from "../plugins/api";
export default class HackathonApi {
  async buscarTodosOsHackathons() {
    const { data } = await api.get('/api/hackathon/');
    console.log(data);
    return data.results;
  }
  async adicionarHackathon(hackathon) {
    const { data } = await api.post('/api/hackathon/', hackathon);
    return data;
  }
  async atualizarHackathon(hackathon) {
    const { data } = await api.put(`/api/hackathon/${hackathon.id}/`, hackathon);
    return data;
  }
  async buscarHackathonPorId(id) {
    const { data } = await api.get(`/api/hackathon/${id}/`);
    return data;
  }
}   