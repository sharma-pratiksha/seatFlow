const SearchBar = ({search, setSearch}) => {

  return (

    <div className='ml-10 mr-10 mt-8 flex gap-3'>

      {/* Input */}
      <div className='flex-1 h-16 relative bg-white rounded-lg shadow-[0_0_10px_rgba(0,0,0,0.15)]'>

        <i className='fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'></i>

        <input
          type='text'
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search events, artist, teams or venue'
          className='h-full w-full pl-11 pr-4 outline-none rounded-lg'
        />

      </div>

      {/* Search Button */}
      <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 rounded-lg! transition'>
        Search
      </button>

    </div>

  )
}

export default SearchBar