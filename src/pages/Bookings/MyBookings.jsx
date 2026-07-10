const bookings = [
  { id: 'BK-1001', train: 'Express 101', seat: 'A12', status: 'Confirmed' },
  { id: 'BK-1002', train: 'Night Rail', seat: 'B07', status: 'Pending' },
];

function MyBookings() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-8">

  <div className="flex justify-between items-center mb-8">
    <div>
      <p className="text-amber-500 uppercase tracking-widest font-semibold">
        Passenger Portal
      </p>

      <h2 className="text-3xl font-bold text-gray-800 mt-2">
        My Bookings
      </h2>
    </div>

    <button className="bg-amber-500 text-white px-5 py-3 rounded-lg hover:bg-amber-600 transition">
      Book New Ticket
    </button>
  </div>

  <div className="space-y-4">

    {bookings.map((booking) => (
      <div
        key={booking.id}
        className="flex justify-between items-center bg-amber-50 border border-amber-200 rounded-xl p-5 hover:shadow-md transition"
      >

        <div>
          <h3 className="text-xl font-semibold text-gray-800">
            {booking.train}
          </h3>

          <p className="text-gray-600 mt-1">
            Booking ID: {booking.id}
          </p>

          <p className="text-gray-600">
            Seat: {booking.seat}
          </p>
        </div>

        <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
          {booking.status}
        </span>

      </div>
    ))}

  </div>

</section>
  );
}

export default MyBookings;
