import { Route, Router, Routes } from "react-router";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/login/loginPage";
import Admin from "./Pages/Admin/AdminHome/admin";
import Member from "./Pages/Admin/Member/Member";
import Events from "./Pages/Admin/events/Events";
import EditEvent from "./Pages/Admin/events/edit/editEvent";
import LandingPage from "./Pages/landinPage/LandingPage";
import AdminNew from "./Pages/Admin/AdminHome/adminNew";
import MemberNew from "./Pages/Admin/Member/memberNew";
import EventNew from "./Pages/Admin/events/eventNew";
import Transaction from "./Pages/Admin/Transaction/transaction";
import Settings from "./Pages/Admin/Settings/settings";
import EditEventNew from "./Pages/Admin/events/edit/editEventNew";

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
            {tokens && (
              <>
                <Route path="/admin" element={<Admin />} />
                {/* <Route path="/adminNew" element={<AdminNew />} /> */}
                <Route path="/dashboard/adminNew" element={<AdminNew />} />
                <Route path="/dashboard/members" element={<MemberNew />} />
                <Route path="/dashboard/events" element={<EventNew />} />
                <Route
                  path="/dashboard/editEvent/:id"
                  element={<EditEventNew />}
                />
                <Route
                  path="/dashboard/transaction"
                  element={<Transaction />}
                />
                <Route path="/dashboard/settings" element={<Settings />} />

                <Route path="/events" element={<Events />} />
                <Route path="/editEvent/:id" element={<EditEvent />} />
                <Route path="/member" element={<Member />} />
              </>
            )}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
