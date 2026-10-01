const EventCard = ({ event }) => {

  return (
    <div className='border rounded-lg overflow-hidden shadow-sm'>

      <img
        src={event.image}
        alt={event.title}
        className='w-full object-cover h-52'
      />

      <div className='p-4'>

        <h2 className='text-xl font-semibold'>
          {event.title}
        </h2>

        <p className='text-gray-600 mt-2'>
          {event.venue}, {event.city}
        </p>

        <p className='text-gray-600 mt-1'>
          {new Date(event.date).toLocaleDateString()}
        </p>

        <p className='font-semibold mt-2'>
          Starting from ₹{event.price}
        </p>

        <button
          className='bg-blue-600 text-white px-4 py-2
                     rounded-lg! mt-4 hover:bg-blue-700
                     transition duration-200'
        >
          Book Now ↗︎
        </button>

      </div>

    </div>
  )
}

export default EventCard