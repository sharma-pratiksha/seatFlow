
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();

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
    <div className="max-w-5xl mx-auto p-6">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-72 object-cover rounded-xl"
      />

      <h1 className="text-3xl font-bold mt-6">
        {event.title}
      </h1>

      <p className="text-gray-600 mt-3">
        📍 {event.venue}, {event.city}
      </p>

      <p className="text-gray-600 mt-2">
        📅 {new Date(event.date).toLocaleDateString()}
      </p>

      <p className="text-gray-600 mt-2">
        Category: {event.category}
      </p>

      <p className="text-2xl font-semibold mt-4">
        ₹{event.price} <span className="text-base font-normal">/ ticket</span>
      </p>

      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-6 hover:bg-blue-700"
        onClick={() => alert("Next step: ticket booking")}
      >
        Book Tickets
      </button>
    </div>
  );
};

export default EventDetails;
