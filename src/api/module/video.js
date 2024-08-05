import axios from "axios"

export const videoApi = {
  getVideos: async() =>{
    const { data } = await axios.get('/mock/videos')
    return data
  },
  getChannels: async() =>{
    const { data } = await axios.get('/mock/channels')
    return data
  }
}