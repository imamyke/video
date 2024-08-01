
import boogieTie from "@/assets/images/boogie tie.jpeg"
import yi from "@/assets/images/yi.jpeg"
import talkSnow from "@/assets/images/talk snow.jpeg"
import talkLockingHistory from "@/assets/images/talkLockHistory.jpeg"
import talkBeigow from "@/assets/images/beigow.jpeg"
import BannerCard from "@/components/BannerCard"
import axios from "axios"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Dancer from "@/components/Dancer"
import {picture} from "@/assets/images/picture"
import TopicCard from "@/components/TopicCard"
import Swiper from "@/components/Swiper/index.jsx"
import { SwiperSlide } from 'swiper/react';
import { useVideoStore } from "@/store/video"
import { videoApi } from "../../api/module/video"


//console.log(picture)
const{dreamer , leTwins, yiBO} = picture

console.log(videoApi.getVideos())

const danceStyle = [
  'Popping',
  'Locking',
  'Wacking',
  'HipHop',
  'Krump',
  'Breaking'
]

//影片ID
const artistsID = [
  '-GQg25oP0S4',
  'Fvx76LPfjhI',
  'hu5RAPOmjYc',
  'AvbdItgxgNw',
  '5sT20edl02I',
  'LTR8qVXXIwQ'
]

//完整的url
const artistsURL = artistsID.map(id => (
  `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=snippet`
))

const dancerData =[
  {
    name:"Snow",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1XNDUNNkbkUxrHrnzAN370w2htt8_uanHg&s",
    style:"Popping",
    channelId:"UCHeVKE-n20VTJ7DN4Ehb_4A"
  },
  {
    name:"築夢者",
    image:{},
    style:"Breaking",
    channelId:"UC1NtiocEoZM5X6CTgOGMElw"
  },
  {
    name:"Les Twins",
    image:{leTwins},
    style:"Hip Hop",
    channelId:"UCUkl1Yy2O0W0xNTqwpDjY9A"
  },
  {
    name:"一博",
    image:{yiBO},
    style:"All Style",
    channelId:"UCWuGk9AJbjAtPQIf9hkMOOw"
  }
]

const topics = [
  {
    id: 1,
    title:'這就是街舞爆料RRRRRRRRRRR',
    image: boogieTie
  },
  {
    id: 2,
    title:'我認真solo起來，連我自己都怕',
    image: yi
  },
  {
    id: 3,
    title:'『Like? Unlike? 都給我尬起來』',
    image: talkSnow
  },
  {
    id: 4,
    title:'『來聊聊台灣Locking歷史吧』',
    image: talkLockingHistory 
  },
  {
    id: 5,
    title:'ft.Beigow『你各位有什麼想問的快問～』',
    image: talkBeigow
  }
]



//透過api取回資料
const getArtist = async(url) =>{
  return await axios.get(url)
}

const Home = () => {
  const navigate = useNavigate() //跳轉頁面
  const { hotVideos, setHotVideos} = useVideoStore()
  //
  useEffect(() => {
    if(!hotVideos.length){
    Promise.all([
      getArtist(artistsURL[0]),
      getArtist(artistsURL[1]),
      getArtist(artistsURL[2]),
      getArtist(artistsURL[3]),
      getArtist(artistsURL[4]),
      getArtist(artistsURL[5]),
    ]).then(res => {
      const data = []
      for (const item of res) {
        data.push({...item.data.items[0].snippet, videoId:item.data.items[0].id})
      }
      setHotVideos(data)
    })
    }
  }, [])

  console.log(hotVideos)

  return (
    <>
    <h4 className="mt-1 font-bold">熱門舞風</h4>
    <div className="mt-2">
      {danceStyle.map((dance, idx) =>(
        <button key={idx} className="py-2 px-3 border-2 border-white border-solid rounded-lg mr-12 last:mr-0">
          {dance}
        </button>
      ))}
      <button><i class="fa-solid fa-ellipsis"></i></button>
    </div>
    <h4 className="mt-5 font-bold">舞者</h4>
    <div className="flex mt-2">
      {dancerData.map(item => (
        <Dancer key={item.name} image={item.image} name={item.name} style={item.style} onClick={() => navigate(`/channel/${item.channelId}`)} />
      ))}
    </div>
    <h4 className="mt-5 font-bold">特色話題</h4>
    <Swiper>
        {topics.map(item => (
          <SwiperSlide key={item.id} className="w-[300px] ">
            <TopicCard title={item.title} image={item.image} />
          </SwiperSlide>
        ))}
    </Swiper>
    <h4 className="mt-5 font-bold">本週熱門</h4>
    <div className="flex flex-wrap">
      {hotVideos.map(data => (
        <BannerCard id={data.videoId} title={data.title} image={data.thumbnails.maxres?.url} describe={data.description} onClick={() => navigate(`/video/${data.videoId}`)} />
      ))}
    </div>
  </>
  )
}

export default Home