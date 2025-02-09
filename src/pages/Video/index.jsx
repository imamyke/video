import boy from "@/assets/images/boy.jpg"
import big from "@/assets/images/big.jpg"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import {Api} from "@/api/module/video.js"
import VideoChannelCard from "@/components/VideoChannelCard"
import CommentCard from "@/components/CommentCard"
import axios from "axios"


const Video = () => {
  const [coverData, setCoverData] = useState([])
  const [commentsData, setCommentsData] = useState([])
  const navigate = useNavigate()
  const { id } = useParams()

  const getComment = async() =>{
    const res =  await axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${id}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc`);
    const arr = res.data.items
    const data = []
    for(const item of arr){
      data.push({...item.snippet.topLevelComment.snippet})
    }
    setCommentsData(data)
    console.log(commentsData)
  }



  const getVideo = ()=>{
    Api.getVideos().then(res =>{
      const videoData = res.data.find( item => item.videoId === id)
      setCoverData(videoData)
    })
  }
 
  useEffect(()=>{
    getVideo()
    getComment()
  },[])

  return(
    <>
      <div className="mt-2">
       <iframe width="700" height="394" src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <p className="text-[20px] w-[700px] pt-2">{coverData.title}</p>
      </div>
      <VideoChannelCard key={coverData.videoId} image={coverData.channelImage} title={coverData.channelTitle} sNumber={coverData.sNumber} onClick={() => navigate(`/channel/${coverData.channelId}`)} />
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
      {commentsData.map( item => (
        <CommentCard id={item.authorChannelId} image={item.authorProfileImageUrl} name={item.authorDisplayName} text={item.textDisplay} />
      ))}
    </>

  )
}

export default Video