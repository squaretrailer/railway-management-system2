import { useState } from "react";
import { validateTrainForm } from "../../utils/validators";
import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import { TRAIN_TYPES, TRAIN_STATUSES } from "../../utils/constants";

function TrainForm({ onAdd, isSubmitting = false }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    totalSeats: "",
    status: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateTrainForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    onAdd(form);
    setForm({ name: "", type: "", totalSeats: "", status: "" });
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-900 p-6 rounded-2xl border border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-white">Add Train</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Train Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          placeholder="Train Name e.g. Express 101"
          required
        />
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Train Type *
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-amber-500 outline-none"
            required
          >
            <option value="">Select Train Type</option>
            {TRAIN_TYPES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          {errors.type && <p className="text-red-400 text-xs mt-1">{errors.type}</p>}
        </div>
        <Input
          label="Total Seats"
          type="number"
          name="totalSeats"
          value={form.totalSeats}
          onChange={handleChange}
          error={errors.totalSeats}
          placeholder="e.g. 200"
          required
        />
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">
            Status *
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-700 bg-gray-800 text-white focus:ring-2 focus:ring-amber-500 outline-none"
            required
          >
            <option value="">Select Status</option>
            {TRAIN_STATUSES.map(({ value, label }) => (
              <option key={value} value={value}>{label}</option>
            ))}
          </select>
          {errors.status && <p className="text-red-400 text-xs mt-1">{errors.status}</p>}
        </div>
        <Button type="submit" isLoading={isSubmitting} fullWidth>
          Add Train
        </Button>
      </form>
    </div>
  );
}

export default TrainForm;