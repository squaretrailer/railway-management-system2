import { Link } from 'react-router-dom';

const highlights = [
  { title: 'Live schedules', text: 'Monitor departures, arrivals and route changes from one control panel.' },
  { title: 'Smart bookings', text: 'Allow passengers to reserve tickets with a clear confirmation flow.' },
  { title: 'Admin insights', text: 'Keep staff informed with station, train and reporting tools.' },
];

function Home() {
  return (
    <section className="min-h-screen bg-white p-8">
  <div className="max-w-7xl mx-auto">

    {/* Header */}
    <div className="bg-amber-500 text-white rounded-2xl p-8 shadow-lg mb-8">
      <p className="uppercase tracking-widest text-sm font-semibold">
        Railway Management System
      </p>

      <h1 className="text-4xl font-bold mt-2">
        Dashboard
      </h1>

      <p className="mt-3 text-amber-100">
        Monitor railway operations, schedules, bookings and platform assignments.
      </p>

      <div className="flex gap-4 mt-6">
        <Link
          to="/trains"
          className="bg-white text-amber-600 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100"
        >
          Manage Trains
        </Link>

        <Link
          to="/schedule"
          className="border border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:text-amber-600"
        >
          View Schedule
        </Link>
      </div>
    </div>

    {/* Stats */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      <div className="bg-white border-l-4 border-amber-500 shadow rounded-xl p-6">
        <h3 className="text-gray-500 font-medium">Active Trains</h3>
        <p className="text-4xl font-bold text-amber-600 mt-2">24</p>
      </div>

      <div className="bg-white border-l-4 border-amber-500 shadow rounded-xl p-6">
        <h3 className="text-gray-500 font-medium">Stations</h3>
        <p className="text-4xl font-bold text-amber-600 mt-2">12</p>
      </div>

      <div className="bg-white border-l-4 border-amber-500 shadow rounded-xl p-6">
        <h3 className="text-gray-500 font-medium">Bookings Today</h3>
        <p className="text-4xl font-bold text-amber-600 mt-2">315</p>
      </div>

      <div className="bg-white border-l-4 border-amber-500 shadow rounded-xl p-6">
        <h3 className="text-gray-500 font-medium">Platforms</h3>
        <p className="text-4xl font-bold text-amber-600 mt-2">8</p>
      </div>

    </div>

    {/* Quick Actions */}
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

        <Link to="/trains" className="bg-amber-500 text-white rounded-xl p-5 text-center font-semibold hover:bg-amber-600">
          Trains
        </Link>

        <Link to="/stations" className="bg-white border-2 border-amber-500 text-amber-600 rounded-xl p-5 text-center font-semibold hover:bg-amber-50">
          Stations
        </Link>

        <Link to="/schedule" className="bg-white border-2 border-amber-500 text-amber-600 rounded-xl p-5 text-center font-semibold hover:bg-amber-50">
          Schedule
        </Link>

        <Link to="/platformAssignment" className="bg-white border-2 border-amber-500 text-amber-600 rounded-xl p-5 text-center font-semibold hover:bg-amber-50">
          Platforms
        </Link>

        <Link to="/bookings" className="bg-white border-2 border-amber-500 text-amber-600 rounded-xl p-5 text-center font-semibold hover:bg-amber-50">
          Bookings
        </Link>

        <Link to="/reports" className="bg-white border-2 border-amber-500 text-amber-600 rounded-xl p-5 text-center font-semibold hover:bg-amber-50">
          Reports
        </Link>

      </div>
    </div>

  </div>
</section>
  );
}

export default Home;
