import React, { useState } from "react";
import Header from "component/Header";
import SideBar from "component/SideBar";

const BaseLayout = ({ children, searchState }) => {
  const baseSearchState = useState("");

  return (
    <div className="flex flex-row h-[100vh] w-[100vw]">
      <SideBar />
      <div className="w-full flex flex-col bg-backwhite">
        <Header
          needSearch={searchState ? true : false}
          searchState={searchState ? searchState : baseSearchState}
        />
        <div className="w-full h-full flex flex-col overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseLayout;
