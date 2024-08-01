import { useState, useEffect } from "react"
import { userApi } from "../../api/module/user.js"
import { message } from "antd"
import { useNavigate } from "react-router-dom"
import { setStorageToken,getStorageToken } from "../../utils/localStorage"


const Login=()=>{
  const navigate = useNavigate()
  const[username,setUsername] = useState('')
  const[password,setPassword] = useState('')
  const[token,setToken] = useState(getStorageToken)
  const goToHome = () =>{
    navigate('/')
  }

  const login = async(e) => {
    e.preventDefault()
    try{
        const {code, data} = await userApi.login(username, password)
        if(code === 200){
          const{token} = data
          setStorageToken(token)
          setToken(token)
          message.success('登入成功')
      }
    }catch(err){
      message.error('使用者名稱或是密碼有誤')
    }
  }

  useEffect(()=>{
    if(token){
      goToHome()
    }
  },[token])

  return(
  <>
    <form className="flex flex-col items-center my-[300px] w-[400px] mx-auto" onSubmit={login}>
      <div className="flex mb-4">
        <lable className="w-[100px] block text-left mr-2">使用者名稱</lable>
        <input
          type="text"
          className="px-2 py-1 w-56 rounded bg-gray-100 text-black focus:outline-0"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex mb-4">
        <lable className="w-[100px] block text-left mr-2">密碼</lable>
        <input
          type="password"
          className="px-2 py-1 w-56 text-black rounded bg-gray-100 focus:outline-0"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="px-3 py-2 text-[22px] mt-6 border border-solid border-white rounded-lg hover:bg-slate-500" >登錄</button>
    </form>
  </>
  )
}

export default Login