import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";

const SideNavData = [
  {
    title: "Home Users",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Create User",
    path: "/User/Create",
    icon: <FaIcons.FaUserPlus />,
    cName: "nav-text"
  },
  {
    title: "Update User",
    path: "/User/Update",
    icon: <GrIcons.GrUpdate />,
    cName: "nav-text"
  },
  {
    title: "Delete User",
    path: "/User/Delete",
    icon: <AiIcons.AiFillDelete />,
    cName: "nav-text"
  }
];

export default SideNavData;