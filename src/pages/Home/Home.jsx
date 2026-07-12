import { Link } from "react-router-dom";

const highlights = [
  { title: "Live schedules", text: "Monitor departures, arrivals and route changes from one control panel." },
  { title: "Smart bookings", text: "Allow passengers to reserve tickets with a clear confirmation flow." },
  { title: "Admin insights", text: "Keep staff informed with station, train and reporting tools." },
];

function Home() {
  return (
    <section className="min-h-screen bg-gray-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-amber-600 text-white rounded-2xl p-8 shadow-lg mb-8">
          <p className="uppercase tracking-widest text-sm font-semibold">Railway Management System</p>
          <h1 className="text-4xl font-bold mt-2">Dashboard</h1>
          <p className="mt-3 text-amber-100">Monitor railway operations, schedules, bookings and platform assignments.</p>
          <div className="flex gap-4 mt-6">
            <Link to="/trains" className="bg-white text-amber-600 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100">Manage Trains</Link>
            <Link to="/schedules" className="border border-white text-white px-5 py-2 rounded-lg hover:bg-white hover:text-amber-600">View Schedule</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 border-l-4 border-amber-500 shadow rounded-xl p-6"><h3 className="text-gray-400 font-medium">Active Trains</h3><p className="text-4xl font-bold text-amber-400 mt-2">24</p></div>
          <div className="bg-gray-900 border-l-4 border-amber-500 shadow rounded-xl p-6"><h3 className="text-gray-400 font-medium">Stations</h3><p className="text-4xl font-bold text-amber-400 mt-2">12</p></div>
          <div className="bg-gray-900 border-l-4 border-amber-500 shadow rounded-xl p-6"><h3 className="text-gray-400 font-medium">Bookings Today</h3><p className="text-4xl font-bold text-amber-400 mt-2">315</p></div>
          <div className="bg-gray-900 border-l-4 border-amber-500 shadow rounded-xl p-6"><h3 className="text-gray-400 font-medium">Platforms</h3><p className="text-4xl font-bold text-amber-400 mt-2">8</p></div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Link to="/trains" className="bg-amber-600 text-white rounded-xl p-5 text-center font-semibold hover:bg-amber-700">Trains</Link>
            <Link to="/stations" className="bg-gray-800 border-2 border-amber-600 text-amber-400 rounded-xl p-5 text-center font-semibold hover:bg-amber-900 hover:text-white">Stations</Link>
            <Link to="/schedules" className="bg-gray-800 border-2 border-amber-600 text-amber-400 rounded-xl p-5 text-center font-semibold hover:bg-amber-900 hover:text-white">Schedule</Link>
            <Link to="/platform-assignment" className="bg-gray-800 border-2 border-amber-600 text-amber-400 rounded-xl p-5 text-center font-semibold hover:bg-amber-900 hover:text-white">Platforms</Link>
            <Link to="/bookings" className="bg-gray-800 border-2 border-amber-600 text-amber-400 rounded-xl p-5 text-center font-semibold hover:bg-amber-900 hover:text-white">Bookings</Link>
            <Link to="/admin/reports" className="bg-gray-800 border-2 border-amber-600 text-amber-400 rounded-xl p-5 text-center font-semibold hover:bg-amber-900 hover:text-white">Reports</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;