import joshau from "@/assets/images/joshua.jpeg"

const UserChannel = () =>{
  return(
  <>
    <div className="flex mt-4 border-b border-solid border-sidebarBorder pb-2">
      <img src={joshau} className=" w-[250px] h-[250px] rounded-full" />
      <div className="pl-6">
        <p className="text-[50px]">{}</p>
        <span className="pl-5">訂閱數 : 1000</span>
        <span className="pl-5">影片數 : 200</span>
        <p></p>
      </div>
    </div>
    <div>
    <i className="fa-solid fa-plus w-[80px] h-[42px] text-xl px-2 pt-1  ml-[10px] mt-[10px] border-b border-solid border-white rounded-lg  hover:bg-sidebarButtonColor cursor-pointer">新增</i>
    </div>
  </>
  )
}

export default UserChannel