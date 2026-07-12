import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Loader from "../components/common/Loader/Loader";

const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const TrainList = lazy(() => import("../pages/Trains/TrainList"));
const TrainDetails = lazy(() => import("../pages/Trains/TrainDetails"));
const AddTrain = lazy(() => import("../pages/Trains/AddTrain"));
const StationManagement = lazy(() => import("../pages/Stations/StationManagement"));
const ScheduleManagement = lazy(() => import("../pages/Schedules/ScheduleManagement"));
const MyBookings = lazy(() => import("../pages/Bookings/MyBookings"));
const BookTicket = lazy(() => import("../pages/Bookings/BookTicket"));
const BookingConfirmation = lazy(() => import("../pages/Bookings/BookingConfirmation"));
const UserManagement = lazy(() => import("../pages/Admin/UserManagement"));
const Reports = lazy(() => import("../pages/Admin/Reports"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function AppRoutes() {
  return (
    <Suspense fallback={<Loader fullScreen />}>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />

        <Route path="/dashboard" element={
          <PrivateRoute><AdminLayout><Dashboard /></AdminLayout></PrivateRoute>
        } />
        <Route path="/trains" element={
          <PrivateRoute><AdminLayout><TrainList /></AdminLayout></PrivateRoute>
        } />
        <Route path="/trains/add" element={
          <PrivateRoute><AdminLayout><AddTrain /></AdminLayout></PrivateRoute>
        } />
        <Route path="/trains/:id" element={
          <PrivateRoute><AdminLayout><TrainDetails /></AdminLayout></PrivateRoute>
        } />
        <Route path="/stations" element={
          <PrivateRoute><AdminLayout><StationManagement /></AdminLayout></PrivateRoute>
        } />
        <Route path="/schedules" element={
          <PrivateRoute><AdminLayout><ScheduleManagement /></AdminLayout></PrivateRoute>
        } />
        <Route path="/bookings" element={
          <PrivateRoute><AdminLayout><MyBookings /></AdminLayout></PrivateRoute>
        } />
        <Route path="/bookings/new" element={
          <PrivateRoute><AdminLayout><BookTicket /></AdminLayout></PrivateRoute>
        } />
        <Route path="/bookings/confirm" element={
          <PrivateRoute><AdminLayout><BookingConfirmation /></AdminLayout></PrivateRoute>
        } />
        <Route path="/admin/users" element={
          <AdminRoute><AdminLayout><UserManagement /></AdminLayout></AdminRoute>
        } />
        <Route path="/admin/reports" element={
          <AdminRoute><AdminLayout><Reports /></AdminLayout></AdminRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;