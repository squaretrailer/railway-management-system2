const stations = [
  { name: 'Colombo Fort', code: 'CMB', active: true },
  { name: 'Kandy', code: 'KDY', active: true },
  { name: 'Galle', code: 'GLL', active: false },
];

function StationManagement() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">

  <div className="flex justify-between items-center mb-8">
    <div>
      <p className="text-amber-500 uppercase tracking-widest font-semibold">
        Station Control
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        Manage Stations
      </h2>

      <p className="text-gray-500 mt-2">
        Monitor and manage all railway stations across the network.
      </p>
    </div>

    <button className="bg-amber-500 text-white px-5 py-3 rounded-lg hover:bg-amber-600 transition">
      Add Station
    </button>
  </div>

  <div className="space-y-4">

    {stations.map((station) => (
      <div
        key={station.code}
        className="flex justify-between items-center bg-amber-50 border border-amber-200 rounded-xl p-5 hover:shadow-md transition"
      >

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {station.name}
          </h3>

          <p className="text-gray-600 mt-1">
            Station Code: {station.code}
          </p>
        </div>

        <div className="flex items-center gap-4">

          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              station.active
                ? "bg-amber-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {station.active ? "Active" : "Maintenance"}
          </span>

          <button className="border border-amber-500 text-amber-600 px-4 py-2 rounded-lg hover:bg-amber-500 hover:text-white transition">
            View
          </button>

        </div>

      </div>
    ))}

  </div>

</section>
  );
}

export default StationManagement;
