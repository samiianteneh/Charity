import React from "react";
import Sidebar from "../Sidebar";
import EventList from "./EventList";

function Events() {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Media query for mobile devices */}
      <div className="md:hidden">
        <header className="flex justify-center items-center border-b-2">
          <Sidebar />
        </header>
        <main className="flex-grow">
          <div className="text-center my-5">
            <EventList />
          </div>
        </main>
      </div>
      {/* Media query for desktop devices */}
      <div className="hidden md:flex flex-grow">
        <Sidebar />
        <main className="flex-grow">
          <div className="text-center my-5 mx-5">
            <EventList />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Events;