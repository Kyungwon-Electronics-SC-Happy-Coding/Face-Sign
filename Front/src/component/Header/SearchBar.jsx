import React, { Fragment, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ToolTip from "component/ToolTip";

const SearchBar = ({ searchState }) => {
  const [search, setSearch] = searchState;
  return (
    <Fragment>
      <div className="w-96 h-12 my-auto flex-row hidden lg:flex">
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
      <div className="block lg:hidden">
        <ToolTip>
          <div className="w-96 h-12 my-auto flex-row">
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
        </ToolTip>
      </div>
    </Fragment>
  );
};

export default SearchBar;
