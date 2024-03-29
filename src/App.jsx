import { Route, Routes } from "react-router";
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
import AdminNew from "./Pages/Admin/AdminHome/AdminNew";
import Donation from "./Pages/Donation/Donation";
import SuccessPage from "./Pages/Donation/SuccessPage";
import Message from "./Components/Message";

function App() {
  const tokens = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return (
    <>
      <Message />

      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/donation" element={<Donation />} />
            <Route path="/success" element={<SuccessPage />} />
            {tokens ? (
              <>
                <Route path="/adminHome" element={<AdminNew />} />
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
