import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Events from './pages/Events';
import Bookings from './pages/Bookings';

function App() {

  return (
    <div className='bg-white min-h-screen'>
      
  <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>

    </BrowserRouter>
    </div>
  )
}

export default App;
