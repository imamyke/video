import axios from "axios"

export const Api = {
  getVideos: async() =>{
    const { data } = await axios.get('/mock/videos')
    return data
  },
  getChannels: async() =>{
    const { data } = await axios.get('/mock/channels')
    return data
  }
}