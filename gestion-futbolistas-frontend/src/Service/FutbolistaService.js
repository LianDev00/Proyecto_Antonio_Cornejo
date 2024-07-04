import axios from 'axios'

const FUTBOLISTA_BASE_REST_API_URL = 'http://localhost:8080/api/v1/futbolista'

class FutbolistaService {
  getAllFutbolistas() {
    return axios.get(FUTBOLISTA_BASE_REST_API_URL)
  }

  createFutbolista(futbolista) {
    return axios.post(FUTBOLISTA_BASE_REST_API_URL, futbolista)
  }

  getFutbolistaById(futbolistaId) {
    return axios.get(`${FUTBOLISTA_BASE_REST_API_URL}/${futbolistaId}`)
  }

  updateFutbolista(futbolistaId, futbolista) {
    return axios.put(FUTBOLISTA_BASE_REST_API_URL + '/' + futbolistaId,futbolista)
  }

  deleteFutbolista(futbolistaId) {
    return axios.delete(`${FUTBOLISTA_BASE_REST_API_URL}/${futbolistaId}`)
  }
}

export default new FutbolistaService()
