import axios from "axios"
import beigow from "@/assets/images/beigow.jpeg"
import './style.css'
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
      <div className='card'>
        <div className="mx-auto w-[280px]">
          <img src={beigow} className="w-full h-[160px] mt-5 rounded-lg"/>
          <h1 className="text-[30px] font-bold  mt-5">喜歡的影片</h1>
          <p className="font-bold  mt-3">惠勝</p>
          <p className="text-[13px]  mt-2 text-slate-500">722 部影片  ，  觀看次數：2次</p>
          <i class="fa-solid fa-play w-[120px] h-[30px] border border-solid rounded-full px-4 py-1.5 mt-5 cursor-pointer"> 全部播放</i>
        </div>
      </div>
      <div className="ml-2">
        <i className="fa-solid fa-arrows-up-down w-[450px] h-[60px] text-[30px] pl-3 pt-3 "></i>
        <div className="flex w-[600px] h-[90px] hover:bg-slate-500 rounded-lg">
          <img src={beigow} className="w-[140px] h-[80px] ml-2 my-auto rounded-lg" />
          <div className="w-[350px] h-full ml-3">
            <h1 className="mt-3 text-[19px] ">ft.Beigow『你各位有什麼想問的快問～』</h1>
            <p className="text-[13px]  mt-2 text-slate-400">talk街舞  ，  觀看次數：2次 ， 兩個月前</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LikeVideoList