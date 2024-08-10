const ChannelVideoCard = ({image, title, onClick}) =>{
  return(
    <div className="mt-2 pt-2 px-2 relative w-[358px] h-[285px] rounded-xl  overflow-hidden cursor-pointer hover:scale-105 hover:bg-slate-700 duration-200" onClick={onClick}>
        <img className="w-[354px] h-[198px] rounded-2xl" src={image} />
        <p className=" w-[354px] text-[18px]">{title}</p>
        <p className="text-[12px] text-gray-400">觀看次數：1280次 ， 時間：3年前</p>
    </div>
  )
}
export default ChannelVideoCard