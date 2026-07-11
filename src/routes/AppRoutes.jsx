// src/routes/AppRoutes.jsx

import { Routes, Route } from "react-router-dom";

// Home & Auth
import Home                from "../pages/Home/Home";
import Login               from "../pages/Login/Login";
import NotFound            from "../pages/NotFound/NotFound";

// Dashboard
import Dashboard           from "../pages/Dashboard/Dashboard";

// Trains
import TrainListPage       from "../pages/Trains/TrainList";
import TrainDetailsPage    from "../pages/Trains/TrainDetails";
import AddTrain            from "../pages/Trains/AddTrain";

// Stations
import StationManagement   from "../pages/Stations/StationManagement";

// Schedules
import ScheduleManagement  from "../pages/Schedules/ScheduleManagement";

// Bookings
import MyBookings          from "../pages/Bookings/MyBookings";
import BookTicket          from "../pages/Bookings/BookTicket";
import BookingConfirmation from "../pages/Bookings/BookingConfirmation";

// Admin
import UserManagement      from "../pages/Admin/UserManagement";
import Reports             from "../pages/Admin/Reports";

function AppRoutes() {
  return (
    <Routes>

      {/* ── Public Routes ── */}
      <Route path="/"     element={<Home />} />
      <Route path="/login" element={<Login />} />

      {/* ── Dashboard ── */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* ── Trains ── */}
      <Route path="/trains"     element={<TrainListPage />} />
      <Route path="/trains/add" element={<AddTrain />} />
      <Route path="/trains/:id" element={<TrainDetailsPage />} />

      {/* ── Stations ── */}
      <Route path="/stations" element={<StationManagement />} />

      {/* ── Schedules ── */}
      <Route path="/schedules" element={<ScheduleManagement />} />

      {/* ── Bookings ── */}
      <Route path="/bookings"         element={<MyBookings />} />
      <Route path="/bookings/new"     element={<BookTicket />} />
      <Route path="/bookings/confirm" element={<BookingConfirmation />} />

      {/* ── Admin ── */}
      <Route path="/admin/users"   element={<UserManagement />} />
      <Route path="/admin/reports" element={<Reports />} />

      {/* ── 404 ── */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;