import "./App.css";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Components/Pages/Error";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
