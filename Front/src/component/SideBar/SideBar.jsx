import React from "react";
import { Link } from "react-router-dom";
import SideRouteList from "data/SideRouteList";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

const SideBar = () => {
  return (
    <div className="h-screen w-sidebar flex-col bg-backMint px-3 hidden lg:flex">
      <div className="w-full h-header border-b-2 border-borderMint flex flex-row">
        <FaceSmileIcon className="h-12 w-12 stroke-textWhite my-auto" />
        <Link to="/">
          <p className="h-full flex items-center ml-3 text-xl text-textWhite font-semibold">
            Face Sign
          </p>
        </Link>
      </div>
      <div className="px-5">
        {SideRouteList.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="w-full h-12 flex flex-row py-4"
          >
            <item.Icon className="w-6 h-6 my-auto stroke-textWhite stroke-2" />
            <p className="ml-3 my-auto text-textWhite text-lg">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
