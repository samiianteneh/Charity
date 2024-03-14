/* eslint-disable react/prop-types */
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import LOGO from "../assets/logo.png";
import avatar from "../assets/woman.png";
import { DASHBOARD_SIDEBAR_LINKS } from "../Constant/sidebarData";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const linkClasses =
  "flex items-center gap-2 px-3 font-medium hover:no-underline h-12";

const Sidebar = () => {
  const dispatch = useDispatch();
  const localUser = useSelector((state) => state.authReducer.user);
  const userArray = [];
  userArray.push(JSON.parse(localUser));
  console.log("localUser", userArray);

  useEffect(() => {}, []);
  return (
    <div className="hidden sm:flex flex-col col-span-1 md:col-span-2 md:px-4 font-poppins overflow-hidden scrollbar-hide">
      <Link
        to="/adminHome"
        className="flex flex-col justify-center items-center gap-2 py-3 pb-10"
      >
        <img src={LOGO} alt="Noah Giving Hands" className=" pb-2" />
      </Link>
      <div className="flex-1 flex-col text-sm">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col col-span-2 justify-start items-center mt-auto border-gray-300 bg-white p-3 my-3 rounded-[5px] border-[1px]">
        <div className="flex items-center gap-2">
          <img src={avatar} alt="female avatar" className="w-[40px] h-[40px]" />
          {userArray?.map((user) => (
            <div className="flex flex-col">
              <p className="text-gray-800 text-[13px] font-semibold">
                {user?.fullName}
              </p>
              <p className="text-gray-800 text-[11px] font-normal">
                {user?.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  const isSettings = item.key === "settings";

  return (
    <Link
      to={`/${item.path}`}
      className={classNames(
        pathname.includes(item.path)
          ? "bg-white px-4 text-gray-700 font-bold rounded-[10px]"
          : isSettings
          ? "border-t-[1px] border-gray-400 text-gray-500 mt-6"
          : "text-gray-500 px-4 h-10",
        linkClasses
      )}
    >
      <span className="text-xl">{item.icon}</span>
      <span className=" hidden lg:inline-block font-quicksand font-normal">
        {item.label}
      </span>
    </Link>
  );
}

export default Sidebar;
