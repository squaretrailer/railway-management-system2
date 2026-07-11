// src/utils/seatMapGenerator.js

// Generate seat labels e.g. A1, A2 ... B1, B2
export function generateSeats(totalSeats = 50) {
  const seats = [];
  const rows  = "ABCDEFGHIJ".split("");
  let count   = 0;

  for (let row of rows) {
    for (let num = 1; num <= 10; num++) {
      if (count >= totalSeats) break;
      seats.push(`${row}${num}`);
      count++;
    }
    if (count >= totalSeats) break;
  }
  return seats;
}

// Group seats by row for display
// e.g. { A: ["A1","A2"...], B: ["B1","B2"...] }
export function groupSeatsByRow(seats) {
  return seats.reduce((acc, seat) => {
    const row = seat[0];
    if (!acc[row]) acc[row] = [];
    acc[row].push(seat);
    return acc;
  }, {});
}

// Check if a seat is available
export function isSeatAvailable(seat, bookedSeats = []) {
  return !bookedSeats.includes(seat);
}

// Count available seats
export function countAvailableSeats(totalSeats, bookedSeats = []) {
  return totalSeats - bookedSeats.length;
}