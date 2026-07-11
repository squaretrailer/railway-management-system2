function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-amber-50 px-6">
  <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 border-t-8 border-amber-500">

    <p className="text-amber-600 font-semibold uppercase tracking-wider">
      Railway Management System
    </p>

    <h2 className="text-3xl font-bold text-gray-800 mt-2">
      Staff Login
    </h2>

    <p className="text-gray-500 mt-2 mb-6">
      Sign in to access the railway management dashboard.
    </p>

    <form className="space-y-5">

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Email Address
        </label>

        <input
          type="email"
          placeholder="staff@railway.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter password"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-500 text-white font-semibold py-3 rounded-lg hover:bg-amber-600 transition"
      >
        Sign In
      </button>

    </form>
  </div>
</section>
  );
}

export default Login;