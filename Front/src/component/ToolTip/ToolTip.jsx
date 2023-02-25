import React, { Fragment, useState } from "react";

const defaultComponent = () => {
  return <div className="w-10 h-10 bg-backMint">Tip</div>;
};

const ToolTip = ({ customComponent, children }) => {
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <button onClick={() => setOpen((prev) => !prev)}>
        {customComponent ? (
          <customComponent />
        ) : (
          <div className="w-10 h-10 bg-backMint">Tip</div>
        )}
      </button>
      <div
        className={`absolute flex flex-col shadow-xl transition-all ${
          open ? "w-auto h-auto" : "w-0 h-0 overflow-hidden"
        }`}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default ToolTip;
