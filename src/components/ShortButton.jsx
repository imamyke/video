import clsx from "clsx"

const ShortButton = ({icon, children}) =>{
  return(
    <div className="w-[48px] h-[72px] mx-auto mt-8 ">
      <button className="w-[48px] h-[48px] bg-slate-500 rounded-full">
        <i className={clsx(icon, "text-[25px]")}></i>
      </button>
      <p>{children}</p>
    </div>
  )
}

export default ShortButton