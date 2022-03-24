import axios from "axios";

const PACOTES_API_URL = "https://pacotes.herokuapp.com/pacotes";

class PacotesService {
  getAllPacotes() {
    return axios.get(PACOTES_API_URL);
  }

  createPacotes(pacotes) {
    return axios.post(PACOTES_API_URL, pacotes);
  }

  getPacotesById(pacotesId) {
    return axios.get(PACOTES_API_URL + "/" + pacotesId);
  }

  updatePacotes(pacotesId, pacotes) {
    return axios.put(PACOTES_API_URL + "/" + pacotesId, pacotes);
  }

  deletePacotes(pacotesId) {
    return axios.delete(PACOTES_API_URL + "/" + pacotesId);
  }
}

export default new PacotesService();