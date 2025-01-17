import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import Signup from "./pages/Signup";
import { CartProvider } from "./components/ContextReducer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createuser" element={<Signup />} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
