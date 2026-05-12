function DoctorCard({ doctor }) {
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

      <button className="w-full bg-blue-500 text-white py-2 rounded-lg mt-5 hover:bg-blue-600">
        Book Appointment
      </button>

    </div>
  );
}

export default DoctorCard;