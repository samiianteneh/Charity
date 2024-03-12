import { MdOutlineManageAccounts } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RiCalendarEventLine } from "react-icons/ri";
import { FaHome } from "react-icons/fa";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "adminHome",
    icon: <FaHome />,
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
  // {
  //   key: "transaction",
  //   label: "Transaction",
  //   path: "transaction",
  //   icon: <GrTransaction />,
  // },

  {
    key: "settings",
    label: "Settings",
    path: "settings",
    icon: <FiSettings />,
  },
];
