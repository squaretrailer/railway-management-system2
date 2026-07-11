function Reports() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">

  <div className="mb-8">
    <p className="text-amber-500 uppercase tracking-widest font-semibold">
      Performance Reports
    </p>

    <h2 className="text-3xl font-bold text-gray-800 mt-2">
      Daily Operations Summary
    </h2>

    <p className="text-gray-500 mt-2">
      View today's operational performance across the railway network.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
      <p className="text-gray-500 text-sm">Revenue</p>
      <h3 className="text-3xl font-bold text-amber-600 mt-2">
        LKR 8.4M
      </h3>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
      <p className="text-gray-500 text-sm">Occupancy</p>
      <h3 className="text-3xl font-bold text-amber-600 mt-2">
        76%
      </h3>
    </div>

    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
      <p className="text-gray-500 text-sm">Customer Satisfaction</p>
      <h3 className="text-3xl font-bold text-amber-600 mt-2">
        4.7 / 5
      </h3>
    </div>

  </div>

</section>
  );
}

export default Reports;
