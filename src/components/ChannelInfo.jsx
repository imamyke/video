const ChannelInfo = ({image, title, SVnumber, introduction}) =>{
  return(
    <div className="flex mt-4 border-b border-solid border-sidebarBorder pb-2">
      <img src={image} className=" w-[250px] h-[250px] rounded-full" />
      <div className="pl-6">
        <p className="text-[50px]">{title}</p>
        <p className="pl-5 text-gray-400 ">{SVnumber}</p>
        <div className="flex">
          <p className="text-[15px] text-gray-400 mt-2 w-[300px] h-[25px] overflow-hidden text-ellipsis">{introduction}</p>
          <button className="text-[15px] mt-[6px]">...顯示更多</button>
        </div>
        <i className="mt-8 fa-regular fa-bell w-[100px] h-[42px] text-2xl pl-[8px] pt-1  border border-solid border-white rounded-lg  hover:bg-sidebarButtonColor cursor-pointer"> 訂閱</i>
      </div>
    </div>
  )
}

export default ChannelInfo