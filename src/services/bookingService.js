// src/services/bookingService.js

import httpClient from "./httpClient";

export const getBookings    = ()           => httpClient.get("/api/bookings");
export const getBookingById = (id)         => httpClient.get(`/api/bookings/${id}`);
export const createBooking  = (data)       => httpClient.post("/api/bookings", data);
export const updateBooking  = (id, data)   => httpClient.put(`/api/bookings/${id}`, data);
export const deleteBooking  = (id)         => httpClient.delete(`/api/bookings/${id}`);