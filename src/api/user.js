import axios from "axios"

export const userApi ={
  login: async() =>{
    const data = await axios.post("http://dummyjson.com/auth/login")
  }
}