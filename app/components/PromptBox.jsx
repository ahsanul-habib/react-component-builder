"use client"
import { FaCode } from "react-icons/fa";
import GenerateButton from "./GenerateButton";

const PromptBox = ({
  componentDescription,
  setComponentDescription,
  generateCode,
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <FaCode className="text-blue-400 text-3xl mr-2" />
        <h2 className="text-xl text-white font-semibold">Code Editor</h2>
      </div>
      <textarea
        value={componentDescription}
        onChange={(e) => setComponentDescription(e.target.value)}
        rows={2}
        className="w-full p-4 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your react component description here..."
      />
      <div className="flex justify-end my-3">
        <GenerateButton onSmash={generateCode} />
      </div>
    </div>
  );
};

export default PromptBox;
