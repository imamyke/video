const TopicCard = ({image,title}) =>{
  return(
    <div className="w-[300px] mt-2 border hover:scale-105 duration-200">
        <img src={image} className="w-full h-[150px] object-cover rounded-xl"/>
        <h2 className="mt-3 whitespace-nowrap overflow-hidden text-ellipsis">{title}</h2>
    </div>
  )
}

export default TopicCard