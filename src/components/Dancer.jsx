const Dancer = ({image, name, style, onClick}) =>{

  return(
    <div className="mt-[15px] pt-2 w-[110px] flex flex-col items-center mr-10 cursor-pointer hover:scale-110 hover:bg-slate-700 duration-200 rounded-lg " onClick={onClick} >
      <img src={image} className=" w-[100px] h-[100px] rounded-full" />
      <span className="underline">{name}</span>
      <p className="text-gray-500">{style}</p>
      </div>)
}

export default Dancer