import { YTApi } from "../../api/module/youtube"
import logo from "@/assets/images/flat-icon-people-bboy-dance-set-isolated-on-white-background-free-vector.png"
import boogieTie from "@/assets/images/boogie tie.jpeg"
import BannerCard from "@/components/BannerCard"
import SidebarButton from "../../components/SidebarButton"
import axios from "axios"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Dancer from "../../components/Dancer"

//影片ID
const artistsID = [
  '-GQg25oP0S4',
  'xQ635vE2RQI',
  'PQjovLrnvVo',
  'AvbdItgxgNw',
  '5sT20edl02I',
  '3QTf7I-qnyY'
]

//完整的url
const artistsURL = artistsID.map(id => (
  `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=snippet`
))

const dancerData =[
  {
    name:"Snow",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkWeeDgI4L5fyqCaVRKa-P2AEUkPemdpehw&s",
    style:"Popping",
    channelId:"UCHeVKE-n20VTJ7DN4Ehb_4A"
  },
  {
    name:"築夢者",
    image:"data:image/png;base64,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",
    style:"Breaking",
    channelId:"UC1NtiocEoZM5X6CTgOGMElw"
  },
  {
    name:"Les Twins",
    image:"data:image/jpeg;base64,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",
    style:"Hip Hop",
    channelId:"UCUkl1Yy2O0W0xNTqwpDjY9A"
  },
  {
    name:"一博",
    image:"data:image/jpeg;base64,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",
    style:"All Style",
    channelId:"UCWuGk9AJbjAtPQIf9hkMOOw"
  }

]

const dancerURL = dancerData.map(item => (
  `https://www.googleapis.com/youtube/v3/videos?id=${item.videoId}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=snippet`
))


//透過api取回資料
const getArtist = async(url) =>{
  return await axios.get(url)
}

const Home = () => {
  const navigate = useNavigate() //跳轉頁面
  const[coverData, setCoverData] = useState([])//宣告一個coverData儲存狀態
  
  //
  useEffect(() => {
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
        data.push(item.data.items[0].snippet)
      }
      console.log(data);
      setCoverData(data)
    })
  }, [])

  const[DancerData, setDancerData] = useState([])

  useEffect(() => {
    Promise.all([
      getArtist(dancerURL[0]),
      getArtist(dancerURL[1]),
      getArtist(dancerURL[2]),
      getArtist(dancerURL[3]),
    ]).then(res => {
      const DCdata = []
      for (const item of res) {
        DCdata.push(item.data.items[0])
      }
      console.log(DCdata);
      setDancerData(DCdata)
    })
  }, [])//?????????

  const danceStyle = [
    'Popping',
    'Locking',
    'Wacking',
    'HipHop'
  ]

  //const getChannel = async() => {
  //  const data = await YTApi.getChannel()
  //  console.log(data)
  //}

  //axios.get("").then(res => console.log(res))


  
  const data = {
    title:'樂器人',
    describe:'#最新資訊 ＃卡點天才 ＃world fame us',
    image:"https://i.ytimg.com/vi/588pS2wLv48/maxresdefault.jpg"
  }

  return (
    <>
    <h4 className="">熱門舞風</h4>
    <div className="">
      {danceStyle.map((dance, idx) =>(
        <button key={idx} className="py-2 px-3 border-2 border-white border-solid rounded-lg mr-12 last:mr-0">
          {dance}
        </button>
      ))}
    </div>
    <h4 className="title">舞者</h4>
    <div className="flex">
      {dancerData.map(item => (
        <Dancer key={item.name} image={item.image} name={item.name} style={item.style} onClick={() => navigate(`/channel/${item.channelId}`)} />
      ))}
    </div>
    <h4 className="title">特色話題</h4>
    <div className="w-[300px] border">
        <img src={boogieTie} className="w-full h-[150px] object-cover rounded-xl"/>
        <h2 className="mt-3 whitespace-nowrap overflow-hidden text-ellipsis">這就是街舞爆料阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</h2>
    </div>
    <h4 className="">本週熱門</h4>
    <BannerCard title={data.title} image={data.image} describe={data.describe}/>
      {coverData.map(data => (
        <BannerCard title={data.channelTitle} image={data.thumbnails.maxres?.url} describe={data.description} onClick={() => navigate(`/channel/${data.channelId}`)} />
      ))}
  </>
  )
}

export default Home