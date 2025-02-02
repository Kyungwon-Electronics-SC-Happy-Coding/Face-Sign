import React, { Fragment, useState } from "react";
import {
  MagnifyingGlassIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";

const SearchBar = ({ searchState }) => {
  const [search, setSearch] = searchState;
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <div className="w-full lg:w-96 h-12 my-auto flex-row hidden lg:flex">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-backwhite w-full px-3 outline-none rounded-l-md"
          placeholder="Search for.."
        />
        <button className="bg-backMint h-full w-12 px-3 rounded-r-md">
          <MagnifyingGlassIcon className="stroke-textWhite w-full h-full stroke-[4px]" />
        </button>
      </div>
      <div className="flex lg:hidden ml-auto">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden m-auto"
        >
          <MagnifyingGlassCircleIcon className="stroke-gray-400 w-8 h-8" />
        </button>
        <div
          className={`absolute w-full lg:w-96 overflow-hidden top-[4.5rem] right-0 transition-all ${
            open ? "h-12" : "h-0"
          }`}
        >
          <div className="w-full lg:w-96 h-12 flex flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white w-full px-3 outline-none rounded-l-md"
              placeholder="Search for.."
            />
            <button className="bg-backMint h-full w-12 px-3 rounded-r-md">
              <MagnifyingGlassIcon className="stroke-textWhite w-full h-full stroke-[4px]" />
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SearchBar;
