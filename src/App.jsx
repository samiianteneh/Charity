import { Route, Router, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MemberNew from "./Pages/Admin/Member/memberNew";
import EventNew from "./Pages/Admin/events/eventNew";
import EditEventNew from "./Pages/Admin/events/edit/editEventNew";
import LandingPage from "./Pages/landinPage/LandingPage";
import LoginPage from "./Pages/login/loginPage";
import Admin from "./Pages/Admin/admin";
import AdminNew from "./Pages/Admin/AdminHome/adminNew";
import Settings from "./Pages/Admin/Settings/settings";

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
            {tokens ? (
              <>
                <Route path="/admin" element={<Admin />} />
                <Route path="/adminHome" element={<AdminNew />} />
                <Route path="/members" element={<MemberNew />} />
                <Route path="/events" element={<EventNew />} />
                <Route path="/editEvent/:id" element={<EditEventNew />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/home" element={<LandingPage />} />
              </>
            ) : (
              ""
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
