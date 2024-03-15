import { MdOutlineManageAccounts } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { VscFeedback } from "react-icons/vsc";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "home",
    label: "Home",
    path: "home",
    icon: <FaHome />,
  },
  {
    key: "dashboard",
    label: "Dashboard",
    path: "adminHome",
    icon: <LuLayoutDashboard />,
  },

  {
    key: "members",
    label: "Members",
    path: "members",
    icon: <MdOutlineManageAccounts />,
  },

  {
    key: "events",
    label: "Events",
    path: "events",
    icon: <RiCalendarEventLine />,
  },
  {
    key: "feedBack",
    label: "feedBack",
    path: "feedBack",
    icon: <VscFeedback />,
  },

  {
    key: "settings",
    label: "Settings",
    path: "settings",
    icon: <FiSettings />,
  },
];
