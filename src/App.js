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
import { useEffect, useState } from "react";
import { Api } from "./utils/Api";
import { Constants } from "./utils/Constants";

// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState({
    id: "",
    email: "",
    username: "",
    roles: [],
  });

  useEffect(() => {
    new Api().get(Constants.AUTH_PREFIX + "/userInfo").then((res) => {
      console.log(res.data);
      if (res.data != "") {
        setUser(res.data);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Articol />} />
        <Route
          path="/login"
          element={<Login user={user} setUser={setUser} />}
        />
        <Route path="/register" element={<Register user={user} />} />
      </Routes>

      <button
        onClick={() => {
          console.log(user);
        }}
      >
        check user
      </button>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
