import { BrowserRouter, Routes, Route } from "react-router-dom";
import DoctorDashboard from "./components/DoctorDashboard";
import Home from "./Home";
import doctors from "./components/data";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/doctors"
          element={<DoctorDashboard doctors={doctors} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

