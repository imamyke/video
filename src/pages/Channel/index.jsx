import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import ChannelInfo from "@/components/ChannelInfo"
import ChannelVideoCard from "@/components/ChannelVideoCard"
import { useEffect, useState } from "react"
import { SwiperSlide } from 'swiper/react'
import Swiper from "@/components/Swiper/manipulate.jsx"
import { useVideoStore } from "@/store/video.js"
import {Api} from "@/api/module/video.js"

const Channel = () => {
const { channels, setChannels} = useVideoStore()
const navigate = useNavigate()


  const { id } = useParams()
  /* // 以下是YouTube channel data 取法

  const getChannel = async() => {
  const { data: channelData } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${id}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=contentDetails`)
  const playListId = channelData.items[0].contentDetails.relatedPlaylists.uploads
  const { data: playList } = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playListId}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=snippet,contentDetails,status&maxResults=6`)
  setCoverData(playList.items)
  console.log(playList.items[0].snippet)
  }
  */
  
  const getChannel = async() => {
    Api.getChannels().then(res =>{
      const channelDatas = res.data
      console.log(channelDatas)
      const channelData = channelDatas.find(item => item.channelId === id)
      setChannels(channelData)
      console.log(channels.videos)
    })
  }

  useEffect(() => {
    getChannel()
  }, [])
  return (
  <div className="pl-3">
    <ChannelInfo title={channels.channelTitle} image={channels.channelImage} SVnumber={channels.SVnumber} introduction={channels.channelDescription} />
    <h4 className="mt-3 font-bold">為你推薦</h4>
    <div className="flex mt-4 border-b border-solid border-sidebarBorder pb-2">
    <Swiper >
        {channels.videos.map(data => (
        <SwiperSlide key={data.videoId} >
          <ChannelVideoCard title={data.title} image={data.thumbnails.maxres?.url} describe={data.description} onClick={() => navigate(`/video/${data.videoId}`)} />
        </SwiperSlide>
        ))}
      </Swiper>
    </div> 
  </div>
  )
}

export default Channel

