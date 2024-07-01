const bannerCard = ({title, describe, image }) =>{
  return(
    <div className="relative w-[600px] h-[250px] rounded-2xl overflow-hidden">
          <div className="absolute top-3 left-5"> 
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </div>
          <div className="absolute bottom-4 left-5">
            <h2 className="text-2xl mb-3">{title}</h2>
            <p>{describe}</p>
          </div>
          <img src={image} className="w-full h-[500px] object-cover"/>
          <i className="fa-regular fa-heart absolute bottom-4 right-5 text-2xl"></i>
    </div>
  )
}

export default bannerCard
