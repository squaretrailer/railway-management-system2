import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBell, FaSearch, FaTrain, FaMoon, FaSun, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../../context/AuthContext";
import { useTheme } from "../../../context/ThemeContext";

function Navbar() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm px-6 py-3 flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 sticky top-0 z-40">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
        <FaTrain className="text-amber-400 text-2xl" />
        <span className="text-white font-bold text-lg tracking-wide">RailMS</span>
      </Link>

      <form onSubmit={handleSearch} className="flex-1 max-w-md min-w-[200px]">
        <div className="flex items-center bg-gray-800 px-4 py-2 rounded-xl focus-within:ring-2 focus-within:ring-amber-500 transition">
          <FaSearch className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search trains, stations..."
            className="bg-transparent outline-none ml-3 w-full text-white placeholder-gray-400"
            aria-label="Search"
          />
        </div>
      </form>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition"
          aria-label="Toggle theme"
        >
          {isDark ? <FaSun /> : <FaMoon />}
        </button>

        <button
          className="relative p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition"
          aria-label="Notifications"
        >
          <FaBell className="text-xl" />
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 rounded-full w-2.5 h-2.5" />
        </button>

        {user ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold text-sm">
                {user.name?.charAt(0) || "U"}
              </div>
              <div className="hidden sm:block text-sm">
                <p className="text-white font-semibold">{user.name || "User"}</p>
                <p className="text-gray-400 text-xs capitalize">{user.role || "User"}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-red-400 transition"
              aria-label="Logout"
            >
              <FaSignOutAlt />
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;