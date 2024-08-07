import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import ChannelInfo from "@/components/ChannelInfo"
import ChannelVideoCard from "@/components/ChannelVideoCard"
import { useEffect, useState } from "react"
import { SwiperSlide } from 'swiper/react'
import Swiper from "@/components/Swiper/manipulate.jsx"
import { useVideoStore } from "@/store/video"
import {Api} from "@/api/module/video.js"

const Channel = () => {
const [coverData, setCoverData] = useState([])
const { channels, setChannels} = useVideoStore()
const navigate = useNavigate()

 const snow = {
  title:"SnowPoppin",
  image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1XNDUNNkbkUxrHrnzAN370w2htt8_uanHg&s",
  SVnumber:"訂閱數 : 1000 ， 影片數 : 200",
  introduction:"哈哈哈好哈啊好哈哈哈哈好哈啊好哈哈哈好哈啊好哈哈"
 }

  const { id } = useParams()
  const getChannel = async() => {
    const { data: channelData } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${id}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=contentDetails`)
    const playListId = channelData.items[0].contentDetails.relatedPlaylists.uploads
    const { data: playList } = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playListId}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=snippet,contentDetails,status&maxResults=6`)
    setCoverData(playList.items)
    console.log(playList.items[0].snippet)
  }

  const getChannel1 = async() => {
    Api.getChannels().then(res =>{
      const channelDatas = res.data
      const channelData = channelDatas.find(item => item.channelId === id)
      setChannels(channelData)
      console.log(channels.videos)
    })
  }

  useEffect(() => {
    getChannel1()
  }, [])
  return (
  <>
    <ChannelInfo title={channels.channelTitle} image={channels.channelImage} SVnumber={channels.SVnumber} introduction={channels.channelDescription} />
    <h4 className="mt-5 font-bold">為你推薦</h4>
    <div className="flex mt-4 border-b border-solid border-sidebarBorder pb-2">
      <Swiper >
        {channels.videos.map(data => (
        <SwiperSlide key={data.videoId} className="w-[365px] " >
          <ChannelVideoCard title={data.title} image={data.thumbnails.maxres?.url} describe={data.description} onClick={() => navigate(`/video/${data.videoId}`)} />
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
   
  </>
  )
}

export default Channel

