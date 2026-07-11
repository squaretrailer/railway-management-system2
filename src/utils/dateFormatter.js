// src/utils/dateFormatter.js

// Format date e.g. "2026-07-01" → "July 1, 2026"
export function formatDate(dateStr) {
  if (!dateStr) return "N/A";
  return new Date(dateStr).toLocaleDateString("en-KE", {
    year:  "numeric",
    month: "long",
    day:   "numeric",
  });
}

// Format time e.g. "08:00" → "8:00 AM"
export function formatTime(timeStr) {
  if (!timeStr) return "N/A";
  const [hours, minutes] = timeStr.split(":");
  const date = new Date();
  date.setHours(Number(hours), Number(minutes));
  return date.toLocaleTimeString("en-KE", {
    hour:   "2-digit",
    minute: "2-digit",
  });
}

// Format currency e.g. 1500 → "Ksh 1,500"
export function formatCurrency(amount) {
  if (!amount) return "Ksh 0";
  return `Ksh ${Number(amount).toLocaleString()}`;
}

// Get time difference e.g. "08:00" and "11:30" → "3h 30m"
export function getDuration(departure, arrival) {
  if (!departure || !arrival) return "N/A";
  const [dH, dM] = departure.split(":").map(Number);
  const [aH, aM] = arrival.split(":").map(Number);
  const totalMins = (aH * 60 + aM) - (dH * 60 + dM);
  const hours     = Math.floor(totalMins / 60);
  const mins      = totalMins % 60;
  return `${hours}h ${mins}m`;
}