import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './component/Home';
import Contact from './component/Contact';
import About from './component/About';
import Project from './component/Project';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes> 
    {/* <h2>protfolio</h2> */}

    </>
  );
}

export default App;
