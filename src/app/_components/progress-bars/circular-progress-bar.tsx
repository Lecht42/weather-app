import React from "react";

const CircularProgressBar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-50 flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-blue-300 rounded-full spinner border-t-transparent" />
    </div>
  );
};

export default CircularProgressBar;
