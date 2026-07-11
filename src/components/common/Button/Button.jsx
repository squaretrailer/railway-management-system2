// src/components/common/Button/Button.jsx

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  fullWidth = false,
  size = "md",
}) => {

  const baseStyles = "flex items-center justify-center gap-2 font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:   "bg-cyan-700 hover:bg-cyan-600 text-white",
    secondary: "bg-gray-800 hover:bg-gray-700 text-gray-300",
    danger:    "bg-red-700 hover:bg-red-600 text-white",
    outline:   "border border-cyan-700 text-cyan-400 hover:bg-cyan-700 hover:text-white",
    ghost:     "bg-transparent hover:bg-gray-800 text-gray-400 hover:text-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;