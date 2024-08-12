
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
import TopicCard from "@/components/TopicCard"
import Swiper from "@/components/Swiper/index.jsx"
import GrabCursor from "@/components/Swiper/grabCursor.jsx"
import { SwiperSlide } from 'swiper/react';
import { useVideoStore } from "@/store/video.js"
import {Api} from "@/api/module/video.js"

const danceStyle = [
  'Popping',
  'Locking',
  'Wacking',
  'HipHop',
  'Krump',
  'Breaking',
  'Tutting',
  'House'
]

//影片ID
const artistsID = [
  '5zIEHwTPGRA',
  'w_QS5ZJLYWA',
  'P8RSUJVCYsM',
  'TvHtn-BP5YY',
  'SS2p9MkU2fw',
  'Te6NYSEAUsc'
]

//完整的url
const artistsURL = artistsID.map(id => (
  `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=snippet`
))


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

const getChannelsData = async() =>{
  return await Api.getChannels()
}

//透過api取回資料
const getArtist = async(url) =>{
  return await axios.get(url)
}

const Home = () => {
  const navigate = useNavigate() //跳轉頁面
  const { hotVideos, setHotVideos} = useVideoStore()
  const { dancerCards, setDancerCards} = useVideoStore()

  useEffect(() => {
    if(!dancerCards.length){
      getChannelsData().then(res => {
          const dancerData = res.data
          setDancerCards(dancerData)
        }
      )
    }

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
        data.push({...item.data.items[0].snippet , videoId:item.data.items[0].id})
      }
      setHotVideos(data)
    })
    }
  }, [])

  console.log(hotVideos)
  console.log(dancerCards)

  return (
    <>
    <h4 className="mt-1 font-bold">熱門舞風</h4>
    <div className="mt-2">
      {danceStyle.map((dance, idx) =>(
        <button key={idx} className="py-2 px-3 border-2 border-white border-solid rounded-lg mr-12 last:mr-0">
          {dance}
        </button>
      ))}
      <button><i className="fa-solid fa-ellipsis"></i></button>
    </div>
    <h4 className="mt-5 font-bold">舞者</h4>
    <div className="flex mt-2">
    <GrabCursor>
      {dancerCards.map(item => (
        <SwiperSlide className="w-[200px]">
          <Dancer key={item.channelId} image={item.channelImage} name={item.channelTitle} style={item.danceStyle} onClick={() => navigate(`/channel/${item.channelId}`)} />
        </SwiperSlide>
      ))}
    </GrabCursor>
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