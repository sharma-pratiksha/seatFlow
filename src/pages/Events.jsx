import React, { useState, useEffect } from 'react'
import EventFilter from '../components/EventFilter';
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard';
import EventGrid from '../components/EventGrid';

const Events = () => {

  const [categories, setCategories] = useState("")
  const [city, setCity] = useState("")
  const [date, setDate] = useState("")
  const [allEvents, setAllEvents] = useState([])

  useEffect(() => {

    fetch("http://localhost:5000/listings")
      .then((res) => res.json())
      .then((data) => {
        setAllEvents(data)
      })
      .catch((err) => {
        console.log("Event fetching error", err)
      })

  }, [])


  const filterEvents = allEvents.filter((event) => {

    if (categories && event.category !== categories) {
      return false
    }

    if (city && event.city !== city) {
      return false
    }

    if (
      date &&
      new Date(event.date).toISOString().split("T")[0] !== date
    ) {
      return false
    }

    return true
  })


  console.log("Filtered events - ", filterEvents)


  return (

    <div className='pt-29 font-semibold tracking-wide'>

      {/* Heading */}

      <div>

        <h1 className='text-5xl ml-10 mb-2'>
          All Events
        </h1>

        <p className='ml-10 font-sans text-gray-600'>
          Discover and book unforgettable experiences
        </p>

      </div>
      <SearchBar/>

      <EventFilter
      categories={categories}
      setCategories={setCategories}
      city={city}
      setCity={setCity}
      date={date}
      setDate={setDate}
      />

      {/* Events Grid */}

      <EventGrid events={filterEvents}/>

    </div>

  )
}

export default Events