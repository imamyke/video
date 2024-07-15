import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import BannerCard from "@/components/BannerCard"
import { useEffect, useState } from "react"

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
    console.log(channelData)
  }

  useEffect(() => {
    getChannel()
  }, [])
  return (
  <>
    <div className="flex mt-4 border-b border-solid border-sidebarBorder pb-2">
      <img src={snow.image} className=" w-[250px] h-[250px] rounded-full" />
      <div className="pl-6">
        <p className="text-[50px]">{snow.ChannelName}</p>
        <span className="pl-5">訂閱數 : 1000</span>
        <span className="pl-5">影片數 : 200</span>
        <p></p>
      </div>
    </div>
    <div className="text-white mt-4">
      {coverData.map(data => (
        <BannerCard title={data.snippet.channelTitle} image={data.snippet.thumbnails.maxres?.url} describe={data.snippet.description} onClick={() => navigate(`/channel/${data.snippet.channelId}`)} />
      ))}
    </div>
  </>
  )
}

export default Channel