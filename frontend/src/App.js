import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Forget_password from "./pages/Forget_password";
import Navbar from "./headfoot/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget_password" element={<Forget_password/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
