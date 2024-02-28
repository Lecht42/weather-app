import React from "react";

const CircularProgressBar = () => {
  return (
    <div className="flex justify-center items-center w-full h-full z-50 ">
      <div className="w-10 h-10 border-4 border-blue-300 rounded-full spinner border-t-transparent" />
    </div>
  );
};

export default CircularProgressBar;
