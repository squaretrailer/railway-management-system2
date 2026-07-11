function BookingConfirmation() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-amber-50 px-6">

  <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center border-t-8 border-amber-500">

    <p className="text-amber-500 uppercase tracking-widest font-semibold">
      Booking Confirmation
    </p>

    <h2 className="text-3xl font-bold text-gray-800 mt-3">
      Booking Complete
    </h2>

    <p className="text-gray-600 mt-4">
      Your ticket has been booked successfully. A confirmation has been generated and your booking is now available in the system.
    </p>

    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-8">
      <p className="text-gray-500 text-sm">
        Booking Reference
      </p>

      <h3 className="text-3xl font-bold text-amber-600 mt-2">
        BK-1003
      </h3>
    </div>

    <div className="flex justify-center gap-4 mt-8">

      <button className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition">
        View Booking
      </button>

      <button className="border border-amber-500 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition">
        Back to Dashboard
      </button>

    </div>

  </div>

</section>
)
}

export default BookingConfirmation;