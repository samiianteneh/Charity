import { Route, Router, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/login/loginPage";
import Admin from "./Pages/Admin/AdminHome/admin";
import LandingPage from "./Pages/landinPage/LandingPage";
import AdminNew from "./Pages/Admin/AdminHome/adminNew";
import MemberNew from "./Pages/Admin/Member/memberNew";
import EventNew from "./Pages/Admin/events/eventNew";
import Settings from "./Pages/Admin/Settings/settings";
import EditEventNew from "./Pages/Admin/events/edit/editEventNew";
import FeedBack from "./Pages/Admin/FeedBack/FeedBack";

function App() {
  const tokens = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  console.log(user?.Admin, "useruser");
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            {tokens ? (
              <>
                <Route path="/home" element={<LandingPage />} />
                <Route path="/adminHome" element={<AdminNew />} />
                <Route path="/members" element={<MemberNew />} />
                <Route path="/events" element={<EventNew />} />
                <Route path="/feedBack" element={<FeedBack />} />
                <Route path="/editEvent/:id" element={<EditEventNew />} />
                <Route path="/settings" element={<Settings />} />
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
