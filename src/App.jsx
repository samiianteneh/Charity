import { Route, Router, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Member from "./Admin/Member/Member";
import Events from "./Admin/events/Events";
import EditEvent from "./Admin/events/edit/editEvent";
import { LandingPage } from "./Pages/landinPage/LandingPage";
import LoginPage from "./Pages/login/loginPage";
import Admin from "./Pages/Admin/admin";
function App() {
  const tokens = localStorage.getItem("token");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            {tokens && name && role == "admin"}
            <Route path="/admin" element={<Admin />} />
            <Route path="/events" element={<Events />} />
            <Route path="/editEvent/:id" element={<EditEvent />} />
            <Route path="/member" element={<Member />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
