import { Route, Router, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { LandingPage } from "./Pages/landinPage/LandingPage";
import LoginPage from "./Pages/login/loginPage";
import Admin from "./Pages/Admin/admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
