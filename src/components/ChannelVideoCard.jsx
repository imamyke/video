const ChannelVideoCard = ({image, title, onClick}) =>{
  return(
    <div className="relative w-[358px] h-[272px]  overflow-hidden cursor-pointer" onClick={onClick}>
        <img className="w-[354px] h-[198px] rounded-2xl" src={image} />
        <p className=" w-[354px] text-[18px]">{title}</p>
        <p className="text-[12px] text-gray-400">觀看次數：1280次 ， 時間：3年前</p>
    </div>
  )
}
export default ChannelVideoCard