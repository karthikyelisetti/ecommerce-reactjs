import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./components/Landingpage";
import Electronics from "./components/electronics/Electronics";
import Cart from "./components/Cart";
import Fashion from "./components/fashion/Fashion";
import Furnishing from "./components/furnishing/Furnishing";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/fashion" element={<Fashion/>} />
        <Route path="/furnishing" element={<Furnishing/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
