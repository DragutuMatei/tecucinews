import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Articol from "./pages/Articol";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Articol />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </BrowserRouter> 
  );
}

export default App;
