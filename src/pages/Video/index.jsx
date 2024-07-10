const Video = () => {

  return(
    <>
      <div>
       <iframe width="700" height="394" src="https://www.youtube.com/embed/NvKF4zT0exA?si=ALZap13bgovZv-Y4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       <p className="text-[30px]">video title</p>
      </div>
      <div className="flex w-full">
        <div className="flex">
          <img className=" w-[70px] h-[70px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg1XNDUNNkbkUxrHrnzAN370w2htt8_uanHg&s"/>
          <div className="pl-[40px]">
            <p className="text-[25px]">頻道名</p>
            <p className="text-[15px] text-gray-500">訂閱數</p>
          </div>
          <i className="fa-regular fa-thumbs-up w-[100px] h-[40px] text-2xl pl-[7px] ml-[300px] mt-[10px] border border-solid border-white rounded-lg  hover:bg-sidebarButtonColor"></i>
        </div>
      </div>
      <div className=" mt-[40px]" type="text">
        <input></input>
      </div>
    </>

  )
}

export default Video