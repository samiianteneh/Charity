import { Route, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/login/loginPage";
import LandingPage from "./Pages/landinPage/LandingPage";
import MemberNew from "./Pages/Admin/Member/memberNew";
import EventNew from "./Pages/Admin/events/eventNew";
import Feedback from "./Pages/Admin/FeedBack/FeedBack";
import SettingsTab from "./Pages/Admin/Settings/settingsTab";
import Post from "./Pages/Admin/Posts/Post";
import Donators from "./Pages/Donators/Donators";
import AdminTab from "./Pages/Admin/AdminHome/adminTab";

function App() {
  const tokens = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            {tokens ? (
              <>
                <Route path="/adminHome" element={<AdminTab />} />
                <Route path="/members" element={<MemberNew />} />
                <Route path="/events" element={<EventNew />} />
                <Route path="/settings" element={<SettingsTab />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/posts" element={<Post />} />
                <Route path="/donators" element={<Donators />} />
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
