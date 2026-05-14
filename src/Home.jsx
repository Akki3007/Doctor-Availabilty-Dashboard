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

                <div className="relative w-[500px] mx-auto">

                    <img
                        src={hero}
                        alt="Healthcare"
                        className="w-full rounded-lg grayscale brightness-50"
                    />

                   <div className="absolute top-[62%] left-[50%] transform -translate-x-1/2 -translate-y-2/2">
                        <div className="text-green-600 text-[500px] font-bold opacity-90 leading-none">
                            +
                        </div>


                    </div>

                </div>

                <p className="mt-4 !text-black font-medium">
                    Check doctor availability and consultation slots
                </p>

                <button
                    onClick={() => navigate("/doctors")}
                    className="mt-6 bg-blue-500 text-white px-6 py-2 rounded"
                >
                    Check Doctor Availability
                </button>
            </div >
        </>
    );
}

export default Home;