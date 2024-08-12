const CommentCard = ({image, name, text}) => {
  return(
    <div className="mt-[40px] flex w-[800px]">
        <img src={image} className="rounded-full w-[60px] h-[60px]"/>
        <div className="ml-8 w-full">
          <p>{name}</p>
          <p className=" text-slate-400">{text}</p> 
          <div className="flex pt-2">
            <i className="fa-solid fa-thumbs-up pl-[100px]"></i>
            <i className="fa-solid fa-thumbs-down pl-[20px]"></i>
            <button className="text-[12px] pl-[20px]">回覆</button>
          </div>
        </div>
      </div>
  )
}

export default CommentCard