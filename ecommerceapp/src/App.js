import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landingpage from "./components/Landingpage";
import Cart from "./components/Cart";
import Electronics from "./components/products/electronics/Electronics";
import Fashion from "./components/products/fashion/Fashion";
import Furnishing from "./components/products/furnishing/Furnishing";
import Groceries from "./components/products/groceries/Groceries";
import Automotives from "./components/products/automotives/Automotives";
import Beautycare from "./components/products/beautycare/Beautycare";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage/>} />
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/fashion" element={<Fashion/>} />
        <Route path="/furnishing" element={<Furnishing/>} />
        <Route path="/groceries" element={<Groceries/>} />
        <Route path="/automotives" element={<Automotives/>} />
        <Route path="/beautycare" element={<Beautycare/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  );
}

export default App;
