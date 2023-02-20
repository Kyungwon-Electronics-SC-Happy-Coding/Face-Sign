import React from "react";
import BaseLayout from "layout/BaseLayout";
import SideRouteList from "data/SideRouteList";
import TagCard from "component/TagCard";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <BaseLayout>
      <div className="p-10 grid grid-flow-row grid-cols-4 gap-10">
        {SideRouteList?.map((item) => (
          <TagCard key={item.id}>
            <Link to={item.link} className="w-full h-full flex flex-row px-7">
              <item.Icon className="w-14 h-14 my-auto stroke-borderMint" />
              <p className="ml-auto my-auto text-borderMint text-3xl">
                {item.title}
              </p>
            </Link>
          </TagCard>
        ))}
      </div>
    </BaseLayout>
  );
};

export default Main;
