import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';


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
      <div className=' bg-white mx-5 my-2 rounded-3xl shadow-md p-6 flex '>
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

      

      <div className=' bg-white rounded-xl shadow-2xl p-6 mx-5 '>
        <form className='flex flex-col'>

          <div 
      className='mb-1'>
      <h5 className='font-bold text-2xl'>Attendee information</h5>
      <p>Please provide the information of the person attend the event.</p>
      </div>

          <label htmlFor='Fullname' className='block mb-2 ml-1  font-semibold'>Full Name</label>
          <div className="relative w-full">
            <FiUser
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl pointer-events-none"
            />
            
            <input
            type="text"
            placeholder="Enter your full name"
            id="Fullname"
            className="w-full border border-gray-300 rounded-2xl py-3 pl-10 pr-3 mb-3 outline-none focus:border-blue-500"
            />
            </div>


          <label htmlFor='email' className='block mb-2 ml-1  font-semibold'>Email Address</label>
          <div className="relative w-full">
            <FiMail
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl pointer-events-none"
            />
            
            <input
            type="text"
            placeholder="Enter your full name"
            id="email"
            className="w-full border border-gray-300 rounded-2xl py-3 pl-10 pr-3 mb-3 outline-none focus:border-blue-500"
            />
            </div>

          <label htmlFor='Fullname' className='block mb-2 ml-1  font-semibold'>Full Name</label>
          <div className="relative w-full">
            <FiPhone
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl pointer-events-none"
            />
            
            <input
            type="text"
            placeholder="Enter your full name"
            id="Fullname"
            className="w-full border border-gray-300 rounded-2xl py-3 pl-10 pr-3 mb-3 outline-none focus:border-blue-500"
            />
            </div>

        </form>
      </div>
    </div>
  )
}

export default BookingPage
