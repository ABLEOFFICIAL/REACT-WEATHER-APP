import React from "react";

const DirectionStatus = ({ direction = 0 }) => {
  return (
    <div className="absolute right-2 bottom-3 w-20 h-20 rounded-full border-4 border-gray-300 flex items-center justify-center">
      {/* Arrow */}
      <div
        className="absolute top-2 left-1/2 transform -translate-x-1/2"
        style={{ transform: `rotate(${direction}deg) translateX(-50%)` }}
      >
        <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-blue-500" />
      </div>

      {/* Direction Letters */}
      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs text-white">
        N
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-white">
        S
      </div>
      <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs text-white">
        W
      </div>
      <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs text-white">
        E
      </div>

      {/* Degree Label */}
      <span className="text-sm text-white font-semibold">{direction}°</span>
    </div>
  );
};

export default DirectionStatus;
