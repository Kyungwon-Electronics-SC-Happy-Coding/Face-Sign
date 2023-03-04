import React from "react";
import { UserCircleIcon, FaceSmileIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { NeedLogin, NoLogin } from "component/UserQueries/UserQueries";

const Header = ({ needSearch, searchState }) => {
  return (
    <div className="h-header w-screen lg:w-[calc(100vw-theme(space.sidebar))] bg-white shadow-md px-3 lg:px-10 flex flex-row">
      <div className="h-16 my-auto flex flex-row lg:hidden">
        <FaceSmileIcon className="w-12 h-full stroke-borderMint my-auto" />
        <Link to="/">
          <p className="h-full flex items-center ml-3 text-xl text-borderMint font-semibold">
            Face Sign
          </p>
        </Link>
      </div>
      {needSearch && <SearchBar searchState={searchState} />}
      <div
        className={`lg:border-l-2 lg:pl-10 h-10 my-auto flex felx-row ${
          needSearch ? "ml-3 lg:ml-auto" : "ml-auto"
        }`}
      >
        <NeedLogin>
          <div className="flex flex-row ml-auto">
            <UserCircleIcon className="w-8 h-8 mr-2 my-auto stroke-gray-400" />
            <p className="text-gray-400 my-auto hidden lg:block">Admin</p>
          </div>
        </NeedLogin>
        <NoLogin>
          <p>Login</p>
        </NoLogin>
      </div>
    </div>
  );
};

export default Header;
