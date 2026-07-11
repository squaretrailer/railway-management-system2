// src/utils/constants.js

export const TRAIN_TYPES = [
  { value: "express",   label: "Express"   },
  { value: "intercity", label: "Intercity" },
  { value: "regional",  label: "Regional"  },
  { value: "freight",   label: "Freight"   },
];

export const TRAIN_STATUSES = [
  { value: "active",      label: "Active"      },
  { value: "maintenance", label: "Maintenance" },
  { value: "inactive",    label: "Inactive"    },
];

export const BOOKING_STATUSES = [
  { value: "confirmed", label: "Confirmed" },
  { value: "pending",   label: "Pending"   },
  { value: "cancelled", label: "Cancelled" },
];

export const SCHEDULE_STATUSES = [
  { value: "on-time",   label: "On Time"   },
  { value: "delayed",   label: "Delayed"   },
  { value: "cancelled", label: "Cancelled" },
];

export const PAYMENT_METHODS = [
  { value: "credit-card",   label: "Credit Card"   },
  { value: "debit-card",    label: "Debit Card"    },
  { value: "mobile-money",  label: "Mobile Money"  },
  { value: "bank-transfer", label: "Bank Transfer" },
];

export const ITEMS_PER_PAGE = 6;