
import logo from "./assets/images/flat-icon-people-bboy-dance-set-isolated-on-white-background-free-vector.png"
import snow from "./assets/images/snow.png"
import boogieTie from "./assets/images/boogie tie.jpeg"
import BannerCard from "./components/BannerCard"
function App() {
  const danceStyle = [
    'Popping',
    'Locking',
    'Wacking',
    'HipHop'
  ]

  
  const data = {
    title:'樂器人',
    describe:'#最新資訊 ＃卡點天才 ＃world fame us',
    image:'https://www.google.com/imgres?q=hozin&imgurl=https%3A%2F%2Fhiphopdistrict.com.br%2Fimages%2Fblog%2Fartists%2Fhozin--900x900.jpg&imgrefurl=https%3A%2F%2Fhiphopdistrict.com.br%2Fen&docid=fn9TuEScDjFmaM&tbnid=4sZ2dE1H-MMgNM&vet=12ahUKEwivq4Xo3ICHAxUXj68BHUfZO9cQM3oECHAQAA..i&w=900&h=900&hcb=2&ved=2ahUKEwivq4Xo3ICHAxUXj68BHUfZO9cQM3oECHAQAA'
  }
  return (
  <div className="bg-black text-white  ">
    <header className="fixed top-0 w-full z-10 h-[72px] bg-white text-black  text-xl header">
      <div className='px-5 py-3'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <i className="fa-solid fa-list text-3xl mr-3"></i>
              <img src={logo} className="h-12" />
            </div>
            <div className='flex justify-center items-center'>
              <input className="border border-black border-solid focus:outline-none h-10 rounded mr-2 w-56 pl-3" />
              <button className='hover:bg-slate-300 rounded h-10 w-10'>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <button className="login">
              <i className="fa-solid fa-circle-user text-3xl"></i>
            </button>
          </div>
      </div>
    </header>
    <div className="flex pt-[72px] h-screen">
      <div className="p-5">
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
        <div>
          <button>
            <i className="fa-solid fa-crown"></i>
            <span>你的頻道</span>
          </button>
          <button>
            <i className="fa-solid fa-thumbs-up"></i>
            <span>喜歡的影片</span>
          </button>
          <button>
            <i className="fa-solid fa-hourglass-start"></i>
            <span>播放清單</span>
          </button>
        </div>
        <h3>訂閱內容</h3>
      </div>
      <div className="flex-1 p-5">
        <h4 className="">熱門舞風</h4>
        <div className="">
          {danceStyle.map((dance, idx) =>(
            <button key={idx} className="py-2 px-3 border-2 border-white border-solid rounded-lg mr-12 last:mr-0">
              {dance}
            </button>
          ))}
        </div>
        <h4 className="title">舞者</h4>
        <div className="dancers">
          <div className="w-[110px] flex flex-col items-center">
            <img src={snow} className="snow w-[100px] h-[100px] rounded-full"/>
            <span className="underline">snow</span>
            <p className="text-gray-500">popping</p>
          </div>
        </div>
        <h4 className="title">特色話題</h4>
        <div className="w-[300px] border">
            <img src={boogieTie} className="w-full h-[150px] object-cover rounded-xl"/>
            <h2 className="mt-3 whitespace-nowrap overflow-hidden text-ellipsis">這就是街舞爆料阿啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</h2>
        </div>
        <h4 className="">本週熱門</h4>
        <BannerCard title={data.title} image={data.image} describe={data.describe}/>
      </div>
    </div>
  </div>
  )}

export default App 