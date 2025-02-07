const initialComponent = () => {
  return (`import React from 'react';

const GreetingMessage: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-700">
            <div className="bg-gray-600 shadow-md rounded-lg p-8 text-center">
                <h1 className="text-2xl font-semibold text-white mb-4">Welcome to React Component Builder AI</h1>
                <p className="text-white">Get started by entering a prompt</p>
            </div>
        </div>
    );
};

export default GreetingMessage;`
  )
}

export default initialComponent