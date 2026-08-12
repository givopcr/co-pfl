import React from 'react';

const ButtonComponent = ({ label, color = 'sky', onClick, className = '' }) => {
  // Map simple color options to Tailwind classes
  const colorMap = {
    sky: 'bg-[#29b6f6] hover:bg-[#039be5] text-white focus:ring-sky-300',
    red: 'bg-red-500 hover:bg-red-600 text-white focus:ring-red-300',
    blue: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-300',
    gray: 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-300',
  };

  const selectedColorClass = colorMap[color] || color;

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2.5 rounded-full font-semibold shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 ${selectedColorClass} ${className}`}
    >
      {label}
    </button>
  );
};

export default ButtonComponent;
