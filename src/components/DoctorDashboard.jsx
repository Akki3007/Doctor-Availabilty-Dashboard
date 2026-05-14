import { useState } from "react";
import DoctorCard from "./DoctorCard";

function
    DoctorDashboard({ doctors }) {

    const [selectedSpecialization, setSelectedSpecialization] =
        useState("All");
    const [searchDoctor, setSearchDoctor] = useState("");
    const filteredDoctors = doctors.filter((doctor) => {
        const matchSpecialization =
            selectedSpecialization === "All" ||
            doctor.specialization === selectedSpecialization;

        const matchName = doctor.name
            .toLowerCase()
            .includes(searchDoctor.toLowerCase());

        return matchSpecialization && matchName;
    });

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <nav className="bg-blue-600 text-white p-4 rounded-xl mb-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    Healthcare Dashboard
                </h1>

                <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
                    Doctor Dashboard
                </button>
            </nav>

            <h1 className="text-4xl font-bold text-center mb-10">
                Our Doctors
            </h1>
            <div className="flex justify-center mb-10">
                <input
                    type="text"
                    placeholder="Search doctor name"
                    value={searchDoctor}
                    onChange={(e) => setSearchDoctor(e.target.value)}
                    className="p-3 border rounded-lg mr-4"
                />
                <select
                    className="p-3 rounded-lg border"
                    value={selectedSpecialization}
                    onChange={(e) =>
                        setSelectedSpecialization(e.target.value)
                    }
                >

                    <option>All</option>
                    <option>Cardiologist</option>
                    <option>Dermatologist</option>
                    <option>Neurologist</option>
                    <option>Pediatrician</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {filteredDoctors.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}

            </div>

        </div>
    );
}

export default DoctorDashboard;