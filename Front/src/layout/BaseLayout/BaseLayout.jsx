import React, { useState } from "react";
import Header from "component/Header";
import SideBar from "component/SideBar";

const BaseLayout = ({ children, searchState }) => {
  const baseSearchState = useState("");

  return (
    <div className="flex flex-row h-screen w-screen">
      <SideBar />
      <div className="flex flex-col bg-backwhite">
        <Header
          needSearch={searchState ? true : false}
          searchState={searchState ? searchState : baseSearchState}
        />
        <div className="w-screen lg:w-[calc(100vw-theme(space.sidebar))] h-[calc(100vh-theme(space.header))] flex flex-col overflow-y-scroll scrollbar-hide">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
