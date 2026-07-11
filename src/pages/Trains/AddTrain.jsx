function AddTrain() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">

  <div className="mb-8">
    <p className="text-amber-500 uppercase tracking-widest font-semibold">
      Train Management
    </p>

    <h2 className="text-3xl font-bold text-gray-800 mt-2">
      Add New Train
    </h2>

    <p className="text-gray-500 mt-2">
      Enter the train details below to add it to the railway system.
    </p>
  </div>

  <form className="space-y-5">

    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Train Name
      </label>

      <input
        type="text"
        placeholder="North Star Express"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Route
      </label>

      <input
        type="text"
        placeholder="City A → City B"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-2">
        Departure Time
      </label>

      <input
        type="time"
        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition duration-200"
    >
      Save Train
    </button>

  </form>

</section>
  );
}

export default AddTrain;