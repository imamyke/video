import axios from "axios"
import { useParams } from "react-router-dom"
import BannerCard from "@/components/BannerCard"
import { useEffect, useState } from "react"

const Channel = () => {
const [coverData, setCoverData] = useState([])

  const { id } = useParams()
  const getChannel = async() => {
    const { data: channelData } = await axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${id}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=contentDetails`)
    const playListId = channelData.items[0].contentDetails.relatedPlaylists.uploads
    const { data: playList } = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${playListId}&key=AIzaSyB6yEJercL6to8ROq9DFH2gUAJA0Xk1mCc&part=snippet,contentDetails,status&maxResults=5`)
    setCoverData(playList.items)
  }

  useEffect(() => {
    getChannel()
  }, [])
  return (
    <div className="text-white">
      {coverData.map(data => (
        <BannerCard title={data.snippet.channelTitle} image={data.snippet.thumbnails.maxres?.url} describe={data.snippet.description} onClick={() => navigate(`/channel/${data.snippet.channelId}`)} />
      ))}
    </div>
  )
}

export default Channel