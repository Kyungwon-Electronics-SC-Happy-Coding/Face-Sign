import React from "react";
import { Link } from "react-router-dom";
import SideRouteList from "data/SideRouteList";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

const SideBar = () => {
  return (
    <div className="h-full w-64 flex flex-col bg-backMint px-3">
      <div className="w-full h-[4.5rem] border-b-2 border-borderMint py-4 flex flex-row">
        <FaceSmileIcon className="h-full w-12 stroke-textOrange my-auto" />
        <Link to="/">
          <p className="h-full flex items-center ml-3 text-xl text-textOrange font-semibold">
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
            <item.Icon className="w-6 h-6 my-auto stroke-textOrange stroke-2" />
            <p className="ml-3 my-auto text-textOrange text-lg">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
