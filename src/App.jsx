import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

import Petiscos from "./pages/Petiscos";

import Ingressos from "./pages/Ingressos";

import Sobre from "./pages/Sobre";
import Bebidas from "./pages/Bebidas";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/ingressos" element={<Ingressos />} />
          <Route path="/petiscos" element={<Petiscos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
