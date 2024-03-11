import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RiCalendarEventLine } from "react-icons/ri";
import { GrTransaction } from "react-icons/gr";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "adminNew",
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
    key: "transaction",
    label: "Transaction",
    path: "transaction",
    icon: <GrTransaction />,
  },

  {
    key: "settings",
    label: "Settings",
    path: "settings",
    icon: <FiSettings />,
  },
];
