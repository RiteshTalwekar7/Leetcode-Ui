function Sidebar() {
  return (
    <>
      <div className="w-full">
        <div className="flex gap-18">
          <div className="px-4 py-2">
            <h2 className="text-lg text-[#e5e5e5]">My Lists</h2>
          </div>
          <div className="pr-2 py-3">
            <img src="/sidebar-flip-svgrepo-com.svg" className="w-6 h-6"></img>
          </div>
        </div>
        <div>
          <h4 className="px-4 text-sm text-[#e5e5e5]">Created by me</h4>
        </div>
      </div>
    </>
  )
}

export default Sidebar