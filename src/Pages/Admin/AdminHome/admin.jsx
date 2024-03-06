import React from "react";
import AdminHome from "./AdminHome";
import Sidebar from "../Sidebar";

function Admin() {
  const handleLogout = () => {
    dispatch(logoutUser());
    window.location.href = "/login";
  };
  return (
    <div className="flex flex-col h-screen bg-white">
      <button onClick={handleLogout}>Logout</button>
      {/* Media query for mobile devices */}
      <div className="md:hidden">
        <header className="flex justify-center items-center border-b-2">
          <Sidebar />
        </header>
        <main className="flex-grow">
          <div className="text-center my-5">
            <AdminHome />
          </div>
        </main>
      </div>
      {/* Media query for desktop devices */}
      <div className="hidden md:flex flex-grow">
        <Sidebar />
        <main className="flex-grow">
          <div className="text-center my-5">
            <AdminHome />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Admin;
