import {useEffect, useState} from 'react'
import EventGrid from './EventGrid';

const EventSection = () => {
    console.log("EventSection rendered");
    const categories = ["All", "Music", "Sports", "Movies", "Comedy"];
    
    const [allEvents, setAllEvents] = useState([])
    const [selectedCategories, setSelectedCategories] = useState("All")
    
    useEffect(() => {
        fetch("http://localhost:5000/listings")
        .then((res) => res.json())
        .then((data) => setAllEvents(data))
        .catch((err) => {
            console.log("error : ", err)
        })
    },[])
    
    const filterEvents = 
    selectedCategories === "All" ? allEvents : allEvents.filter((event) => event.category === selectedCategories
)
return (
    <div className='mt-4 ml-10 mr-10  flex-row gap-10'>
        <div className=' flex gap-4 mb-8 '>

        {categories.map((category) => {
            return (

                <button key={category} 
                className={`px-5 py-2 rounded-lg! ${
        selectedCategories === category
          ? 'bg-blue-500 text-white'
          : 'bg-white text-black shadow-[0_0_10px_rgba(0,0,0,0.15)]'
      }`}
                onClick={() => setSelectedCategories(category)}>{category}</button>
            )
        })}
        </div>
        <div> 
        <EventGrid events={filterEvents}
         noPadding={true} />

        </div>
    </div>
  )
}

export default EventSection
