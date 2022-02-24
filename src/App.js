import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Rehber from "./components/Rehber";
import IT from "./components/IT";
import Software from "./components/Software";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path="/rehber" element={<Rehber />} />
        <Route path="/it" element={<IT />} />
        <Route path="/software" element={<Software />} />
      </Routes>
    </div>
  );
}

export default App;
