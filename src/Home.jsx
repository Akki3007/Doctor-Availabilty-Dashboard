import { useNavigate } from "react-router-dom";
import hero from "./assets/hero.png";

function Home() {
    const navigate = useNavigate();


    return (
  <>
            <nav className="flex justify-between items-center bg-blue-600 text-white p-4">
                <h1 className="text-2xl font-bold">
                    Healthcare Dashboard
                </h1>

                <ul className="flex gap-6">
                    <li>Home</li>
                    <li>Doctors</li>
                    <li>Contact</li>
                </ul>
            </nav>

            <div className="text-center p-10">
                <h1 className="text-4xl font-bold mb-4">
                    Healthcare Dashboard
                </h1>

                <img
                    src={hero}
                    alt="Healthcare"
                    className="w-[500px] mx-auto rounded-lg"
                />

                <p className="mt-4 text-gray-600">
                    Check doctor availability and consultation slots
                </p>

                <button
                    onClick={() => navigate("/doctors")}
                    className="mt-6 bg-blue-500 text-white px-6 py-2 rounded"
                >
                    Check Doctor Availability
                </button>
            </div>
            </>
            );
}

            export default Home;