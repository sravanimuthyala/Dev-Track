import {
  FaBook,
  FaBug,
  FaBullseye,
  FaCode,
  FaFire,
  FaFolder,
  FaHome,
  FaTrophy,
  FaUser,
} from "react-icons/fa";
import { useState } from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { useTheme } from "../context/ThemeContext";
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { darkmode } = useTheme();
  return (
    <>
      <div
        className={`${
          darkmode ? "dark" : ""
        } ${collapsed ? "w-16 p-2" : "w-70 p-8"} flex flex-col justify-between dark:text-black text-white text-xl bg-cyan-600 min-h-[calc(100vh-64px)] shrink-0 transition-all duration-300`}
      >
        <ul className="dark:[&>li]:hover:bg-black  [&>li]:w-full [&>li]:hover:bg-white [&>li]:hover:text-cyan-600 [&>li]:hover:rounded-lg [&>li]:p-2 [&>li]:hover:cursor-pointer list-none">
          {collapsed && (
            <li className="mb-4 flex items-center ">
              <button
                onClick={() => setCollapsed(!collapsed)}
                className=" hover:cursor-pointer"
              >
                <GoSidebarCollapse size={24} />
              </button>
            </li>
          )}
          <li className="mb-4 flex items-center ">
            <>
              <FaHome size="24" className="mr-3 shrink-0" />
              {!collapsed && "Home"}
            </>
            {!collapsed && (
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="ml-auto hover:cursor-pointer"
              >
                <GoSidebarCollapse size={24} />
              </button>
            )}
          </li>
          <li className="mb-4 flex items-center">
            <FaFolder size="24" className="mr-3  shrink-0" />
            {!collapsed && "My Projects"}
          </li>
          <li className="mb-4 flex items-center">
            <FaCode size="24" className="mr-3  shrink-0" />{" "}
            {!collapsed && "Coding"}
          </li>
          <li className="mb-4 flex items-center">
            <FaBook size="24" className="mr-3  shrink-0" />{" "}
            {!collapsed && "Learning"}
          </li>
          <li className="mb-4 flex items-center">
            <FaBug size="24" className="mr-3  shrink-0" />{" "}
            {!collapsed && "Bugs"}
          </li>
          <li className="mb-4 flex items-center">
            <FaBullseye size="24" className="mr-3  shrink-0" />{" "}
            {!collapsed && "Goals"}
          </li>
          <li className="mb-4 flex items-center">
            <FaTrophy size="24" className="mr-3  shrink-0" />{" "}
            {!collapsed && "Achievements"}
          </li>
        </ul>

        <div className="flex flex-col">
          <span className="mb-3 dark:hover:bg-black  hover:bg-white hover:cursor-pointer w-full hover:text-cyan-600 hover:rounded-md p-2 flex items-center">
            <FaUser className="mr-3  shrink-0" />
            {!collapsed && "Profile"}
          </span>
          <span className="dark:hover:bg-black  hover:bg-white hover:cursor-pointer w-full hover:text-cyan-600 hover:rounded-md p-2 flex items-center">
            <FaFire className="mr-3  shrink-0" />
            {!collapsed && "Streak"}
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
