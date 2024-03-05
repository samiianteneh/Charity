import React from "react";
import EditDisplay from "./editDisplay";
import Sidebar from "../../Sidebar";
import { charity } from "../../../../Constant/charity";
import { useParams } from "react-router";

function EditEvent({}) {
  const { id } = useParams();

  const filterdCharity = charity?.filter((event) => {
    return event?.eventId == id;
  });

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Media query for mobile devices */}
      <div className="md:hidden">
        <header className="flex justify-center items-center border-b-2">
          <Sidebar />
        </header>
        <main className="flex-grow">
          <div className="text-center my-5">
            <EditDisplay />
          </div>
        </main>
      </div>
      {/* Media query for desktop devices */}
      <div className="hidden md:flex flex-grow">
        <Sidebar />
        <main className="flex-grow">
          {/* {props} */}
          <div className="text-center my-5 mx-5">
            <EditDisplay data={filterdCharity} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default EditEvent;
