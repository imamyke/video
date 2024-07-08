import server from "../ytServer"


export const YTApi ={
  getChannel : async() =>{
    const data = await server.get(`/videos?=key=${import.meta.env.VITE_API_YT_KEY}&part=snippet&id=`)
    return data
  }
}