import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PokedexByID from "./pages/PokedexById";
import Pokedex from "./pages/Pokedex";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Footer from "./components/shared/Footer";

function App() {


  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route element={<ProtectedRoutes/>}>
        <Route path="pokedex" element={<Pokedex />}/>
        <Route path="pokedex/:id" element={<PokedexByID/>}/>
        </Route> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App