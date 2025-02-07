import React from "react";
import { FaMagic } from "react-icons/fa";

const GenerateButton = ({ onSmash }) => {
  return (
    <button
      onClick={onSmash}
      className="flex items-center bg-blue-500 text-white gap-1 px-4 py-2 cursor-pointerfont-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 "
    >
      Generate Code
      <FaMagic className="text-xl ml-2" />
    </button>
  );
};

export default GenerateButton;
