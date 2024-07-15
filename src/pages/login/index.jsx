
const Login=()=>{
  return(
  <>
    <form className="flex flex-col items-center my-[300px] w-[400px] mx-auto">
      <div className="flex mb-4">
        <lable className="w-[100px] block text-left mr-2">使用者名稱</lable>
        <input
          type="text"
          className="px-2 py-1 w-56 rounded bg-gray-100 text-black focus:outline-0"
        />
      </div>
      <div className="flex mb-4">
        <lable className="w-[100px] block text-left mr-2">密碼</lable>
        <input
          type="password"
          className="px-2 py-1 w-56 text-black rounded bg-gray-100 focus:outline-0"
        />
      </div>
      <button className="px-3 py-2 text-[22px] mt-6 border border-solid border-white rounded-lg hover:bg-slate-500" >登錄</button>
    </form>
  </>
  )
}

export default Login