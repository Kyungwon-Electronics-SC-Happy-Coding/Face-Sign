import React from "react";
import {
  UserCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Header = ({ searchState }) => {
  const [search, setSearch] = searchState;

  return (
    <div className="h-[4.5rem] w-full bg-white shadow-md py-4 px-10 flex flex-row">
      <div className="w-96 h-full flex flex-row">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-backwhite w-full px-3 outline-none rounded-l-md"
          placeholder="Search for.."
        />
        <button className="bg-backMint h-full w-12 p-3 rounded-r-md">
          <MagnifyingGlassIcon className="stroke-textOrange w-full h-full stroke-[4px]" />
        </button>
      </div>
      <div className="border-l-2 w-32 h-full ml-auto flex felx-row">
        <button className="flex flex-row ml-auto">
          <UserCircleIcon className="w-8 h-8 mr-2 my-auto stroke-gray-400" />
          <p className="text-gray-400 my-auto">Admin</p>
        </button>
      </div>
    </div>
  );
};

export default Header;
