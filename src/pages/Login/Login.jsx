import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { validateLoginForm } from "../../utils/validators";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateLoginForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setServerError(null);
    setIsSubmitting(true);

    try {
      await login(form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      setServerError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <p className="text-amber-600 font-semibold uppercase tracking-wider">
        Railway Management System
      </p>
      <h2 className="text-3xl font-bold text-white mt-2">Staff Login</h2>
      <p className="text-gray-400 mt-2 mb-6">
        Sign in to access the railway management dashboard.
      </p>

      {serverError && (
        <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg mb-4">
          {serverError}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="staff@railway.com"
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          error={errors.password}
          placeholder="Enter password"
          required
        />
        <Button type="submit" isLoading={isSubmitting} fullWidth>
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default Login;