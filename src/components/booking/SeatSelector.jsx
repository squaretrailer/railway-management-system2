import React, { useMemo, useState } from 'react'
import {
  DEFAULT_SEAT_LAYOUT,
  SEAT_TYPES,
  SEAT_COLORS,
  SEAT_COLOR_MAP
} from '../../utils/constants'

const SeatSelector = ({
  layout = DEFAULT_SEAT_LAYOUT,
  seatTypes = SEAT_TYPES,
  bookedSeats = [],
  currency = "Ksh",
  onBookingComplete = () => {},
  title = "Train Seat Selector",
  subtitle = "Select your preferred seats"
}) => {

  // ─── Define getSeatType FIRST ────────────────────────────────
  const getSeatType = (row) => {
    const seatTypeEntries = Object.entries(seatTypes);
    for (let i = 0; i < seatTypeEntries.length; i++) {
      const [type, config] = seatTypeEntries[i];
      if (config.rows.includes(row)) {
        const color = SEAT_COLORS[i % SEAT_COLORS.length];
        return { type, color, ...config };
      }
    }
    const [firstType, firstConfig] = seatTypeEntries[0];
    return { type: firstType, color: SEAT_COLORS[0], ...firstConfig };
  };

  // ─── Now useState (uses getSeatType) ──────────────────────────
  const [seats, setSeats] = useState(() => {
    const initialSeats = [];
    for (let row = 0; row < layout.rows; row++) {
      const seatRow = [];
      const seatTypeInfo = getSeatType(row);
      for (let seat = 0; seat < layout.seatsPerRow; seat++) {
        const seatId = `${String.fromCharCode(65 + row)}${seat + 1}`;
        seatRow.push({
          id: seatId,
          row,
          seat,
          type: seatTypeInfo?.type || "vip",
          price: seatTypeInfo?.price || 4500,
          color: seatTypeInfo?.color || "yellow",
          status: bookedSeats.includes(seatId) ? "booked" : "available",
          selected: false,
        });
      }
      initialSeats.push(seatRow);
    }
    return initialSeats;
  });

  const [selectedSeats, setSelectedSeats] = useState([]);

  // ─── Rest of the component unchanged ────────────────────────────

  const getColorClass = (colorName) => {
    return SEAT_COLOR_MAP[colorName] || SEAT_COLOR_MAP.blue;
  };

  const getSeatClassName = (seat) => {
    const baseClass =
      "w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 m-1 rounded-t-lg border-2 cursor-pointer transition-all duration-200 flex items-center justify-center text-xs sm:text-sm font-bold";
    if (seat.status === "booked") {
      return `${baseClass} bg-gray-600 border-gray-700 text-gray-400 cursor-not-allowed`;
    }
    if (seat.selected) {
      return `${baseClass} bg-green-400 border-green-500 text-white transform scale-110`;
    }
    return `${baseClass} ${getColorClass(seat.color)}`;
  };

  const handleSeatClick = (rowIndex, seatIndex) => {
    const seat = seats[rowIndex][seatIndex];
    if (seat.status === "booked") return;

    const isCurrentlySelected = seat.selected;
    setSeats((prevSeats) =>
      prevSeats.map((row, rIdx) =>
        row.map((s, sIdx) => {
          if (rIdx === rowIndex && sIdx === seatIndex) {
            return { ...s, selected: !s.selected };
          }
          return s;
        })
      )
    );

    if (isCurrentlySelected) {
      setSelectedSeats((prev) => prev.filter((s) => s.id !== seat.id));
    } else {
      setSelectedSeats((prev) => [...prev, seat]);
    }
  };

  const renderSeatSection = (seatRow, startIndex, endIndex) => {
    return (
      <div className="flex">
        {seatRow.slice(startIndex, endIndex).map((seat, index) => (
          <div
            key={seat.id}
            className={getSeatClassName(seat)}
            title={`${seat.id} - ${getSeatType(seat.row)?.name || "Regular"} - ${currency}${seat.price}`}
            onClick={() => handleSeatClick(seat.row, startIndex + index)}
          >
            {startIndex + index + 1}
          </div>
        ))}
      </div>
    );
  };

  const uniqueSeatTypes = Object.entries(seatTypes).map(([type, config], index) => ({
    type,
    color: SEAT_COLORS[index % SEAT_COLORS.length],
    ...config,
  }));

  const getTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => total + seat.price, 0);
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    setSeats((prevSeats) =>
      prevSeats.map((row) =>
        row.map((seat) => {
          if (selectedSeats.some((selected) => selected.id === seat.id)) {
            return { ...seat, status: "booked", selected: false };
          }
          return seat;
        })
      )
    );

    onBookingComplete({
      seats: selectedSeats,
      totalPrice: getTotalPrice(),
      seatIds: selectedSeats.map((seat) => seat.id),
    });

    alert(
      `Successfully booked ${selectedSeats.length} seat(s) for ${currency}${getTotalPrice()}`
    );
    setSelectedSeats([]);
  };

  return (
    <div className="w-full min-h-screen bg-gray-950 p-4">
      <div className="max-w-6xl mx-auto bg-gray-900 rounded-lg shadow-lg p-3 border border-gray-800">
        <h1 className="text-2xl font-bold lg:text-3xl text-center mb-2 text-white">{title}</h1>
        <p className="text-gray-400 mb-3 text-center">{subtitle}</p>

        <div className="mb-4">
          <div className="w-full h-4 bg-linear-to-r from-red-400 via-amber-300 to-amber-100 mb-2 shadow-inner rounded-lg" />
          <p className="text-center text-sm text-gray-500 font-medium mb-6">SCREEN</p>
        </div>

        <div className="mb-6 overflow-x-auto">
          <div className="flex flex-col items-center min-w-max">
            {seats.map((row, rowIndex) => (
              <div key={rowIndex} className="flex items-center mb-2">
                <span className="w-8 text-center font-bold text-gray-400 mr-4">
                  {String.fromCharCode(65 + rowIndex)}
                </span>
                {renderSeatSection(row, 0, layout.aislePosition)}
                <div className="w-8" />
                {renderSeatSection(row, layout.aislePosition, layout.seatsPerRow)}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-6 p-4 bg-gray-800 rounded-lg">
          {uniqueSeatTypes.map((seatType) => (
            <div key={seatType.type} className="flex items-center">
              <div className={`w-6 h-6 border-2 rounded-t-lg mr-2 ${getColorClass(seatType.color)}`} />
              <span className="text-sm text-gray-300">
                {seatType.name}: ({currency}{seatType.price})
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-400 border-2 border-green-500 rounded-t-lg" />
            <span className="text-sm text-gray-300">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-600 border-2 border-gray-700 rounded-t-lg" />
            <span className="text-sm text-gray-300">Booked</span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-4 mb-4">
          <h3 className="font-bold text-lg mb-2 text-white">Booking</h3>
          {selectedSeats.length > 0 ? (
            <div>
              <p className="mb-2 text-gray-300">
                Selected Seats: <span>{selectedSeats.map((s) => s.id).join(", ")}</span>
              </p>
              <p className="text-gray-300">
                Number of seats: <span>{selectedSeats.length}</span>
              </p>
              <p className="text-xl font-bold text-amber-400">
                Total: {currency}{getTotalPrice()}
              </p>
            </div>
          ) : (
            <p className="text-gray-500">No seats selected</p>
          )}
        </div>

        <button
          onClick={handleBooking}
          disabled={selectedSeats.length === 0}
          className={`w-full py-3 px-6 rounded-lg font-bold text-lg transition-all duration-200 ${
            selectedSeats.length > 0
              ? "bg-linear-to-r from-red-600 via-amber-500 to-yellow-300 hover:from-red-700 text-white transform hover:scale-105"
              : "bg-gray-700 text-gray-500 cursor-not-allowed"
          }`}
        >
          {selectedSeats.length > 0
            ? `Book ${selectedSeats.length} Seat(s) - ${currency}${getTotalPrice()}`
            : "Select Seat to Book"}
        </button>
      </div>
    </div>
  );
};

export default SeatSelector;