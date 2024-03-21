import React, { useState } from "react";
import { DASHBOARD_SIDEBAR_LINKS } from "../Constant/sidebarData";
import { IoChevronForwardOutline } from "react-icons/io5";

export default function Breadcrumb({ selectedSidebarKey }) {
  // Find the selected sidebar item
  const selectedItem = DASHBOARD_SIDEBAR_LINKS.find(
    (item) => item.key === selectedSidebarKey
  );

  // Get the index of the selected item
  const selectedIndex = DASHBOARD_SIDEBAR_LINKS.findIndex(
    (item) => item.key === selectedSidebarKey
  );

  // Generate breadcrumbs up to the selected item
  const breadcrumbs = DASHBOARD_SIDEBAR_LINKS.slice(0, selectedIndex + 1);

  return (
    <div className="flex items-center text-gray-500 font-poppins font-normal text-[13px]">
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={item.key}>
          <span>{item.icon}</span>
          <span className="mx-1">{item.label}</span>
          {index < breadcrumbs.length - 1 && (
            <IoChevronForwardOutline className="text-sm" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
