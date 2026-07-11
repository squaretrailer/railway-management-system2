function BookTicket() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-amber-50 px-6">

  <div className="bg-white shadow-xl rounded-2xl p-8 max-w-xl w-full border-t-8 border-amber-500">

    <p className="text-amber-500 uppercase tracking-widest font-semibold">
      Passenger Booking
    </p>

    <h2 className="text-3xl font-bold text-gray-800 mt-2">
      Book a Ticket
    </h2>

    <p className="text-gray-500 mt-2 mb-8">
      Fill in your journey details to reserve your train ticket.
    </p>

    <form className="space-y-5">

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          From
        </label>

        <input
          type="text"
          placeholder="Colombo Fort"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          To
        </label>

        <input
          type="text"
          placeholder="Kandy"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Passenger Count
        </label>

        <input
          type="number"
          min="1"
          defaultValue="1"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition"
      >
        Continue
      </button>

    </form>

  </div>

</section>
  );
}

export default BookTicket;