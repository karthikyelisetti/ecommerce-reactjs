import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./components/Landingpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
      </Routes>
    </>
  );
}

export default App;
