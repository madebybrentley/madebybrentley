import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipesPage from "./pages/Recipes";
import AboutPage from "./pages/About";
import ConnectPage from "./pages/Connect";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cream text-[#333] font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<RecipesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/connect" element={<ConnectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
