import boy from "@/assets/images/boy.jpg"
import big from "@/assets/images/big.jpg"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"


const Video = () => {
  const [coverData, setCoverData] = useState([])
  const navigate = useNavigate()


  const { id } = useParams()
  console.log(id)
  return(
    <>
      <div>
       <iframe width="700" height="394" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <p className="text-[30px] pt-2">video title</p>
      </div>
      <div className="flex w-full mt-3">
          <img className=" w-[80px] h-[80px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1XNDUNNkbkUxrHrnzAN370w2htt8_uanHg&s"/>
          <div className="pl-[40px]">
            <p className="text-[25px]">頻道名</p>
            <p className="text-[15px] text-gray-500">訂閱數</p>
          </div>
          <i className="fa-regular fa-bell w-[100px] h-[42px] text-2xl pl-[8px] pt-1  ml-[300px] mt-[10px] border border-solid border-white rounded-lg  hover:bg-sidebarButtonColor">訂閱</i>
      </div>
      <div className="mt-[40px] flex">
        <img src={boy} className="rounded-full w-[70px] h-[70px]"/>
        <div className="ml-8 ">
          <p>惠勝</p>
          <input className="w-[450px] bg-black  text-[20px] text-slate-400  border-b border-solid border-sidebarBorder  " placeholder="請留言" type="text"></input>
        </div>
      </div>
      <div className="mt-[40px] flex w-[450px]">
        <img src={big} className="rounded-full w-[60px] h-[60px]"/>
        <div className="ml-8 w-full">
          <p>ㄢㄤ不分 還是要當碗路霜民！</p>
          <p className=" text-slate-400"> 這有很厲害嗎？我啊罵在公園跳的更好😗</p> 
          <div className="flex pt-2">
            <i className="fa-solid fa-thumbs-up pl-[100px]"></i>
            <i className="fa-solid fa-thumbs-down pl-[20px]"></i>
            <button className="text-[12px] pl-[20px]">回覆</button>
          </div>
        </div>
      </div>
    </>

  )
}

export default Video