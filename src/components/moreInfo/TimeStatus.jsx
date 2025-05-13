import React, { useEffect, useState } from "react";

const TimeStatus = ({ timeLabel = "Current Time", time = null }) => {
  const [currentTime, setCurrentTime] = useState(
    time ? new Date(time) : new Date()
  );

  useEffect(() => {
    if (!time) {
      const interval = setInterval(() => setCurrentTime(new Date()), 1000);
      return () => clearInterval(interval);
    }
  }, [time]);

  const hours = currentTime.getHours() % 12;
  const minutes = currentTime.getMinutes();

  const hourDeg = (360 / 12) * hours + (360 / 12) * (minutes / 60);
  const minuteDeg = (360 / 60) * minutes;

  return (
    <div className="relative w-20 h-20 rounded-full border-4 border-gray-300 flex items-center justify-center bg-gray-800 text-white">
      {/* Clock Markers */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            top: "4px",
            left: "50%",
            transform: `rotate(${
              i * 30
            }deg) translateX(-50%) translateY(-60px)`,
            transformOrigin: "center",
          }}
        />
      ))}

      {/* Minute Hand */}
      <div
        className="absolute w-0.5 h-12 bg-white origin-bottom"
        style={{ transform: `rotate(${minuteDeg}deg)` }}
      />

      {/* Hour Hand */}
      <div
        className="absolute w-1 h-8 bg-blue-400 origin-bottom"
        style={{ transform: `rotate(${hourDeg}deg)` }}
      />

      {/* Center Dot */}
      <div className="absolute w-2 h-2 bg-white rounded-full z-10" />

      {/* Label */}
      <div className="absolute bottom-[-30px] text-sm text-gray-300">
        {timeLabel}
      </div>
    </div>
  );
};

export default TimeStatus;
