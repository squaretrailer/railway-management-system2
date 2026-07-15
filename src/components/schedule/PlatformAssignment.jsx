import { useState } from "react";
import { FaTrain, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

const PlatformAssignment = ({ schedules, stations, onAssign }) => {
  const [assignments, setAssignments] = useState({});

  const handleAssign = (scheduleId, platform) => {
    setAssignments((prev) => ({ ...prev, [scheduleId]: platform }));
  };

  const handleSubmit = (scheduleId) => {
    if (!assignments[scheduleId]) return;
    onAssign({ scheduleId, platform: assignments[scheduleId] });
    setAssignments((prev) => ({ ...prev, [scheduleId]: "" }));
  };

  if (!schedules || schedules.length === 0) {
    return (
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-3xl font-bold mb-6 text-white">Platform Assignment</h2>
        <p className="text-center text-gray-400 py-16">No schedules available for platform assignment.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-2 text-white">Platform Assignment</h2>
      <p className="text-gray-400 mb-8 text-sm">Assign platforms to scheduled trains at each station.</p>
      <div className="flex flex-col gap-4">
        {schedules.map((schedule) => {
          const station = stations?.find((s) => s.name === schedule.fromStation);
          const platformCount = station?.platform || 4;
          const platformOptions = Array.from({ length: platformCount }, (_, i) => i + 1);
          const isAssigned = !!schedule.platform;

          return (
            <div
              key={schedule.id}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <FaTrain className="text-amber-400" />
                  Train #{schedule.trainId || "N/A"}
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaMapMarkerAlt className="text-amber-400" />
                  <span>{schedule.fromStation || "?"}</span>
                  <span className="text-gray-600">→</span>
                  <FaMapMarkerAlt className="text-red-400" />
                  <span>{schedule.toStation || "?"}</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <FaClock className="text-amber-400" />
                    Departs: {schedule.departureTime || "?"}
                  </div>
                  <div className="flex items-center gap-1">
                    <FaClock className="text-gray-500" />
                    Arrives: {schedule.arrivalTime || "?"}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MdPlace className="text-amber-400 text-xl" />
                <select
                  value={assignments[schedule.id] || ""}
                  onChange={(e) => handleAssign(schedule.id, e.target.value)}
                  className="bg-gray-800 border border-gray-700 text-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                  disabled={isAssigned}
                >
                  <option value="" disabled>Select Platform</option>
                  {platformOptions.map((p) => (
                    <option key={p} value={p}>Platform {p}</option>
                  ))}
                </select>
                <button
                  onClick={() => handleSubmit(schedule.id)}
                  disabled={!assignments[schedule.id] || isAssigned}
                  className="bg-amber-600 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg transition text-sm font-medium"
                >
                  Assign
                </button>
                {isAssigned && (
                  <span className="text-green-400 text-sm font-medium">✓ Platform {schedule.platform}</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformAssignment;