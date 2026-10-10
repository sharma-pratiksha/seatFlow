import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";

function App() {
  return (
    <div className="bg-white min-h-screen">
      <BrowserRouter>
        <Routes>

          {/* Pages with Navbar and Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/bookings" element={<Bookings />} />
          </Route>

          {/* Authentication page without Navbar */}
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
