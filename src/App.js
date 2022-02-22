import "./App.css";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import Navbar from "./Components/Layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "./Components/Pages/Error";
import AddUsers from "./Components/Users/AddUsers";
import ViewUser from "./Components/Users/ViewUser";
import EditUser from "./Components/Users/EditUser";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/users/add" element={<AddUsers />} />
          <Route exact path="/users/view/:id" element={<ViewUser />} />
          <Route exact path="/users/edit/:id" element={<EditUser />} />
          <Route exact path="*" element={<Error />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
