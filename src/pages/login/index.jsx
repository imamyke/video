import Layout from "@/components/Layout"
import { useState,useEffect } from "react"
import { userApi } from "@/api/user"
import { message } from "antd"
import { useNavigate } from "react-router-dom";
import { setStorageToken ,getStorageToken} from "@/utils/localStorage"
//form =>表單容器
//輸入 ＝>表單域
//按鈕 ＝>送出表單
//JWT
//登入邏輯
//前端 ＝>登入API 需要的資料（帳號or密碼..) ，對的話，會回傳token，再放到localstorage
const Login = ()=>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token,setToken] = useState(getStorageToken)
  const navigate = useNavigate()
  const login = async(e) => {
    e.preventDefault() // 2. 取消表單預設行為
    try {
      const { code, data } = await userApi.login(username, password)
      if (code === 200) { // 3. 若登入成功
        const { token } = data
        setStorageToken(token) // 4. 在本地存放 token => localStorage
        setToken(token) // 5. 告訴頁面現在為登入狀態
        message.success('登入成功') // 6. 通知使用者登入成功
      }
    } catch(err) {
      message.error('使用者名稱或密碼錯誤') // 7.登入失敗
    }
  }
  
  useEffect(()=>{
    if(token){
      goToHome()
    }
  },[])
  
  return(
    <Layout>
      <form className="flex flex-col items-center my-[300px] w-[400px] mx-auto" onSubmit={login}>
        <div className="flex mb-4">
         <label className="w-[100px] block text-left mr-2" htmlFor="username">使用者名稱</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-2 py-1 w-56 rounded bg-gray-100 focus:outline-0"
            />
        </div>
        <div className="flex mb-4">
          <label className="w-[100px] block text-left mr-2" htmlFor="password">密碼</label>
            <input
            type="password"
            id="password"
            className="px-2 py-1 w-56 rounded bg-gray-100 focus:outline-0"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button className="px-5 py-1 bg-themeColor rounded-sm text-white disabled:bg-gray-200 disabled:text-gray-300 cursor-pointer" disabled={!username || !password} type="submit">登入</button>
      </form>
    </Layout>
  )
}
export default Layout