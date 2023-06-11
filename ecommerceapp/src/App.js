import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./components/Landingpage";
import Electronics from "./components/electronics/Electronics";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/electronics" element={<Electronics/>} />
      </Routes>
    </>
  );
}

export default App;
