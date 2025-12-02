import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

// 1. IMPORT KOMPONEN DETAIL BARU
import SubsidiaryDetailPage from "./pages/SubsidiaryDetailPage"; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About-Us" element={<Page2/>} />
        
        {/* 2. TAMBAHKAN RUTE DINAMIS UNTUK DETAIL ANAK PERUSAHAAN */}
        {/* Rute ini akan menangani /subsidiary/sub-6, /subsidiary/sub-1, dst. */}
        <Route path="/Subholding/:id" element={<SubsidiaryDetailPage />} />
        
        <Route path="/Products&Services" element={<Page3/>} />
        <Route path="/Contact-Us" element={<Page4/>} />
        <Route path="/Geleri&Berita" element={<Page5/>} />
      </Routes>
    </Router>
  )
}

export default App