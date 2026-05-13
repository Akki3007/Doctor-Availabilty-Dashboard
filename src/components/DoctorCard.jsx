import { useState } from "react";
function DoctorCard({ doctor }) {
  const [showSlots, setShowSlots] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition">

      <img
        src={doctor.image}
        alt={doctor.name}
        className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-blue-100"
      />

      <h2 className="text-2xl font-bold mt-4">
        {doctor.name}
      </h2>

      <p className="text-gray-500">
        {doctor.specialization}
      </p>

      <p className="mt-2 text-sm">
        {doctor.experience}
      </p>

      <p className="mt-2 text-blue-600 font-medium">
        {doctor.availability}
      </p>

      <button
        onClick={() => setShowSlots(!showSlots)}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
      >
        See Available Slots
      </button>

      <input
        type="date"
        min={new Date().toISOString().split("T")[0]}
        max={
          new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split("T")[0]
        }
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border p-2 rounded mt-4 w-full"
      />

      
        {
          showSlots && selectedDate && (
          <div className="mt-4 text-sm">
            <p>Available slots for {selectedDate}</p>

            <p>10:00 AM</p>
            <p>11:30 AM</p>
            <p>2:00 PM</p>
          </div>
        )
      }
      
      <div className="mt-4 text-left">
        <h3 className="font-semibold mb-2">Consultation Type</h3>

        <ul className="list-disc pl-5 text-gray-700">
          <li>Video Consultation</li>
          <li>Audio Consultation</li>
          <li>In-Person</li>
        </ul>
      </div>

    </div>
  );
}

export default DoctorCard;