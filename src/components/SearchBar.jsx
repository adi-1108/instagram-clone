import React from "react";
import { Search } from "styled-icons/feather";

const SearchBar = () => {
  return (
    <div className="rounded-full shadow-md px-4 bg-white">
      <div className="flex items-center gap-1">
        <Search width={24} />
        <input
          type="text"
          placeholder="Search Something"
          className="px-4 py-2 focus:outline-none  "
        />
      </div>
    </div>
  );
};

export default SearchBar;
