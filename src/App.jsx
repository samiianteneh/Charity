import { Route, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/login/loginPage";
import LandingPage from "./Pages/landinPage/LandingPage";
import AdminNew from "./Pages/Admin/AdminHome/adminNew";
import MemberNew from "./Pages/Admin/Member/memberNew";
import EventNew from "./Pages/Admin/events/eventNew";
import Settings from "./Pages/Admin/Settings/settings";
import EditEventNew from "./Pages/Admin/events/edit/editEventNew";
import Feedback from "./Pages/Admin/FeedBack/FeedBack";

function App() {
  const tokens = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  console.log(user, "userrr");
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            {tokens ? (
              <>
                <Route path="/adminHome" element={<AdminNew />} />
                <Route path="/members" element={<MemberNew />} />
                <Route path="/events" element={<EventNew />} />
                <Route path="/editEvent/:id" element={<EditEventNew />} />
                <Route path="/settings" element={<Settings />} />{" "}
                <Route path="/feedBack" element={<Feedback />} />
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
