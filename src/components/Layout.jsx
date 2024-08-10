import Header from "./Header"
import Sidebar from "./SideBar"
import { Outlet } from 'react-router-dom'

const Layout = ()=>{
  return(
    <div className="bg-black text-white">
      <Header />
      <Sidebar />
      <div className="ml-[20px] pt-[72px] min-h-screen">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout