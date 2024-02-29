import { Route, Router, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { LandingPage } from "./landinPage/LandingPage";
import LoginPage from "./login/loginPage";
import Admin from "./Admin/admin";

function App() {
  return (
    <>
      {/* <LandingPage /> */}

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
