import loggo from '../assets/loggo.jpg'
import {Link} from "react-router-dom"

const Navbar = () => {
    let navBtn = 'text-blue-600 text-base font-semibold no-underline decoration-0  pb-1 mx-3 '
  return (
    <div>
        <nav className='bg-white p-2 fixed top-0 left-0 w-full z-50 font-semibold tracking-wide text-blue-500 border-b border-gray-200'>
            <div className= ' bg-white m-2 flex gap-10  items-center relative h-16'>
            <img 
            src={loggo}
            alt='logo'
            className='w-30 h-30 object-contain absolute left-0 top-1/2 -translate-y-1/2'
            />
            <div className=' flex items-center gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2  text-gray-700'>
            <Link to="/" className={navBtn} style={{textDecoration: "none"}}>Home</Link>
            <Link to="/events" className={navBtn} style={{textDecoration: "none"}}>Events</Link>
            <Link to="/bookings" className={navBtn} style={{textDecoration: "none"}}>My Bookings</Link>
            </div>
            <div className=' bg-blue-600 text-white border-2  absolute right-3 px-3 py-2 cursor-pointer rounded-xl hover:bg-blue-700'>
                <button className='cbg-blue-600 text-white px-2 py-1 rounded-lg hover:bg-blue-700 transition duration-200'>Login</button>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

