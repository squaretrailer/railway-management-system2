function TrainDetails() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">

  <div className="flex justify-between items-center mb-8">
    <div>
      <p className="text-amber-500 uppercase tracking-widest font-semibold">
        Train Details
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        Express 101
      </h2>
    </div>

    <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
      On Time
    </span>
  </div>

  <div className="grid grid-cols-2 gap-6">

    <div className="bg-amber-50 p-4 rounded-xl">
      <p className="text-gray-500 text-sm">Route</p>
      <h3 className="text-lg font-semibold text-gray-800">
        Colombo → Kandy
      </h3>
    </div>

    <div className="bg-amber-50 p-4 rounded-xl">
      <p className="text-gray-500 text-sm">Train Number</p>
      <h3 className="text-lg font-semibold text-gray-800">
        EXP-101
      </h3>
    </div>

    <div className="bg-white border border-amber-200 p-4 rounded-xl">
      <p className="text-gray-500 text-sm">Departure</p>
      <h3 className="text-2xl font-bold text-amber-600">
        06:30
      </h3>
    </div>

    <div className="bg-white border border-amber-200 p-4 rounded-xl">
      <p className="text-gray-500 text-sm">Arrival</p>
      <h3 className="text-2xl font-bold text-amber-600">
        09:15
      </h3>
    </div>

  </div>

  <div className="mt-8 flex gap-4">
    <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold">
      Edit Train
    </button>

    <button className="border border-amber-500 text-amber-600 hover:bg-amber-50 px-6 py-3 rounded-lg font-semibold">
      View Schedule
    </button>
  </div>

</section>
  );
}

export default TrainDetails;