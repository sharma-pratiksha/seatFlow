import { useState } from 'react'
import EventSection from '../components/EventSection'
import SearchBar from '../components/SearchBar'

const Home = () => {
  const [search, setSearch] = useState("")
  return (
    <div className='pt-29 flex-row font-semibold tracking-wide '>
      <h1 className='text-5xl ml-10 mb-4'>Book Tickets For
        <br></br> Your Favourite Events</h1>
        <p className='ml-10 font-sans text-gray-600'>Concerts, Movies, Sports, comedy and more.
            <br></br>
            Discover. Book. Enjoy
        </p>

        <SearchBar
        search={search}
        setSearch={setSearch} />
        <EventSection
        search={search} />
        
    </div>

  )
}

export default Home
