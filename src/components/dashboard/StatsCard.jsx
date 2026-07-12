import { memo } from "react";

const StatsCard = memo(({ title, value, growth, icon }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-amber-600 transition">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-1">{title}</p>
          <p className="text-3xl font-bold text-white">{value ?? "—"}</p>
        </div>
        {icon && <div className="text-amber-400 text-2xl">{icon}</div>}
      </div>
      {growth && (
        <div className="mt-3 flex items-center gap-1">
          <span className={`text-sm font-medium ${growth.startsWith("-") ? "text-red-400" : "text-green-400"}`}>{growth}</span>
          <span className="text-gray-500 text-xs">vs last period</span>
        </div>
      )}
    </div>
  );
});

StatsCard.displayName = "StatsCard";
export default StatsCard;