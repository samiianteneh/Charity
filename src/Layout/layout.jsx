/* eslint-disable react/prop-types */

import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="sm:grid sm:grid-cols-12 gap-1 bg-sidebar h-screen w-screen">
      <Sidebar />
      <div className="col-span-10">
        <div className=" scrollbar-hide min-w-[680px] h-full p-3  overflow-auto ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
