
import boogieTie from "@/assets/images/boogie tie.jpeg"
import BannerCard from "@/components/BannerCard"
import axios from "axios"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Dancer from "../../components/Dancer"
import {picture} from "@/assets/images/picture"

console.log(picture)
const{dreamer , leTwins, yiBO} = picture

const danceStyle = [
  'Popping',
  'Locking',
  'Wacking',
  'HipHop'
]

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
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1XNDUNNkbkUxrHrnzAN370w2htt8_uanHg&s",
    style:"Popping",
    channelId:"UCHeVKE-n20VTJ7DN4Ehb_4A"
  },
  {
    name:"築夢者",
    image:{dreamer},
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
      setCoverData(data)
      console.log(data);
    })
  }, [])


  //const getChannel = async() => {
  //  const data = await YTApi.getChannel()
  //  console.log(data)
  //}

  //axios.get("").then(res => console.log(res))


  return (
    <>
    <h4 className="mt-1">熱門舞風</h4>
    <div className="mt-2">
      {danceStyle.map((dance, idx) =>(
        <button key={idx} className="py-2 px-3 border-2 border-white border-solid rounded-lg mr-12 last:mr-0">
          {dance}
        </button>
      ))}
    </div>
    <h4 className="mt-5 ">舞者</h4>
    <div className="flex mt-2">
      {dancerData.map(item => (
        <Dancer key={item.name} image={item.image} name={item.name} style={item.style} onClick={() => navigate(`/channel/${item.channelId}`)} />
      ))}
    </div>
    <h4 className="mt-5">特色話題</h4>
    <div className="w-[300px] mt-2 border">
        <img src={boogieTie} className="w-full h-[150px] object-cover rounded-xl"/>
        <h2 className="mt-3 whitespace-nowrap overflow-hidden text-ellipsis">這就是街舞爆料阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</h2>
    </div>
    <h4 className="mt-5">本週熱門</h4>
      {coverData.map(data => (
        <BannerCard title={data.title} image={data.thumbnails.maxres?.url} describe={data.description} onClick={() => navigate(`/video/${data.snippet.resourceId.videoId}`)} />
      ))}
  </>
  )
}

export default Home