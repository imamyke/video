import SidebarButton from "@/components/SidebarButton"

const contentList = [
  {
    title:"你的頻道",
    icon:"fa-solid fa-crown"
  },
  {
    title:"喜歡的影片",
    icon:"fa-solid fa-thumbs-up"
  },
  {
    title:"播放清單",
    icon:"fa-solid fa-hourglass-start"
  }
]

const SideBar = () => {
  return(
    <div className="p-5 fixed top-[72px] left-0">
      <div className="w-[200px] border-b border-solid border-sidebarBorder pb-2">
        <button className="flex justify-start w-full items-center p-2 rounded-md hover:bg-sidebarButtonColor">
          <i className="fa-solid fa-house mr-3"></i>
          <span>首頁</span>
        </button>
        <button className="flex justify-start w-full items-center p-2 rounded-md hover:bg-sidebarButtonColor">
          <i className="fa-regular fa-eye mr-3"></i>
         <span>短片</span>
       </button>
      </div>
      <h3 className="pt-2">你的內容</h3>
      <div className="flex flex-col w-[200px] border-b border-solid border-sidebarBorder pb-2">
      {contentList.map(item => (
            <SidebarButton key={item.title} icon={item.icon}>
              {item.title}
            </SidebarButton>
          ))}
      </div>
      <h3 className="pt-2">訂閱內容</h3>
    </div>
  )
}

export default SideBar