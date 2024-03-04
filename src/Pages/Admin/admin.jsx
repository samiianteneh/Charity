import React from "react";
import Sidebar from "./Sidebar";

function Admin() {
  return (
    <div className="flex">
      <div className="w-30 text-center text-9xl bg-blue-500">
        <Sidebar />
      </div>
      <div className="w-70 text-center text-9xl bg-green-500">
        <div className="text-center text-9xl w-[100%]">admin admin </div>
      </div>
    </div>
  );
}

export default Admin;
