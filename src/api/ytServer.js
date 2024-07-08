import axios from "axios"

const axiosInstance = axios.create({
  baseURL:"https://www.googleapis.com/youtube/v3/",
  timeout:5000,
})

export default axiosInstance