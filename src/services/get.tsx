import Api from './api'

// "https://api.boardgameatlas.com/api/search?order_by=rank&client_id=wv5Ijw7bki"

export default async function get(path: string, params: any) {
  try {
    const response = await Api.get(path, params)
    return response.data
  }
  catch (error) {
    console.log(error)
  }
}