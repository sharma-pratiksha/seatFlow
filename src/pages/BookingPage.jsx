import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


const BookingPage = () => {
  let {id} = useParams();

    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

  useEffect(() => {
      const fetchEvent = async () => {
        try {
          setLoading(true);
          setError("");
  
          const response = await fetch(
            `http://localhost:5000/listings/${id}`
          );
  
          if (!response.ok) {
            throw new Error("Event details could not be loaded");
          }
  
          const data = await response.json();
          setEvent(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchEvent();
    }, [id]);

      if (loading) {
    return <p className="p-6">Loading event details...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">{error}</p>;
  }

  if (!event) {
    return <p className="p-6">Event not found.</p>;
  }

  return (
    <div className=''>
      <div className=' bg-white m-5 rounded-3xl shadow-md p-6 flex '>
      <div className="w-[310px] h-[210px] rounded-xl overflow-hidden">
        <img
           src={event.image}
           alt={event.title}
          className="w-full h-full object-cover"
           />
      </div>
          
             <div className="border-l border-gray-400 h-[210px] mx-4"></div>
             <div>
              <h5 className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">event summary</h5>
             <h1>{event.title}</h1>
             <p>📍{event.venue}, {event.city}</p>
             <p> 📅{event.date}</p>
             <p>₹{event.price}</p>
             </div>
        
      </div>

      <div 
      className='bg-red-600 p-6 '>
        <form>

        </form>
      </div>
    </div>
  )
}

export default BookingPage
