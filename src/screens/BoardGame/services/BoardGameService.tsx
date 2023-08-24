import axios from 'axios'
import api from '../../../services/api'

const BoardGameService = {
  async getBoardGames() {
    const response = await api.get(`search?order_by=rank&limit=4&client_id=wv5Ijw7bki`)
    return response.data.games
  }
}

export default BoardGameService