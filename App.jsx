import DoctorCard from "./components/DoctorCard";

function App() {

  const doctors = [
    {
      id: 1,
      name: "Dr. Raj Kumari",
      specialization: "Cardiologist",
      experience: "10+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    },

    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Dermatologist",
      experience: "8+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    },

    {
      id: 3,
      name: "Dr. Arun Kumar",
      specialization: "Neurologist",
      experience: "12+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    },

    {
      id: 4,
      name: "Dr. katherine",
      specialization: "Pediatrician",
      experience: "7+ Years Experience",
      image:
        "https://images.unsplash.com/photo-1651008376811-b90baee60c1f",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Our Doctors
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}

      </div>

    </div>
  );
}

export default App;