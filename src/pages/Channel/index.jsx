import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import BannerCard from "@/components/BannerCard"
import ChannelVideoCard from "@/components/ChannelVideoCard"
import { useEffect, useState } from "react"
import { SwiperSlide } from 'swiper/react'
import Swiper from "@/components/Swiper/manipulate.jsx"

const Channel = () => {
const [coverData, setCoverData] = useState([])
const navigate = useNavigate()

 const snow = {
  ChannelName:"SnowPoppin",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1XNDUNNkbkUxrHrnzAN370w2htt8_uanHg&s",
  Intro:"Popping"
 }

  const { id } = useParams()
  const getChannel = async() => {
    const { data: channelData } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${id}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=contentDetails`)
    const playListId = channelData.items[0].contentDetails.relatedPlaylists.uploads
    const { data: playList } = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playListId}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=snippet,contentDetails,status&maxResults=6`)
    setCoverData(playList.items)
    console.log(playList.items[0].snippet.channelTitle)
  }

  useEffect(() => {
    getChannel()
  }, [])
  return (
  <>
    <div className="flex mt-4 border-b border-solid border-sidebarBorder pb-2">
      <img src={snow.image} className=" w-[250px] h-[250px] rounded-full" />
      <div className="pl-6">
        <p className="text-[50px]">PoppinSnow</p>
        <span className="pl-5 text-gray-400 ">訂閱數 : 1000</span>
        <span className="pl-5 text-gray-400">影片數 : 200</span>
        <div className="flex">
          <p className="text-[15px] text-gray-400 mt-2 w-[300px] h-[25px] overflow-hidden text-ellipsis">哈哈哈好哈啊好哈哈哈哈好哈啊好哈哈哈好哈啊好哈哈</p>
          <button className="text-[15px] mt-[6px]">...顯示更多</button>
        </div>
        <i className="mt-8 fa-regular fa-bell w-[100px] h-[42px] text-2xl pl-[8px] pt-1  border border-solid border-white rounded-lg  hover:bg-sidebarButtonColor cursor-pointer"> 訂閱</i>
      </div>
    </div>
    <h4 className="mt-5 font-bold">為你推薦</h4>
    <div className="flex mt-4 border-b border-solid border-sidebarBorder pb-2">
      <Swiper >
        {coverData.map(data => (
        <SwiperSlide key={data.snippet.resourceId.videoId} className="w-[365px] " >
          <ChannelVideoCard title={data.snippet.title} image={data.snippet.thumbnails.maxres?.url} describe={data.snippet.description} onClick={() => navigate(`/video/${data.snippet.resourceId.videoId}`)} />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
   
  </>
  )
}

export default Channel

