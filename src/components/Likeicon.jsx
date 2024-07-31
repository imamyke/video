import { useVideoStore } from "@/store/video"
import { useState } from "react"

const LikeIcon = ({ id }) => {
  const { hotVideos, setHotVideos } = useVideoStore()
  const isLike = hotVideos.find( item => item.videoId === id).isLike
  const [LikeStatus,setLikeStatus] = useState(isLike)

  const handleLike = () => {
    const newVideos = hotVideos.map(item => {
      if(item.id === id){
        item.isLike = !isLike
        return item
      }
      return item
    })
    setHotVideos(newVideos)
    setLikeStatus(!LikeStatus)
  }

  return(
    <div onClick={handleLike}>
      {
        LikeStatus ? (
          <i className="fa-solid fa-heart absolute bottom-4 right-5 text-2xl"></i>
        ):(
          <i className="fa-regular fa-heart absolute bottom-4 right-5 text-2xl"></i>
        )
      }
    </div>
  )
}

export default LikeIcon