// src/utils/validators.js

// Check if a value is empty
export function isEmpty(value) {
  return !value || value.toString().trim() === "";
}

// Validate email format
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validate phone number (Kenyan format)
export function isValidPhone(phone) {
  return /^(\+254|0)[17]\d{8}$/.test(phone);
}

// Validate train form
export function validateTrainForm(form) {
  const errors = {};
  if (isEmpty(form.name))       errors.name       = "Train name is required";
  if (isEmpty(form.type))       errors.type       = "Train type is required";
  if (isEmpty(form.totalSeats)) errors.totalSeats = "Total seats is required";
  if (isEmpty(form.status))     errors.status     = "Status is required";
  return errors;
}

// Validate station form
export function validateStationForm(form) {
  const errors = {};
  if (isEmpty(form.name))     errors.name     = "Station name is required";
  if (isEmpty(form.code))     errors.code     = "Station code is required";
  if (isEmpty(form.city))     errors.city     = "City is required";
  if (isEmpty(form.platform)) errors.platform = "Platform count is required";
  return errors;
}

// Validate booking form
export function validateBookingForm(form) {
  const errors = {};
  if (isEmpty(form.passengerName)) errors.passengerName = "Passenger name is required";
  if (isEmpty(form.email))         errors.email         = "Email is required";
  else if (!isValidEmail(form.email)) errors.email      = "Invalid email address";
  if (isEmpty(form.phone))         errors.phone         = "Phone number is required";
  else if (!isValidPhone(form.phone)) errors.phone      = "Invalid phone number";
  if (isEmpty(form.trainId))       errors.trainId       = "Train ID is required";
  if (isEmpty(form.seatNumber))    errors.seatNumber    = "Seat number is required";
  if (isEmpty(form.fare))          errors.fare          = "Fare is required";
  return errors;
}