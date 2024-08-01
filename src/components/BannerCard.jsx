import LikeIcon from "./Likeicon.jsx"

const BannerCard = ({title, describe, image, onClick, id }) =>{
  return(
    <div className="relative w-[600px] h-[360px] rounded-2xl overflow-hidden">
      <div onClick={onClick}>
          <div className="absolute top-3 left-5">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <div className="absolute bottom-4 left-5">
            <h2 className="text-2xl mb-3">{title}</h2>
            {/* <p className="">{describe}</p> */}
          </div>
      </div>
      <img src={image} className="w-full h-full object-cover"/>
      <LikeIcon id={id} className='absolute bottom-4 right-5 text-2xl'/>
    </div>
  )
}

export default BannerCard
