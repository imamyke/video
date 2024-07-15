import ShortButton from "../../components/ShortButton"

const contentList = [
  {
    title:"5.1萬",
    icon:"fa-solid fa-thumbs-up"
  },
  {
    title:"不喜歡",
    icon:"fa-solid fa-thumbs-down"
  },
  {
    title:"評論",
    icon:"fa-solid fa-comments"
  },
  {
    title:"待播",
    icon:"fa-solid fa-hourglass-start"
  }
]

const Short = () =>{
  return(
    <div className="flex justify-center ">
      <div className=" w-[350px] h-[622px] ">

      </div>
      <div className=" w-[72px] h-[484px] mt-[138px]">
        {contentList.map(item => (
          <ShortButton key={item.title} icon={item.icon}>
            {item.title}
          </ShortButton>
          ))}
      </div>
    </div>
  )
}

export default Short