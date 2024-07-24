import React from "react";

const UserCenter: React.FC = () => {
  return (
    <div className="p-4 bg-zinc-700 hover:bg-zinc-600 hover:bg-opacity-50 active:bg-zinc-400 active:bg-opacity-50 bg-opacity-50">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-zinc-500 rounded-full"></div>
        <div>
          <h2 className="text-lg font-bold">nuo-promise</h2>
        </div>
      </div>
    </div>
  );
};
export default UserCenter;
