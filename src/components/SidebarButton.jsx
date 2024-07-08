import clsx from "clsx"

const SidebarButton = ({icon, children}) => {
  return(
    <button className="flex justify-start w-full items-center p-2 rounded-md hover:bg-sidebarButtonColor">
        <i className={clsx(icon, "mr-3")}></i>
        <span>{children}</span>
    </button>
  )
}

export default SidebarButton