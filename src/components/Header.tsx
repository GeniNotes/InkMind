import React, { useState, useEffect } from "react";

interface HeaderProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const [localSidebarOpen, setLocalSidebarOpen] = useState(isSidebarOpen);

  useEffect(() => {
    // 监听传递的 isSidebarOpen prop 变化,更新本地状态
    setLocalSidebarOpen(isSidebarOpen);
  }, [isSidebarOpen]);

  const handleToggle = () => {
    setLocalSidebarOpen((prev) => !prev);
    setTimeout(() => {
      toggleSidebar();
    }, 0);
  };
  return (
    <div
      className={`fixed top-0 ${localSidebarOpen ? "left-64" : "left-0"} right-0 p-3 z-10 bg-zinc-800 border-b border-zinc-500 h-16 transition-all duration-300`}
    >
      <div className="flex items-center justify-start">
        <button
          onClick={handleToggle}
          className="text-zinc-800 focus:outline-none"
        >
          {localSidebarOpen ? "关闭" : "打开"}
        </button>
        <h1 className="text-2xl font-bold text-white pl-4">ChatGPT Client</h1>
      </div>
    </div>
  );
};

export default Header;
