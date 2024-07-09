import logo from "@/assets/images/flat-icon-people-bboy-dance-set-isolated-on-white-background-free-vector.png"

const Header = () => {
  return(
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
  )
}

export default Header