import axios from "axios"
import { useState, useEffect } from "react"

const LikeVideoList= () =>{
  //api抓video image,title,time,channel，功能跳轉到影片頁
  const test = [
    { videoId:"yMSfTV9OQSk"}
  ]
  const getVideo = async() => {
    const { data:videoData} = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${test[0].videoId}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=snippet`)
    console.log(videoData)
    
  }
  getVideo()
  return(
    <div className="flex mt-4 ">
      <div className="w-[350px] h-[622px] bg-slate-400 rounded-2xl">

      </div>
      <div className="ml-2">
        <i className="fa-solid fa-arrows-up-down w-[450px] h-[60px] text-[30px] pl-3 pt-3"></i>
        <div className="w-[450px] h-[90px] hover:bg-slate-300 rounded-lg">
          <img />
        </div>
      </div>
    </div>
  )
}

export default LikeVideoList