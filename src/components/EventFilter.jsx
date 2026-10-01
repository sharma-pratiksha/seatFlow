import React from 'react'
import { FaList, FaChevronDown, FaMapMarkerAlt, FaCalendarAlt, FaSyncAlt } from 'react-icons/fa'

const EventFilter = ({
    categories,
    setCategories,
    city,
    setCity,
    date,
    setDate
}) => {
  return (
    <div>
        {/* filters */}
      <div className='flex items-center gap-4 ml-10 mr-10 mt-8'>
        {/* categories */}
        <div className='relative flex items-center'>
            <FaList
                        className='absolute left-4 text-gray-500 pointer-events-none'
                      />
                      <select
                      value={categories}
                      onChange={(e) => setCategories(e.target.value)}
                      className='appearance-none bg-white border border-gray-300 shadow-sm
                       text-gray-700 rounded-xl pl-11 pr-10 py-3
                       min-w-45 outline-none cursor-pointer
                       focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200'
                      >
                        <option value="">All Categories</option>
                        <option value="Music">Music</option>
                        <option value="Sports">Sports</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Technology">Technology</option>
                        <option value="Art">Art</option>
                        <option value="Movies">Movies</option>
                        <option value="Theater">Theater</option>
                      </select>
                      {/* Dropdown */}
                      <span>
                        <FaChevronDown 
                        className='absolute right-3 top-1/2 -translate-y-1/2
             text-gray-500 pointer-events-none text-sm'/>
                      </span>
                      </div>

                      <div className='relative flex items-center'>
                        <FaMapMarkerAlt
                        className='absolute left-4 text-gray-500 pointer-events-none'/>
                      <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className='appearance-none bg-white border border-gray-300 shadow-sm
                       text-gray-700 rounded-xl pl-11 pr-10 py-3
                       min-w-45 outline-none cursor-pointer
                       focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200'
                      >
                        <option value=""> All Cities</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Hyderabad">Hyderabad</option>
                      </select>
                      {/* Dropdown */}
                      <span>
                        <FaChevronDown 
                        className='absolute right-3 top-1/2 -translate-y-1/2
             text-gray-500 pointer-events-none text-sm'/>
                      </span>
                      </div>

                      <div className='relative flex items-center'>
                        <FaCalendarAlt className='absolute left-4 text-gray-500 pointer-events-none'/>
                        <input
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className='appearance-none bg-white border border-gray-300 shadow-sm
                       text-gray-700 rounded-xl pl-11 pr-10 py-3
                       min-w-45 outline-none cursor-pointer
                       focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all duration-200'
                        />
                      </div>

                      {/* reset */}
                      <button
                      onClick={() => {
                        setCategories("")
                        setCity("")
                        setDate("")
                      }}
                      className='ml-auto bg-white text-blue-600  px-5 py-2.5
                     rounded-lg! shadow-sm text-base font-semibold hover:bg-blue-50 hover:border-blue-400 hover:shadow-md transition-all duration-200
                     flex items-center gap-2'
                      >
                        <FaSyncAlt className='mr-2 ' />
                        Reset
                      </button>
      </div>
    </div>
  )
}

export default EventFilter
