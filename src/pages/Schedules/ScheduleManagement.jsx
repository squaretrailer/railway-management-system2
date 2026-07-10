const schedules = [
  { train: 'Express 101', departure: '06:30', arrival: '09:15', platform: '3' },
  { train: 'Night Rail', departure: '21:45', arrival: '00:20', platform: '1' },
];

function ScheduleManagement() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">

  <div className="flex justify-between items-center mb-8">
    <div>
      <p className="text-amber-500 uppercase tracking-widest font-semibold">
        Schedule Management
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        Upcoming Train Schedules
      </h2>
    </div>

    <button className="bg-amber-500 text-white px-5 py-3 rounded-lg hover:bg-amber-600 transition">
      Add Schedule
    </button>
  </div>

  <div className="space-y-4">

    {schedules.map((schedule) => (
      <div
        key={schedule.train}
        className="flex justify-between items-center bg-amber-50 border border-amber-200 rounded-xl p-5 hover:shadow-md transition"
      >

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {schedule.train}
          </h3>

          <p className="text-gray-600 mt-1">
            Departure: {schedule.departure}
          </p>

          <p className="text-gray-600">
            Arrival: {schedule.arrival}
          </p>
        </div>

        <div className="text-right">
          <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Platform {schedule.platform}
          </span>
        </div>

      </div>
    ))}

  </div>

</section>
  );
}

export default ScheduleManagement;
