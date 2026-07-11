// src/utils/priceCalculator.js

// Base fare per km by train type
const BASE_FARE = {
  express:   5,
  intercity: 3.5,
  regional:  2,
  freight:   1.5,
};

// Calculate fare based on distance and train type
export function calculateFare(distanceKm, trainType = "regional") {
  const rate = BASE_FARE[trainType.toLowerCase()] || 2;
  return Math.round(distanceKm * rate);
}

// Apply discount e.g. 10% off
export function applyDiscount(fare, discountPercent = 0) {
  return Math.round(fare - (fare * discountPercent) / 100);
}

// Format fare as currency
export function formatFare(fare) {
  return `Ksh ${Number(fare).toLocaleString()}`;
}

// Calculate total for multiple tickets
export function calculateTotal(fare, quantity = 1) {
  return fare * quantity;
}