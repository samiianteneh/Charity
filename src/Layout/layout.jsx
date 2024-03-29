/* eslint-disable react/prop-types */

import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="sm:grid sm:grid-cols-12 gap-1 bg-sidebar h-screen w-auto">
      <Sidebar />
      <div className="col-span-10">
        <div className=" scrollbar-hide w-[100%] h-full p-3  overflow-auto ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
