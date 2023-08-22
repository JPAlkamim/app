import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.boardgameatlas.com/api/'
})

export default api