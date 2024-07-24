import React from "react";
import SearchBar from "./SearchBar";
import UserCenter from "./UserCenter";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`flex flex-col bg-zinc-700 text-white fixed top-0 left-0 h-full ${isOpen ? "w-64" : "w-0"} overflow-hidden transition-all duration-300`}
    >
      <SearchBar />
      <div className="flex-1 overflow-y-auto">
        {"可滚动的内容"}
        <div className="p-4">内容区域</div>
      </div>
      <UserCenter />
    </div>
  );
};

export default Sidebar;
