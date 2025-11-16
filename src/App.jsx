import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About Us" element={<Page2/>} />
        <Route path="/Products & Services" element={<Page3/>} />
        <Route path="/Contact Us" element={<Page4/>} />
        <Route path="/Geleri & Berita" element={<Page5/>} />
      </Routes>
    </Router>
  )
}

export default App
