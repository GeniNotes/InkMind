import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full p-2 border border-zinc-500 rounded-lg bg-zinc-700 bg-opacity-50"
        placeholder="搜索..."
      />
    </div>
  );
};

export default SearchBar;
