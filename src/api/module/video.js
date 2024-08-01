import axios from "axios"

export const videoApi = {
  getVideos: async() =>{
    const { data } = await axios.get('./mock/data/videos.json')
    return data
  }
}