
const SearchBar = () => {
  return (
      <div className='ml-10 mt-8 h-16 flex justify-between bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.15)] mr-10'>
            <div className='flex-1 relative'>
            <i className='fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 '></i>
            <input
            type='text'
            placeholder='Search events, artist, teams or venue'
            className='h-full  pl-11 w-full outline-none'
            />
            </div>
            <button className="bg-blue-500 rounded-lg! w-40 m-2 p-2 text-white">
  Search
</button>
        </div>
  )
}

export default SearchBar
