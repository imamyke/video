import { useVideoStore } from "@/store/video"
import { useState } from "react"

const LikeIcon = ({ id, className }) => {
  const { hotVideos, setHotVideos } = useVideoStore()
  const isLike = hotVideos.find( item => item.videoId === id)?.isLike
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
    <div onClick={handleLike} className={className}>
      {
        LikeStatus ? (
          <i className="fa-solid fa-heart text-[20px]"></i>
        ):(
          <i className="fa-regular fa-heart text-[20px]"></i>
        )
      }
    </div>
  )
}

export default LikeIcon