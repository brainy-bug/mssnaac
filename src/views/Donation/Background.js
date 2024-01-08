import React from "react";

const Background = () => {
  return (
    <div
      className='bg-white flex-shrink-0 bg-repeat sm:bg-no-repeat bg-left h-full'
      style={{
        backgroundImage: `url('/svgs/multiple.svg')`,
        backgroundSize: "450px",
      }}
    ></div>
  );
};

export default Background;
