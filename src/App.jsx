import { useState } from "react";
import DoctorCard from "./components/DoctorCard";
import DoctorDashboard from "./components/DoctorDashboard";

function App() {

  const doctors = [
    {
      id: 1,
      name: "Dr. Raj Kumari",
      specialization: "Cardiologist",
      experience: "10+ Years Experience",
      availability: "10:00 AM - 2:00 PM",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
    },

    {
      id: 2,
      name: "Dr. Priya Sharma",
      specialization: "Dermatologist",
      experience: "8+ Years Experience",
      availability: "12:00 PM - 5:00 PM",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
    },

    {
      id: 3,
      name: "Dr. Arun Kumar",
      specialization: "Neurologist",
      experience: "12+ Years Experience",
      availability: "9:00 AM - 1:00 PM",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d",
    },

    {
      id: 4,
      name: "Dr. katherine",
      specialization: "Pediatrician",
      experience: "7+ Years Experience",
      availability: "4:00 PM - 8:00 PM",
      image:
        "https://images.unsplash.com/photo-1651008376811-b90baee60c1f",
    },
  ];

  return <DoctorDashboard doctors={doctors} />;
}

export default App;

