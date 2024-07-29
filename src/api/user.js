import axios from "axios"

export const userApi ={
  login: async(username, password) =>{
    const data = await axios.post("http://dummyjson.com/auth/login", 
    {username, password})
    return {data: data.data, code: data.status}
  }
}