import { Link } from "react-router-dom";
import { FaTrain } from "react-icons/fa";

function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
      <div className="bg-gray-900 shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center border-t-8 border-amber-500">
        <div className="flex justify-center mb-4">
          <FaTrain className="text-amber-400 text-5xl opacity-50" />
        </div>
        <p className="text-amber-400 text-7xl font-bold">404</p>
        <h2 className="text-3xl font-bold text-white mt-4">Page Not Found</h2>
        <p className="text-gray-400 mt-4">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Return to Home
          </Link>
          <Link
            to="/dashboard"
            className="inline-block border border-amber-600 text-amber-400 hover:bg-amber-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Go to Dashboard
          </Link>
        </div>
        <p className="text-gray-600 text-xs mt-6">
          &copy; {new Date().getFullYear()} RailMS. All rights reserved.
        </p>
      </div>
    </section>
  );
}

export default NotFound;