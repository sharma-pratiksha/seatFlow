import EventCard from './EventCard'

const EventGrid = ({ events, noPadding = false }) => {

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
        noPadding ? '' : 'py-6 px-10'
      }`}>

      {events.length === 0 ? (

        <div className='my-30 w-full flex justify-center items-center'>
          <p className='text-center text-4xl text-gray-500'>
            Oops!
            <br />
            No events found
          </p>
        </div>

      ) : (

        events.map((event) => (
          <EventCard
            key={event._id}
            event={event}
          />
        ))

      )}

    </div>
  )
}

export default EventGrid