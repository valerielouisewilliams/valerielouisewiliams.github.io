import { Apple, Wifi, Battery, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

export function MenuBar() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = time.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="h-7 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 flex items-center justify-between px-4 text-sm select-none">
      <div className="flex items-center gap-6">
        <Apple className="w-4 h-4" />
        <div className="flex items-center gap-4 font-medium">
          <span>Portfolio</span>
          <span className="text-gray-600">File</span>
          <span className="text-gray-600">Edit</span>
          <span className="text-gray-600">View</span>
          <span className="text-gray-600">Window</span>
        </div>
      </div>
      <div className="flex items-center gap-3 text-gray-700">
        <Battery className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <Volume2 className="w-4 h-4" />
        <span className="font-medium">{formattedDate}</span>
        <span className="font-medium">{formattedTime}</span>
      </div>
    </div>
  );
}
