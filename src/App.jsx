import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import Footer from "./components/Footer";
import Workflow from "./components/Workflow";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SeparateServices from "./components/SeparateServices";



const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
  
       
       
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/services" element={<SeparateServices />} > 

        </Route>
      </Routes>
      <Footer /> 
    </BrowserRouter>
    
    </>
  );
};

export default App;
