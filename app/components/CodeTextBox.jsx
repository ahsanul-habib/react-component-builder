import React, { useState } from 'react';
import { FaCode } from 'react-icons/fa';

const CodeTextBox = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <FaCode className="text-blue-400 text-3xl mr-2" />
        <h2 className="text-xl text-white font-semibold">Code Editor</h2>
      </div>
      <textarea
        value={code}
        onChange={handleChange}
        className="w-full h-72 p-4 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write your TypeScript code here..."
      />
      <div className="flex justify-end mt-2">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200">
          Run Code
        </button>
      </div>
    </div>
  );
};

export default CodeTextBox;