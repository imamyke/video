import joshau from "@/assets/images/joshua.jpeg"

const UserChannel = () =>{
  return(
  <>
    <div className="flex mt-4 border-b border-solid border-sidebarBorder pb-2">
      <img src={joshau} className=" w-[250px] h-[250px] rounded-full" />
      <div className="pl-6">
        <p className="text-[50px]">Joshau</p>
        <span className="pl-5 text-gray-400 ">訂閱數 : 1000</span>
        <span className="pl-5 text-gray-400">影片數 : 200</span>
        <div className="flex">
          <p className="text-[15px] text-gray-400 mt-2 w-[300px] h-[25px] overflow-hidden text-ellipsis">哈哈哈好哈啊好哈哈哈哈好哈啊好哈哈哈好哈啊好哈哈</p>
          <button className="text-[15px] mt-[6px]">...顯示更多</button>
        </div>
        <i className="mt-8 fa-regular fa-bell w-[100px] h-[42px] text-2xl pl-[8px] pt-1  border border-solid border-white rounded-lg  hover:bg-sidebarButtonColor cursor-pointer"> 訂閱</i>
      </div>
    </div>
    <i className="mt-[20px] px-2 py-1 text-xl fa-light fa-plus border-b border-solid border-white hover:bg-sidebarButtonColor rounded-lg cursor-pointer">新增</i>
  </>
  )
}

export default UserChannel