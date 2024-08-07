const VideoChannelCard = ({ image, title, sNumber, onClick}) =>{
  return(
  <div className="flex w-full mt-3 cursor-pointer" onClick={onClick}>
    <img className=" w-[80px] h-[80px] rounded-full" src={image}/>
    <div className="pl-[40px]">
      <p className="text-[25px]">{title}</p>
      <p className="text-[15px] text-gray-500">{sNumber}</p>
    </div>
    <i className="fa-regular fa-bell w-[100px] h-[42px] text-2xl pl-[8px] pt-1  ml-[300px] mt-[10px] border border-solid border-white rounded-lg  hover:bg-sidebarButtonColor"> 訂閱</i>
</div>
  )
}

export default VideoChannelCard