import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Resumrpage from "./pages/Resumrpage";


function App() {
  const [count, setCount] = useState(0);

  return (
    <> 
       <div className="w-4/5 ml-[20%] p-10 bg-[#0F172A] text-white min-h-screen overflow-x-hidden">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resumrpage />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
